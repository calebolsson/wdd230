const surprise = document.getElementById("surprise");

function surprise_exe() {
  let videoElement = document.createElement("video");
  let sourceElement = document.createElement("source");
  videoElement.setAttribute("width", 640);
  videoElement.setAttribute("height", 480);
  videoElement.setAttribute("autoplay", "true");
  sourceElement.setAttribute("src", "images/rick_astley.mp4");
  sourceElement.setAttribute("type", "video/mp4");
  videoElement.appendChild(sourceElement);
  surprise.appendChild(videoElement);
}

// surprise.addEventListener("dblclick", surprise_exe);
surprise.addEventListener("dblclick", surprise_exe, { once: true });
