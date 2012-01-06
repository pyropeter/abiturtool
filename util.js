function hasAttr(list, attr) {
	return typeof(list[attr]) != "undefined";
}

function hasOneAttr(list, attrlist) {
	for (var i in attrlist) {
		if (hasAttr(list, attrlist[i]))
			return true;
	}
	return false;
}

function getMarks(kurs, hj) {
	nots = []
	for (var i in noten) {
		var halbjahr = noten[i]
		if (hj != null) {
			for (var j in hj) {
				if (hj[j] == halbjahr) {
					nots.push(halbjahr[kurs])
				}
			}
		}
		else {
			for (var k in halbjahr) {
				if (k == kurs) {
					nots.push(halbjahr[k])
				}
			}
		}
	}
	return nots
}

