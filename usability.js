// list of questions. Each list in this list is a set of questions for a cohort.
var giantjson = [
	[
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype1",
			"message" : "Find the library hours for today."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype2",
			"message" : "Look up a magazine article about Angela Merkel."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype3",
			"message" : "Find a newspaper article about Syrian refugees."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype4",
			"message" : "Look up a book called Animal Farm."
		}
	],
	[
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype2",
			"message" : "Find the library hours for today."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype3",
			"message" : "Look up a magazine article about Angela Merkel."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype4",
			"message" : "Find a newspaper article about Syrian refugees."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype1",
			"message" : "Look up a book called Animal Farm."
		}
	],
	[
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype3",
			"message" : "Find the library hours for today."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype4",
			"message" : "Look up a magazine article about Angela Merkel."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype1",
			"message" : "Find a newspaper article about Syrian refugees."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype2",
			"message" : "Look up a book called Animal Farm."
		}
	],
	[
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype4",
			"message" : "Find the librarys hours for today."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype1",
			"message" : "Look up a magazine article about Angela Merkel."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype2",
			"message" : "Find a newspaper article about Syrian refugees."
		},
		{
			"url" : "http://kbcc.cuny.libguides.com/prototype3",
			"message" : "Look up a book called Animal Farm."
		}
	]
];	

// select a cohort to get a unique combination of questions and interfaces
counter = 0;
cohort = 0;
var activities = giantjson[cohort];


// make the table using js
var tableHTML1 = '<tr><td><div class="activity-container">Activity #';
var tableHTML2 = '<a href="" onclick="gotoactivity(';
var tableHTML3 = '); return false;" class="btn btn-default active" role="button" id="';
var tableHTML4 = '"> Try it now!</a></div></td></tr>"';

$(document).ready(function() {
	for (i = 0; i < activities.length; i++) {
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
	var workspace = window.open(activities[id]['url'], 'workspace', 'left=200,top=20,width=1195,height=750,menubar=no,titlebar=no,scrollbars=yes');
	instructions.document.body.innerHTML = startHTML + displayid + midHTML + activities[id]['message'] + endHTML;

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
	if (counter >= giantjson[cohort].length) {
		var completeHTML = '<div class="alert alert-success" style="text-align:center; display:block; width:200px; margin:3px auto 3px auto;"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><span><b>Congratulations!</b><br>You\'ve completed our usability test!</span></div>'
		var complete = window.open('', 'complete', 'left=500,top=200,width=250,height=100,menubar=no,titlebar=no');
		complete.document.body.innerHTML = completeHTML;
		counter = 0;
	}
	else {}
}