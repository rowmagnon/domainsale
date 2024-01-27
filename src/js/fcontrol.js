	Vue.createApp({
	  data() {
	    return {
	      offer: {
	        name: '',
	        email: '',
	        amount: '',
	        domainName: window.location.hostname // Gets the domain name from the current URL
	      }
	    };
	  },
	  methods: {
	    async submitForm() {
	      try {
	        const response = await fetch('https://formspree.io/f/mdoqkyel', {
	          method: 'POST',
	          headers: {
	            'Content-Type': 'application/json'
	          },
	          body: JSON.stringify(this.offer)
	        });
	
	        if (response.ok) {
	          // Handle success - reset form, show message, etc.
	          console.log('Form submitted successfully');
	          this.offer = { name: '', email: '', amount: '', domainName: window.location.hostname };
	        } else {
	          // Handle error
	          console.error('Form submission error');
	        }
	      } catch (error) {
	        console.error('There was an error submitting the form:', error);
	      }
	    }
	  }
	}).mount('#app');
