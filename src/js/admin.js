
const Mybody = document.querySelector("body")
const fullName = document.querySelector("#userName")
const password = document.querySelector("#password")
const btn = document.querySelector("#btn")
const sectionForm = document.querySelector("#section-form")
const section1 =  document.querySelector("#section-1")
const section2 =  document.querySelector("#section-2")
const sectionTop = document.querySelector("#section-top")
const leftSection = document.querySelector("#left-section")
const rightSection = document.querySelector("#right-section")
const hamburger = document.querySelector("#hamburger")
const bodyPx = Mybody.clientWidth
btn.addEventListener("click",function(){
    if(fullName.value && password.value ){
      
        showAlert("success","Giriş basarıyla tamamlandi")
        setTimeout(()=>{
          document.querySelector("body").style.background="white"
            section1.style.display = "none"
            section2.style.display = " block"
            section2.style.display = " flex"

            if(bodyPx <= 480){
              sectionTop.style.display = " block"
              leftSection.style.display = "none"
              rightSection.style.display = "none"
            }

            
      
        },1000);

    }else{
showAlert("danger","Luften bos xanalari doldurun")
    }
    
})

function showAlert(type,message){
  /*  
  
            <div class="alert alert-danger" role="alert">
              A simple danger alert—check it out!
            </div>
  */ 
  let styles = {
    "display": "block",
    "position": "absolute",
    "bottom": "15px",
    "width": "90%",
    "height" :"45px"
};
            let alert = document.createElement("div");
            alert.className = `alert alert-${type}  role ="alert" myAlert`;
            alert.textContent = message;
            Object.assign(alert.style, styles);            
            //console.log(alert);
            sectionForm.appendChild(alert);
          
            setTimeout(function () {
              alert.remove();
            }, 2000);
          
                 
}
hamburger.addEventListener("click",function(){



})