var arabe=document.getElementById("arabe");
var francais = document.getElementById("francais");
var welcom =document.getElementById("welcom");
 var V = document.getElementById("V");
 var E = document.getElementById("E");
var EB = document.getElementById("EB");
var titre = document.getElementById("titre");
var T1 =document.getElementById("T1");
var T2 =document.getElementById("T2");
var T3 =document.getElementById("T3");
var T4 =document.getElementById("T4");


  arabe.onclick=()=>{lougha("arabe") ; localStorage.setItem("lang","arabe"); };
  francais.onclick=()=>{lougha ("francais") ; localStorage.setItem("lang","francais")};

onload=()=>{lougha(localStorage.getItem("lang"))}

  function lougha (thdid_lougha){
 if (thdid_lougha==="arabe"){
  welcom.innerHTML="مرحبا";V.innerHTML="هدا هو موقعنا";E.innerHTML="للحصول على اكثر معلومات يرجى الاتصال عبر البريد الالكتروني";EB.innerHTML="البريد الالكتروني";
 titre.innerHTML="رائحة الحياة";
 T1.innerHTML="La Vie est Belle L'Eau de Parfum هو عطر من لانكوم للنساء وتم إصداره في عام 2012. العطر حلو الأزهار. مدة الصلاحية والاستيقاظ أعلى من المتوسط. يتم تسويقه من قبل لوريال. الاسم يعني الحياة جميلة. نطق.";
 T2.innerHTML="الأفيون الأسود هو عطر من إيف سان لوران يحتوي على عطر داكن وغامض يهدف إلى تجسيد المرأة العصرية. إنه تمثيل ظلام الأنوثة، وظلمة القلب. يتم تسويق عطر الأفيون الأسود على أنه عطر محيرمغر وإدمان";
 T3.innerHTML=" وصف Comme une Evidence by Yves Rocher نوع من العطور ولد من شغف وعبقرية Annick Menardo ، صانع العطور الشهير ، Comme une Evidence هو ماء عطر للنساء وهو جزء من عائلة حاسة الشم الشائعةالبرغموت في الرأس ، البلوط والباتشولي في الخلفية ، وقلب الأزهار بشكل عام غير موجود جدا ،  غالبا ما يكون اللون الوردي أو الياسمين » مكثف ولكنه أنيق ، هذا ماء عطر للنساء يتردد صداه مثل الأدلة.";
T4.innerHTML=" هو عطر من لانكوم للنساء وتم إصداره في عام 2012. العطر حلو الأزهار. مدة الصلاحية والاستيقاظ أعلى من المتوسط. يتم تسويقه من قبل لوريال. الاسم يعني الحياة جميلة نطق.";
}
 else if (thdid_lougha==="francais"){
welcom.innerHTML="welcom" ;V.innerHTML="voila notre information !";E.innerHTML="pour plus d'formations merci de nous contacter sur notre email .";EB.innerHTML="EMAIL";
titre.innerHTML="ODEUR DE LA VIE";T1.innerHTML="La Vie est Belle L’Eau de Parfum est un parfum de Lancôme pour femmes et est sorti en 2012. Le parfum est doux-floral. La durée de conservation et le sillage sont supérieurs à la moyenne. Il est commercialisé par L’Oréal. Le nom signifie « La vie est belle ». Prononciation.";
T2.innerHTML="Black Opium est un parfum d’Yves Saint Laurent qui a un parfum sombre et mystérieux qui est destiné à incarner la femme moderne. C’est pour représenter les ténèbres de la féminité, et les ténèbres du cœur. Le parfum d’opium noir est commercialisé comme un « parfum alléchant » qui est « séduisant et addictif ».";
T3.innerHTML="  Description de Comme une Evidence d'Yves Rocher Type de parfum Né de la passion et du génie d’Annick Menardo, parfumeur de renom, Comme une Evidence est une eau de parfum pour femme qui s’inscrit dans la famille olfactive chyprée : « bergamote en tête, mousse de chêne et patchouli en fond, et un cœur floral en général peu présent, souvent rose ou jasmin » Intense mais élégant, cette eau de parfum pour femme résonne Comme une Evidence.";
T4.innerHTML=" est un parfum de Lancôme pour femmes et est sorti en 2012. Le parfum est doux-floral. La durée de conservation et le sillage sont supérieurs à la moyenne. Il est commercialisé par L’Oréal. Le nom signifie « La vie est belle ». Prononciation.";


}
}