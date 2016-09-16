angular.module('MainCtrl', []).controller('MainController', function($scope, $log, Booksfactory) {
  
      $scope.sortType     = 'title'; 
      $scope.sortReverse  = false;
	$scope.getBooksList = function() {
       var promise = 
           Booksfactory.getBooks();
       promise.then(
          function(payload) { 
              $scope.books = payload.data;
          },
          function(errorPayload) {
              $log.error('failure loading Books', errorPayload);
          });
     }; 
});