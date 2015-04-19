module.exports = {
  path: require('./builtins/path-browserify/index'),
  http: require('./builtins/http-browserify/index'),
  https: require('./builtins/https'),
  htmlparser2: require('./builtins/htmlparser2/lib/index'),
  nwmatcher: require('./builtins/nwmatcher/src/nwmatcher-noqsa'),
  cssom: require('./builtins/cssom/lib/index'),
  cssstyle: require('./builtins/cssstyle/lib/CSSStyleDeclaration')
}
