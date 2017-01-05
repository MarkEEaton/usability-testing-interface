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

// update the cohort to get a new combination of questions and interface
cohort = 0;
var activities = giantjson[cohort];
var startHTML = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><div class="alert alert-warning" style="text-align:center"><b>Activity #' 
var midHTML = '</b></div><div class="alert alert-info" style="margin:15px">';
var endHTML = '</div>';
var timer = undefined;

// this handles responses to the "Try it now!" button. Changes button text; opens the activity in a new window
function gotoactivity(id) {
	displayid = parseInt(id) + 1
	$('#' + id).text('completed!').removeClass('active').addClass('disabled');
	var instructions = window.open('', 'instructions', 'left=20,top=20,width=160,height=300,menubar=no,titlebar=no');
	var workspace = window.open(activities[id]['url'], 'workspace', 'left=200,top=20,width=1000,height=700,menubar=no,titlebar=no');
	instructions.document.body.innerHTML = startHTML + displayid + midHTML + activities[id]['message'] + endHTML;

	// closes one window when the other is closed
	timer = setInterval(function() {
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
