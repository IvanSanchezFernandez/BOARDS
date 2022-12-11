
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
		document.getElementById("answerQ1").innerHTML = "Drag and drop until you get all answers right.<br><br>Although there are individual variations, in general:<br><br>The recurrent artery of Heubner (branch of the anterior cerebral artery) irrigates the head of the caudate and the anterior part of the putamen.<br><br>The lenticulostriate arteries (branches of the middle cerebral artery) irrigate most of the caudate and most of the putamen.<br><br>The anterior choroidal artery (a direct branch of the internal carotid artery) irrigates the globus pallidus and the posterior limb of the internal capsule.<br><br>Finally, the thalamoperforator and thalamogeniculate arteries (branches of the posterior cerebral artery) irrigate the thalamus.<br><br>Great illustrations of the vascular territories can be found <a href='https://radiopaedia.org/cases/cerebral-vascular-territories-illustration?lang=us' target='_blank'>here</a> with more detailed explanations <a href='https://radiopaedia.org/articles/brain-arterial-vascular-territories?lang=us' target='_blank'>here</a>.";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}








function checkQ2() {

	if (document.question2.question.value == "c") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br>Review again the illustrations of the brain vascular territories <a href='https://radiopaedia.org/cases/cerebral-vascular-territories-illustration?lang=us' target='_blank'>here</a> with more detailed explanations <a href='https://radiopaedia.org/articles/brain-arterial-vascular-territories?lang=us' target='_blank'>here</a>.";
		document.getElementById("after_submitQ2").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not quite!<br><br>Review again the illustrations of the brain vascular territories <a href='https://radiopaedia.org/cases/cerebral-vascular-territories-illustration?lang=us' target='_blank'>here</a> with more detailed explanations <a href='https://radiopaedia.org/articles/brain-arterial-vascular-territories?lang=us' target='_blank'>here</a>.";
		document.getElementById("after_submitQ2").style.background = "red";
}

}




