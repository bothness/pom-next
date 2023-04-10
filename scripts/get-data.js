import { download } from "./utils.js";
import {
    locs_url, redirect_url, layers_url, sheets_url,
    locs_path, redirect_path, layers_path, sheets_path
} from "./config.js";

download(locs_url, locs_path);
download(redirect_url, redirect_path);
download(layers_url, layers_path);
download(sheets_url, sheets_path);