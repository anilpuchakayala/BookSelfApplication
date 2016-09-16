angular.module('MainService', []).factory('Booksfactory', ['$http', function($http) {

	 return {
      getBooks: function() {
         return $http.get('/api/bookslist');
      }
    }
  
}]);