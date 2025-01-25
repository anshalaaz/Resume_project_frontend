document.getElementById('resumeForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
        const response = await fetch('http://localhost:3000/submit', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        alert(result.message);
        console.log('Server Response:', result);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
});
