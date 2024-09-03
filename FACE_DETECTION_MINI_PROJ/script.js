"use strict";
const video = document.getElementById("video");

const startVideo = function () {
  navigator.getUserMedia(
    { video: {} },
    (stream) => (video.srcObject = stream),
    (err) => console.error(err)
  );
};

const drawEmoji = function (emoji, box) {
  const { x, y, width, height } = box;
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  const fontSize = Math.max(12, width / 6);
  context.font = `${fontSize}px Arial`;
  context.fillText(emoji, x, y - 5);
};

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
]).then(startVideo);

video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);

  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

    const happyEmoji = "😄";
    const sadEmoji = "😔";
    const angryEmoji = "😡";
    const surprisedEmoji = "😲";
    const neutralEmoji = "🙂";

    resizedDetections.forEach((detection) => {
      const expressions = detection.expressions;
      if (expressions.happy > 0.5) {
        drawEmoji(happyEmoji, detection.detection.box);
      } else if (expressions.sad > 0.5) {
        drawEmoji(sadEmoji, detection.detection.box);
      } else if (expressions.angry > 0.5) {
        drawEmoji(angryEmoji, detection.detection.box);
      } else if (expressions.surprised > 0.5) {
        drawEmoji(surprisedEmoji, detection.detection.box);
      } else if (expressions.neutral > 0.5) {
        drawEmoji(neutralEmoji, detection.detection.box);
      }
    });
  }, 100);
});
