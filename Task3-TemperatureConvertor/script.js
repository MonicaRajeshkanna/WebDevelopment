function convert() {
    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;

    if (temp === "") {
        alert("Please enter a value");
        return;
    }

    temp = Number(temp);
    let result;

    if (unit === "c") {
        result = (temp * 9/5) + 32;
        document.getElementById("result").innerText =
            result.toFixed(2) + " °F";
    } else {
        result = (temp - 32) * 5/9;
        document.getElementById("result").innerText =
            result.toFixed(2) + " °C";
    }
}