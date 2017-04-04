angular.module('pdf', [])
  .service('pdfDelegate', delegateService([
    'prev',
    'next',
    'zoomIn',
    'zoomOut',
    'zoomTo',
    'rotate',
    'getPageCount',
    'getCurrentPage',
    'getCurrentUrl',
    'goToPage',
    'load'
  ]));
