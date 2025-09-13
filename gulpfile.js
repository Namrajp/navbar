const { src, dest, series, watch } = require("gulp");
const fileinclude = require("gulp-file-include");

const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify"); // For minifying JS
const cleanCss = require("gulp-clean-css"); // For minifying CSS
// import "gulp-imagemin" as imagemin; // Optional: for image optimization
const paths = {
  styles: "src/partials/**/*.css", // CSS files within partials
  scripts: "src/partials/**/*.js", // JS files within partials
  dest: "./public",
};
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
    .pipe(dest("public/")); // Destination for the compiled HTML
}

// concatenate and minify css files
gulp.task("styles", () => {
  return gulp
    .src(paths.styles)
    .pipe(concat("main.css")) // Concatenate all CSS into main.css
    .pipe(cleanCss()) // Minify the CSS
    .pipe(gulp.dest("public/css/")); // Output to dist/css
});
// concatenate and minify js files
gulp.task("scripts", () => {
  return gulp
    .src(paths.scripts)
    .pipe(concat("main.js")) // Concatenate all JS into main.js
    .pipe(uglify()) // Minify the JavaScript
    .pipe(gulp.dest("public/js/")); // Output to dist/js
});
// task to handle images
function imagesTask() {
  return (
    src("src/assets/**/*") // Source images
      // .pipe(imagemin()) // Optional: optimize images
      .pipe(dest("public/assets/"))
  ); // Destination for processed images
}
// Watch files for changes
function watchFiles() {
  watch(["src/**/*.html"], htmlInclude);
}

exports.html = series(htmlInclude, imagesTask, "styles", "scripts");
exports.default = series(
  htmlInclude,
  imagesTask,
  "styles",
  "scripts",
  watchFiles
);
