var marked = require("marked");

module.exports = function(View, options) {
  if(options) {
    marked.setOptions(options);
  }
  View.filter('markdown', function(value){
    var el = document.createElement('div');
    el.innerHTML = marked(value);
    return el;
  });
};