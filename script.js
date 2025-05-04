//your JS code here. If required.
let codes=document.querySelectorAll(".code");
codes[0].focus();
codes.forEach((code,idx)=>{
code.addEventListener("keydown",(e)=>{
	if(e.key>=0 && e.key<=9 && idx<5 ){
		setTimeout(()=>codes[idx+1].focus(),10);
	}else if(e.key==="Backspace"){
		if(idx>0)
		setTimeout(()=>codes[idx-1].focus(),10);
	}
})
})
