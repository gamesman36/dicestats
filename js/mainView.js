function viewMain() {
    html = /*html*/`
    <h1>Dice</h1>
    <button onclick="roll(1)">Roll once!</button>
    <button onclick="repeatRoll()">Roll several!</button>
    <button onclick="goToStats()">Stats page</button>
    <p>${showRolls()}</p>
    `;

    app.innerHTML = html;
}

function showRolls() {
    let html = "";
    for(x of model.data.rolls) {
        html += `${x}<br />`;
    }
    return html;
}