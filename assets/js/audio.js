var pause = document.querySelector(".pause");
var audio = document.querySelector(".audio");
    audio.volume = 0.15;
function togglePlay() {
	if (audio.paused) {
		audio.play();
		pause.innerHTML = "☁️";
	} else {
		audio.pause();
		pause.innerHTML = "🦗";
		pause.style.color = "#837E7D";
	}
}