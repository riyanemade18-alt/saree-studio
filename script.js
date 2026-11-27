const sarees = [];

for (let i = 1; i <= 20; i++) {
    sarees.push({
        image: `images/saree${i}.jpeg`,
        likes: 0,
        liked: false
    });
}

const container = document.getElementById("saree-container");

sarees.forEach((saree) => {

    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = saree.image;
    img.alt = "Saree";
    img.style.width = "100%";
    img.style.height = "320px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px";

    const button = document.createElement("button");
    button.innerHTML = "♡ Like (0)";

    button.style.padding = "10px 20px";
    button.style.marginTop = "10px";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {

        saree.liked = !saree.liked;

        if (saree.liked) {
            saree.likes++;
        } else {
            saree.likes--;
        }

        button.innerHTML = saree.liked
            ? `❤️ Liked (${saree.likes})`
            : `♡ Like (${saree.likes})`;
    });

    card.appendChild(img);
    card.appendChild(button);

    container.appendChild(card);
});