const gulp          = require('gulp')
const sass          = require('gulp-sass')(require('sass'))
const autoprefixer  = require('gulp-autoprefixer')
const pug           = require('gulp-pug')
const imagemin      = require('gulp-imagemin')
const uglify        = require('gulp-uglify')
const browserSync   = require('browser-sync').create()

const paths = {
    styles: {
        src:    ['./src/sass/*.scss'],
        dest:   './dist/css/',
    },
    templates:{
        src:    ['./src/layouts/*.pug'],
        dest:   './dist',
    },
    images:{
        src:    ['./src/img/*'],
        dest:   './dist/img/',
    },
    scripts:{
        src:    ['./src/js/**/*.js'],
        dest:   './dist/js/',
    },
};


gulp.task('sass', () => {
    return gulp.src(paths.styles.src)
               .pipe(sass().on('error', sass.logError))
               .pipe(autoprefixer({
                    cascade: false
                }))
               .pipe(gulp.dest(paths.styles.dest))
               .pipe(browserSync.stream())
})

gulp.task('pug', () => {
    return gulp.src(paths.templates.src)
               .pipe(pug({
                    pretty: true
               }))
               .pipe(gulp.dest(paths.templates.dest))
})

gulp.task('javascript', () =>{
    return gulp.src(paths.scripts.src)
                .pipe(uglify())
                .pipe(gulp.dest(paths.scripts.dest))
                .pipe(browserSync.stream())
})

gulp.task('image', () => {
    gulp.src(paths.images.src)
        .pipe(imagemin())
    //   .pipe(imagemin([
    //         imagemin.gifsicle({interlaced: true}),
    //         imagemin.mozjpeg({quality: 30, progressive: true}),
    //         imagemin.optipng({optimizationLevel: 1}),
    //         imagemin.svgo({
    //             plugins: [
    //                 {removeViewBox: true},
    //                 {cleanupIDs: false}
    //             ]
    //         })
    //   ]))
      .pipe(gulp.dest(paths.images.dest));
  });

gulp.task('default', () => {
    gulp.watch('./src/layouts/**/*.pug', gulp.series('pug'))
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
    gulp.watch('./src/js/**/*.js', gulp.series('javascript'))
    gulp.watch(paths.images.src, gulp.series('image'))
    gulp.watch('dist/**/*.html').on('change', browserSync.reload)
    browserSync.init({
        server:{
            baseDir: paths.templates.dest
        }
    })
})