const tmp = require("tmp");
const puppeteer = require("puppeteer");
const request = require("request-promise");
const fs = require("fs");
const imageDataURI = require("image-data-uri");

const config = {
  launchOptions: {
    headless: true,
    args: [
      // Required for Docker version of Puppeteer
      "--no-sandbox",
      "--disable-setuid-sandbox",
      // This will write shared memory files into /tmp instead of /dev/shm,
      // because Docker’s default for /dev/shm is 64MB
      "--disable-dev-shm-usage",
    ],
  },
  viewport: {
    width: 1366,
    height: 694,
  },
};

function processInputUrl(url) {
  url = url.trim();
  if (
    !(
      url.toLowerCase().search("http:") === 0 ||
      url.toLowerCase().search("https:") === 0
    )
  ) {
    url = "http://".concat(url);
  }
  // TODO: add protection against XSS
  return url;
}

async function getWebpageImage(url, imagePath) {
  return puppeteer.launch(config.launchOptions).then(async (browser) => {
    let succeeded = true;

    try {
      const page = await browser.newPage();

      await page.setViewport(config.viewport);

      await page.goto(url, { waitUntil: "networkidle0" });

      await page.screenshot({ path: imagePath });
    } catch (err) {
      console.log("Website cannot be reached");
      console.log(err);

      succeeded = false;
    }

    await browser.close();

    return succeeded;
  });
}

module.exports = async (req, res) => {
  try {
    let inputUrl = req.body.url;
    console.log("The url is " + inputUrl);
    let url = processInputUrl(inputUrl);
    console.log("The processed url is " + url);
    let imagePath = tmp.tmpNameSync({ template: "image-tmp/tmp-XXXXXX.png" });
    console.log("The image path is " + imagePath);
    const succeeded = await getWebpageImage(url, imagePath);
    if (succeeded) {
      let data = {
        imagePath: imagePath,
      };

      let options = {
        method: "POST",
        uri: "http://localhost:5000/run_cnn",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
        // resolveWithFullResponse: true,
        json: true, // Automatically stringifies the body to JSON
      };

      let encoding = imageDataURI.encodeFromFile(imagePath);

      const parseBody = await request(options);
      const score = parseBody.score;
      console.log("The score is " + Number(score.toFixed(2)));
      const dataURI = await encoding;
      return res.status(200).send({
        score: Number(score.toFixed(2)),
        url: url,
        image: dataURI,
      });
    } else {
      return res.status(400).send({ statusCode: 4 });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ statusCode: 5 });
  }
};
