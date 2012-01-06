var Fach = function(name, ws, aufgabenfeld, hf) {
	this.name = name;
	this.ws = ws;
	this.aufgabenfeld = aufgabenfeld;
	this.hf = hf;
}

var faecher = {
	// Kernfächer
	deu: Fach("Deutsch", 4, 1, true),
	eng: Fach("Englisch", 4, 1, true),
	mat: Fach("Mathematik", 4, 3, true),
	
	// Aufgabenfeld 1
	kun: Fach("Kunst", 2, 1, false),
	kunh: Fach("Kunst (Hauptfach)", 4, 1, true),
	mus: Fach("Musik", 3, 1, false),
	mush: Fach("Musik (Hauptkurs)", 4, 1, true),
	fra: Fach("Französisch", 3, 1, false),
	frah: Fach("Französisch (Hauptfach)", 4, 1, true),
	spa: Fach("Spanisch", 3, 1, false),
	spah: Fach("Spanisch (Hauptfach)", 4, 1, true),
	lat: Fach("Latein", 3, 1, false),
	lath: Fach("Latein (Hauptfach)", 4, 1, true),
	dar: Fach("Darstellendes Spiel", 3, 1, false),
	
	// Aufgabenfeld 2
	ges: Fach("Geschichte", 2, 2, false),
	gesh: Fach("Geschichte", 4, 2, true),
	rel: Fach("Religion", 2, 2, false),
	relh: Fach("Religion (Hauptfach)", 4, 2, true),
	geo: Fach("Geographie", 2, 2, false),
	geoh: Fach("Geographie (Hauptfach)", 4, 2, true),
	pol: Fach("Politik", 2, 2, false),
	polh: Fach("Politik (Hauptfach)", 4, 2, true),
	wir: Fach("Wirtschaft", 2, 2, false),
	wirh: Fach("Wirtschaft (Hauptfach)", 4, 2, true),
	
	// Aufgabenfeld 3
	phy: Fach("Physik", 2, ??, false),
	phyh: Fach("Physik (Hauptfach)", 4, ??, true),
	che: Fach("Chemie", 2, 3, false),
	cheh: Fach("Chemie (Hauptfach)", 4, 3, true)
	bio: Fach("Biologie", 2, 3, false),
	bioh: Fach("Biologie (Hauptfach)", 4, 3, true),
	inf: Fach("Informatik", 2, 3, false),
	infh: Fach("Informatik (Hauptfach)", 4, 3, true),
	
	// Undef
	sporti: Fach("Sport (individual)", 4, 0, false),
	sportg: Fach("Sport (gruppe)", 4, 0, false),
}

var aufgabenfelder = {
	0: "Undefiniertes",
	1: "Sprachlich-literarisch-künstlerisches",
	2: "Gesellschaftswissenschaftliches",
	3: "Mathematisch-naturwissenschaftlich-technisches",
}

