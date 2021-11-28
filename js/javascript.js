let text = "";

function changeText(row) {
    cell=row.cells[1]
    text = cell.innerHTML;

    var rating3 = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'>"
    var rating4 = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>"
    var rating5 = "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i></i><i class='fas fa-star'>"

    switch (text) {
        case "Good":
            cell.innerHTML = rating4;
            
            break;
        case "Very good":
            cell.innerHTML = rating5;
            break;
        case "Basic":
            cell.innerHTML = rating3;
            break;
        default:
            cell.innerHTML = rating5;
    }

}
function defaultText(row) {
    cell.innerHTML = text;
}


