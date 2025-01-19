const inferencejs = window.inferencejs
const inferEngine = new inferencejs.InferenceEngine();

const workerId = await inferEngine.startWorker("science-fair-7r503m-ab7q4/2", "2", "rf_AZWB6RdKlqJ8x5gXmulz");
const image = document.getElementById("itemImage").files[0]; // Get the uploaded file
const cvimg = new CVImage(image);
const predictions = await inferEngine.infer(workerId, cvimg); // Infer on image
console.log(predictions); // Log the predictions
