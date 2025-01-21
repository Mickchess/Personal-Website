const inferencejs = window.inferencejs;
const inferEngine = new inferencejs.InferenceEngine();
const CVImage = inferencejs.CVImage;

document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const image = document.getElementById("itemImage").files[0]; // Get the uploaded file

    // Convert the image to a base64 string and display it
    const reader = new FileReader();
    reader.onload = function(e) {
        const base64String = e.target.result;
        console.log(base64String); // Log the base64 string

        const imgElement = document.createElement('img');
        imgElement.src = base64String;
        imgElement.style.maxWidth = '100%';
        document.body.appendChild(imgElement);
    };
    reader.readAsDataURL(image);
});
