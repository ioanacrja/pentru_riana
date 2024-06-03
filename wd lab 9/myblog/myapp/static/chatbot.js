
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");

displayMessage("Hello! How can I assist you today?");

function displayMessage(message) {
    let messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = `<strong>Bot:</strong> ${message}`;
    chatContainer.appendChild(messageElement);
    scrollChatContainerToBottom();
}

function scrollChatContainerToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let userQuestion = userInput.value.trim();
    displayMessage(userQuestion); 
    generateResponse(userQuestion);
    userInput.value = "";
});

function generateResponse(userQuestion) {
    let response;
    switch (userQuestion.toLowerCase()) {
        case "where can i find the travel blogs?":
            response = "The travel blogs in Ioana's website are located in the top navigation bar, in the section Blogs.";
            break;
        case "how can i contact the owner of the blogs?":
            response = "You can send an email at ioana.cirja05@e-uvt.ro. Ioana will answer it gladly!";
            break;
        case "who is ioana?":
            response = "Ioana is the owner of the blogs. She is a first year student at FMI, UVT. You can find out more about her in the section About of this website.";
            break;
        case "who's ioana?":
            response = "Ioana is the owner of the blogs. She is a first year student at FMI, UVT. You can find out more about her in the section About of this website.";
            break;
        case "what is this site about?":
            response = "This is a website about Ioana. She writes about travelling and her experience in different countries. You should subscribe to her newsletter so you don't miss any new blogs!;)";
            break;
        case "what is this website about?":
            response = "This is a website about Ioana. She writes about travelling and her experience in different countries. You should subscribe to her newsletter so you don't miss any new blogs!;)";
            break;
        case "what's this site about?":
            response = "This is a website about Ioana. She writes about travelling and her experience in different countries. You should subscribe to her newsletter so you don't miss any new blogs!;)";
            break;
        case "what are these blogs about?":
            response = "This is a website about Ioana. She writes blogs about travelling and her experience in different countries. You should subscribe to her newsletter so you don't miss any new blogs!;)";
            break;
        case "who is ioana?":
            response = "Ioana is the owner of the blogs. She is a first year student at FMI, UVT. You can find out more about her in the section About of this website.";
            break;
        case "thank you":
            response = "Glad I could help! :)";
            break;
        case "Thank you":
            response = "Glad I could help! :)";
            break;
        case "thank you!":
            response = "Glad I could help! :)";
            break;
        case "Thank you!":
            response = "Glad I could help! :)";
            break;
        case "can you help me with something?":
            response = "Of course! What do you need help with?";
            break;
        default:
            response = "I'm sorry, I don't understand that question. If you need help, you can contact Ioana at ioana.cirja05@e-uvt.ro.";
            break;
    }
    displayMessage(response);
}
