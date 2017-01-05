// defines the various activites as an object
var activities = [
	{
		"activity" : 0,
		"url" : "http://www.kbcc.cuny.edu",
		"message" : "Find the library's hours for today."
	},
	{
		"activity" : 1,
		"url" : "http://www.google.com",
		"message" : "Look up a magazine article about Angela Merkel."
	},
	{
		"activity" : 2,
		"url" : "http://www.nytimes.com",
		"message" : "Find a newspaper article about Syrian refugees."
	},
	{
		"activity" : 3,
		"url" : "http://www.yahoo.com",
		"message" : "Look up a book called 'Animal Farm'."
	}
];

var startHTML = '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"><div class="alert alert-info" style="margin:15px">';
var endHTML = '</div>';
var timer = undefined;

// this deletes the activity windows if they are closed or minimized


// this handles responses to the "Try it now!" button. Changes button text; opens the activity in a new window
function gotoactivity(id) {
	$('#' + id).text('completed!').removeClass('active').addClass('disabled');
	// the order in which the window with a url is passed matters 
	// the second window passed will be the focused window
	var instructions = window.open('', 'instructions', 'left=20,top=20,width=160,height=300');
	var workspace = window.open(activities[id]['url'], 'workspace', 'left=200,top=20,width=1000,height=700');
	//instructions.document.body.innerHTML = startHTML + activities[id]['message'] + endHTML;

	timer = setInterval(function() {
		//$(workspace).blur(function() {
	    //	alert("blur");
	    //	workspace.close();
	    //});
	    console.log("checkChild");
		if (instructions.closed) {
			workspace.close();
		    clearInterval(timer);
		}
		else if (workspace.closed) {
			instructions.close();
			clearInterval(timer);
		}
	}, 100);
};