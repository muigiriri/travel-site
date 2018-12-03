var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
importCss = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('html', function(){
    console.log("watching html");
})

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([importCss, mixins, cssVars, nested, hexrgba, autoprefixer]))
        .on('error', function(errorinfo) {
            console.log(errorinfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/style'))
})