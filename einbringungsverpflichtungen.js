var einbringungen = {};

//4 Kurse Deutsch und Mathe:
einbringungen["deu"] = ["11.1", "11.2", "12.1", "12.2"]
einbringungen["mat"] = ["11.1", "11.2", "12.1", "12.2"]

// Die besten zwei Kurse Geschichte:
var geschichtsnoten = getMarks("ges").concat(getMarks("gesh"))
geschichtsnoten.sort(function(a, b) {return b - a});
console.log(geschichtsnoten)
geschichtsnoten = geschichtsnoten.slice(0,2);
console.log(geschichtsnoten)
for (var i in geschichtsnoten) {
	for (var j in noten) {
		console.log(noten[j]["ges"])
		console.log(geschichtsnoten[i])
		if (noten[j]["ges"] == geschichtsnoten[i]) {
			if (!einbringungen["ges"])
					einbringungen["ges"] = [];
			einbringungen["ges"].push(geschichtsnoten[i]);
			break;
		} else if (noten[j]["gesh"] == geschichtsnoten[i]) {
			if (!einbringungen["gesh"])
				einbringungen["gesh"] = [];
			einbringungen["gesh"].push(geschichtsnoten[i]);
			break;
		} else {
			throw ("up")
		}
	}
}

// 4 Kurse fortgesetze Fremdsprache
//marks = []
//fort_fremd = ["spa", "spah", "lat", "lath", "eng", "fra", "frah"]
//for (var n in fort_fremd) {
//	marks.push(getMarks(fort_fremd[n]))
//}
//marks.sort(function(a, b) {return b - a})
