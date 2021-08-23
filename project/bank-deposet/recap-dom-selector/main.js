function setplayerStyle(player) {
    player.style.border = "2px solid red"
    player.style.fontSize = "30px"
    player.style.padding = '20px'
}

const players = document.getElementsByClassName("player")
for (const player of players) {
    setplayerStyle(player)

}
function addPlayer() {
    const playersContainer = document.getElementById("players")
    const player = document.createElement("div")
    player.classList.add('player')
    player.innerHTML = ` 
       <h4 class="player-name">player-1</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis labore qui tenetur quasi
                        quibusdam quo quae magnam tempora nobis porro veritatis excepturi accusamus repellat nisi quam,
                        aspernatur perspiciatis beatae sunt.</p>
    `;
    setplayerStyle(player)

    playersContainer.appendChild(player)

}
document.getElementById("players").addEventListener("click", function (event) {
    console.log();
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = "red"
    } else {
        event.target.parentNode.style.backgroundColor = 'yellow'
    }
})