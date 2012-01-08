var Fach = function(name, ws, aufgabenfeld, hf) {
	this.name = name;
	this.ws = ws;
	this.aufgabenfeld = aufgabenfeld;
	this.hf = hf;
}

var faecher = {
	// Kernfächer
	deu: new Fach("Deutsch", 4, 1, false),
	eng: new Fach("Englisch", 4, 1, false),
	mat: new Fach("Mathematik", 4, 3, false),
	
	// Aufgabenfeld 1
	kun: new Fach("Kunst", 2, 1, false),
	kunh: new Fach("Kunst (Hauptfach)", 4, 1, true),
	mus: new Fach("Musik", 3, 1, false),
	mush: new Fach("Musik (Hauptkurs)", 4, 1, true),
	fra: new Fach("Französisch", 3, 1, false),
	frah: new Fach("Französisch (Hauptfach)", 4, 1, true),
	spa: new Fach("Spanisch", 3, 1, false),
	spah: new Fach("Spanisch (Hauptfach)", 4, 1, true),
	lat: new Fach("Latein", 3, 1, false),
	lath: new Fach("Latein (Hauptfach)", 4, 1, true),
	dar: new Fach("Darstellendes Spiel", 3, 1, false),
	
	// Aufgabenfeld 2
	ges: new Fach("Geschichte", 2, 2, false),
	gesh: new Fach("Geschichte", 4, 2, true),
	rel: new Fach("Religion", 2, 2, false),
	relh: new Fach("Religion (Hauptfach)", 4, 2, true),
	geo: new Fach("Geographie", 2, 2, false),
	geoh: new Fach("Geographie (Hauptfach)", 4, 2, true),
	pol: new Fach("Politik", 2, 2, false),
	polh: new Fach("Politik (Hauptfach)", 4, 2, true),
	wir: new Fach("Wirtschaft", 2, 2, false),
	wirh: new Fach("Wirtschaft (Hauptfach)", 4, 2, true),
	
	// Aufgabenfeld 3
	phy: new Fach("Physik", 2, 3, false),
	phyh: new Fach("Physik (Hauptfach)", 4, 3, true),
	che: new Fach("Chemie", 2, 3, false),
	cheh: new Fach("Chemie (Hauptfach)", 4, 3, true),
	bio: new Fach("Biologie", 2, 3, false),
	bioh: new Fach("Biologie (Hauptfach)", 4, 3, true),
	inf: new Fach("Informatik", 2, 3, false),
	infh: new Fach("Informatik (Hauptfach)", 4, 3, true),
	
	// Undef
	sporti: new Fach("Sport (individual)", 4, 0, false),
	sportg: new Fach("Sport (gruppe)", 4, 0, false),
}

var aufgabenfelder = {
	0: "Undefiniertes",
	1: "Sprachlich-literarisch-künstlerisches",
	2: "Gesellschaftswissenschaftliches",
	3: "Mathematisch-naturwissenschaftlich-technisches",
}

var hauptfaecherleisten = [
	["kunh","mush","gesh","relh","phyh","bioh"],
	["polh","geoh","wirh","relh","infh","bioh"],
	["frah","lath","spah","gesh","wirh","cheh"],
];

