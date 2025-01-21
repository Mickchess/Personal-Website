const inferencejs = window.inferencejs;
const inferEngine = new inferencejs.InferenceEngine();
const CVImage = inferencejs.CVImage;

document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    const workerId = await inferEngine.startWorker("science-fair-7r503m-ab7q4", "2", "rf_tL1P1cdIQmUGii8baelMMhWAT3E3");

    const image = document.getElementById("itemImage").files[0]; // Get the uploaded file
    const cvimg = new CVImage(image);
    const predictions = await inferEngine.infer(workerId, cvimg); // Infer on image

    console.log(predictions); // Log the predictions

    // Display the uploaded image
    const reader = new FileReader();
    reader.onload = function(e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.style.maxWidth = '100%';
        document.body.appendChild(imgElement);
    };
    reader.readAsDataURL(image);
});
