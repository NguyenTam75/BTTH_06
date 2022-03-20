function time() {
    document.getElementById("kihieu_1").style.color = "black"
    setTimeout(function () { document.getElementById("kihieu_1").style.color = "blue" }, 250)
}
function dongho() {
    var gio = new Date().getHours()
    var phut = new Date().getMinutes()
    var giay = new Date().getSeconds()

    document.getElementById("gio1").setAttribute("src", "image/0" + Math.floor(gio / 10) + ".gif")
    document.getElementById("gio2").setAttribute("src", "image/0" + gio % 10 + ".gif")
    document.getElementById("phut1").setAttribute("src", "image/0" + Math.floor(phut / 10) + ".gif")
    document.getElementById("phut2").setAttribute("src", "image/0" + phut % 10 + ".gif")
    document.getElementById("giay1").setAttribute("src", "image/0" + Math.floor(giay / 10) + ".gif")
    document.getElementById("giay2").setAttribute("src", "image/0" + giay % 10 + ".gif")

    if (gio >= 0 && gio < 12) {
        document.getElementById("kihieu_1").textContent = "Chào buổi sáng"
    }
    else if (gio >= 12 && gio < 17) {
        document.getElementById("kihieu_1").textContent = "Chào buổi chiều"
    }
    else {
        document.getElementById("kihieu_1").textContent = "Chào buổi tối"
    }
}
setInterval("time()", 0)
setInterval("dongho()", 500)
