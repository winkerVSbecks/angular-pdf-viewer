angular.module('pdf', [])
  .service('pdfDelegate', delegateService([
    'prev',
    'next',
    'zoomIn',
    'zoomOut',
    'rotate',
    'getPageCount',
    'getCurrentPage',
    'goToPage',
    'load'
  ]));