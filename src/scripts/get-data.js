import https from "https"; // or 'https' for https:// URLs
import fs from "fs";

export const locs_url =
"https://docs.google.com/spreadsheets/d/1LejOouylx6u_TKF_1BxvV_B7uI34M4zIWyoc8LozATo/gviz/tq?tqx=out:csv&amp;sheet=database";
export const redirect_url = "https://docs.google.com/spreadsheets/d/1LejOouylx6u_TKF_1BxvV_B7uI34M4zIWyoc8LozATo/gviz/tq?tqx=out%3Acsv&sheet=redirect";
export const layers_url = "https://palopenmaps.org/api/layers/?format=json";
export const sheets_url = "https://palopenmaps.org/api/sheets/?format=json";

var download = function(url, dest, cb) {
    var file = fs.createWriteStream(dest);
    var request = https.get(url, function(response) {
        response.pipe(file);
        file.on('finish', function() {
        file.close(cb);  // close() is async, call cb after close completes.
        });
    }).on('error', function(err) { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        if (cb) cb(err.message);
    });
};

download(locs_url, "./static/data/places.csv");
download(redirect_url, "./static/data/redirects.csv");
download(layers_url, "./static/data/layers.json");
download(sheets_url, "./static/data/sheets.json");