
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
		document.getElementById("answerQ1").innerHTML = "I am not going to give you the answers for this one.<br><br>Try to match the items until you get all the answers right.<br><br>It is important to learn these associations.<br><br>I am going to give you some information: Anti-Hu (ANNA-1) is the most frequently found autoantibody in paraneoplastic limbic encephalitis. In children, opsoclonus-myoclonus ataxia syndrome is typically associated with neuroblastoma. In adults, opsoclonus-myoclonus ataxia syndrome is associated with gynecological, small-cell lung, and bladder cancers. Anti-Yo (PCA1) is another paraneoplastic syndrome with cerebellar dysfunction associated with gynecological and lung cancers. I am sure you already know the associations of myasthenia gravis and Lambert-Eaton syndrome (think thymus).";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}






