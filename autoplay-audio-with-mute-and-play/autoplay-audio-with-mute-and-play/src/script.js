var pause = document.querySelector(".pause");
var audio = document.querySelector(".audio");

function togglePlay() {
	if (audio.paused) {
		audio.play();
		pause.innerHTML = "🔇";
	} else {
		audio.pause();
		pause.innerHTML = "🔊";
		pause.style.color = " #848484";
	}
}
