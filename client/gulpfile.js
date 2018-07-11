var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
    return gulp
        .src([
            '!./public/scss/variables.scss',
            './public/scss/*.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('public/scss/*.scss', ['sass']
    );
});