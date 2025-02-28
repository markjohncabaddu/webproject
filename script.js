document.addEventListener("DOMContentLoaded", function() {
    const flower = document.getElementById("flower");
    for (let i = 0; i < 6; i++) {
        let petal = document.createElement("div");
        petal.className = "petal";
        petal.style.transform = `rotate(${i * 60}deg)`;
        petal.style.animationDelay = `${i * 0.2}s`;
        flower.appendChild(petal);
    }
    let center = document.createElement("div");
    center.className = "center";
    flower.appendChild(center);
});
