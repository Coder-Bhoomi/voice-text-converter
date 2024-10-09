// Check if browser supports Web Speech API
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!window.SpeechRecognition) {
    alert("Your browser does not support speech recognition. Please use a supported browser like Chrome or Safari.");
}

const recognition = new SpeechRecognition();
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const textOutput = document.getElementById('text-output');

recognition.continuous = true; // Allow continuous recognition
recognition.interimResults = false; // Show interim results

// Start recording
startBtn.addEventListener('click', () => {
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

// Stop recording
stopBtn.addEventListener('click', () => {
    recognition.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});

// Handle recognition result
recognition.addEventListener('result', (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    textOutput.value += transcript + " "; // Append the transcript to the textarea
});

// Handle recognition error
recognition.addEventListener('error', (event) => {
    console.error('Speech Recognition Error:', event.error);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
