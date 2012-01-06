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

$(function() {
	initNotentabelle();
});

