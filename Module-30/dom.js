function print(element) {
    console.log(element);
}
function friendColor(friend){
    friend.style.border = "4px solid #D35400";
    friend.style.backgroundColor = "#1F618D"
}
document.getElementById("add-border").addEventListener('click', function () {
    document.getElementById("friend-container").style.border = "3px dotted green";
    document.getElementById("friend-container").style.backgroundColor = "#7F8C8D";
});

document.getElementById("add-background").addEventListener('click', function () {
    const friends = document.getElementsByClassName("friend");
    for (let friend of friends) {
       friendColor(friend);
    }
});

function addFriend() {
    const container = document.getElementById("friend-container");
    const friendDiv = document.createElement("div");
    friendDiv.classList.add("friend");
    //upor er line er jonno backgroud button a click korle color change hobey
    friendDiv.innerHTML=`<h3 class="friend-name">New friend</h3>
    <p>Repellat, reprehenderit?</p>`;
    //friendColor(friendDiv);
    container.appendChild(friendDiv);
}