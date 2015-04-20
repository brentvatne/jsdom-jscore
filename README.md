# jsdom-jscore
Trimmed down version of [jsdom](https://github.com/tmpvar/jsdom) to run
on JavaScriptCore, substituting in node standard library dependencies
for other options, often browserify-based.

## What it is good for?
* You need something from jsdom (DOM, parsing, etc.) inside of your
  react-native iOS app - for example to run d3.js against a virtual DOM
  tree, but you don't need full browser emulation. [Example of D3 in react-native with jsdom-jscore.](https://github.com/brentvatne/react-native-svg/blob/master/D3Chart.js)

## Removed features (unchanged from jsdom-little):
* Running JavaScript code in browser context
* Fetching or processing external resources
* Window
* Events
* XmlHttpRequest
* Content of `<style>` nodes is not evaluated
* jsdom.env works only as ```jsdom.env(html, level, callback)``` and returns ```{document: document}```
