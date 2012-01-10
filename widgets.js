
var MultiSelect = function (node, varname, count, choices) {
	this.node = node;
	this.varname = varname;
	this.count = count;
	this.choices = choices;

	// init
	window[this.varname] = [];
	for (var i = 0; i < this.count; i++) {
		this.newEmptySelect();
	}
	this.onchange();

	var obj = this;
	node.change(function () {
		obj.onchange();
	});
}
MultiSelect.prototype.onchange = function () {
	window[this.varname] = [];

	// extract selected values
	// delete all options except the selected and the __NULL__ option
	// delete all unused (__NULL__ selected) selects except the last
	var obj = this;
	var nullAtEnd = false;
	var selects = this.node.children();
	selects.each(function (i) {
		var value = $(this).val();
		if (value != "__NULL__") {
			window[obj.varname].push(value);
		} else if (this.count) {
			if (i == selects.length - 1) {
				nullAtEnd = true;
			} else {
				$(this).remove();
				return true;
			}
		}
		$(this).children('[value!="__NULL__"]')
			.not(':selected').remove();
	});

	// append new unused select if needed
	if (this.count == 0 && !nullAtEnd) {
		this.newEmptySelect();
	}

	// reappend all options that are not yet choosen
	var selects = this.node.children();
	for (var i in this.choices) {
		if (window[this.varname].indexOf(i) == -1) {
			selects.append($('<option>')
				.text(this.choices[i])
				.val(i));
		}
	}
}
MultiSelect.prototype.newEmptySelect = function () {
	this.node.append($('<select>')
		.append($('<option>')
			.text("(Nichts)")
			.val('__NULL__')
		)
	);
}
