function copyToClipboard() {
  var label = document.getElementById("label");
  var text = label.innerText.trim();
  navigator.clipboard.writeText(text);
}
