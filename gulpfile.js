var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// 设置任务---架设静态服务器
gulp.task('browser-sync', function() {
	browserSync.init({
		files: ['app/**'],
		server: {
			baseDir: 'app', // 设置服务器的根目录
		}
	});
});

gulp.task('default', ['browser-sync']);