#!/bin/bash

NAME="test"
IMG="$1"

set -euo pipefail

sdkmanager emulator
sdkmanager "${IMG}"
echo no | avdmanager create avd -f -n "${NAME}" -k "${IMG}"
${ANDROID_HOME}/emulator/emulator -avd ${NAME} -no-audio -no-window -wipe-data &
adb shell input keyevent 82 &
