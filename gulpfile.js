const { src, dest, series, watch } = require("gulp");
const fileinclude = require("gulp-file-include");

// Task to include partials
function htmlInclude() {
  return src(["src/*.html"]) // Source HTML files
    .pipe(
      fileinclude({
        // Initialize gulp-file-include
        prefix: "@@", // The prefix for the include tag (e.g., @@include)
        basepath: "./src/", // The base path for resolving partial paths
      })
    )
    .pipe(dest("./public")); // Destination for the compiled HTML
}

// Watch files for changes
function watchFiles() {
  watch(["src/**/*.html"], htmlInclude);
}

exports.html = series(htmlInclude);
exports.default = series(htmlInclude, watchFiles);
