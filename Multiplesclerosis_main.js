
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
document.getElementById("answerQ1").innerHTML = "Alemtuzumab: Anti-CD52 monoclonal antibody. Administered in 5-day IV infusion with a second 3-day IV infusion 1 year later. Potentially life-threatening infusion reacation. Requires prophylaxis for herpes virus. Only considered when at least 2 other treatments failed.<br><br>Interferons: Historically, first disease modified treatments approved for multiple sclerosis. Subcutaneous or intramuscular administration. They work by inhibiting proinflammatory cytokines (INF-gamma, TNF-alpha) and increasing immunomodulatory cytokines (Il-10).<br><br>Mitoxantrone: Antineoplastic drug causing DNA damage. Given as IV infusion every 3 months. Risk of serious cardiotoxicity. Risk of secondary leukemia.<br><br>Glatiramer acetate: Alters T cell maduration towards a more immunomodulatory Th2 cell type. Subcutaneous administration. No major drug interactions, no need for laboratory monitoring, no increased risk of infection or cancer. Infusion reaction with flushing, chest pain, palpitations, tachycardia, anxiety, dyspnea, constriction of the throat, and urticaria (self-limited, requires no treatment, and it is not dangerous).<br><br>Fingolimod: Hystorically, first oral disease modifying treatment approved for multiple sclerosis. FDA-approved for pediatric multiple sclerosis. Downregulates sphingosine-1-phosphate receptor, which traps lymphocytes inside lymph nodes. The first dose needs monitoring for at least 6 hours because of the risk of bradycardia and cardiac arrhythmia. Risk of macular edema, especially in patients with diabetes. Patients should have a history of resolved varicella or receive the vaccine before administration.<br><br>Ocrelizumab: Anti-CD20 monoclonal antibody. FDA-approved for primary-progressive multiple sclerosis.<br><br>Cyclophosphamide: Nitrogen mustard which causes myelosuppression, gonadotoxicity, and hemorrhagic cystitis.<br><br>Fumarates: Activate nuclear factor erythroid 2-related factor 2 (Nrf2) pathway. Oral medications which cause flushing, pain, diarrhea, and nausea.<br><br>Natalizumab: Binds to alpha-4 integrins in B and T cells blocking the pass across the blood-CNS barrier. Increased risk of encephalitis or meningitis with herpes virus and virus varicella zoster. Highest risk of progressive multifocal leukoencephalopathy with virus JC, which requires monitoring. Risk of neutralizing antibodies. Risk of rebound after discontinuation (for example, during pregnancy).<br><br>Teriflunomide: Reduces pyrimidine synthesis. Once daily oral medication. Patients should be negative for latent tuberculosis before initiation. Hepatotoxic. Teratogenic.<br><br><br><br>If you want to learn more on disease modifying treatments for multiple sclerosis, articles  that are comprehensive yet concise include <a href='https://pubmed.ncbi.nlm.nih.gov/25336899/' target='_blank'>this article</a> and <a href='https://pubmed.ncbi.nlm.nih.gov/35938656/' target='_blank'>this article</a>.";
document.getElementById("after_submitQ1").style.background = "#A7FFEB"; 
}





