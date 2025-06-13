let progressBar = document.getElementById('progress')

let currSong = document.getElementById('song')

let controlIcon = document.getElementById('ctrlIcon')

let playPause = document.getElementById('playpause')

currSong.onloadedmetadata = function () {
    progressBar.max = currSong.duration

    progressBar.value = currSong.currentTime
}

playPause.addEventListener('click', () => {
    if (controlIcon.classList.contains('fa-pause')) {
        currSong.pause();
        controlIcon.classList.remove('fa-pause')
        controlIcon.classList.add('fa-play')

    } else {
        currSong.play();
        controlIcon.classList.add('fa-pause')
        controlIcon.classList.remove('fa-play')
    }
})


if (currSong.play()) {
    setInterval(() => {
        progressBar.value = currSong.currentTime
    }, 500)
    controlIcon.classList.add('fa-pause')
    controlIcon.classList.remove('fa-play')
}

progressBar.onchange=function(){
    song.play();
    currSong.currentTime=progressBar.value
    controlIcon.classList.add('fa-pause')
    controlIcon.classList.remove('fa-play')

}





 