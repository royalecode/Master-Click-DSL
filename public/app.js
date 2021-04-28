let text = document.querySelector("#chat");
let sendButton = document.querySelector("#sendButton");
let textMessage = document.querySelector("#textMessage");

let usersConnected = document.getElementById("counter");
let numClicksText = document.getElementById("clicksTxt");
let clicksUser = document.getElementById("clicksUser");
let restartBtn = document.querySelector("#restartBtn");
let mitjana = document.querySelector("#mitjana");
let type = document.querySelector("#type");

const urlParams = new URLSearchParams(window.location.search);

const socket = io();
let clicksFromClient = 0;
let media = 0;

socket.on("message", (data) => {
    const d = document.createElement("div");
    const t = document.createTextNode(data.username + ": " + data.message);
    d.appendChild(t);
    text.appendChild(d);
});

socket.on("usuario conectado", (data) => {
    // const d = document.createElement("div");
    // d.classList.add("joined");
    // const t = document.createTextNode(
    //     "El usuario " + data.username + " se ha conectado"
    // );
    // d.appendChild(t);
    // text.appendChild(d);

    usersConnected.innerText = data.usersConnected;
});

socket.on("usuario desconectado", (data) => {
    // const d = document.createElement("div");
    // d.classList.add("joined");
    // const t = document.createTextNode(
    //     "El usuario " + data.username + " se ha desconectado!"
    // );
    // d.appendChild(t);
    // text.appendChild(d);

    usersConnected.innerText = data.usersConnected;
});

socket.on("connect", () => {
    socket.emit("iam", urlParams.get("user"));
});

socket.on("numero de usuarios", (data) => {
    usersConnected.innerText = data.usersConnected;
    numClicksText.innerHTML = data.numClicks;
});

socket.on("new click", (data) => {
    numClicksText.innerText = data.numClicks;
    media = (Number(numClicksText.textContent)/Number(usersConnected.textContent));
    console.log(media);
    if (clicksFromClient > media){
        type.innerText = "encima";
    }else if(clicksFromClient < media) {
        type.innerText = "debajo";
    }else{
        type.innerText = "igual";
    }
    mitjana.innerText = media;
});

socket.on("new restart", (data) => {
    numClicksText.innerText = data.numClicks;
    clicksFromClient = 0;
    media = 0;
    mitjana.innerText = media;
    clicksUser.innerText = clicksFromClient;
});

sendButton.onclick = () => {
    clicksUser.innerText = ++clicksFromClient;
    socket.emit("click", "");
};

restartBtn.onclick = () => {
    socket.emit("restart", "");
};

window.addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
    }
}, false);
