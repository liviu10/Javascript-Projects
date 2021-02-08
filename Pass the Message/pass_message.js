(function() {
    document.getElementById("submit-btn").addEventListener("click", function(e){
    e.preventDefault()
    const message = document.getElementById("message")
    const feedback = document.getElementById("feedback")
    const messageContent = document.getElementById("message-content")
    if (message.value === ""){
        feedback.style.display = "block"
        messageContent.style.display = "none"
    } else {
        feedback.style.display = "none"
        messageContent.style.display = "block"
        messageContent.textContent = message.value
        message.value = ""
    }
    })
})()