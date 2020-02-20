var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var svgSprite = require('gulp-svg-sprite');



function css_style(done) {

     gulp.src('./scss/style.scss')

         .pipe(sass().on('error', sass.logError))
         .pipe(gulp.dest('./build/css'));

            done();
}
function copy_pug(done){
    gulp.src('./pug/index.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./build/pug'));
    done();
}

function copy_svg(done){
    gulp.src('./img/svg/**.svg')
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "sprite.svg"
                }
            }
        }))
        .pipe(gulp.dest('./build/svg'));
    done();
}

function watcher(){
    gulp.watch('./scss/**/*',css_style);
    gulp.watch('./pug/**/*',copy_pug);
    gulp.watch('./img/svg/**/*',copy_svg);
}




 gulp.task('default', watcher);


gulp.task('svg', copy_svg);