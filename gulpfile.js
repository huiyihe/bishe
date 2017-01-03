var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var tap = require('gulp-tap');
var browserSync = require('browser-sync');

gulp.task('build-html', function (){
    return gulp.src('./views/index.html')
        .pipe(tap(function (file){
            var dir = path.dirname(file.path);
            var contents = file.contents.toString();
            contents = contents.replace(/<link\s+rel="import"\s+href="(.*)">/gi, function (match, $1){
                var filename = path.join(dir, $1);
                var id = path.basename(filename, '.html');
                var content = fs.readFileSync(filename, 'utf-8');
                return '<script type="text/html" id="tpl_'+ id +'">\n'+ content +'\n</script>';
            });
            file.contents = new Buffer(contents);
        }))
        .pipe(gulp.dest("./"))
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('build-js', function (){
	return gulp.src('./views/router.js')
        .pipe(tap(function (file){
            var dir = path.dirname(file.path);
            var contents = file.contents.toString();
            contents = contents.replace(/require\(["'](.*)["']\);/gi, function (match, $1){
                var filename = path.join(dir, $1);
                var id = path.basename(filename, '.html');
                var content = fs.readFileSync(filename, 'utf-8');
                return content;
            });
            file.contents = new Buffer(contents);
        }))
        .pipe(gulp.dest("./js/"))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve',['build-html','build-js'] ,function() {
	browserSync.init({	
	server: {
	    baseDir: "./"
	}});

    gulp.watch("./*",['js-watch']).on('change',browserSync.reload);
    gulp.watch('views/**/*',['build-html','build-js']);
    gulp.watch('css/**/*',['build-html','build-js']);
});

gulp.task('js-watch', function (done) {
    browserSync.reload({stream: true});
    done();
});

gulp.task('default',['serve']);
