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
		  },
		    {
		  	test: /\.s?css$/,

		  	use: [
		  	       require.resolve('style-loader'),
		  	       {
		  	           loader: require.resolve('css-loader'),
		  	           options: {
		  	               importLoaders: 1,
		  	               modules: true,
		  	               localIdentName: "[name]__[local]___[hash:base64:5]"
		  	           },
		  	       },
		  	       {
		  	           //loader: require.resolve('postcss-loader'),
		  	           loader: require.resolve('sass-loader'),
		  	           options: {
		  	               // Necessary for external CSS imports to work
		  	               // https://github.com/facebookincubator/create-react-app/issues/2677
		  	               ident: 'postcss',
		  	               plugins: () => [
		  	                   require('postcss-flexbugs-fixes'),
		  	                   /*autoprefixer({
		  	                       browsers: [
		  	                           '>1%',
		  	                           'last 4 versions',
		  	                           'Firefox ESR',
		  	                           'not ie < 9', // React doesn't support IE8 anyway
		  	                       ],
		  	                       flexbox: 'no-2009',
		  	                   }),*/
		  	                   require('postcss-modules-values'),
		  	               ],
		  	           },
		  	       },
		  	   ]

		  	/*exclude: /(node_modules)/,
		  	//loader: 'babel-loader',
		  	loader: 'css-loader',
		  	options: {
		  		importLoaders: 1,
		  		modules: true,
		  		localIdentName: "[name]__[local]___[hash:base64:5]"
		  	}*/
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
	gulp.watch('assets/components/**/**.js', ['webpack']);
	gulp.watch('assets/components/**/**.scss', ['webpack']);
});

gulp.task('default', ['watch']);