const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');


exports.default = function() {
    return src(['src/main.js', 'src/vendor/*.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('output/'));
}