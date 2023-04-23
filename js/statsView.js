function viewStats() {
    let html = /*html*/`
    <h1>Stats page</h1>
    ${showPossibleRolls()}<br /><br />
    Total rolls: ${model.data.totalRolls}<br /><br />
    <button onclick="goToMain()">Back to main</button>
    `;

    app.innerHTML = html;
}

function showPossibleRolls() {
    let html = "";
    for(let x of model.data.possibleRolls) {
        html += `${x}: ${countElems(model.data.rolls, x)}<br />`;
    }
    return html;
}