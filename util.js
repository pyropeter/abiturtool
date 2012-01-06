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
