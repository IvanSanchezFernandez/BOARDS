
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
		document.getElementById("answerQ1").innerHTML = "For the pupils:<br><br>Pinpoint pupils localize to the pons (and are reactive to light). A way to remember this is to think that structural lesions in the pons damage the descending sympathetic pathways for the eyes coming down from the hypothalamus to synapse at T1 and, therefore, sympathetic pupillary dilation is impaired (parasympathetic pupillary constriction predominates). Other typically tested cause of pinpoint pupils is opioid intoxication.<br><br>When pupils are nonreactive (either midposition or large), think of a midbrain lesion. A way to remember this is that the III cranial nerve (and nuclei) are in the midbrain. You can think that if the III cranial nerve is damaged, the parasympathetic pupillary constriction is impaired and the eye does not constrict to light.<br><br>Lesions in the diencephalon cause small reactive pupils, and a way to remember that is that the origin of the sympathetic pathway for the eye starts in the hypothalamus, which is in the diencephalon, so a reduction in sympathetic tone may reduce pupillary dilation with parasympathetic constriction predominating.<br><br>These mnemonics do not fully reflect the mechanism causing them, but may help remember how to localize these pupillary patterns.<br><br>A good summary of the pupillary findings in the coma exam can be found in the <a href='https://eyewiki.org/Neuro-ophthalmic_findings_in_coma#Pupillary_response' target='_blank'>EyeWiki of the American Academy of Ophthalmology</a><br><br><br><br>For the respiratory patterns:<br><br>Try to remember the ataxic pattern as an agonal pattern (very irregular both in volume and frequency) which is seen with medullary lesions.<br><br>You can think that as the lesion gets higher in the brainstem, the respiratory pattern is (kind of) more similar to the normal respirations: a lower pons lesion is typically associated with a cluster breathing, an upper pons lesion is typically associated with apneustic breathing, and a midbrain lesion is typically associated with sustained hyperventilation.<br><br>When there is extensive diffuse lesion in the cerebral hemispheres, the typical association is Cheyne-Stokes breathing. You can try to remember it as the breathing responding exclusively to changes in respiratory gases (with no brain regulation). As changes in gases are relatively slow, the compensatory breathing always lags behind and overcompensates: when the patient is not breathing, CO2 increases and this leads to hyperventilation, which decreases CO2, so ventilation decreases progressively until it reaches apnea and the cycle begins again. Because changes in blood gases are slow, the changes in ventilation always lag behind what is needed and that gives the typical alternating increasing and decreasing Cheyne-Stokes pattern.<br><br>Again, these are just a mnemonics that may or may not help you remember these respiratory patterns.<br><br>This is a <a href='https://epomedicine.com/wp-content/uploads/2018/07/respiratory-patterns.jpg' target='_blank'>very helpful summary of respiratory patterns in the coma exam</a>.";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}






