var gulp = require('gulp'),    
    uglify = require('gulp-uglify'),
    browsersync = require('browser-sync'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    nodemon = require('gulp-nodemon'),
    loopbackAngular = require('gulp-loopback-sdk-angular');





gulp.task('browsersync', function(cb) {
    return browsersync({
        server: {
            baseDir:'./'
        }
    }, cb);
});


var fileHTML = [
    'client/**/*.html', 
    'client/components/**/*.html',
]

var filesJS = [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/angular/angular.min.js',
        './bower_components/ui-router/release/angular-ui-router.min.js',
        './bower_components/angular-resource/angular-resource.min.js',
        './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
        './bower_components/angular-messages/angular-messages.min.js',
        './bower_components/ng-file-upload/ng-file-upload.min.js',
        './bower_components/angular-sanitize/angular-sanitize.min.js',
        './bower_components/angular-animate/angular-animate.min.js',
        './bower_components/angular-ui-notification/dist/angular-ui-notification.min.js',
        './bower_components/angular-aside/dist/js/angular-aside.min.js',
        
    ];
	
 
  
var filesCSS = [
    './bower_components/bootstrap/dist/css/bootstrap.min.css',
    './dist/css/styles.css',
    './bower_components/angular-ui-notification/dist/angular-ui-notification.min.css',
    './bower_components/angular-aside/dist/css/angular-aside.min.css'
    //'./dist/css/flat-ui.css',
    
];

var filesJSApp = [
    './dist/js/lbServices.js',
    './app.js',
    './client/services/*.js',
    './client/components/**/*.js',
    './client/sd/*.js', 
    './admin/components/**/*.js',

    
]      
   
gulp.task('moveMAP', function(){
  gulp.src(['./bower_components/angular-resource/angular-resource.min.js.map', './bower_components/angular-messages/angular-messages.min.js.map', './bower_components/angular-sanitize/angular-sanitize.min.js.map'])
  .pipe(gulp.dest('dist/js'));  
});   
    
gulp.task('moveJS',['moveMAP'], function(){
  gulp.src(filesJS)  
  .pipe(concat('resources.js'))
  .pipe(gulp.dest('dist/js'));  
});

gulp.task('moveJSApp', function(){
  gulp.src(filesJSApp)  
  .pipe(concat('modules.js'))
  .pipe(gulp.dest('dist/js'));  
});

gulp.task('miniJS',['moveJS'], function() {
  return gulp.src(filesJSApp)
    .pipe(uglify({mangle: false}))   
    .pipe(concat('modules.js'))
    .pipe(gulp.dest('dist/js'));  

});


gulp.task('minCSS', function(){
  gulp.src(filesCSS)
  .pipe(concat('main.css'))
  .pipe(gulp.dest('dist/css'));  
});

// gulp.task('LB', function () {
//     return gulp.src('../server/server.js')
//     .pipe(loopbackAngular())
//     .pipe(rename('lb-services.js'))
//     .pipe(gulp.dest('../client/app/dist/js'));
// });

gulp.task('watch', function () {
  gulp.watch([filesJSApp,fileHTML,filesCSS], ['miniJS','minCSS', browsersync.reload]);  
  
});

// gulp.task('node', function(){
//     nodemon({
//       script: '../server/server.js'   
//     })
// })


 
gulp.task('default', ['browsersync', 'watch', 'moveJS', 'miniJS', 'minCSS']);