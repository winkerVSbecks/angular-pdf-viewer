angular.module('pdf')
  .controller('PdfCtrl', [
    '$scope',
    '$element',
    '$attrs',
    'pdfDelegate',
    '$log',
    '$q',
  function($scope, $element, $attrs, pdfDelegate, $log, $q) {

    // Register the instance!
    var deregisterInstance = pdfDelegate._registerInstance(this, $attrs.delegateHandle);
    // De-Register on destory!
    $scope.$on('$destroy', deregisterInstance);

    var self = this;

    var url = $scope.$eval($attrs.url);
    var headers = $scope.$eval($attrs.headers);
    var pdfDoc;
    $scope.pageCount = 0;
    var currentPage = 1;
    var angle = 0;
    var scale = $attrs.scale ? $attrs.scale : 1;
    var canvas = $element.find('canvas')[0];
    var ctx = canvas.getContext('2d');

    var renderPage = function(num) {
      if (!angular.isNumber(num))
        num = parseInt(num);
      pdfDoc
        .getPage(num)
        .then(function(page) {
          var viewport = page.getViewport(scale);
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          var renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };

          page.render(renderContext);
        });
    };

    var transform = function() {
      canvas.style.webkitTransform = 'rotate('+ angle + 'deg)';
      canvas.style.MozTransform = 'rotate('+ angle + 'deg)';
      canvas.style.msTransform = 'rotate('+ angle + 'deg)';
      canvas.style.OTransform = 'rotate('+ angle + 'deg)';
      canvas.style.transform = 'rotate('+ angle + 'deg)';
    };

    self.prev = function() {
      if (currentPage <= 1)
        return;
      currentPage = parseInt(currentPage, 10) - 1;
      renderPage(currentPage);
    };

    self.next = function() {
      if (currentPage >= pdfDoc.numPages)
        return;
      currentPage = parseInt(currentPage, 10) + 1;
      renderPage(currentPage);
    };

    self.zoomIn = function(amount) {
      amount = amount || 0.2;
      scale = parseFloat(scale) + amount;
      renderPage(currentPage);
      return scale;
    };

    self.zoomOut = function(amount) {
      amount = amount || 0.2;
      scale = parseFloat(scale) - amount;
      scale = (scale > 0) ? scale : 0.1;
      renderPage(currentPage);
      return scale;
    };

    self.zoomTo = function(zoomToScale) {
      zoomToScale = (zoomToScale) ? zoomToScale : 1.0;
      scale = parseFloat(zoomToScale);
      renderPage(currentPage);
      return scale;
    };

    self.rotate = function() {
      if (angle === 0) {
        angle = 90;
      } else if (angle === 90) {
        angle = 180;
      } else if (angle === 180) {
        angle = 270;
      } else {
        angle = 0
      }
      transform();
    };

    self.getPageCount = function() {
      return $scope.pageCount;
    };

    self.getCurrentPage = function () {
      return currentPage;
    };

    self.goToPage = function(newVal) {
      if (pdfDoc !== null) {
        currentPage = newVal;
        renderPage(newVal);
      }
    };

    self.load = function(_url) {
      if (_url) {
        url = _url;
      }

      var docInitParams = {};

      if (typeof url === 'string') {
        docInitParams.url = url;
      } else {
        // use Uint8Array or request like `{data: new Uint8Array()}`.  See pdf.js for more details.
        docInitParams.data = url;
      }

      if (headers) {
        docInitParams.httpHeaders = headers;
      }

      return PDFJS
        .getDocument(docInitParams)
        .then(function (_pdfDoc) {

          pdfDoc = _pdfDoc;
          renderPage(1);
          $scope.$apply(function() {
            $scope.pageCount = _pdfDoc.numPages;
          });

        }, function(error) {
            $log.error(error);
            return $q.reject(error);
        })
    };

    if(url) self.load();
}]);
