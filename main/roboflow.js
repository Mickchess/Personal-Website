const inferencejs = window.inferencejs
const inferEngine = new inferencejs.InferenceEngine();

document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
    const workerId = await inferEngine.startWorker("science-fair-7r503m-ab7q4", "1", "rf_TIFMEzpa7zRFor3Dn2s94cJwaFn2");

    const image = document.getElementById("itemImage").files[0]; // Get the uploaded file
    const cvimg = new CVImage(image);
    const predictions = await inferEngine.infer(workerId, cvimg); // Infer on image

    console.log(predictions); // Log the predictions
});

