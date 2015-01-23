angular.module('pdf')
  .directive('pdfViewer', [
    '$window',
    '$log',
    'pdfDelegate',
  function($window, $log, pdfDelegate) {
    return {
      restrict: 'E',
      template: '<div ng-if="showToolbar"><pdf-viewer-toolbar delegate-handle="{{id}}" page-count="pageCount"></pdf-viewer-toolbar></div><canvas></canvas>',
      scope: true,
      controller: 'PdfCtrl',
      link: function(scope, element, attrs) {
        scope.id = attrs.delegateHandle;
        scope.showToolbar = scope.$eval(attrs.showToolbar) || false;
      }
    };
}]);
