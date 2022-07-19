// Shuffle video names array
for (let i = videoNames.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [videoNames[i], videoNames[j]] = [videoNames[j], videoNames[i]]
}

let mainVideo = document.getElementById("main-video");
mainVideo.setAttribute("src", videoNames[0]);
mainVideo.setAttribute("preload", "auto");
mainVideo.setAttribute("autoplay", "true");
mainVideo.addEventListener("ended", playNext);

let queueVids = document.getElementById("queue-vids-container")

videoNames.forEach(video => {

let vid = document.createElement("video")
vid.setAttribute("src", video)
vid.setAttribute("type", "video/webm")
vid.setAttribute("preload", "metadata")
vid.setAttribute("height", "40px")
if (video.endsWith(".webm")) vid.setAttribute("type", "video/webm")
else if (video.endsWith(".mp4")) vid.setAttribute("type", "video/mp4")

let vidTitle = document.createElement("div")
vidTitle.textContent = video
vidTitle.addEventListener("click", setMainVideo)

let queueVid = document.createElement("div")
queueVid.appendChild(vid)
queueVid.appendChild(vidTitle)
queueVids.appendChild(queueVid)
})


function setMainVideo(){
mainVideo.setAttribute("src", this.textContent)
}

function playNext(){
    index = videoNames.findIndex(item => item == this.getAttribute("src"))
    next = index + 1
    setTimeout( () => mainVideo.setAttribute("src", videoNames[next]), 500)
    

}