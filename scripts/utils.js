import https from "https";
import fs from "fs";

export const download = function(url, dest, decode = false) {
  const request = https.get(url, (response) => {
    const file = fs.createWriteStream(dest);
    response.pipe(file);
    file.on('finish', () => {
      console.log(`Wrote ${dest}`);
      if (decode) {
        const encoded = fs.readFileSync(dest, {encoding:'utf8', flag:'r'});
        const decoded = JSON.parse(`${encoded}`);
        fs.writeFileSync(dest, JSON.stringify(decoded), {encoding: "utf8"});
        console.log(`Decoded ${dest}`);
      }
    });
  });
  request.on('error', (err) => { // Handle errors
      console.log(err);
      fs.unlink(dest); // Delete the file async. (But we don't check the result)
  });
};