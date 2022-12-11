
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
		document.getElementById("answerQ1").innerHTML = "An apraxia is the inability to perform a learned multistep movement in a patient who otherwise has normal motor function, sensory function, attention, comprehension, motivation, and coordination.<br><br>Ideomotor apraxia is a deficit in performing learned movements on command. It is typically tested asking the patient to perform a task with a tool (use a hammer, use a toothbrush, etc.). <a href='https://www.yout-ube.com/watch?v=EvOYeqM-6CE' target='_blank'>The patient will use body parts (for example, a finger) rather than pretending to use a tool and will use incorrect postures of body parts when performing the movement</a>. Ideomotor apraxia is typically associated with lesions in the dominant (frequently left) parietal lobe.<br><br>Ideational apraxia is a deficit in planning: simple movements are not ordered in the correct sequence to create the expected multistep movement. It can be tested by asking the patient to prepare a sandwich. The patient will perform the individual movements correctly, but out of order. Ideational apraxia is typically associated with lesions of the frontal lobe.<br><br>Limb-kinetic apraxia is probably the easiest to understand: it is just loss of dexterity and coordination of fine distal limb movements. It can be tested with fine motor tasks such as rotating a coin between the fingers. Limb-kinetic apraxia is typically associated with lesions in the contralateral supplementary motor area.<br><br>In conceptual apraxia, the patient is not even able to select the right tool to perform a task. It can be tested by asking the patient to select among a variety of tools what tool is needed to complete the task. There is no clear localization for conceptual apraxia.<br><br>A good summary of apraxias is presented in <a href='https://pubmed.ncbi.nlm.nih.gov/34881728/' target='_blank'>this article, which also has a great audio interview with the author</a>.";
	document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}








function checkQ2() {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "I am not going to give you the answers for this one. Keep trying until you get all answers right.<br><br>Although it is an oversimplification, it is helpful to have this rough cartoon in mind because it will be helpful to localize the onset of apraxias.<br><br>Remember, the dominant (typically left) inferior parietal lobe is the area where the spatial kinestetic information and code for complex actions is located. The supplementary motor areas transform that spatial information into motor code. The corpus callosum connects both hemispheres. Let's see how this is helpful...";
		document.getElementById("after_submitQ2").style.background = "#A7FFEB";	
}








function checkQ3() {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Dysfunction of the executive and attention functions of the frontal lobe is thought to be the main cause of ideational apraxia (an apraxia in which the order of the simple movements is not done in the correct sequence).<br><br>Loss of dexterity and coordination of complex distal movements is thought to be caused by lesions in the contralateral supplementary motor area.<br><br>Ideomotor apraxia is thought to originate from lesions in the dominant (typically left) parietal lobe, in which the spatial representation of complex movements is located. When that information from the left parietal lobe cannot pass through the corpus callosum into the right supplementary motor area, then only the left hand becomes apraxic (sometimes called anteiror callosal apraxia).";
		document.getElementById("after_submitQ3").style.background = "#A7FFEB";	
}

