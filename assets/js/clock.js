function pad(n) {
  return ("0" + n).slice(-2)
}

function getTime(hex) {
  var now = new Date()
  var hour = pad(now.getHours())
  var minute = pad(now.getMinutes())
  var second = pad(now.getSeconds())
  if (hex == "hex") {
    return hour.toString() + minute.toString() + second.toString()
  }
  else {
    return hour + ":" + minute + ":" + second
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  var bg = document.getElementById("bg")
  var time = document.getElementById("time")
  var timetext = document.getElementById("timetext")
  var metaThemeColor = document.querySelector("meta[name=theme-color]")
  
  function timeInHex() {
    gettime = "#" + getTime("hex")
    bg.style.backgroundColor = gettime
    time.innerHTML = gettime
    timetext.innerHTML = getTime()
    metaThemeColor.setAttribute("content", gettime)
    document.title = "HEX Clock " + gettime
    setTimeout(timeInHex, 50)
  }
  timeInHex()
})
