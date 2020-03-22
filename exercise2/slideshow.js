function previous() {
    let kitty = document.getElementById('kitties');
    let imgPath = kitty.src;
    if (imgPath.includes("cat1"))
        kitty.src = "cat5.jpg";
    else if (imgPath.includes("cat2"))
        kitty.src = "cat1.jpg";
    else if (imgPath.includes("cat3"))
        kitty.src = "cat2.jpg";
    else if (imgPath.includes("cat4"))
        kitty.src = "cat3.jpg";
    else if (imgPath.includes("cat5"))
        kitty.src = "cat4.jpg";
}

function next() {
    let kitty = document.getElementById('kitties');
    let imgPath = kitty.src;
    if (imgPath.includes("cat1"))
        kitty.src = "cat2.jpg";
    else if (imgPath.includes("cat2"))
        kitty.src = "cat3.jpg";
    else if (imgPath.includes("cat3"))
        kitty.src = "cat4.jpg";
    else if (imgPath.includes("cat4"))
        kitty.src = "cat5.jpg";
    else if (imgPath.includes("cat5"))
        kitty.src = "cat1.jpg";
}
