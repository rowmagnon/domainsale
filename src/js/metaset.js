// Dynamically set meta elements in head
document.addEventListener('DOMContentLoaded', function () {
	var hostname = window.location.hostname;

	document.title = 'Exclusive Domain Sale - ' + hostname;
	document.querySelector('meta[name="description"]').setAttribute('content', 'Secure the exclusive domain ' + hostname + ', a unique opportunity to elevate your online presence.');
	document.querySelector('link[rel="canonical"]').setAttribute('href', 'https://' + hostname);
	document.querySelector('meta[property="og:title"]').setAttribute('content', 'Exclusive Domain Sale - ' + hostname);
	document.querySelector('meta[property="og:description"]').setAttribute('content', 'Secure the exclusive domain ' + hostname + ', a unique opportunity to elevate your online presence.');
	document.querySelector('meta[property="og:url"]').setAttribute('content', 'https://' + hostname);
	// Set the og:image and twitter:image src if you have a dynamic way to generate or fetch these images
	// document.querySelector('meta[property="og:image"]').setAttribute('content', 'https://' + hostname + '/link-to-your-image.jpg');
	// document.querySelector('meta[name="twitter:image"]').setAttribute('content', 'https://' + hostname + '/link-to-your-image.jpg');
});
