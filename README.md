# slidr.css
A standalone CSS library for sliders. No Javascript needed!

This library was inspired by [chinchang' hint.css](https://github.com/chinchang/hint.css). It is also written in pure CSS and does not rely on JavaScript. The original `checkbox` is kept which means you can simply add a span with the `slidr` class and you have a checkbox designed like a slider. Nothing else changes it uses the `:checked` pseudo selector to apply the styles.

## Sample Code

		<label class="checkbox">
			<!--
				Note the data-on and data-off attributes to set text for the states.
				Possible additional classes (alla Bootstrap) are:
					* slidr-info
					* slidr-success
					* slidr-warning
					* slidr-danger
					* slidr-inverse
			-->
			<input type="checkbox">
			<span class="slidr" data-on="ON" data-off="OFF"></span>
			Option one is this and that—be sure to include why it's great
		</label>

## Styles
`slidr.css` was built on top of Twitter Bootstrap, therefor I added the default styles which are used for labels, badges, buttons and so on.

- `.slidr-info`
- `.slidr-success`
- `.slidr-warning`
- `.slidr-danger`
- `.slidr-inverse`

### Transitions
Currently transitions on pseudo elements is only available in Firefox and Internet Explorer 10. But in case the Chrome update comes available in the next few weeks I added transitions for all browsers.

### Demo
[http://tstachl.github.com/slidr.css/](http://tstachl.github.com/slidr.css/)

## Get Started
1. Download the source, the combined or minified version from GitHub:
	- [https://raw.github.com/tstachl/slidr.css/master/slidr.min.css](https://raw.github.com/tstachl/slidr.css/master/slidr.min.css) (minified)
	- [https://raw.github.com/tstachl/slidr.css/master/slidr.css](https://raw.github.com/tstachl/slidr.css/master/slidr.css) (combined)
2. Include them as stylesheets in your page.
3. Create a checkbox with the new `slidr` class:

		<input type="checkbox">
		<span class="slidr"></span>

4. If you need a green slider use `slidr-success`:

		<input type="checkbox">
		<span class="slidr slidr-success"></span>

That's it now get cracking ...

## Issues & Contribution
Please refer to the *issues* section of this repository if you stumble upon any bugs or possible bugs. But keep in mind to search for a similar issue before posting.

If you want to contribute you know the drill: fork - change - open pull request

## License (MIT)
Copyright (c) 2013 Thomas Stachl 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
