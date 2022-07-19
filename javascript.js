let mainVideo = document.getElementById("main-video");
mainVideo.setAttribute("src", videoNames[5]);
mainVideo.setAttribute("autoplay", "true");
mainVideo.addEventListener("ended", playNext)

let queueVids = document.getElementById("queue-vids-container")

videoNames.forEach(video => {

let vid = document.createElement("video")
vid.setAttribute("src", video)
vid.setAttribute("type", "video/webm")
vid.setAttribute("preload", "metadata")
vid.setAttribute("height", "40px")

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