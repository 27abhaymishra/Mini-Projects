function speakText(){
    let text = document.getElementById("textarea").value;
    
    if(text.trim() === ""){
        //show an alert
        alert("Please Enter Text");
        return;
    }
        //create a new speech synthesis object
    const utterance = new SpeechSynthesisUtterance(text);
    //speak the text
    window.speechSynthesis.speak(utterance);
}