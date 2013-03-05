
seajs.config({
  // Add plugins
  plugins: ['shim'],

  // Configure shim for non-CMD modules
  shim: {
    'jquery': {
      src: 'lib/jquery-1.9.1.min.js',
      exports: 'jQuery'
    }
  }
});

