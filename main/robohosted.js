
function infer(image) {

    
    
    fetch('https://detect.roboflow.com/science-fair-7r503m-ab7q4/2?api_key=11363HqFqpCPCOBH2n0Z?format=json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        // Add your request payload here
        bimage

    })
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});

};