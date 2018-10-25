var gulp = require('gulp');
var babel = require('gulp-babel');
//var eslint       = require('gulp-eslint');
	//sass = require('gulp-sass'),
	//concat = require('gulp-concat'),
	//uglify = require('gulp-uglify'),
	//cleanCSS = require('gulp-clean-css'),
	//rename = require('gulp-rename'),
	//autoprefixer = require('gulp-autoprefixer'),
	//browserSync = require('browser-sync'),
	//fileinclude = require('gulp-file-include'),
	//babel = require('gulp-babel');



	gulp.task('babel', function(){
		gulp.src('components/**.js')
		   .pipe(babel({
				plugins: ['transform-react-jsx'],
				presets: ['@babel/env']
			}))
			.pipe(gulp.dest('dist'))
	});


gulp.task('watch', ['babel'], function () {
	gulp.watch('components/**.js', ['babel']);
});

gulp.task('default', ['watch']);