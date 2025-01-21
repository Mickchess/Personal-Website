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
                console.log(predictions);
                console.log(result)
                for (let i = 0; i < predictions.length; i++) {
                    addItem('tr', '', 'row' + counter, '.table'); // Add a new row to the dashboard
                    addItem('td', predictions[i].class, 'itemName' + counter, '#row' + counter); // Add the item name to the new row
                    addItem('td', Number.parseFloat(predictions[i].confidence).toFixed(2), 'itemConfidence' + counter, '#row' + counter); // Add the item confidence to the new row
                    addItem('td', '<button onclick="document.getElementById(\'row' + counter + '\').remove();"><span class="material-symbols-outlined">delete</span></button>', 'removeButton' + counter, '#row' + counter); // Add the remove button to the new row
                }
            };
            doResult(result);
        };
        infer(); // Call the infer function
        
    };
    reader.readAsDataURL(image);
});
