const messageForm = document.getElementById('message-form');
const messagesDiv = document.getElementById('messages');
const responsesDiv = document.getElementById('responses');

// Store user messages in an array
let userMessages = [];

// Function to add user message to the array
function addUserMessage(message) {
  userMessages.push(message);
  displayMessages();
}

// Function to display user messages
function displayMessages() {
  messagesDiv.innerHTML = '';
  userMessages.forEach((message) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messagesDiv.appendChild(messageElement);
  });
}

// Function to add response to a user message
function addResponse(message, response) {
  const responseElement = document.createElement('p');
  responseElement.textContent = `Response to ${message}: ${response}`;
  responsesDiv.appendChild(responseElement);
}

// Event listener for form submission
messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = document.getElementById('message').value.trim();
  if (message) {
    addUserMessage(message);
    document.getElementById('message').value = '';
  }
});

// Load existing messages from local storage
if (localStorage.getItem('userMessages')) {
  userMessages = JSON.parse(localStorage.getItem('userMessages'));
  displayMessages();
}

// Save user messages to local storage
setInterval(() => {
  localStorage.setItem('userMessages', JSON.stringify(userMessages));
}, 1000);
