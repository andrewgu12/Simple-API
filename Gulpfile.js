const { parallel, series, watch, src, dest } = require("gulp");
const del                                    = require("del");
const concat                                 = require("gulp-concat");
const babel                                  = require("gulp-babel");
const sass                                   = require("gulp-sass");

sass.compiler = require("node-sass");

const scssClean = (cb) => {
  return del("styles/scss/library.css");
}

const scssCompile = (cb) => {
  return src("styles/scss/library.scss")
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(dest("styles/"));
}

const es6Clean = (cb) => {
  return del("js/main.js", "js/library.js");
}

const es6Compile = () => {
  return src("js/library/main.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(dest("js/"));
}

const jsConcat = (cb) => {
  return src(["js/library/jquery.js", "js/main.js"])
    .pipe(concat("library.js"))
    .pipe(dest("js/"));
}

const watchAll = (cb) => {
  watch("styles/scss/*.scss", series(scssClean, scssCompile));
  watch("js/library/*.js", series(es6Clean, es6Compile, jsConcat));
}

exports.build = parallel(
  series(scssClean, scssCompile),
  series(es6Clean, es6Compile, jsConcat, es6Clean)
);

exports.default = watchAll;