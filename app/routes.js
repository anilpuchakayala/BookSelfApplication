
function getBooks(res) {
  var Books = [
              { title : 'Slow reading', author : "Litwin", isbn : "0385472579", loaned : "Suresh"},
              { title : 'Author', author : "John Miedema", isbn : "6201942081", loaned : "Rajesh"},
              { title : 'andurus', author : "Litwin", isbn : "0385472579", loaned : "Harini"},
              { title : 'Hepburn', author : "Litwin", isbn : "6201942081", loaned : "kumar"},
              { title : 'Audrey ', author : "Litwin", isbn : "0385472579", loaned : "avilable"},
              { title : 'Markus', author : "John Miedema", isbn : "0385472579", loaned : "john"},
              { title : ' Website', author : "Litwin", isbn : "0385472579", loaned : "anvika"},
              { title : 'nature of slow', author : "Litwin", isbn : "0385472579", loaned : "teju"},
              { title : 'Audrey bellow', author : "John Miedema", isbn : "0385472579", loaned : "avilable"},
              { title : 'ature of slow', author : "John Miedema", isbn : "0385472579", loaned : "sairam"},
              { title : 'Audrey Hepburn', author : "Litwin", isbn : "0385472579", loaned : "arthi"}
              ];    

        res.json(Books); // return all Bookslist in JSON format
      };
module.exports = function(app) {
    // get all Bookslist
    app.get('/api/booksList', function (req, res) {
        // use mongoose to get all Bookslist in the database
        getBooks(res);
    });
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
     
 
};