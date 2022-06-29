((l) => {
  // constにしたいがminify時にvarに変換されないため
  var split = l.href.split('/');
  l.href = split.slice(0, 3).concat(split.slice(split.indexOf('dp')).slice(0, 2)).join('/');
})(location);