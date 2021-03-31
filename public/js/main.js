function test(){
    console.dir(document.getElementById("click"))
    var btn = document.getElementById("click")
    console.dir(btn.ownerDocument.body)
    btn.ownerDocument.body.bgColor = "red"
}
