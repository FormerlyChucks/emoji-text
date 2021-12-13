function emojify() {
    let text = document.getElementById("emojitext").value.toLowerCase().replace(/a/g, "🇦 ").replace(/b/g, "🇧 ").replace(/c/g, "🇨 ").replace(/d/g, "🇩 ").replace(/e/g, "🇪 ").replace(/f/g, "🇫 ").replace(/g/g, "🇬 ").replace(/h/g, "🇭 ").replace(/i/g, "🇮 ").replace(/j/g, "🇯 ").replace(/k/g, "🇰 ").replace(/l/g, "🇱 ").replace(/m/g, "🇲 ").replace(/n/g, "🇳 ").replace(/o/g, "🇴 ").replace(/p/g, "🇵 ").replace(/q/g, "🇶 ").replace(/r/g, "🇷 ").replace(/s/g, "🇸 ").replace(/t/g, "🇹 ").replace(/u/g, "🇺 ").replace(/v/g, "🇻 ").replace(/w/g, "🇼 ").replace(/x/g, "🇽 ").replace(/y/g, "🇾 ").replace(/z/g, "🇿 ").slice(0, -1) + '';
    document.getElementById("emojitext").value = text;
}
