import { download } from "./utils.js";
import {
    locs_url, locs_path,
    // layers_url, layers_path,
    // sheets_url, sheets_path
} from "./config.js";

download(locs_url, locs_path);
// download(layers_url, layers_path);
// download(sheets_url, sheets_path);