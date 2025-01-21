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
        var infer = async function() {
            const response = await fetch('https://detect.roboflow.com/infer/workflows/food-detection-rkdfg/custom-workflow', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    api_key: 'U5PVZEUpXhY5PMNHobWA',
                    inputs: {
                        "image": {"type": "base64", "value": base64String}
                    }
                })
            });
            
            const result = await response.json();
            function doResult(result) {
                const predictions = result.outputs[0].predictions.predictions;
                console.log(predictions); // Log the predictions
            };
            doResult(result);

        infer(); // Call the infer function
        };
    };
    reader.readAsDataURL(image);
});
