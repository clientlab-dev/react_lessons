var gulp = require('gulp'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream');
  var gutil = require('gulp-util');

gulp.task('webpack', function () {
  return gulp.src('assets/js/app.js')
	.pipe(webpackStream({
	  output: {
		filename: 'app.js',
	  },
	  module: {
		rules: [
		  {
			test: /\.jsx?$/,
			exclude: /(node_modules)/,
			//loader: 'babel-loader',
			loader: 'babel-loader',
			options: {
				presets: ['react','es2015']
			}
		  }
		]
	  },
	  externals: {
		//jquery: 'jQuery'
	  }
	}))
	//.pipe(gulp.dest('./dist/'))
	//.pipe(uglify())
	//.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('dist/'));
});


/*gulp.task('js',['webpack'], function () {
  return gulp.src('dist/app.js')
	//.pipe(uglify())
	//.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
	//.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('dist/'));
});*/



gulp.task('watch', ['webpack'], function () {
	gulp.watch('assets/js/**/**.js', ['webpack']);
});

gulp.task('default', ['watch']);