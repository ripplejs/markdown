var assert = require('assert');
var markdown = require('markdown-filter');
var ripple = require('ripple');
var dom = require('fastdom');

describe('markdown-filter', function(){

  it('should replace markdown', function(done){
    var View = ripple('<div>{{content | markdown}}</div>')
      .use(markdown);

    var view = new View({
      content: 'hi'
    });

    dom.defer(function(){
      assert(view.el.firstChild.innerHTML.trim() === "<p>hi</p>");
      done();
    });
  });

  it('should update', function (done) {
    var View = ripple('<div>{{content | markdown}}</div>')
      .use(markdown);

    var view = new View({
      content: 'hi'
    });

    view.set('content', '* hi');

    dom.defer(function(){
      assert(view.el.firstChild.firstChild.innerHTML.trim() === "<li>hi</li>");
      done();
    });
  });

});