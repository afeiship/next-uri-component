(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxUriComponent = nx.declare('nx.UriComponent', {
    statics: {
      encode: function(inString) {
        return global.encodeURIComponent(inString);
      },
      decode: function(inString) {
        return global.decodeURIComponent(inString);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxUriComponent;
  }
})();
