function initNotentabelle() {
	var tabelle = $("#noten");
	tabelle.empty();
	tabelle.append($("<tr>")
		.append($("<th>Fach</th>"))
		.append($("<th>11.1</th>"))
		.append($("<th>11.2</th>"))
		.append($("<th>12.1</th>"))
		.append($("<th>12.2</th>"))
	);
	for (var i in faecher) {
		tabelle.append($("<tr>")
			.append($("<td>").text(faecher[i].name))
			.append($("<td>").append($("<input>")
				.data("fach", i).data("halbjahr", "11.1")))
			.append($("<td>").append($("<input>")
				.data("fach", i).data("halbjahr", "11.2")))
			.append($("<td>").append($("<input>")
				.data("fach", i).data("halbjahr", "12.1")))
			.append($("<td>").append($("<input>")
				.data("fach", i).data("halbjahr", "12.2")))
		);
	}
}

function loadNotentabelle() {
	$("#noten input").each(function () {
		var input = $(this);
		var note = noten[input.data("halbjahr")][input.data("fach")];
		if (typeof note == "number")
			input.val(String(note));
		else if (note === null)
			input.val("?");
		else
			input.val("");
	});
}

function saveNotentabelle() {
	for (var i in noten)
		noten[i] = {};

	$("#noten input").each(function () {
		var input = $(this);
		var note = input.val();
		if (note.length) {
			note = parseInt(note);
			if (isNaN(note))
				noten[input.data("halbjahr")][
					input.data("fach")] = null;
			else
				noten[input.data("halbjahr")][
					input.data("fach")] = note;
		}
	});
}

function formatNotentabelle() {
	$("#noten input").each(function () {
		var input = $(this);
		var note = input.val();
		if (note.length) {
			input.addClass("belegt");
			note = parseInt(note);
			if (isNaN(note))
				input.removeClass("bekannt");
			else
				input.addClass("bekannt");
		} else {
			input.removeClass("belegt");
		}
	});
}

function testeBelegungsverpflichtungen() {
	var tabelle = $("#belegungsfehler")
		.empty()
		.append($("<tr><th>Regel</th><th>erfüllt?</th></tr>"));

	for (var i in belegungsverpflichtungen) {
		var bv = belegungsverpflichtungen[i];
		var erfuellt = bv.testfunc() ? "ja" : "nein";
		tabelle.append($("<tr>")
			.append($("<td>").text(bv.text))
			.append($("<td>").text(erfuellt)));
	}
}

function refresh() {
	testeBelegungsverpflichtungen();
	bringeEin();
}

$(function() {
	initNotentabelle();
	loadNotentabelle();
	formatNotentabelle();
	refresh();

	$("#beurlaubungscb").change(function () {
		beurlaubung = this.checked;
		refresh();
	});

	$("#projektarbeitsnote").keyup(function () {
		projektarbeit = parseInt($(this).val());
		if (isNaN(projektarbeit))
			$(this).removeClass("belegt");
		else
			$(this).addClass("belegt");
		refresh();
	});

	$("#noten").keyup(function () {
		saveNotentabelle();
		formatNotentabelle();
		refresh();
	});
});

