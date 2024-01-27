	  document.addEventListener('DOMContentLoaded', function() {
	    var hostname = window.location.hostname;
	    var schema = {
	      "@context": "https://schema.org/",
	      "@type": "Product",
	      "name": hostname,
	      "image": `https://${hostname}/placeholder.jpg`, // Replace with a relevant image URL
	      "description": `Secure ${hostname} to give your business the online identity it deserves. Simple, memorable, and ready for you to make it your own.`,
	      "brand": {
	        "@type": "Brand",
	        "name": hostname
	      },
	      "offers": {
	        "@type": "Offer",
	        "url": `https://${hostname}`,
	        "priceCurrency": "USD",
	        "price": "7,500" // Replace with the relevant price
	      }
	    };
	
	    document.getElementById('schemaMarkup').textContent = JSON.stringify(schema);
	  });
