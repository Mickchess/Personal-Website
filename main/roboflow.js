const inferencejs = window.inferencejs;
const inferEngine = new inferencejs.InferenceEngine();
const CVImage = inferencejs.CVImage;

document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const image = document.getElementById("itemImage").files[0]; // Get the uploaded file

    // Convert the image to a base64 string and display it
    const reader = new FileReader();
    reader.onload = function(e) {
        var base64String = e.target.result;
        console.log(base64String); // Log the base64 string

        const imgElement = document.createElement('img');
        imgElement.src = base64String;
        imgElement.style.maxWidth = '100%';
        document.body.appendChild(imgElement);

        // Define and call the infer function
        var infer = function() {
            fetch('https://detect.roboflow.com/science-fair-7r503m-ab7q4/2?api_key=11363HqFqpCPCOBH2n0Z?format=json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ image: base64String })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        };

        infer(); // Call the infer function
    };
    reader.readAsDataURL(image);
});
