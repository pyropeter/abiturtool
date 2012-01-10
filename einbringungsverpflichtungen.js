var einbringungen = {};

//4 Kurse Deutsch und Mathe:
einbringungen["deu"] = ["11.1", "11.2", "12.1", "12.2"]
einbringungen["mat"] = ["11.1", "11.2", "12.1", "12.2"]

// Die besten zwei Kurse Geschichte:
var geschichtsnoten = getMarks("ges").concat(getMarks("gesh"))
geschichtsnoten.sort(function(a, b) {return b - a});
geschichtsnoten = geschichtsnoten.slice(0,2);
for (var i in geschichtsnoten) {
	for (var j in noten) {
		if (noten[j]["ges"] == geschichtsnoten[i]) {
			if (!einbringungen["ges"])
					einbringungen["ges"] = [];
			einbringungen["ges"].push(j);
			break;
		} else if (noten[j]["gesh"] == geschichtsnoten[i]) {
			if (!einbringungen["gesh"])
				einbringungen["gesh"] = [];
			einbringungen["gesh"].push(j);
			break;
		}
	}
}

// 4 Kurse fortgesetze Fremdsprache
marks = []
fort_fremd = ["spa", "spah", "lat", "lath", "eng", "fra", "frah"]
for (var n in fort_fremd) {
	for (var h in noten) {
		if (typeof noten[h][fort_fremd[n]] != "undefined") {
			marks.push({
				note: noten[h][fort_fremd[n]],
				fach: fort_fremd[n],
				hj: h,
			})
		}
	}
}
marks.sort(function(a, b) {return b.note - a.note})
c = 3
for (var f in marks) {
	if (!einbringungen[marks[f].fach])
		einbringungen[marks[f].fach] = []
	einbringungen[marks[f].fach].push(marks[f].hj)
	if (c == 0)
		break
	c--
}
