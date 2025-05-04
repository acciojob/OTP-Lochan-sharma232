//your JS code here. If required.
let codes=document.querySelectorAll(".code");
codes[0].focus();
codes.forEach((code,idx)=>{
code.addEventListener("keydown",(e)=>{
	if(e.key>=0 && e.key<=9){
		setTimeout(()=>codes[idx+1].focus(),10);
	}else if(e.key==="Backspace"){
		i
		setTimeout(()=>codes[idx-1].focus(),10);
	}
})
})
