function welcome() {
  var el = document.getElementById("welcome")
  var text = document.createTextNode("Hello from Demo")
  el.appendChild(text)
}

export default welcome;