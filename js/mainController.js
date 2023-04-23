function roll(timesToRoll) {
    model.inputs.main.numberOfRolls = parseInt(timesToRoll);
    model.data.totalRolls += parseInt(timesToRoll);

    while(timesToRoll) {
        model.data.die1 = Math.floor(Math.random() * 6) + 1;
        model.data.die2 = Math.floor(Math.random() * 6) + 1;

        model.data.die1 >= model.data.die2 ? model.data.rolls.push(model.data.die1.toString() +
            model.data.die2.toString())
            :
            model.data.rolls.push(model.data.die2.toString() +
                model.data.die1.toString());

        timesToRoll--;
    }
    view();
}

function repeatRoll() {
    let times = prompt("How many?");
    roll(times);
}

function goToStats() {
    model.app.page = "stats";
    view();
}