
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  
	if (document.getElementById(data).getAttribute('data-div').includes(ev.target.id)) {
 		alert("That is correct!");
		ev.target.appendChild(document.getElementById(data));
}
	else {
     		alert("That association is wrong. Try again!");
  }

}


function checkQ1() {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "I am not going to give you the answers for this one.<br><br>Try to match the items until you get all the answers right.<br><br>Other defense mechanisms include idealization (immature defense mechanism in which others are considered perfect or better than they really are) and anticipation (mature defense mechanism in which a problem is addressed before it arises like preparing extensively for a job interview).<br><br>A brief explanation of defense mechanisms can be found <a target='_blank' rel='noopener noreferrer' href='https://www.ncbi.nlm.nih.gov/books/NBK559106/'>here</a> or <a target='_blank' rel='noopener noreferrer' href='https://www.verywellmind.com/defense-mechanisms-2795960'>here</a>.";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}






