/*

// the full question list
var questions = [["Find the textbook title '<b>Anthropologist on Mars</b>'."],  // 0
                 ["Find a book by <b>Hemingway, Ernest</b> as an author."],  // 1
                 [ "Check to see if the book <b>The Goldfinch</b> is available to borrow for a four week period."], // 2
                 ["Search for scholarly articles on '<b>community college students</b>'."],  // 3
                 ["Find the database '<b>Academic Search Complete</b>'."],  // 4
                 ["Find the database '<b>JSTOR</b>'."],  // 5
                 ["Find circulation policies."],  // 6
                 ["Calculate fines for a book that is five days overdue."], // 7
                 ["Find the library hours for the Spring semester of 2017."],  // 8
                 ["Use the 'Ask a Librarian' menu."],  // 9
                 ["Search to see if a document is available on eReserve."],  // 10
                 ["Open a new interlibrary loan account."],  // 11
                 ["Request an interlibrary loan."],  // 12
                 ["Find the library's Twitter feed."],  // 13
                 ["Find the library's Goodreads profile."]]  // 14
*/

// the urls for the activities, with random questions
var urls = ["http://kbcc.cuny.libguides.com/prototype1?questiongroup=0",
            "http://kbcc.cuny.libguides.com/prototype4?questiongroup=1",
            "http://kbcc.cuny.libguides.com/prototype5?questiongroup=2",
            "http://kbcc.cuny.libguides.com/prototype6?questiongroup=3",
            "http://kbcc.cuny.libguides.com/prototype8?questiongroup=4"]

// make the table using js
var tableHTML1 = '<tr><td><div class="activity-container">Activity #';
var tableHTML2 = '<a href="" target="_blank" class="btn btn-default active" role="button" id="'
var tableHTML3 = '"> Try it now!</a></div></td></tr>';

$(document).ready(function() {
	for (i = 0; i < urls.length; i++) {
		$("tbody").append(tableHTML1 + parseInt(i + 1) + tableHTML2 + i + tableHTML3);
        document.getElementById(i).href = urls[i];
	};
});