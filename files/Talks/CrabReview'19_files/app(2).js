
$(document).ready(function() {
	if (OC.currentUser !== false) {
		$.getJSON("/index.php/apps/canary", function(data) {
			if (data["version"] === "ocis") {

				if (location.hostname.includes('qa')) {
					ocis_url = "https://newqa.cernbox.cern.ch";
				} else {
					ocis_url = "https://new.cernbox.cern.ch";
				}

				// Redirect to / while we don't handle the old urls
				// ocis_url += window.location.href.replace(window.location.origin, "")

				setTimeout(function(){
					window.location.href = ocis_url;
			 	}, 6000);

				$("body").append('<div id="dialog_ocis">\
						<h2>You have been migrated to the new CERNBox!</h2>\
						<p style="margin: 20px 0;">\
								The new version is available in <b>new.cernbox.cern.ch</b>.<br>You will be redirected in 5s.\
						</p>\
				</div>');

				$( "#dialog_ocis" ).dialog({
						resizable: false,
						height: "auto",
						width: 500,
						modal: true
						})
						.css("padding", "20px");


				$(".ui-widget-overlay.ui-front").css("background", "rgba(0,0,0, 0.65)").css("z-index", "10000");
				var box_shadow = "0px 0px 45px 0 rgba(0,0,0,0.2)";
				$(".ui-dialog")
						.css("z-index", "10001")
						.css("background", "white")
						.css("border", "0")
						.css("text-align", "center")
						.css("box-shadow", box_shadow)
						.css("-webkit-box-shadow", box_shadow)
						.css("-moz-box-shadow", box_shadow);;
				$(".ui-dialog-titlebar")
						.css("background", "none")
						.css("border", "0")
						.css("position", "absolute")
						.css("right", "3px")
						.css("z-index", "1");
				$(".ui-dialog-titlebar-close")
						.css("display", "none");
					
			} else if (data["reload"] || data["is_adopter"]) {
				location.reload();
			}
		});
	}
});
