var fruit = prompt("Enter your fruit name");
var result = document.getElementById('result');
switch(fruit) {
    case "apple":
        alert("It's apple field");
        result.innerHTML = ("it's apple field");
        break;
    case "Bottle":
        alert("It's bottle field");
        result.innerHTML = ("it's bottle field");
        break;
    case "Glasses":
        alert("It's glasses field");
        result.innerHTML = ("it's glasses field");
        break;
    case "mango":
        alert("It's mango field");
        result.innerHTML = ("it's mango field");
        break;
    default:
        alert("Invalid entry");
        result.innerHTML = `Invalid entry: ${fruit}`;
        break;
}
