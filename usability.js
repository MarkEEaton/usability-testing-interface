// generate a random question and check if it has already been asked 
function quest() {
    r = Math.floor(Math.random() * 15)
    if (asked.indexOf(r) > -1) {
        return quest();
    }
    else {
        return r;
    }
}

// assemble a randomized question list
function randquestions() {
    asked = []
    for (i=0; i<5; i++) {
        asked.push(quest())
    }
    return asked
}

questionlist = randquestions()


// the full question list
var questions = [["Find the textbook title '<b>Anthropologist on Mars</b>'."],  // 0
                 ["Find a book by <b>Hemingway, Ernest</b> as an author."],  // 1
                 [ "Check to see if the book <b>Goldfinch</b> is available to borrow for a four week period."], // 2
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
var urls = ["http://kbcc.cuny.libguides.com/prototype1?question=" + questionlist[0],
            "http://kbcc.cuny.libguides.com/prototype4?question=" + questionlist[1],
            "http://kbcc.cuny.libguides.com/prototype5?question=" + questionlist[2],
            "http://kbcc.cuny.libguides.com/prototype6?question=" + questionlist[3],
            "http://kbcc.cuny.libguides.com/prototype7?question=" + questionlist[4]]

console.log(urls)

counter = 0; // do not change this

// make the table using js
var tableHTML1 = '<tr><td><div class="activity-container">Activity #';
var tableHTML2 = '<a href="" onclick="gotoactivity(';
var tableHTML3 = '); return false;" class="btn btn-default active" role="button" id="';
var tableHTML4 = '"> Try it now!</a></div></td></tr>"';

$(document).ready(function() {
	for (i = 0; i < questionlist.length; i++) {
		$("tbody").append(tableHTML1 + parseInt(i + 1) + tableHTML2 + i + tableHTML3 + i + tableHTML4);
	};
});


// set some variables in preparation for gotoactivity()
var startHTML = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><div class="alert alert-warning" style="text-align:center"><b>Activity #' 
var midHTML = '</b></div><div class="alert alert-info" style="margin:15px">';
var endHTML = '</div>';
var timer = undefined;


// this handles responses to the "Try it now!" button. Changes button text; opens the activity in a new window
function gotoactivity(id) {
	counter++;
	displayid = parseInt(id) + 1;
	$('#' + id).text('completed!').removeClass('active').addClass('disabled');
	var instructions = window.open('', 'instructions', 'left=20,top=20,width=160,height=300,menubar=no,titlebar=no');
	var workspace = window.open(urls[id], 'workspace', 'left=200,top=20,width=1195,height=750,menubar=no,titlebar=no,scrollbars=yes');
	instructions.document.body.innerHTML = startHTML + displayid + midHTML + questions[questionlist[id]] + endHTML;

	// closes one window when the other is closed
	timer = setInterval(function() {
		$(this).focus(function() {
			workspace.close();
			instructions.close();
			completeactivities();
		});
		if (instructions.closed) {
			workspace.close();
		    clearInterval(timer);
		    completeactivities();
		}
		else if (workspace.closed) {
			instructions.close();
			clearInterval(timer);
			completeactivities();
		}
	}, 50);
};

// check that all activities are completed; if they are, display a congratulations screen
function completeactivities() {
	if (counter >= questionlist.length) {
		var completeHTML = '<div class="alert alert-success" style="text-align:center; display:block; width:200px; margin:3px auto 3px auto;"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><span><b>Congratulations!</b><br>You\'ve completed our usability test!</span></div>'
		var complete = window.open('', 'complete', 'left=500,top=200,width=250,height=100,menubar=no,titlebar=no');
		complete.document.body.innerHTML = completeHTML;
		counter = 0;
	}
	else {}
}
