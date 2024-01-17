const { parallel, src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync');
const connectPhp = require('gulp-connect-php');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');
const babel = require('gulp-babel');

function workCSS() {
    connectPhp.server({}, function () {
        browserSync({
            proxy: '127.0.0.1:8000',
        }, (err, bs) => {
            console.log(err);
            console.log(bs.options.getIn(["urls", "local"]));
        })
    });

    return watch('./src/sass/**/*.scss', function () {
        src('./src/sass/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(sourcemaps.write())
            .pipe(postcss([autoprefixer()]))
            .pipe(dest('./assets/css/'))
    }).on('change', browserSync.reload);
}

function workJS() {
    return watch('./src/js/**/*.js', function () {
        src('./src/js/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(sourcemaps.write('.'))
            .pipe(dest('./assets/js/'))
    }).on('change', browserSync.reload);
}

exports.default = parallel(workJS, workCSS);