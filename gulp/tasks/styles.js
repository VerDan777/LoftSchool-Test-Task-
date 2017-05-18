const gulp=require('gulp');
const styles =require('gulp-sass');
const SassModuleImporter= require('sass-module-importer');


gulp.task('styles',function(){
    return gulp.src('./src/sass/**/*.scss')
    .pipe(styles({importer:SassModuleImporter()}))
    .on('error',function(errorInfo){
        console.log(errorInfo.toString)
        this.emit('end');
    })
    .pipe(gulp.dest('./dist/'));
})