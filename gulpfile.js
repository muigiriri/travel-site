var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
importCss = require('postcss-import')
precss = require('precss');

gulp.task('default', function(){
    console.log('Horray!')
    //This is where you write your custom task
})

gulp.task('html', function(){
    console.log("watching html");
})

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([importCss, cssVars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/style'))
})

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
}
)