function m1g() {
    if (document.getElementById("m1c").textContent < 15)
        document.getElementById("m1c").textContent = Number(document.getElementById("m1c").textContent) + 1
        
        document.getElementById("m1e").textContent = document.getElementById("m1a").textContent * document.getElementById("m1c").textContent
        document.getElementById("ttp").textContent = Number(document.getElementById("m1e").textContent) + Number(document.getElementById("m2e").textContent)
}
function m1f() {
    if (document.getElementById("m1c").textContent > 0)
        document.getElementById("m1c").textContent = Number(document.getElementById("m1c").textContent) - 1
        
        document.getElementById("m1e").textContent = document.getElementById("m1a").textContent * document.getElementById("m1c").textContent
        document.getElementById("ttp").textContent = Number(document.getElementById("m1e").textContent) + Number(document.getElementById("m2e").textContent)
}


function m2g() {
    if (document.getElementById("m2c").textContent < 15)
        document.getElementById("m2c").textContent = Number(document.getElementById("m2c").textContent) + 1
        
        document.getElementById("m2e").textContent = document.getElementById("m2a").textContent * document.getElementById("m2c").textContent
        document.getElementById("ttp").textContent = Number(document.getElementById("m1e").textContent) + Number(document.getElementById("m2e").textContent)
}
function m2f() {
    if (document.getElementById("m2c").textContent > 0)
        document.getElementById("m2c").textContent = Number(document.getElementById("m2c").textContent) - 1
        
        document.getElementById("m2e").textContent = document.getElementById("m2a").textContent * document.getElementById("m2c").textContent
        document.getElementById("ttp").textContent = Number(document.getElementById("m1e").textContent) + Number(document.getElementById("m2e").textContent)
}