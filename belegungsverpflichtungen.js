var Regel = function (text, testfunc) {
	this.text = text;
	this.testfunc = testfunc;
}

var belegungsverpflichtungen = [
	Regel("In der Qualifikationsphase dürfen keine zusätzlichen Fächer angewählt werden", function() {
		var gewaehlt = [];
		for (var fach in noten["11.1"]) {
			gewaehlt.push(fach);
		}
		for (var i in noten) {
			var halbjahr = noten[i];
			var gewaehltNeu = [];
			for (var fach in halbjahr) {
				if (gewaehlt.indexOf(fach) == -1) {
					return false;
				}
				gewaehltNeu.push(fach);
			}
			gewaehlt = gewaehltNeu;
		}
		return true;
	}),
	Regel("In allen Halbjahren bis zum Abitur sind durchgehend die Fächer Deutsch und Mathematik und Sport und eine fortgesetzte Fremdsprache und eine Naturwissenschaften zu belegen.", function() {
		for (var i in noten) {
			var halbjahr = noten[i];
			if (hasAttr(halbjahr, "deu") && 
				hasAttr(halbjahr, "mat") &&
				hasOneAttr(halbjahr, ["sportg", "sporti"]) &&
				hasOneAttr(halbjahr, ["eng", "lat", "lath", "spa", "spah", "fra", "frah"]) &&
				hasOneAttr(halbjahr, ["che", "cheh", "phy", "phyh", "bio", "bioh", "inf", "infh"])) {
				continue;
			} else {
				return false;
			}
		}
		return true;
	}),
	Regel("Bis zum Ende des Halbjahres 12/2 muss das Fach Kunst oder das Fach Musik belegt werden, wenn das Fach schon ab 11/1 belegt wird. Es müssen in der Oberstufe 4 Folgekurse belegt werden. Wer für 1⁄2 Jahr in 10 bzw.11 beurlaubt war muss also bis einschließlich 12/1 bzw.13/1 Kunst oder Musik belegen.", function() {
		if (beurlaubung)
			return false;
		
		if ( hasOneAttr(noten["11.1"], ["mus", "kun"]) &&
			 hasOneAttr(noten["11.2"], ["mus", "kun"])
		   ) 
		{
			   return BLAAAA
		}
	}),
	Regel("Bis zum Ende des Halbjahres 11/2 bzw. 12/2 muss das Fach Religion belegt werden.", function() {
		if (hasOneAttr(noten["11.1"], ["rel", "relh"])
			&& hasOneAttr(noten["11.2"], ["rel", "relh"])) {
			return true;
		}
		return false;
	}),
	Regel("In mindesten 2 Folgehalbjahren (11/1 bis 11/2 bzw. 12/1 und 12/2) muss Geschichte belegt werden.", function() {
		if (hasOneAttr(noten["11.1"], ["ges", "gesh"])
			&& hasOneAttr(noten["11.2"], ["ges", "gesh"])) {
			return true;
		}
		if (hasOneAttr(noten["12.1"], ["ges", "gesh"])
			&& hasOneAttr(noten["12.2"], ["ges", "gesh"])) {
			return true;
		}
		return false;
	}),
	Regel("Ein Fach im Aufgabenfeld II (gesellschaftswissenschaftliches Aufgabenfeld) muss durchgängig in allen Halbjahren bis zum Abitur belegt werden.", function() {
		for (var fach in noten["12.2"]) {
			if (faecher[fach].aufgabenfeld == 2)
				return true;
		}
		return false;
	}),
	Regel("Mindestens 9 Kurse müssen pro Halbjahr belegt werden (ÖG).", function() {
		for (var i in noten) {
			var halbjahr = noten[i]
			var count = 0
			for (var f in halbjahr) {
				if (halbjahr.hasOwnProperty(f)) count++;
			}
			if (count >= 9) {
				continue;
			} else {
				return false;
			}
		}
		return true;
	}),
	Regel("In der Hauptphase müssen im Aufgabenfeld I mindestens 28, im Aufgabenfeld II mindestens 16 und im Aufgabenfeld III mindestens 22 Halbjahreswochenstunden belegt worden sein. Insgesamt mindestens 124 HalbjahresWoStd.", function() {
		var einsC = 0;
		var zweiC = 0;
		var dreiC = 0;
		for (var i in noten) {
			var halbjahr = noten[i];
			for (var f in halbjahr) {
				aufgf = faecher[f].aufgabenfeld
				if (aufgf == 1) einsC++
				if (aufgf == 2) zweiC++
				if (aufgf == 3) dreiC++
			}
		}
		var insgesamt = einsC + zweiC + dreiC
		insgesamt += 8 + 2; // Sportkurse + Selbstlernzeit
		
		if (einsC >= 28 &&
				zweiC >= 16 &&
				dreiC >= 22 &&
				insgesamt >= 124) {
			return true
		}
		return false
	}),
]

