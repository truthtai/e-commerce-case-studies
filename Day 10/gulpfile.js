var gulp = require('gulp'),    
    uglify = require('gulp-uglify'),
    // browsersync = require('browser-sync'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    nodemon = require('gulp-nodemon'),
    loopbackAngular = require('gulp-loopback-sdk-angular'),
    jshint = require('gulp-jshint');



// gulp.task('browsersync', function(cb) {
//     return browsersync({
//         server: {
//             baseDir:'./'
//         }
//     }, cb);
// });


var fileHTML = [
    './client/client/**/*.html', 
    './client/client/components/**/*.html',
]

var filesJS = [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/angular/angular.min.js',
        './bower_components/angular-ui-router/release/angular-ui-router.min.js',
        './bower_components/angular-resource/angular-resource.min.js',
        './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        './bower_components/angular-messages/angular-messages.min.js',
        './bower_components/angular-sanitize/angular-sanitize.min.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/angular-ui-notification/dist/angular-ui-notification.min.js',
        './bower_components/ladda/dist/spin.min.js',
        './bower_components/ladda/dist/ladda.min.js',
        './bower_components/angular-ladda/dist/angular-ladda.min.js',
        
    ];
	
 
  
var filesCSS = [
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    './bower_components/ladda/dist/ladda-themeless.min.css',
    './client/dist/css/styles.css',
    './bower_components/angular-ui-notification/dist/angular-ui-notification.min.css',   
    './bower_components/font-awesome/css/*.*'
    //'./dist/css/flat-ui.css',
    
];

var filesJSApp = [
    './client/dist/js/lbServices.js',
    './client/app.js',
    './client/client/services/*.js',
    './client/client/components/**/*.js',
    './client/client/sd/*.js', 
    './client/admin/components/**/*.js',

    
]     
 
var fonts = './bower_components/font-awesome/fonts/*.*';

gulp.task('moveMAP', function(){
  gulp.src(['./bower_components/angular-resource/angular-resource.min.js.map', './bower_components/angular-animate/angular-animate.min.js.map','./bower_components/angular-messages/angular-messages.min.js.map', './bower_components/angular-sanitize/angular-sanitize.min.js.map'])
  .pipe(gulp.dest('./client/dist/js'));  
});   
    
gulp.task('moveFonts',['moveMAP'], function(){
  gulp.src(fonts)  
  .pipe(gulp.dest('./client/dist/fonts'));  
});

gulp.task('moveJS',['moveFonts'], function(){
  gulp.src(filesJS)  
  .pipe(concat('resources.js'))
  .pipe(gulp.dest('./client/dist/js'));  
});


gulp.task('moveJSApp', function(){
  gulp.src(filesJSApp)  
  .pipe(concat('modules.js'))
  .pipe(gulp.dest('./client/dist/js'));  
});

gulp.task('miniJS',['moveJS'], function() {
  return gulp.src(filesJSApp)
    .pipe(uglify({mangle: false}))   
    .pipe(concat('modules.js'))
    .pipe(gulp.dest('./client/dist/js'));  

});


gulp.task('minCSS', function(){
  gulp.src(filesCSS)
  .pipe(concat('main.css'))
  .pipe(gulp.dest('./client/dist/css'));  
});

gulp.task('LB', function () {
    return gulp.src('../server/server.js')
    .pipe(loopbackAngular())
    .pipe(rename('lb-services.js'))
    .pipe(gulp.dest('./client/dist/js'));
});

gulp.task('watch', function () {
  gulp.watch([filesJSApp,fileHTML,filesCSS], ['lint', 'miniJS','minCSS']);  
  
});

gulp.task('node', function(){
    nodemon({
      script: 'server/server.js'   
    })
})

gulp.task('lint', function() {
  return gulp.src(filesJSApp)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
 
gulp.task('default', ['node', 'watch', 'moveJS', 'miniJS', 'minCSS', 'lint']);