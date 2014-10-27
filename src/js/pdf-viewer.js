angular.module('pdf')
  .directive('pdfViewer', [
    '$window',
    '$log',
    'pdfDelegate',
  function($window, $log, pdfDelegate) {
    return {
      restrict: 'E',
      template: '<pdf-viewer-nav delegate-handle="relativity-special-general-theory" page-count="pageCount"></pdf-viewer-nav><canvas></canvas>',
      scope: true,
      controller: 'PdfCtrl',
      link: function(scope, element, attrs) {

      }
    };
}]);
