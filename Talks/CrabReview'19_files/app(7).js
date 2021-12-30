(function() {
	if (!OCA.CboxOTG) {
		/**
		 * @namespace
		 */
		OCA.CboxOTG = {};
	}

$(document).ready(function () {
	var url = OC.generateUrl('/apps/cboxotg/getotg');
	$.getJSON(url).success(function (response) {
		if(response == null || response.message == null || response.message == "") {
			console.log("No OTG declared");
		} else {
			console.log("OTG declared");
			OC.Notification.showHtml(response.message, {timeout: 10, type: "error"});
		}
	});
});

})();
