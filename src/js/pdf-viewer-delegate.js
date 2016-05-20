angular.module('pdf', [])
  .service('pdfDelegate', delegateService([
    'prev',
    'next',
    'zoomIn',
    'zoomOut',
    'zoomTo',
    'fit',
    'rotate',
    'getPageCount',
    'getCurrentPage',
    'goToPage',
    'load'
  ]));
