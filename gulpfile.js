const gulp = require('gulp')
const sass=require('gulp-sass')(require('sass'))

exports.testSass=function(done){
    gulp.src('./**/*.scss')
    .pipe(sass({
        outputStyle:'expanded'
    }).on('error',sass.logError))
    .pipe(gulp.dest('./dist/css'))

    done()
}