onchange = (input) => {
	if ($(input).val().length > 0) {
		let li = "<li>" + $(input).val() + "</li>";
		$(input).val('');
		$('#list').append(li);
	}
};