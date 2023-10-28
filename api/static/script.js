function showModal() {
	document.getElementById("modal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
	document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", function() {
        document.getElementById("button").innerHTML = "Well, you clicked me...";
        setTimeout(function() {
            document.getElementById("button").innerHTML = "Click me";
        }, 3000);
    });
});