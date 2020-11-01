for (let i = 0; i <= 130; i++) {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(https://picsum.photos/500/500?random=${i})`;
    document.body.appendChild(div);
}