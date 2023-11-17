function showModal() {
	document.getElementById("modal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
	//document.getElementById("modal").style.display = "none";
    //document.body.style.overflow = "auto";
    console.error("Failed to close dialog::ERR_NopeBro -- Closing a dialog with a single click would be too easy")
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("buttondisabled").addEventListener("click", function() {

        document.getElementById("overlay").style.display = "block";

        const usernameCookie = document.cookie.match(/username=([^;]+)/);
        const username = usernameCookie ? usernameCookie[1] : 'Anonymous';
        const timestamp = new Date().toLocaleString();

        document.getElementById('passedTask').textContent = `${username} has passed Elements task at ${timestamp}`;
    });
var copied = false;
document.getElementById("overlay").addEventListener("click", function() {
    if (!copied) {
        var text = document.getElementById("passedTask").innerText;
        var tempInput = document.createElement("input");
        tempInput.value = text;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        document.getElementById("passedTask").innerText = "Copied to clipboard";
        copied = true;
        setTimeout(function() {
            document.getElementById("overlay").style.display = "none";
            document.getElementById("passedTask").innerText = text;
        }, 3000);
    } else {
        document.getElementById("overlay").style.display = "none";
    }
});
});



