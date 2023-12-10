const scriptURL = 'https://script.google.com/macros/s/AKfycbyPAiSxnW_UfvxaWL6RHJ2SZQYWGlP1g3NZiGW6FV1r2YKEykrG7JV3Xn5S6Zv01ZWY/exec'

            const form = document.forms['google-sheet']
            
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("Thanks for Contacting us! We Will Contact You Soon..." ))
              .then(() => { window.location.reload(); })
              .catch(error => console.error('Error!', error.message))
            })