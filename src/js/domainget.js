document.addEventListener('DOMContentLoaded', (event) => {
	var domainName = window.location.hostname;

	if (domainName.startsWith('www.')) {
		domainName = domainName.substring(4);
	}
	document.getElementById('domain-name').textContent = domainName;
	document.getElementById('domain-name-input').value = domainName;
});
