import https from "https";
import fs from "fs";

const download = function(url, dest) {
  const file = fs.createWriteStream(dest);
  const request = https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => console.log(`Wrote ${dest}`));
  });
  request.on('error', (err) => { // Handle errors
      console.log(err);
      fs.unlink(dest); // Delete the file async. (But we don't check the result)
  });
};

const slugs = (fs.readFileSync("./scripts/og-images.txt", {encoding:'utf8', flag:'r'})).split("\n");

slugs.forEach(slug => {
  const path = `./static/img/og/${slug}.jpg`;
  if (!fs.existsSync(path)) {
    download(`https://today.visualizingpalestine.org/img/${slug}.jpg`, path);
  }
});