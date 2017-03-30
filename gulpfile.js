const gulp = require("gulp");

const browserify = require("browserify");
const browserSync = require('browser-sync');
const source = require('vinyl-source-stream');
const watchify = require("watchify");
const tsify = require("tsify");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const gutil = require("gulp-util");
const sass = require("gulp-ruby-sass");
const buffer = require('vinyl-buffer');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

const reload = browserSync.reload;


var paths = {
    pages: ['src/*.html']
};

gulp.task('styles', ()=> {
    return sass('app/styles/*.scss')
            .on('error', sass.logError)
            .pipe($.plumber())
            .pipe($.sourcemaps.init())
            .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']})) 
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest('.tmp/styles'))
            .pipe(reload({stream: true}));
});


gulp.task('scripts', ()=>{
    var tsResult = gulp.src('app/scripts/*.ts')
                    .pipe($.sourcemaps.init())
                    .pipe(tsProject());
    return tsResult.js
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest('.tmp/scripts'))
            .pipe(reload({stream: true}));
});



gulp.task('html', ['styles', 'scripts'], ()=>{
    return gulp.src('app/*.html')
            .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
            .pipe($.if('*.js', $.uglify()))
            //.pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
            //.pipe($.if('*.html', $.htmlmin({collapseWhitespace: true})))
            .pipe(gulp.dest('dist'));
});

gulp.task('images', ()=>{
    return gulp.src('app/images/**/*')
            // .pipe($.cache($.imagemin({
            //     progressive: true,
            //     interlaced: true,
            //     svgoPlugins: [{cleanupIDs: false}]
            // })))
            .pipe(gulp.dest('dist/images'));
});


gulp.task('extras', ()=>{
    return gulp.src([
                'app/*.*',
                '!app/*.html'
            ], {
                dot: true
            }).pipe(gulp.dest('dist'));
});


// gulp.task('clean', del.bind(null, ['.tmp', 'dist']));






// var watchedBrowserify = watchify(browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['src/main.ts'],
//     cache: {},
//     packageCache: {}
// }).plugin(tsify));

// gulp.task("copy-html", function () {
//     return gulp.src(paths.pages)
//         .pipe(gulp.dest("dist"));
// });

// function bundle() {
//     return watchedBrowserify
//         .bundle()
//         .pipe(source('bundle.js'))
//         .pipe(gulp.dest("dist"));
// }


// gulp.task("default", ["copy-html"], bundle);
// watchedBrowserify.on("update", bundle);
// watchedBrowserify.on("log", gutil.log);