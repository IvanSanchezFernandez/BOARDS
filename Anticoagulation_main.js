
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
		document.getElementById("answerQ1").innerHTML = "Warfarin is a vitamin K antagonist that inhibits factors II, VII, IX, and X. As the international normalized ratio (INR) decreases below 2 the risk of ischemic stroke rapidly increases. As the INR increases over 3 the risk of intracranial bleeding rapidly increases. Therefore, warfarin requires frequent monitoring to keep the therapeutic range with an INR between 2 and 3. There is no standard dose, the dose is individualized for the individual patient. Warfarin also has multiple drug interactions. The half-life of warfarin is 20-60 hours, so there is a slow onset of action and response to dosing changes. To reverse the effect of warfarin, vitamin K takes days, fresh frozen plasma takes hours and requires large volumes, so the fastest reversal is with prothrombin complex concentrate.<br><br>Factor Xa inhibitors all have an 'xa' in their name: rivaroxaban, apixaban, and edoxaban. Rivaroxaban and apixaban can be reversed with andexanet alpha, an engineered version of factor Xa.<br><br>Dabigatran is a direct thrombin inhibitor. Dabigatran can be reversed with idarucizumab, a monoclonal antibody that binds dabigatran.<br><br>Dabigatran, rivaroxaban, apixaban, and edoxaban all have a half-life of several hours and all need renal dose adjustment.<br><br><a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/32224760/'>This article is a good reference</a>.";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}






