
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  
	if (ev.target.id == document.getElementById(data).getAttribute('data-div')) {
 		alert("That is correct!");
		ev.target.appendChild(document.getElementById(data));
}
	else {
     		alert("That association is wrong. Try again!");
  }

}




function checkQ1() {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Pseudocyesis: A nonpregnant, nonpsychotic woman believes she is pregnant and exhibits signs and symptoms of pregnancy (rarely seen also in men).<br><br>Gerstmann's syndrome: Agraphia, acalculia, right-left confusion, finger agnosia. Caused by lesions in the left angular gyrus (temporoparietooccipital junction).<br><br>Anton's syndrome: Complete visual loss, but patient is completely unaware of the deficit and patient fabulates when asked about what the patient is seeing. Caused by bilateral lesions of the primary visual cortex.<br><br>Riddoch's syndrome (also called statokinetic dissociation): Ability to preserve motion perception in an otherwise blind visual field.<br><br>Capgras' syndrome: Delusional belief that a person, often a member of the family, is an identical-looking imposter.<br><br>Fregoli syndrome: Delusional belief that one or more familiar persons, usually persecutors following the patient, repeatedly change their appearance.<br><br>Fahr's syndrome: Calcification of basal ganglia resulting in movement disorder. It is a genetic disorder, most commonly autosomal dominant. Typical onset is in the 40s.<br><br>Intermetamorphosis: Delusional belief that someone changes into someone else.<br><br>Balint's syndrome: Simultagnosia (inability to see the whole visual scene, just parts of it), ocular ataxia (inability to reach under visual guidance), and oculomotor apraxia (inaccurate saccades on gaze movements). Caused by bilateral parietooccipital injury.<br><br>Cotard's syndrome: Delusional belief that one is dead or dying. It can also involve the belief of having lost organs or having lost body parts.<br><br>Charles Bonnet syndrome: Hallucinations of simple patterns or small people or animals. Patient is aware that they are hallucinations. Caused by severe loss of vision (typically bilaterally) anywhere along the visual pathway.";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}






