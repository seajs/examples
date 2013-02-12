
seajs.config({
  // Set aliases for common libraries
  alias: {
    'jquery': 'common/jquery-1.9.1.min.js',
    'jquery-easing': 'common/jquery.easing.1.3.js'
  },

  // Add plugins
  plugins: ['shim'],

  // Configure shim for non-CMD modules
  shim: {
    'jquery': {
      exports: 'jQuery'
    },
    'jquery-plugins': {
      match: /jquery\.[a-z].*\.js/,
      deps: ['jquery']
    }
  }
});

