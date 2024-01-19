
let qrcode = document.getElementById("qrcode");
let qrimage = document.getElementById("qrimage");
let qrText = document.getElementById("qrText");
let buttons = document.getElementById('button');

button.addEventListener('click',(e) =>{
    if(qrText.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        qrcode.classList.add("show-img"); 
    }
    else{
        qrText.classList.add('error');
        setTimeout(()=>{
            alert("Invalid Text or URL");
            qrText.classList.remove('error'); 
            
        },1000);
        



        
    }
})
