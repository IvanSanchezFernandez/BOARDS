
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
		document.getElementById("answerQ1").innerHTML = "Although it is an oversimplification, it is helpful to have in mind that there are three major areas in relation to aphasias:<br><br>1) The area where sequences of sounds are identified, processed, and comprehended (Wernicke's area in the posterior part of the superior temporal gyrus)<br><br>2) The area responsible for the creation of the motor program for the articulation of sounds (Broca's area in the opercular and triangular portion of the inferior frontal gyrus)<br><br>3) The connection between these two areas (the arcuate fasciculus).";
		document.getElementById("answerQ1_picture").src = "Aphasias_img/BrocaWernicke.png";
		document.getElementById("afterQ1_picture").innerHTML = "Conceptually, deficits in language comprehension probably involve Wernicke's area or its connections; deficits in fluency probably involve Broca's area or its connections; and deficits in repetition probably involve the arcuate fasciculus.<br><br>This refers not only to verbal language, but also to written language.<br><brThis is a very simple, but very powerful conceptual framework. Let's see how...";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}








function checkQ2() {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "This is much easier than it seems. Everything is in the name.<br><br>If there is 'Wernicke's' or 'sensory' in the name of the aphasia, then you know that the Wernicke's area is affected and comprehension is impaired.";
		document.getElementById("answerQ2_picture").src = "Aphasias_img/Sensoryaphasia.png";
		document.getElementById("afterQ2_picture").innerHTML = "If there is 'Broca's' or 'motor' in the name, then you know that the Broca's area is affected and fluency is impaired.";
		document.getElementById("answerQ2_picture2").src = "Aphasias_img/Motoraphasia.png";
		document.getElementById("afterQ2_picture2").innerHTML = "If there is 'global' in the name, then you know that it is both sensory and motor, both the Wernicke's area and the Broca's area are affected and both comprehension and fluency are impaired.";
		document.getElementById("answerQ2_picture3").src = "Aphasias_img/Globalaphasia.png";
		document.getElementById("afterQ2_picture3").innerHTML = "Conduction aphasia is just inability to repeat with preserved comprehension and repetition.<br><br>Regardless of the type of aphasia, if there is 'transcortical' in the name, it means that the ability to repeat is preserved. Therefore, 'mixed transcortical aphasia' might be easier to remember if you call it 'global transcortical aphasia'.";
		document.getElementById("answerQ2_picture4").src = "Aphasias_img/Transcortical.png";
		document.getElementById("after_submitQ2").style.background = "#A7FFEB";	
}








function checkQ3() {

	if (document.question3.question.value == "c") {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!! <br><br>You can think of aphemia as similar to Broca's aphasia, but with preserved written language.<br><br>In aphemia (~ lack of phonemes) the speech is slow and halting, but the writing is fine.";
		document.getElementById("after_submitQ3").style.background = "#A7FFEB";
		document.getElementById("afterQ3_picture").innerHTML = "Great job!";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not quite!";
		document.getElementById("after_submitQ3").style.background = "red";
		document.getElementById("afterQ3_picture").innerHTML = "Try again!";

}

}








function checkQ4() {

	if (document.question4.question.value == "a") {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct!! <br><br>You can think of alexia without agraphia as similar to Wernicke's aphasia, but with difficulty reading but preserved verbal comprehension.<br><br>Patients with alexia without agraphia can write, but they cannot read (even what they just wrote).";
		document.getElementById("answerQ4_picture").src = "Aphasias_img/Alexiawithoutagraphia.png";
		document.getElementById("after_submitQ4").style.background = "#A7FFEB";
		document.getElementById("afterQ4_picture").innerHTML = "Alexia without agraphia is typically caused by structural lesions affecting both the left visual cortex and the splenium of the corpus callosum. The lesion in the left visual cortex or its connections makes that visual information coming from the right visual field cannot be processed. The visual information coming from the left visual field is processed normally in the right visual cortex, but the lesion in the splenium of the corpus callosum does not allow that information to pass to the language areas in the left hemisphere.<br><br>Great job!";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No!<br><br>Try to understand the pathophysiology in the figure:";
		document.getElementById("answerQ4_picture").src = "Aphasias_img/Alexiawithoutagraphia.png";
		document.getElementById("after_submitQ4").style.background = "red";
		document.getElementById("afterQ4_picture").innerHTML = "Try again!";

}

}





