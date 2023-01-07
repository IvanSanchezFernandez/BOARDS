
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
		document.getElementById("answerQ1").innerHTML = "Lithium is a mood stabilizer that causes weight gain, edema, nausea, diarrhea, acne, hypothyroidism, tremor, and alterations in glomerular filtration rate. At higher doses, it can cause hyperreflexia, dysarthria, confusion, autonomic instability, and blurry vision. Therapeutic levels are very narrow (0.5-1 mEq/l) and NSAIDs increase its blood level.<br><br>SSRIs include fluoxetine, fluvoxamine, paroxetine, sertraline, citalopram, and escitalopram. <br><br>Haloperidol is a typical (first-generation) antipsychotic with a prominent anti-D2 effect. This causes the highest risk for extrapyramidal symptoms.<br><br>Bupropion inhibits reuptake of norepinephrine and dopamine. Bupropion is used during smoking cessation. Bupropion does not markedly affect the serotoninergic system and does not act directly on postsynaptic receptors, so it does not cause sexual dysfunction, weight gain, or sedation. However, bupropion increases the risk of seizures.<br><br>Paroxetine is the SSRI with most anticholinergic activity, similar to the tricyclic antidepressants. One of the consequences of anticolinergic effects is cognitive impairment. Paroxetine is the SSRI with highest risk during pregnancy, including heart defects.<br><br>Mirtazapine is an alpha-2 noradrenergic receptor antagonist and also blocks 5HT2 and 5HT3 receptors. Mirtazapine causes increased appetite and somnolence. These side effects can be used in patients who need to gain weight or need to improve their sleep. It also treats nausea.<br><br>Among antidepressants, mirtazapine and paroxetine cause the greatest weight gain. Among antipsychotics, olanzapine, clozapine, quetiapine, and risperidone cause the greatest weight gain (clozapine and olanzapine, the greatest among these). Lithium also markedly increases weight.<br><br>Clozapine is probably the most effective antipsychotic. However, it is mostly used after failure of other antipsychotics because it can cause severe side effects. Clozapine can cause agranulocytosis and reduces seizure threshold. Clozapine, quetiapine, and aripiprazole are the least likely antipsychotics to induce extrapyramidal symptoms.<br><br>Risperidone and olanzapine are the atypical antipsychotics most typically associated with hyperprolactinemia and sexual dysfunction.<br><br>Olanzapine is particularly associated with metabolic syndrome.<br><br>Nortryptiline is a tricyclic antidepressant which, at toxic doses, causes cardiac (arrhythmia, hypotension), anticholinergic (blurred vision, dry mouth, urinary retention), and antihistaminic (confusion, somnolence) side effects as well as seizures.<br><br>Atomoxetine is a selective norepinephrine reuptake inhibitor. Atomoxetine is used in patients with ADHD who are at risk of substance abuse or those patients who prefer not to use a stimulant.<br><br>Guanfacine is an alpha-2 adrenergic receptor agonist used for behavior, but also for hypertension (causes hypotension and, on abrupt discontinuation, rebound hypertension).<br><br><a target='_blank' rel='noopener noreferrer' href='https://link.springer.com/book/10.1007/978-3-319-74604-3'>This book is a great reference</a>.";
		document.getElementById("after_submitQ1").style.background = "#A7FFEB";	
}








function checkQ2() {

	if (document.question2.question.value == "d") {

		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Correct!!<br><br>Nausea, loose stools, and other gastrointestinal side effects are the most common with SSRIs, but typically resolve within the first weeks.";
		document.getElementById("after_submitQ2").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ2").style.visibility = "visible";
		document.getElementById("answerQ2").innerHTML = "Not quite! <br><br>Keep trying!";
		document.getElementById("after_submitQ2").style.background = "red";

}

}








function checkQ3() {

	if (document.question3.question.value == "f") {

		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Yes!!<br><br>Decreased libido, anorgasmia and other forms of sexual dysfunction are the most common reason for discontinuation of SSRIs.";
		document.getElementById("after_submitQ3").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ3").style.visibility = "visible";
		document.getElementById("answerQ3").innerHTML = "Not quite! <br><br>Keep trying!";
		document.getElementById("after_submitQ3").style.background = "red";

}

}








function checkQ4() {

	if (document.question4.question.value == "a") {

		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "Correct!!<br><br>Despite being effective in schizophrenia, clozapine causes QTc prolongation, diabetes mellitus, gastroparesis, myocarditis, and it can cause fatal agranulocytosis.<br><br>Agranulocytosis occurs in 1%-2% of patients on clozapine.<br><br>During the first 6 months, when the risk of agranulocytosis is higher, CBCs may be done every week. Later on, the frequency of monitoring can decrease.";
		document.getElementById("after_submitQ4").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ4").style.visibility = "visible";
		document.getElementById("answerQ4").innerHTML = "No! <br><br>Keep trying!";
		document.getElementById("after_submitQ4").style.background = "red";

}

}








function checkQ5() {

	if (document.getElementById("q5a").checked == false && document.getElementById("q5b").checked == true && document.getElementById("q5c").checked == true && document.getElementById("q5d").checked == true && document.getElementById("q5e").checked == true && document.getElementById("q5f").checked == true) {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Yes! <br><br> Typical antipsychotics (such as chlorpromazine, fluphenazine, haloperidol, perphenazine, thioridazine, or thiothixene) have more extrapyramidal side effects than atypical antipsychotics.<br><br>Atypical antipsychotics (such as aripiprazole, asenapine, clozapine, iloperidone, lurasidone, olanzapine, paliperidone, quetiapine, risperidone, or ziprasidone) have more side effects related to weight gain and metabolic syndrome than typical antipsychotics.<br><br>Among atypical antipsychotics, clozapine and olanzapine have the highest risk of weight gain.<br><br>Lurasidone lacks affinity for histamine H1 and muscarinic M1 receptors, leading to low levels of sedation, little weight gain, and minimal cognitive dysfunction.<br><br>Antidopaminergic properties lead to hyperprolactinemia in up to 87% of patients treated with risperidone.<br><br>High-potency antipsychotics have a high risk of extrapyramidal symptoms and akathisia occurs in 20%-40% of patients on haloperidol or fluphenazine.<br><br><a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/25210417/'>This article briefly summarizes schizophrenia and its treatments</a>.<br><br>Great job!";
		document.getElementById("after_submitQ5").style.background = "#A7FFEB";

	} else {
		document.getElementById("after_submitQ5").style.visibility = "visible";
		document.getElementById("answerQ5").innerHTML = "Not correct.<br><br>Try again.";
		document.getElementById("after_submitQ5").style.background = "red";

}


}








function checkQ6() {

	if (document.question6.question.value == "a") {

		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "Correct!!<br><br>All typical (first-generation) and atypical (second-generation and third-generation) antipsychotics have a black-box warning explaining that they increase mortality risk in elderly patients with dementia-related psychosis. This is why neuroleptics should be used with caution in elderly patients when they are psychotic in the context of their dementia.<br><br><a target='_blank' rel='noopener noreferrer' href='https://link.springer.com/book/10.1007/978-3-319-74604-3'>This book is a great reference</a>.";
		document.getElementById("after_submitQ6").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ6").style.visibility = "visible";
		document.getElementById("answerQ6").innerHTML = "No! <br><br>Try again!";
		document.getElementById("after_submitQ6").style.background = "red";

}

}








function checkQ7() {

	if (document.question7.question.value == "d") {

		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "Correct!!<br><br>Citalopram and escitalopram have few pharmacokinetic interactions. They are particularly good for patients with comorbidities or older patients, who typically have multiple other medications.<br><br>Prolongation of the QTc makes that these medications are not ideal for patients with a history of myocardial infarction, coronary artery disease, chronic heart failure, left ventricular hypertrophy, arrhythmia, or congenital long QTc syndrome.<br><br><a target='_blank' rel='noopener noreferrer' href='https://link.springer.com/book/10.1007/978-3-319-74604-3'>This book is a great reference</a>.";
		document.getElementById("after_submitQ7").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ7").style.visibility = "visible";
		document.getElementById("answerQ7").innerHTML = "No! <br><br>Keep trying!";
		document.getElementById("after_submitQ7").style.background = "red";

}

}








function checkQ8() {

	if (document.question8.question.value == "e") {

		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "Right!!<br><br>Duloxetine is a serotonin and norepinephrine reuptake inhibitor (SNRI) which is often used for neuropathic or muskuloskeletal pain.<br><br>This medication is not ideal for patients with a history of heavy alcohol use or with hepatic insufficiency because it can cause hepatotoxicity.<br><br><a target='_blank' rel='noopener noreferrer' href='https://link.springer.com/book/10.1007/978-3-319-74604-3'>This book is a great reference</a>.";
		document.getElementById("after_submitQ8").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ8").style.visibility = "visible";
		document.getElementById("answerQ8").innerHTML = "No! <br><br>Keep trying!";
		document.getElementById("after_submitQ8").style.background = "red";

}

}








function checkQ9() {

	if (document.question9.question.value == "e") {

		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Right!!<br><br>Pimavanserin is a selective 5HT2A receptor inverse agonist which was FDA-approved for the treatment of delusions and hallucinations in Parkinson's disease.<br><br><a target='_blank' rel='noopener noreferrer' href='https://link.springer.com/book/10.1007/978-3-319-74604-3'>This book is a great reference</a>.";
		document.getElementById("after_submitQ9").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ9").style.visibility = "visible";
		document.getElementById("answerQ9").innerHTML = "Not correct!<br><br>Keep trying!";
		document.getElementById("after_submitQ9").style.background = "red";

}

}








function checkQ10() {

	if (document.question10.question.value == "b") {

		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "Yes!!<br><br>Although different antidepressants can be used for postpartum depression, brexanolone was specifically approved by the FDA for this condition.<br><br><a target='_blank' rel='noopener noreferrer' href='https://pubmed.ncbi.nlm.nih.gov/31476884/'>Relevant article on brexanolone</a>.";
		document.getElementById("after_submitQ10").style.background = "#A7FFEB";

}	else {
		document.getElementById("after_submitQ10").style.visibility = "visible";
		document.getElementById("answerQ10").innerHTML = "No!<br><br>Keep trying!";
		document.getElementById("after_submitQ10").style.background = "red";

}

}


