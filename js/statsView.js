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
    const rollsCount = model.data.rolls.length;

    for (let x of model.data.possibleRolls) {
        const rollCount = countElems(model.data.rolls, x);
        const percentage = (rollCount / rollsCount) * 100;
        html += `${x}: ${rollCount} (${percentage.toFixed(2)}%)<br />`;
    }

    return html;
}