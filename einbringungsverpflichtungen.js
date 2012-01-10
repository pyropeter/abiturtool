function bringeEin() {
	einbringungen = {};

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
	var marks = []
	var fort_fremd = ["spa", "spah", "lat", "lath", "eng", "fra", "frah"]
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
	c = 4
	for (var f in marks) {
		if (!einbringungen[marks[f].fach])
			einbringungen[marks[f].fach] = []
		einbringungen[marks[f].fach].push(marks[f].hj)
		if (c == 1)
			break
		c--
	}

	// 2 Kurse Kunst oder Musik oder Darstellendes Spiel
	var markss = []
	var kumuda = ["kun", "kunh", "mus", "mush", "dar"]
	for (var n in kumuda) {
		for (var h in noten) {
			if (typeof noten[h][kumuda[n]] != "undefined") {
				markss.push({
					note: noten[h][kumuda[n]],
					fach: kumuda[n],
					hj: h,
				})
			}
		}
	}
	markss.sort(function(a, b) {return b.note - a.note})
	c = 2
	for (var f in markss) {
		if (!einbringungen[markss[f].fach])
			einbringungen[markss[f].fach] = []
		einbringungen[markss[f].fach].push(markss[f].hj)
		if (c == 1)
			break
		c--
	}

	// 4 Kurse einer Naturwissenschaft oder 2 x 2 Kurse aus zwei Naturwissenschaften

}
