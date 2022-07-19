let videoSrc = document.getElementById("example");
videoSrc.setAttribute("src", videoNames[5]);
videoSrc.setAttribute("autoplay", "true");

let queueVids = document.getElementById("queue-vids-container")

videoNames.forEach(video => {

let vid = document.createElement("video")
vid.setAttribute("src", video)
vid.setAttribute("type", "video/webm")
vid.setAttribute("preload", "metadata")
vid.setAttribute("height", "40px")

let vidTitle = document.createElement("div")
vidTitle.textContent = video

let queueVid = document.createElement("div")
queueVid.appendChild(vid)
queueVid.appendChild(vidTitle)

queueVids.appendChild(queueVid)
})