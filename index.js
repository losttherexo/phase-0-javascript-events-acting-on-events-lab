// Your code here
const dodger = document.querySelector("#dodger")
dodger.style.backgroundColor = "#FF69B4"

moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace
    ("px", "");
    const left = parseInt(leftNumbers);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

moveDodgerRight = () => {
    const rightNumbers = dodger.style.left.replace
    ("px", "");
    const left = parseInt(rightNumbers);

    if (left > 0, left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
})

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
})