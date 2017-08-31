var questions1 = [["Find the textbook title '<b>Anthropologist on Mars</b>'."],
                  ["Search for scholarly articles on '<b>community college students</b>'."],
                  ["Find circulation policies."], 
                  ["Open a new interlibrary loan account."],
                  ["Find the library's Twitter feed."]]

var questions2 = [["Find a book by <b>Hemingway, Ernest</b> as an author."],
                  ["Find the book '<b>College Algebra: a narrative approach</b>'."],
                  ["Find the library hours for the Fall semester of 2017."],
                  ["Request a book from another CUNY campus."],
                  ["Find the periodical '<b>The American Journal of Clinical Nutrition</b>'."]]

var questions3 = [["Check to see if the book <b>The Goldfinch</b> is available to borrow for a four week period."],
                  ["Find the database '<b>Academic Search Complete</b>'."],
                  ["Use the 'Ask a Librarian' menu."],
                  ["Request an interlibrary loan."],
                  ["Find the library's Goodreads profile."]]

var questions4 = [["Find information on how to download an ebook"],
                  ["Find the database '<b>JSTOR</b>'."],
                  ["Search to see if a document is available on eReserve."],
                  ["Find articles that are <b>for or against wind energy</b>"],
                  ["Find the database '<b>Gale Virtual Reference Library</b>'."]]


// the urls for the activities
var urls1 = ["http://kbcc.cuny.libguides.com/prototype9",
             "http://kbcc.cuny.libguides.com/prototype10",
             "http://kbcc.cuny.libguides.com/prototype11",
             "http://kbcc.cuny.libguides.com/prototype12",
             "http://kbcc.cuny.libguides.com/prototype13"]

// set some variables to create the table
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
    instructions.document.body.innerHTML = startHTML + displayid + midHTML +questions1[id] + endHTML;

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

// make the table using js
$(document).ready(function() {
	for (i = 0; i < urls.length; i++) {
		$("tbody").append(tableHTML1 + parseInt(i + 1) + tableHTML2 + i + tableHTML3 + i + tableHTML4);
	};
    $(".btn").click(function() {
        $(this).text('completed!').removeClass('active').addClass('disabled');
    });
});

