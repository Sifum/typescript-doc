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
const del = require("del");
const buffer = require('vinyl-buffer');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

const reload = browserSync.reload;


var paths = {
    pages: ['src/*.html']
};


gulp.task('styles', ()=> {
    return sass('app/styles/*.scss') //gulp-ruby-sass处理
            .on('error', sass.logError)
            .pipe($.plumber()) //任务错误中断自动重传
            .pipe($.sourcemaps.init()) //添加sourcemaps
            .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']})) //厂商前缀
            .pipe($.sourcemaps.write())
            .pipe(gulp.dest('.tmp/styles'))
            .pipe(reload({stream: true}));//浏览器重载
});


gulp.task('scripts', ()=>{
    return browserify({
                basedir: '.',
                debug: true,
                entries: ['app/scripts/main.ts'],
                cache: {},
                packageCache: {}
            })    //通过入口文件，合并所有require()模块到本文件，
            .plugin(tsify) //调用Typescript编译代码
            .bundle()  //合并
            .pipe(source('main.js'))
            .pipe($.plumber())
            .pipe(gulp.dest('.tmp/scripts'))
            .pipe(reload({stream: true}));  //浏览器重载
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('html', ['styles', 'scripts'], ()=>{
    return gulp.src('app/*.html')
            .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
            .pipe($.if('*.js', $.uglify()))
            .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false}))) //css压缩
            .pipe($.if('*.html', $.htmlmin({collapseWhitespace: true}))) //html压缩
            .pipe(gulp.dest('dist'));
});

gulp.task('images', ()=>{
    return gulp.src('app/images/**/*')
            .pipe($.cache($.imagemin({
                progressive: true,
                interlaced: true,
                svgoPlugins: [{cleanupIDs: false}]
            })))
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


gulp.task('clean', del.bind(null, ['.tmp', 'dist']));


gulp.task('serve', ['styles', 'scripts', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/*.html',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/scripts/**/*.ts', ['scripts']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));
});
