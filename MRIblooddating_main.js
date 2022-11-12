
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
		document.getElementById("answerQ1").innerHTML = "Learning this using just memorization is pretty much impossible.<br><br>However, it is actually quite easy to learn once somebody explains to you how to learn it best.<br><br>Take pencil and paper.";
		document.getElementById("answerQ1_picture").src = "MRIblooddating_img/graph1.png";
                document.getElementById("afterQ1_picture").innerHTML = "Draw a vertical arrow pointing up. This will be your T1.";
		document.getElementById("answerQ1_picture2").src = "MRIblooddating_img/graph2.png";
                document.getElementById("afterQ1_picture2").innerHTML = "Now draw an horizontal arrow pointing to the right. This will be your T2.";
		document.getElementById("answerQ1_picture3").src = "MRIblooddating_img/graph3.png";
                document.getElementById("afterQ1_picture3").innerHTML = "Finally draw a kind of spiral like this and you have already learned it...Wait,...what? Yes, this is all you have to know. Look at the next picture:";
		document.getElementById("answerQ1_picture4").src = "MRIblooddating_img/graph4.png";
                document.getElementById("afterQ1_picture4").innerHTML = "All you have to remember is to draw the vertical line T1, the horizontal line T2, and the spiral. That is it. Draw it again and you will never forget it.<br><br>What about the hemoglobin products? Well, you can think as the normal hemoglobin in the blood (hemoglobin carrying oxygen, or intracellular oxyhemoglobin). After a hemorrhage, the hemoglobin first loses oxygen (intracellular deoxyhemoglobin), and then transforms into methemoglobin (first in the cells and then extracellular as cells break down). Finally, it transforms into hemosiderin as a final product.<br><br><br><br><a target='_blank' rel='noopener noreferrer' href='https://radiopaedia.org/articles/haemorrhage-on-mri?lang=us'>Radiopedia explains this very well</a>.<br><br><br><br><a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/19433039/'>Maizlin et al also provide a collection of great mnemonics in their open access, short, and wonderful article</a>. I never understood the Ibby Biddy Baby or whatever mnemonic, but probably because I am not a native English speaker. If somebody understands it, please, explain to me.";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}






