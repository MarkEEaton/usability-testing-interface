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

// the urls for the activities, with random questions
var urls = ["http://kbcc.cuny.libguides.com/prototype9",
            "http://kbcc.cuny.libguides.com/prototype10",
            "http://kbcc.cuny.libguides.com/prototype11",
            "http://kbcc.cuny.libguides.com/prototype12",
            "http://kbcc.cuny.libguides.com/prototype13"]

// make the table using js
var tableHTML1 = '<tr><td><div class="activity-container">Activity #';
var tableHTML2 = '<a href="" onclick="gotoactivity(';
var tableHTML3 = '); return false;" class="btn btn-default active" role="button" id="';
var tableHTML4 = '"> Try it now!</a></div></td></tr>';

// set some variables in preparation for gotoactivity()
var startHTML = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><div class="alert alert-warning" style="text-align:center"><b>Activity #' 
var midHTML = '</b></div><div class="alert alert-info" style="margin:15px">';
var endHTML = '</div>';
var timer = undefined;

// what to do when the user clicks on an activity
function gotoactivity(id) {
    displayid = parseInt(id) + 1;
    var instructions = window.open('', 'instructions', 'left=20,top=20,width=160,height=300,menubar=no,titlebar=no');
    var workspace = window.open(urls[id], 'workspace', 'left=200,top=20,width=1195,height=750,menubar=no,titlebar=no,scrollbars=yes');
    instructions.document.body.innerHTML = startHTML + displayid + midHTML + questions[id] + endHTML;

    // closes one window when the other is closed
    timer = setInterval(function() {
        $(this).focus(function() {
            workspace.close();
            instructions.close();
        });
        if (instructions.closed) {
            workspace.close();
            clearInterval(timer);
        }
        else if (workspace.closed) {
            instructions.close();
            clearInterval(timer);
        }
    }, 50);
};

$(document).ready(function() {
	for (i = 0; i < urls.length; i++) {
		$("tbody").append(tableHTML1 + parseInt(i + 1) + tableHTML2 + i + tableHTML3 + i + tableHTML4);
	};
    $(".btn").click(function() {
        $(this).text('completed!').removeClass('active').addClass('disabled');
    });
});

