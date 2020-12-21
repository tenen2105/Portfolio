
function getTime() {
    const date = new Date().getFullYear();
    document.getElementById("time").innerHTML = date;
}

getTime();