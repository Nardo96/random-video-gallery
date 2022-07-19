import subprocess
import re

path_call = subprocess.run("cd", text=True, shell=True, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE)
cwd = path_call.stdout
cwd = cwd.replace("\\", "\\\\\\\\")
cwd = cwd.replace("\n", "")

DIRECTORY = ".\\videos\\"
COMMAND = "dir"

## Generate a list of filenames from the given directory]
dir_call = subprocess.run(COMMAND, text=True, shell=True, cwd=DIRECTORY, stdout=subprocess.PIPE, stdin=subprocess.PIPE, stderr=subprocess.PIPE)
files = dir_call.stdout

## Filter for filenames that end with .webm or .mp4
matches = re.findall("\w+(?:\.webm|\.mp4)", files)

with open("filenames.txt", mode="w") as filenames:
    for match in matches:
        print(match, file=filenames)

with open("filenames.js", mode="w") as js:
    js.write("let videoNames = [];")

with open("filenames.js", mode="a") as js:
    for match in matches:
        filepath = "file://"+cwd+"\\\\\\\\videos\\\\\\\\"+match
        js.write(f"\nvideoNames.push(\"{filepath}\");")