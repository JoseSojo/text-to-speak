// SELECT BUTTON ADD EVENT CLICK
document.getElementById('speak').addEventListener("click",()=>{
	// EXECUTE FUNCTION < TEXT TO SPEAK >
    decir(document.getElementById("text").value);
});

/*
 * @Author José Sojo <jsojo346@gmail.com>
 * @param <textSpeak>
 * 
 * new instance SpeechSynthesisUtterance execute for speechSynthesis -> speak
*/
const decir = (textSpeak)=>{
	// 
    speechSynthesis.speak(new SpeechSynthesisUtterance(textSpeak));
}
