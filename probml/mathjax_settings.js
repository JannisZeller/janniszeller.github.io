/* Mathjax settings */
var mathjax_scale = 1.0;
window.MathJax = {
  loader: {
    load: ['[tex]/tagformat', '[tex]/color', '[tex]/centernot', '[tex]/mathtools']
  },
  chtml: {
    scale: mathjax_scale,
  },
  tex: {
    inlineMath: [['$', '$']],
    packages: {'[+]': ['tagformat', 'href', 'centernot', 'mathtools']},
    processEscapes: true,
    tags: 'ams',
  },
}