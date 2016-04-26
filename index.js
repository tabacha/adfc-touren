var QueryString = function () {
    // This function is anonymous, is executed immediately and 
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i<vars.length; i++) {
	var pair = vars[i].split("=");
        // If first entry with this name
	if (typeof query_string[pair[0]] === "undefined") {
	    query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
	} else if (typeof query_string[pair[0]] === "string") {
	    var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
	    query_string[pair[0]] = arr;
            // If third or later entry with this name
	} else {
	    query_string[pair[0]].push(decodeURIComponent(pair[1]));
	}
    } 
    return query_string;
}();

function toLengthStr(len) {
    return len.toFixed(1).replace(".",",")
}
var bhf= {
    'A-Kaltenkirchen':{lat: 53.8346802 ,lon: 9.9661067},
    'Bad Oldesloe':{lat: 53.8052465 ,lon: 10.3822923},
    'Bhf. Büsum':{lat: 54.13379,lon: 8.86580}, 
    'Bremen Hbf':{lat: 53.08413,lon: 8.81535}, 
    'Finkenwerder Fähre':{lat: 53.53625,lon: 9.87855},
    'RE-Elmshorn':{lat: 53.7542251,lon: 9.6592636},
    'RE-Buchholz i.d. N.':{lat: 53.32468,lon: 9.87716}, 
    'RE-Sprötze':{lat: 53.30944,lon: 9.81216}, 
    'S-Aumühle':{lat: 53.529955,lon: 10.3144857},
    'S-Bergedorf':{lat: 53.4899751,lon: 10.2063722},
    'S-Hamburg Airport':{lat: 53.6326466,lon: 10.0066778},
    'S-Harburg':{lat: 53.45694,lon: 9.9912508},
    'S-Iserbrook':{lat:53.576603, lon: 9.814151},
    'S-Nettelnburg':{lat:53.487766, lon: 10.181392 },
    'S-Neugraben':{lat: 53.4742238,lon: 9.8516775},
    'S-Neuwiedenthal':{lat: 53.4730401,lon: 9.8774836},
    'S-Pinneberg':{lat: 53.6545871,lon: 9.7988572},
    'S-Poppenbüttel':{lat: 53.6521774,lon: 10.0940214},
    'S-Stade':{lat: 53.5960704,lon: 9.4775887},
    'S-Wedel':{lat: 53.5818446,lon: 9.7049588},
    'U-Ahrensburg West':{lat: 53.6647704,lon: 10.2188987},
    'U-Großhansdorf':{lat: 53.6627288,lon: 10.2868177},
    'U-Hagendeel':{lat: 53.60342,lon: 9.94510}, 
    'U-Kiwittsmoor':{lat: 53.6749843,lon: 10.0161807},
    'U-Lattenkamp':{lat: 53.599769,lon: 9.994644},
    'U-Norderstedt-Mitte':{lat: 53.70743,lon: 9.99271}, 
    'U-Ohlstedt':{lat: 53.6946009,lon: 10.13718},
    'S-Berliner Tor':{lat: 53.5526719,lon: 10.0248733},
    'U-Berliner Tor':{lat: 53.553539, lon:10.023929 },
    'S-Landungsbrücken':{lat: 53.54603,lon: 9.97081}, 
    'U-Landungsbrücken':{lat: 53.54573,lon: 9.97169}, 
    'U-Volksdorf':{lat: 53.650649,lon: 10.1631555},
    'U-Wandsbek Markt':{lat: 53.5716636,lon: 10.0667414},
}

var touren=[{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/tarpenbek-und-alster/',
    title: 'Tarpenbek und Alster',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Tarpenbek_und_Alster.gpx',
    basename: 'Tarpenbek_und_Alster.gpx',
    color: '#c83ff5',
    len: 28.467,
    start: 'S-Hamburg Airport',
    ziel: 'U-Ohlstedt',
    dashArray: [5, 10],
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/hafenerlebnistour/',
    title: 'Hafenerlebnistour',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Hafenerlebnistour.gpx',
    basename: 'Hafenerlebnistour.gpx',
    color: '#430f6a',
    len: 33.027,
    start: 'U/S-Landungsbrücken',
    ziel: 'Finkenwerder Fähre',
    dashArray: [10, 5],
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/kleine-kaffeetour-durchs-alte-land/',
    title: 'Kleine Kaffeetour durchs Alte Land',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Kleine_Kaffetour_durchs_Alte_Land.gpx',
    basename: 'Kleine_Kaffetour_durchs_Alte_Land.gpx',
    color: '#cf62a6',
    len: 39.193,
    start: 'S-Neugraben',
    ziel: 'S-Neugraben',
    dashArray: [5, 5],
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/entlang-der-akn-nach-kaltenkirchen/',
    title: 'Entlang der AKN nach Kaltenkirchen',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Entlg._der_AKN_nach_Kaltenkirchen.gpx',
    basename: 'Entlg._der_AKN_nach_Kaltenkirchen.gpx',
    color: '#27bc3c',
    len: 42.639,
    dashArray: [5, 1],
    start: 'U-Lattenkamp',
    ziel: 'A-Kaltenkirchen',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/horner-schnecke/',
    title: 'Horner Schnecke',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Horner_Schnecke.gpx',
    basename: 'Horner_Schnecke.gpx',
    color: '#fca481',
    len: 44.853,
    dashArray: [10, 1],
    start: 'U-Wandsbek Markt',
    ziel: 'U/S-Berliner Tor',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/poptownrunde/',
    title: 'Poptownrunde',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Poptownrund.gpx',
    basename: 'Poptownrund.gpx',
    color: '#44fa93',
    len: 44.992,
    dashArray: [2, 1],
    start: 'S-Poppenbüttel',
    ziel: 'S-Poppenbüttel',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/von-neugraben-nach-stade/',
    title: 'Von Neugraben nach Stade',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Von_Neugraben_nach_Stade.gpx',
    basename: 'Von_Neugraben_nach_Stade.gpx',
    color: '#aa32e0',
    len: 45.44,
    dashArray: [10, 1],
    start: 'S-Neugraben',
    ziel: 'S-Stade',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/rund-um-bad-oldesloe/',
    title: 'Rund um Bad Oldesloe',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Rund_um_Bad_Oldesloe.gpx',
    basename: 'Rund_um_Bad_Oldesloe.gpx',
    color: '#a9a166',
    len: 45.456,
    dashArray: [5, 5],
    start: 'Bad Oldesloe',
    ziel: 'Bad Oldesloe',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/rund-um-bargteheide/',
    title: 'Rund um Bargteheide',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Rund_um_Bargteheide.gpx',
    basename: 'Rund_um_Bargteheide.gpx',
    color: '#3a07a3',
    len: 46.704,
    dashArray: [7, 2],
    start: 'U-Großhansdorf',
    ziel: 'U-Ahrensburg West',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/von-sproetze-durch-die-nordheide/',
    title: 'Von Sprötze durch die Nordheide',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Von_Sproetze_durch_die_Nordheide.gpx',
    basename: 'Von_Sproetze_durch_die_Nordheide.gpx',
    color: '#467e52',
    len: 47.282,
    dashArray: [10, 5],
    start: 'RE-Sprötze',
    ziel: 'RE-Buchholz i.d. N.',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/uebern-berg-nach-appelbeck-am-see/',
    title: 'Über\'n Berg nach Appelbeck am See',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Appelbeck_am_See.gpx',
    basename: 'Appelbeck_am_See.gpx',
    color: '#529035',
    len: 47.444,
    dashArray: [5, 5],
    start: 'S-Neuwiedenthal',
    ziel: 'S-Neugraben',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/in-und-um-den-sachsenwald/',
    title: 'In und um den Sachsenwald',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/In_und_um_den_Sachsenwald.gpx',
    basename: 'In_und_um_den_Sachsenwald.gpx',
    color: '#ce3bd7',
    len: 49.477,
    dashArray: [9, 1],
    start: 'S-Aumühle',
    ziel: 'S-Aumühle',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/nordost-rundtour/',
    title: 'Nordost-Rundtour',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Nordost-Rundtour.gpx',
    basename: 'Nordost-Rundtour.gpx',
    color: '#87c5d9',
    len: 49.745,
    dashArray: [7, 2],
    start: 'U-Hagendeel',
    ziel: 'U-Hagendeel',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/zum-himmelmoor/',
    title: 'Zum Himmelmoor',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Zum_Himmelmoor.gpx',
    basename: 'Zum_Himmelmoor.gpx',
    color: '#05280f',
    len: 49.901,
    dashArray: [5, 1],
    start: 'U-Norderstedt-Mitte',
    ziel: 'U-Norderstedt-Mitte',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/oever-de-elv/',
    title: 'Oever de Elv',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Oever_de_Elv_.gpx',
    basename: 'Oever_de_Elv_.gpx',
    color: '#480587',
    len: 52.488,
    dashArray: [2, 2],
    start: 'S-Bergedorf',
    ziel: 'S-Bergedorf',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/drei-seen-in-schleswig-holstein/',
    title: 'Drei Seen in Schleswig-Holstein',
    gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Drei_Seen_in_SH.gpx',
    basename: 'Drei_Seen_in_SH.gpx',
    color: '#4d1c16',
    len: 53.485,
    dashArray: [3, 3],
    start: 'U-Ahrensburg West',
    ziel: 'S-Poppenbüttel',
},{
    descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/zur-hogendiekbruecke-bei-steinkirchen/',
 title: 'Zur Hogendiekbruecke bei Steinkirchen',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Zur_Hogendiekbruecke.gpx',
 basename: 'Zur_Hogendiekbruecke.gpx',
 color: '#9656b5',
 len: 54.918,
 dashArray: [5, 1],
 start: 'S-Neugraben',
 ziel: 'Finkenwerder Fähre',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/nach-venezia/',
 title: 'Nach Venezia',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Nach_Venezia.gpx',
 basename: 'Nach_Venezia.gpx',
 color: '#260b6d',
 len: 56.617,
 dashArray: [10, 5],
 start: 'U-Volksdorf',
 ziel: 'S-Poppenbüttel',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/kreuz-und-quer-durch-die-wedeler-marsch/',
 title: 'Kreuz und quer durch die Wedeler Marsch',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Kreuz_und_quer_durch_die_Wedeler_Marsch.gpx',
 basename: 'Kreuz_und_quer_durch_die_Wedeler_Marsch.gpx',
 color: '#926d27',
 len: 56.772,
 dashArray: [11, 2],
 start: 'S-Wedel',
 ziel: 'S-Iserbrook',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/alter-elbtunnel-zollenspieker/',
 title: 'Alter Elbtunnel - Zollenspieker',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Alter_Elbtunnel-Zollenspieker.gpx',
 basename: 'Alter_Elbtunnel-Zollenspieker.gpx',
 color: '#221252',
 len: 57.194,
 dashArray: [7, 2],
 start: 'U/S-Landungsbrücken',
 ziel: 'U/S-Landungsbrücken',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/baumpark-und-kalkgrube/',
 title: 'Baumpark und Kalkgrube',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Baumpark_und_Kalkgrube.gpx',
 basename: 'Baumpark_und_Kalkgrube.gpx',
 color: '#11e748',
 len: 57.703,
 dashArray: [5, 5],
 start: 'U-Hagendeel',
 ziel: 'S-Pinneberg',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/durch-marsch-und-geest-in-die-harburger-berge-tour-11/',
 title: 'Durch Marsch+Geest in die Harburger Berge',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Durch_Marsch_und_Geest.gpx',
 basename: 'Durch_Marsch_und_Geest.gpx',
 color: '#160268',
 len: 58.162,
 dashArray: [5, 1],
 start: 'S-Neugraben',
 ziel: 'S-Neugraben',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/festung-grauerort/',
 title: 'Festung Grauerort',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Festung_Grauerort.gpx',
 basename: 'Festung_Grauerort.gpx',
 color: '#52f2ff',
 len: 59.683,
 dashArray: [10, 5],
 start: 'S-Neuwiedenthal',
 ziel: 'S-Stade',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/obstbaumlehrpfad/',
 title: 'Obstbaumlehrpfad',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Obstbaumpfad.gpx',
 basename: 'Obstbaumpfad.gpx',
 color: '#799ac1',
 len: 62.236,
 dashArray: [7, 5],
 start: 'U-Kiwittsmoor',
 ziel: 'U-Kiwittsmoor',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/zwischen-krueckau-und-pinnau/',
 title: 'Zwischen Krückau und Pinnau',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Zwischen_Krueckau_und_Pinnau.gpx',
 basename: 'Zwischen_Krueckau_und_Pinnau.gpx',
 color: '#2630b1',
 len: 63.109,
 dashArray: [2, 5],
 start: ['S-Pinneberg','RE-Elmshorn'],
 ziel: 'S-Pinneberg',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/richtung-norden/',
 title: 'Richtung Norden',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Richtung_Norden.gpx',
 basename: 'Richtung_Norden.gpx',
 color: '#3ca41b',
 len: 63.774,
 dashArray: [3, 5],
 start: 'S-Poppenbüttel',
 ziel: 'S-Poppenbüttel',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/vierlaender-und-winsener-marsch/',
 title: 'Vierländer und Winsener Marsch',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Vierlaender_und_Winsener_Marsch.gpx',
 basename: 'Vierlaender_und_Winsener_Marsch.gpx',
 color: '#a8b791',
 len: 66.659,
 dashArray: [9, 1],
 start: 'S-Nettelnburg',
 ziel: 'S-Nettelnburg',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/stadt-land-fluss-berg-und-see/',
 title: 'Stadt-Land-Fluss-Berg und See',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/StaLaFluBeSe.gpx',
 basename: 'StaLaFluBeSe.gpx',
 color: '#d2c666',
 len: 70.029,
 dashArray: [3, 3],
 start: 'S-Harburg',
 ziel: 'S-Harburg',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/grosse-kaffeetour-durchs-alte-land/',
 title: 'Grosse Kaffeetour durchs Alte Land',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Grosse_Kaffeetour_durchs_Alte_Land.gpx',
 basename: 'Grosse_Kaffeetour_durchs_Alte_Land.gpx',
 color: '#0a248c',
 len: 78.968,
 dashArray: [5, 5],
 start: 'S-Neugraben',
 ziel: 'S-Neugraben',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/kurz-lang-43-oder-86-km/',
 title: 'kurz - lang, 43 oder 86 km',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/kurz-lang_43_oder_86_km.gpx',
 basename: 'kurz-lang_43_oder_86_km.gpx',
 color: '#4b6fe1',
 len: 86.855,
 dashArray: [10, 5],
 start: 'Finkenwerder Fähre',
 ziel: ['S-Neugraben','S-Stade'],
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/staedteverb-hamburg-bremen/',
 title: 'Städteverb. Hamburg-Bremen',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Hamburg-Bremen.gpx',
 basename: 'Hamburg-Bremen.gpx',
 color: '#02015d',
 len: 104.063,
 dashArray: [1, 2],
 start: 'S-Neugraben',
 ziel: 'Bremen Hbf',
},
{
 descrUrl: 'http://hamburg.adfc.de/freizeit/gps/tourendetailseiten/von-wedel-nach-buesum/',
 title: 'Von Wedel nach Büsum',
 gpx: 'http://hamburg.adfc.de/fileadmin/redaktion/Freizeit/GPS/GPX-Dateien/Von_Wedel_nach_Buesum.gpx',
 basename: 'Von_Wedel_nach_Buesum.gpx',
 color: '#d822ab',
 len: 117.392,
 dashArray: [4, 2],
 start: 'S-Wedel',
 ziel: 'Bhf. Büsum',
}]
var map = L.map('map').setView([53.55, 10], 9);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, Map Tiles: CartoDB ',
    id: 'carto'
}).addTo(map);

function drawTouren () {
    var layers = {};
    $('#touren').empty();
    var tbody=$('<tbody>');
    $('#touren').append(
        $('<thead>').append(
            $('<th>').text('Anz.'),
            $('<th>').text('Legende'),
            $('<th>').text('km'),
            $('<th>').text('Name'),
            $('<th>').text('Start/Ziel')
	),
	tbody);
    
    touren.forEach(function(tour){
        var checkbox=$('<input type="checkbox" checked="checked">');
        var svg=$('<svg width="60" height="15"><line stroke-dasharray="'+tour.dashArray+'" x1="10" y1="10" x2="100" y2="10" style="stroke:'+tour.color+';stroke-width:2;"></style></svg>');
        var tourTitle=$('<span>');
        if (typeof(tour.start)==='object') {
            tour.start=tour.start.join("/");
        }
        if (typeof(tour.ziel)==='object') {
            tour.ziel=tour.ziel.join("/");
        }
	
        if (tour.start) {
            if (tour.start === tour.ziel) {
   		tourTitle.text(' '+tour.start).prepend($('<i class="fa fa-undo">'));
            } else {
   		tourTitle.append(tour.start+' ',
                                 $('<i class="fa fa-arrow-right">'),
                                 ' '+tour.ziel);
            }
        }
        var li=$('<tr>').append(
            $('<td>').append(checkbox),
	    $('<td>').append(svg),
            $('<td>').text(toLengthStr(tour.len)),
 	    $('<td>').append($('<a>',{href:tour.descrUrl}).text(tour.title)),
 	    $('<td>').append(tourTitle)
        );
	tbody.append(li);
	var popupText='<a href="'+tour.descrUrl+'">'+tour.title+'</a><div>'+toLengthStr(tour.len)+' km</div>';
	if (tour.start) {
            if (tour.start === tour.ziel) {
   		popupText+='<div><i class="fa fa-undo"/> '+tour.start+'</div>';
            } else {
   		popupText+='<div>'+tour.start+' <i class="fa fa-arrow-right"/> '+tour.ziel+'</div>';
            }
	}
        var dashArray=[];
        var width=2;
        if (QueryString.lineWidth) {
            width=parseInt(QueryString.lineWidth);
        }
        for (var i = 0; i < tour.dashArray.length; i++) {
            dashArray[i]=tour.dashArray[i]*width;
        }
        var layer=new L.GPX('gpx/'+tour.basename, 
			    {async: true, 
			     gpx_options: { 
				 parseElements: ['track']
			     },
			     marker_options: {
				 startIconUrl: null,
				 endIconUrl: null,
			     },
			     polyline_options: {
				 color: tour.color,
				 weight: width,
				 dashArray: dashArray
			     }
			    }).addTo(map).bindPopup(popupText).on('mouseover',function() {
				li.css('background-color','#eeeeee');
				var pos=li.offset().top-$("#tourenDiv").offset().top;
				$("#tourenDiv").animate({scrollTop:pos});
				layer.setStyle({'weight': (width+4)}); //+1
			    }).on('mouseout',function() {
				li.css('background-color','white');
				layer.setStyle({'weight':width});
			    });
        layers['<b style="color:'+tour.color+'">'+tour.title+'</b> '+toLengthStr(tour.len)+' km']=layer;
        layer.setStyle({'weight':width});
        li.on('mouseover', function () {
	    li.css('background-color','#eeeeee');
            layer.setStyle({'weight': (width+4)}); //+1
	    // layer.openPopup();
        });
        li.on('mouseout', function () {
            li.css('background-color','white');
            layer.setStyle({'weight':width});
	    // layer.closePopup();
        });
        checkbox.change(function(e) {
            if ($(this).is(':checked')) {
                layer.addTo(map);
            } else {
                layer.removeFrom(map);
            }
        });
    }); // forEach
    //L.control.layers(null, layers).addTo(map);
}
drawTouren();
var sIcon= L.icon({
    iconUrl:'icons/S-Bahn-Logo.svg',
    iconSize: [10, 10],
});
var uIcon= L.icon({
    iconUrl:'icons/U-Bahn.svg',
    iconSize: [10, 10],
});
var aIcon= L.icon({
    iconUrl:'icons/AKN-Logo.svg',
    iconSize: [10, 10],
});
var bIcon= L.icon({
    iconUrl:'icons/Bahn.svg',
    iconSize: [15, 15],
});
var fIcon= L.icon({
    iconUrl:'icons/Faehre.svg',
    iconSize: [20, 30],
});
for (var name in bhf) {
    if (bhf.hasOwnProperty(name)) {
        var icn=bIcon;
        if (name[0] === 'S') {
            icn=sIcon;
        } else if (name[0] === 'U') {
            icn=uIcon;
        } else if (name[0] === 'A') {
            icn=aIcon;
        } else if (name === 'Finkenwerder Fähre') {
            icn=fIcon;
        }
	L.marker([bhf[name].lat,bhf[name].lon], {icon: icn}).addTo(map).bindPopup(name);
    };
};
var mapSize=50;
if (QueryString.mapSize) {
    mapSize=parseInt(QueryString.mapSize);
}
$(window).on("resize", function() {
    $("#map").height($(window).height()*mapSize/100);
    $("#tourenDiv").height($(window).height()*(98-mapSize)/100);
    map.invalidateSize();
}).trigger("resize");
 
