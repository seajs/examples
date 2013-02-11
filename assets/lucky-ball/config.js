
seajs.config({
  // Set the base url for SeaJS
  base: './assets/',

  // Set aliases for common libraries
  alias: {
    'jquery': 'common/jquery-1.9.1.min.js',
    'jquery-easing': 'common/jquery.easing.1.3.js'
  }
});

// Transport common libraries to CMD modules automatically
seajs.on('compile', function(mod) {
  if (mod.uri.indexOf('jquery') > 0) {
    mod.exports = jQuery
  }
});

// Add dependencies for jquery plugins
seajs.on('initialized', function(mod) {
  if (mod.uri.indexOf('jquery.easing') > 0) {
    mod.dependencies.push('jquery')
  }
});

