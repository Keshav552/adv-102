
Webcam.set({
    width: 350,
    height: 250,
    image_format: "png",
    png_quality: 90
})
var webcam_show = document.getElementById("webcam_preview");
Webcam.attach(webcam_show);

function take_snap_shot() {
    Webcam.snap(function take_snap(data_url) {
        document.getElementById("img").innerHTML = "<img id='img_result' src='" + data_url + "'>"
    });
}
console.log("ml5 is", ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hXvdfW1bJ/model.json", modelLoaded);

function modelLodded() {
    console.log("Model Has Been Loaded");
}

function check() {
    var capimg = document.getElementById("img_result");
    classifier.classify(capimg, accuracy)
}

function accuracy(error, results) {
    if (error) { console.log(error); } else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence;
    }
}