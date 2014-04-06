
build: components lib/index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test: build
	mocha-phantomjs test/index.html

standalone:
	component build --standalone ripple-markdown --name standalone
	-rm -r dist
	mkdir dist
	sed 's/this\[\"ripple-markdown\"\]/this.ripple.markdown/g' build/standalone.js > dist/ripple-markdown.js
	rm build/standalone.js
	minify dist/ripple-markdown.js dist/ripple-markdown.min.js

.PHONY: clean test standalone
