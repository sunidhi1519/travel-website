document.addEventListener("DOMContentLoaded", function () {

    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    };

    let videoWrapper = document.querySelector('.video-wrapper');
    let video = videoWrapper.querySelector('video');
    let playBtn = videoWrapper.querySelector('#play-btn');

    playBtn.addEventListener('click', () => {
        video.play();
        playBtn.style.display = 'none'; // Hide the play button
    });

    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playBtn.style.display = 'none'; // Hide the play button
        } else {
            video.pause();
        }
    });

    video.addEventListener('ended', () => {
        playBtn.style.display = 'block'; // Make the play button visible again
    });



});
