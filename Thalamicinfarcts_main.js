
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
		document.getElementById("answerQ1").innerHTML = "This is easier than it seems.<br><br>The names of the arteries are long and apparently complicated. However, if you focus on the 'localization' part of each artery name you will realize that the arteries are named posterolateral, anterior polar, paramedian, and dorsal. Considering that, it is relatively easy to localize their infarcts in the thalamus. The artery of Percheron is just a single artery which irrigates both paramedian regions. When a patient has an artery of Percheron rather than a right and left paramedian arteries, if there is an infarct in the artery, it will necessarily affect both thalami.<br><br>For the thalamic syndromes, remember the basic anatomy of the thalamic nuclei.<br><br>The anterior pole of the thalamus has the anterior nucleus, which receives inputs from the mamillary bodies and the hippocampus and projects to the cingulate gyrus, which explain 'limbic' symptoms such as personality changes and contralateral emotional-facial paresis in the infarct of the anterior polar artery.<br><br>The paramedian regions of the thalamus include the intralaminar nucleus and the mediodorsal nucleus, which participate in the reticular activating system for aorusal and alertness. Therefore, infarct of the paramedian posterior thalamoperforating arteries or the artery of Percheron explain hypersomnolence, dementia, and akinetic mutism.<br><br>The posterolateral thalamus includes the ventral posterior lateral and ventral posterior medial nuclei, which relay sensory information from the body and face to the parietal lobe. Infarcts in the posterolateral thalamogeniculate artery cause sensory and pain syndromes. If they affect the neighboring posterior limb of the internal capsule, they also cause contralateral motor symptoms.<br><br>In the most posterior part of the thalamus there is the lateral geniculate nucleus, a major relay of visual information from the retina to the occipital cortex. Unsurprisingly, infarcts in the dorsal posterior choroidal artery cause visual field defects. Interestingly, the lateral geniculate nucleus also receives irrigation from the anterior choroidal artery (branch of the internal carotid artery).<br><br>A quick refresher of thalamic nuclei can be found <a href='https://www.grepmed.com/images/14030/nuclei-thalamic-thalamus-anatomy-neurology-47' target='_blank'>here</a> with more detailed explanations <a href='https://clinicalgate.com/thalamus-epithalamus/' target='_blank'>here</a>.";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}








function checkQ2() {

	if (document.question2.question.value == "c") {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!! <br><br>A paramedian thalamic infarct (secondary to an infarct of the paramedian posterior thalamoperforating arteries or the artery of Percheron affects crucial areas in the ascending paths from the reticular activating system and cause hypersomnolence, dementia, akinetic mutism, hypersexuality, and vertical gaze anomalies.";
		document.getElementById("after_submitQ2").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not quite!<br><br>Try again.";
		document.getElementById("after_submitQ2").style.background = "red";
}

}




