const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const concatCss = require('gulp-concat-css');
const cleanCss = require('gulp-clean-css');
const uncss = require('gulp-uncss')


gulp.task('server',['css'], function(){
    browserSync.init({
        server: "./"
    });
    gulp.watch(["./*.html", "./css/*.css", ['css']]).on('change',browserSync.reload);
});

gulp.task('css', ()=>{
    return gulp.src(['./css/skeleton.css','./css/normalize.css','./css/main.css'])
        .pipe(concatCss("bundle.css"))
        .pipe(uncss({html: ['index.html']}))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['server']);
