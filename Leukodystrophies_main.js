
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

	if (document.getElementById("q1a").checked == false && document.getElementById("q1b").checked == false && document.getElementById("q1c").checked == true && document.getElementById("q1d").checked == true && document.getElementById("q1e").checked == false && document.getElementById("q1f").checked == false && document.getElementById("q1g").checked == false && document.getElementById("q1h").checked == true) {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Correct! <br><br> The three leukoencephalopathies most typically associated with macrocephaly are Alexander disease, Canavan disease, and megalencephalic leukoencephalopathy with subcortical cysts.<br><br>You can safely forget about megalencephalic leukoencephalopathy with subcortical cysts because its name tells most of what needs to be known about this rare condition. However, try to remember: Alexander disease and Canavan disease are associated with macrocephaly.<br><br>Great job!";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";

	} else {
		document.getElementById("after_submitQ1").style.visibility = "visible";
		document.getElementById("answerQ1").innerHTML = "Not correct.<br><br>Try again.";
		document.getElementById("after_submitQ1").style.background = "red";

}


}








function checkQ2() {

	if (document.question2.question.value == "e") {

		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!!<br><br>Pathogenic variants in the ABCD1 gene (gene product: adrenoleukodystrophy protein (ALDP), a protein in the membranes of peroxisomes, organelles where very long-chain fatty acids are typically broken down) cause X-linked adrenoleukodystrophy. A way to remember this is X-linked ABCDystrophy.<br><br>Pathogenic variants in the PLP gene (gene product: proteolipid protein 1 (PLP1), a protein which constitutes a large proportion of myelin) cause Pelizaeus-Merzbacher disease. A way to remember this is PLPzaeus-Merbacher disease.<br><br>Pathogenic variants in the GALC gene (gene product: galactosylceramidase, a enzyme that breaks down galactolipids) cause Krabbe disease. A (not very good) way to remember this is GALCBBE disease.<br><br>Pathogenic variants in the ASPA gene (gene product: aspartoacylase, the enzyme that breaks down N-acetyl-L-aspartic acid (NAA)) cause Canavan disease. If you remember that Canavan disease is associated with elevated NAA, you can figure out the aspartoacylase.<br><br>Pathogenic variants in the GFAP gene (gene product: glial fibrillary acidic protein, an intermediate filament protein) cause Alexander disease. The way to remember this is that Alexander disease is associated with accumulation in Rosenthal's fibers, so think of fibers.<br><br>Pathogenic variants in the SLC17A5 (gene product: sialin, a protein in the membranes of lysosomes, organelles that break down and recycle cell materials) cause sialic acid storage disorders. Try to remember this as SLCIALIN (not great, I know).<br><br>Pathogenic variants in the ARSA gene (gene product: arylsulfatase A, a lysosomal enzyme that breaks down sulfatides) cause metachromatic leukodystrophy. Try to remember it as metachromatic arylsulfatase leukodystrophy (not great mnemonic).<br><br>Pathogenic variants in the MLC1 gene (gene product: MLC1 protein, a protein in the astroglia) causes megalencephalic leukoencephalopathy with subcortical cysts. You can safely forget about megalencephalic leukoencephalopathy with subcortical cysts.<br><br>And pathogenic variants in the eIF2B gene (gene product: alpha subunit of the eukaryotic translation initiation protein 2B, a protein which regulates protein synthesis) cause vanishing white matter disease. Think of an elf on the shelf disappearing after the holidays (it is e i f, not e l f, but for a mnemonic it is not bad).";
		document.getElementById("after_submitQ2").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not quite! <br><br>Keep trying!";
		document.getElementById("after_submitQ2").style.background = "red";

}

}








function checkQ3() {

	if (document.getElementById("q3a").checked == true && document.getElementById("q3b").checked == false && document.getElementById("q3c").checked == true && document.getElementById("q3d").checked == false && document.getElementById("q3e").checked == true && document.getElementById("q3f").checked == false) {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Correct!<br><br> The most distinguishing characteristics to remember in the brain MRI of leukodystrophies are:<br><br><a target='_blank' rel='noopener noreferrer' href='https://www.jneurosci.org/content/jneuro/32/15/5017/F2.large.jpg?width=800&height=600&carousel=1'>Alexander disease affects predominantly the white matter of the anterior part of the brain (images from Messing et al, J Neurosci 2012)</a>.<br><br><a target='_blank' rel='noopener noreferrer' href='https://radiopaedia.org/cases/adrenoleukodystrophy-11?lang=us'>X-linked adrenoleukodystrophy affects predominantly the white matter of the posterior part of the brain (images from radiopaedia)</a>.<br><br><a target='_blank' rel='noopener noreferrer' href='https://www.eurorad.org/sites/default/files/styles/figure_image_teaser_large/public/figure_image/2018-08/0000001099/000002.jpg?itok=Tf35mnsW'>Pelizaeus-Merzbacher disease has a tigroid pattern in brain MRI (images from eurorad)</a>.<br><br>Obviously, patients with these diseases may not have the typical brain MRI pattern, but an advantage of exams is that they ask for typical cases with the typical brain MRI pattern.";
		document.getElementById("after_submitQ3").style.background = "#A7FFEB";

	} else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not correct.<br><br>Try again.";
		document.getElementById("after_submitQ3").style.background = "red";

}


}









function checkQ4() {

	if (document.getElementById("q4a").checked == true && document.getElementById("q4b").checked == false && document.getElementById("q4c").checked == false && document.getElementById("q4d").checked == false && document.getElementById("q4e").checked == true && document.getElementById("q4f").checked == false && document.getElementById("q4g").checked == false && document.getElementById("q4h").checked == false && document.getElementById("q4i").checked == false) {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct! <br><br> Pelizaeus-Merzbacher disease and X-linked adrenoleukodystrophy are X-linked recessive conditions. The rest of the leukodystrophies are autosomal recessive conditions.";
		document.getElementById("after_submitQ4").style.background = "#A7FFEB";

	} else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No!<br><br>Try again.";
		document.getElementById("after_submitQ4").style.background = "red";

}


}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == true && document.getElementById("q5c").checked == false && document.getElementById("q5d").checked == false && document.getElementById("q5e").checked == true && document.getElementById("q5f").checked == false && document.getElementById("q5g").checked == true && document.getElementById("q5h").checked == false && document.getElementById("q5i").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Correct! <br><br> Krabbe disease (a lysosomal disease), X-linked adrenoleukodystrophy (a peroxisomal disease), metachromatic leukodystrophy (a lysosomal disease), and vanishing white matter disease (a defect in a protein that regulates the synthesis of proteins in the cell) cause impairment of the myelin metabolism. Because the metabolism or turnover of myelin in the U-fibers is so slow, the U-fibers are not affected initially.<br><br><a target='_blank' rel='noopener noreferrer' href='https://radiopaedia.org/articles/subcortical-u-fibres-3?lang=us'>Radiopaedia explains this topic clearly and succinctly</a>.<br><br>This figure from Bugiani et al 2010 at J Neuropathol Exp Neurol <a target='_blank' rel='noopener noreferrer' href='https://academic.oup.com/view-large/figure/56286644/jnen_987_f1.jpeg'>shows how vanishing white matter disease spares the U-fibers</a>. Compare that with this case of Canavan disease from radiopaedia in which <a target='_blank' rel='noopener noreferrer' href='https://radiopaedia.org/cases/canavan-disease?lang=us'>U-fibers are involved as early as the rest of the white matter</a>.";
		document.getElementById("after_submitQ5").style.background = "#A7FFEB";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not right!<br><br>Try again.";
		document.getElementById("after_submitQ5").style.background = "red";

}


}








function checkQ6() {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "I am not going to give you the answers for this one.<br><br>Try to match the items until you get all the answers right.<br><br>This will solidify your knowledge of leukodystrophies and you will answer all leukodystrophy questions in the boards.";
		document.getElementById("after_submitQ6").style.background = "#A7FFEB";	
}







