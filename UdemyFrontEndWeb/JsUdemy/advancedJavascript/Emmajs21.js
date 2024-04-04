function moveCommand(direction) {
    let whatHappens;
    switch (direction){
        case "forward":
            whatHappens = "You encounter a monster";
            break;
        case "backward":
            whatHappens = "You arrived home";
            break;
        case "right":
            whatHappens = "You found a river";
            break;
        case "left":
            whatHappens = 'You ran into a troll';
            break;
        default:
            whatHappens = "Please enter a valid direction";
    }
    return whatHappens;
}