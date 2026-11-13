/* Hannah Avila - site scripts
   1. Tabs: show/hide the three pages (#hello, #portfolio, #contact) using the URL hash.
   2. Experience ("the plot so far") and education ("skill tree") lists on the hello! tab.
   3. Brand wall on the portfolio tab: edit the G list to add or remove brands.
*/
var T=["hello","portfolio","contact"],$=function(s){return document.querySelector(s)};
var TT={hello:"hello!",portfolio:"portfolio",contact:"contact"};
function show(){var h=location.hash.slice(1);if(T.indexOf(h)<0)h="hello";document.body.dataset.tab=h;
document.querySelectorAll("[data-p]").forEach(function(e){e.classList.toggle("on",e.dataset.p===h)});
document.querySelectorAll(".tab").forEach(function(a){if(a.hash==="#"+h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
document.title="Hannah Avila – "+TT[h]}
window.addEventListener("hashchange",function(){show();scrollTo(0,0)});

var EXP=[
["2025.03 → now","Genero","Creative Operations Manager","LATAM and NA. Scale high-volume creator, CGI and FOOH production; run Meta Paid Partnerships, TikTok TTCX and Google Hackathons; workflow design, automation and creative testing."],
["2022.10 → 2025.03","Genero","Creative Strategist","TikTok for Havaianas, Oral-B, Nubank, Santander, Samsung, Uber and more; Meta programs for Coca-Cola Zero, Heineken, J&J, Ambev and Absolut; 95+ Google hackathons on Performance Max, Demand Gen and AI tools."],
["2021.10 → 2022.10","Global Shopper","Creative Project Manager","Innovation and Super Datas for Mondelēz, J&J, DAX Assets and beGreener.io, on Monday.com and Microsoft 365."],
["2021.04 → 2021.07","Integer / Outpromo","Digital Project Manager","Promo and digital campaigns for Mars, Snickers, Lysol, Adidas, Amstel, Henkel and NIVEA, with Agile, Kanban and Figma."],
["2019.01 → 2021.02","Children Films","Creative Project Manager and digital designer","Video pipelines and approvals on Frame.io; thumbnails and motion for Série Maníacos TV and Derivado Cast."],
["2017.05 → 2018.12","Mambo Jack Filmes","Visual designer",""],
["2016.10 → 2017.02","Gazpacho Films","Assistant director and producer","Assisted Arturo Querzoli on Marie Claire, Ferrero Rocher and fashion campaigns."],
["2012.08 → now","whataREC! studio","PMO, creative strategist, creative director","Scheduling from concept to launch, asset quality control and process improvement across teams, clients and freelancers."],
["2013.08 → 2016.03","Cultural Care Au Pair","Exchange program","Boston, New York and New Jersey."],
["2011.02 → 2013.08","Tigresse","Communication, design and e-commerce","E-commerce operations, social and email marketing, print and silk-screen product development."],
["2009 → 2010","Organiko TMK and Espaço de Moda Carolina Faggion","Design and marketing","Customer service, email, blog and social media."]];
$("#exp").innerHTML=EXP.map(function(r){return '<div class="row"><div class="d">['+r[0]+']</div><div><b>'+r[1]+'</b> <em>'+r[2]+'</em>'+(r[3]?'<p>'+r[3]+'</p>':'')+'</div></div>'}).join("");
var EDU=[["PUCRS","MBA in Marketing, Branding and Growth, 2025–2026"],["COGEAE – PUC SP","Extension in Visual Anthropology, 2012"],["FMU","Graphic Design, 2010–2012"],["Trampos Academy","Project management in the digital era, 2020"],["Operahaus","Cinematography and film production, 2016"],["University of East Anglia","Introduction to screenwriting, 2016"],["Fashion Institute of Technology","Trend research in New York, 2015–2016"],["Manhattan College","American pop culture, 2015"],["Boston Academy of English","ESL, 2013–2014"],["Certifications","Image consulting, online art therapy, digital media with Marcelo Tás"]];
$("#edu").innerHTML=EDU.map(function(r){return '<div><b>'+r[0]+'</b><span>'+r[1]+'</span></div>'}).join("");

var G=[
["tiktok","tiktok","Havaianas|Oral-B|Lux|Omo|Nubank|Santander|Bradesco|Samsung|Chevrolet|Ambev|Mercado Livre|Amazon Prime|Uber|Shopee|C&A|P&G|Aussie|Always|Head & Shoulders|Pantene|Tresemmé|Banco do Brasil|Vivo|Verisure|Dr. Oetker|Shell"],
["meta","meta","Garoto|Pagseguro|Johnson & Johnson|Elma Chips|Omo|Tang|Heineken|Ambev|Cielo|XP|Coca-Cola Zero|L’Oréal Revitalift|LATAM|Ritz|Tecate|BMG|Absolut|Surf|BlueChew|Clove|HerScan|Einstein Bros.|Doritos|Ruffles|Canva"],
["ugc","ugc","Méqui|Chivas Regal|Hering|Rico|Uber|Outback|Banco do Brasil|BMG|C&A|Shopee|Brasileirão|Inter|União|Gino|Anhanguera|Vita Be|Veloe|Canva"],
["google","google","Google Hackathon|Almap BBDO|MediaMonks|.Monks|Havas|iProspect|Young & Rubicam|Valtech|David|Africa|V4|Corebiz|Jotacom|Metrix|RedMas"],
["cf","children films","PepsiCo|Heineken|Eisenbahn|Banco BV|Banco Votorantim|Neutrox|Guabi Natural|Doritos|TETO|ONU ODS|Jornal Joca|Série Maníacos|Derivado Cast"],
["gz","gazpacho","Marie Claire|Ferrero Rocher|Squeem|Fatal Surf"]];
$("#wall").innerHTML=G.map(function(g){return '<div class="grp g-'+g[0]+'"><h3><span>'+g[1]+'</span></h3><p class="brands">'+g[2].split("|").map(function(b){return '<span>'+b+'</span>'}).join("")+'</p></div>'}).join("");

show();