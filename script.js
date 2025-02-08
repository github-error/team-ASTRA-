// Access the webcam
const video = document.getElementById('webcam');

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            video.srcObject = stream;
        })
        .catch((error) => {
            console.error('Error accessing the webcam:', error);
        });
}

// Example: Update results dynamically
setInterval(() => {
    // Simulate real-time disease detection
    const diseasedRate = Math.floor(Math.random() * 100);
    const healthyRate = 100 - diseasedRate;

    document.getElementById('diseased-rate').textContent = `${diseasedRate}%`;
    document.getElementById('healthy-rate').textContent = `${healthyRate}%`;
}, 2000); // Update every 2 seconds