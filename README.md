# random-video-gallery
Loads and formats a randomized selection of videos from a local directory 
into an HTML document. Built for use with Firefox. Acceptable video file 
types: .webm, .mp4. Autoplays the next video in the queue.

Note - the constant VIDEOLIMIT in "javascript.js" determines the maximum number of videos loaded. Change at your discretion.

1) Place collection of videos into the 'videos' folder
2) Run the python script to generate a list of video file names and create a javascript file that loads these file names into an array
    If running on linux/macOS, run file-name-generator-unix.py
    If running on Windows, run file-name-generator-windows.py
3) Open random-video-gallery.html
