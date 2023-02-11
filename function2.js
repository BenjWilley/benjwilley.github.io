const $el = document.body;



const genRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}


const genStar = () => {

    const star = document.createElement("div");
    star.classList.add("star");
    let x = genRandomNumber(1, 99);
    let y = genRandomNumber(1, 2000);

    const { style } = star;

    style.left = Math.floor(x) + "%";
    style.top = Math.floor(y) + "px";

    style.setProperty(
        "--size",
        genRandomNumber(1, 3) + "px"
    );
    style.setProperty(
        "--color",
        genRandomNumber(10, 255)
    );
    style.setProperty(
        "--sizeBubble",
        genRandomNumber(2, 15)
    );
    
    return star;
}

//will generate 800 stars
for (let index = 0; index < 800; index++) {
    $el.append(genStar());
}