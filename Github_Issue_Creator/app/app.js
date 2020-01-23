/**
 * App Initializer
 */
$(document).ready(function () {
	app.initialized()
		.then(function (_client) {
			window.client = _client;
			registerClickEventHandlers();
		})
		.catch(function (error) {
			console.error('Error during initialization' + error);
		});
});

/**
 * Register the click event handlers for `Create Issue` and `View Issue Details` buttons
 */
function registerClickEventHandlers() {
	document.getElementById("openModal").addEventListener("fwClick", openModal);
}

/**
 * Function to Open App in Modal
 */
function openModal() {
	getTicketDetails(function (data) {
		client.interface.trigger("showModal", {
			title: "Github Issue Details",
			template: "./modal/app.html",
			data: data.ticket
		});
	}, function (error) {
		console.error(error);
	});
}

/**
 * Show notifications to the user using interface - notification API
 * @param {string} type Type of notification
 * @param {string} title Title of the message
 * @param {string} message Content of the notification message
 */
function showNotification(type, title, message) {
	client.interface.trigger("showNotify", {
		type: `${type}`,
		title: `${title}`,
		message: `${message}`
	}).catch(function (error) {
		console.error('Notification Error : ', error);
	});
}
