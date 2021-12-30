
$(document).ready(function() {

	var issue_url = "https://cern.service-now.com/service-portal?id=sc_cat_item&name=incident&se=CERNBox-Service";
	var button = $('<li/>')
		.addClass('issue_button');

	$('<a/>')
		.addClass('icon-issue')
		.text("Report a problem")
		.attr('href', issue_url)
		.attr('target','_blank')
		.on('click', function(){
			window.open(issue_url, '_blank');
			return false;
		})
		.appendTo(button);

	$('#app-navigation ul').append(button);
	var feedback_url = "https://cern.service-now.com/service-portal?id=sc_cat_item&name=cernbox-feedback&se=CERNBox-Service&cernbox_service_instance=Production";
	var button = $('<li/>')
		.addClass('feedback_button');

	$('<a/>')
		.addClass('icon-feedback')
		.text("Feature request/suggestions")
		.attr('href', feedback_url)
		.attr('target','_blank')
		.on('click', function(){
			window.open(feedback_url, '_blank');
			return false;
		})
		.appendTo(button);

	$('#app-navigation ul').append(button);
	
	var doc_url = "http://cernbox-manual.web.cern.ch/cernbox-manual/en/";
	var button = $('<li/>')
		.addClass('doc_button');

	$('<a/>')
		.addClass('icon-doc')
		.text("Documentation")
		.attr('href', doc_url)
		.attr('target','_blank')
		.on('click', function(){
			window.open(doc_url, '_blank');
			return false;
		})
		.appendTo(button);

	$('#app-navigation ul').append(button);
});

