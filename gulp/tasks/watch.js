const gulp =require('gulp');
const watch =require('gulp-watch');
    BrowserSync=require('browser-sync');


gulp.task('watch',function(){
    BrowserSync.init({
        server: {
            baseDir:'dist'
        }
    });
    //pug
    watch('./src/*.pug',function(){
        gulp.start('pugChanged');
    });
    //styles
    watch('./src/sass/**/*.scss',function(){
        gulp.start('cssInject');
    });
    //js 
    watch('./src/js/**/*.js',function(){
        gulp.start('JsChanged');
    });

gulp.task('pugChanged',['pugRender'],function(){
    BrowserSync.reload();
})
gulp.task('JsChanged',['JsRender'],function(){
    BrowserSync.reload();
})
gulp.task('cssInject',['styles'],function(){
    gulp.src('./dist/styles.css')
    .pipe(BrowserSync.stream());
})

});