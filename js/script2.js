const scriptURL = 'https://script.google.com/macros/s/AKfycbxNVtH6wEPxwYCs0M2Ck82yuf70fW5rPzSWFnZ2IQLEmuJLycOXxtt1eDPpI2imMZ6B/exec'

            const form = document.forms['query-sheet']
            
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => alert("Your Query is Raised!" ))
              .then(() => { window.location.reload(); })
              .catch(error => console.error('Error!', error.message))
            })