// Object Javascript
const validator = {
    isEmpty:  (value) => value === undefined || value.trim() === "",
    isEmptyU: (value) => value === undefined,
    isEqual: (v1, v2) => v1 === v2,
};

function ByPass() {
    let bypass = true;
    let email  = $("#reg-email").val();
    let pasw   = $("#reg-password").val();
    let pasw2  = $("#reg-password2").val();
    let error1  = document.getElementById("error-message");
    let error2  = document.getElementById("error-password");
    let error3  = document.getElementById("error-password-security");
    let password_security = $("#password-security").html();

    //Empty Fields
    if (validator.isEmpty(email)){
        let email = document.getElementById("reg-email-label");
        email.classList.add("error");
        error1.classList.add("display","error");
        error1.classList.remove("non-display");
        error2.classList.add("non-display");
        error2.classList.remove("display","error")
        error3.classList.add("non-display");
        error3.classList.remove("display","error")
        bypass    = false;
    }
    else if (validator.isEmpty(pasw)){
        let pasw = document.getElementById("reg-pasw-label");
        pasw.classList.add("error");
        error1.classList.add("display","error");
        error1.classList.remove("non-display");
        error2.classList.add("non-display");
        error2.classList.remove("display","error")
        error3.classList.add("non-display");
        error3.classList.remove("display","error")
        bypass    = false;
    }
    else if(validator.isEmpty(pasw2)){
        let pasw2 = document.getElementById("reg-pasw2-label");
        pasw2.classList.add("error");
        error1.classList.add("display","error");
        error1.classList.remove("non-display");
        error2.classList.add("non-display");
        error2.classList.remove("display","error")
        error3.classList.add("non-display");
        error3.classList.remove("display","error")
        bypass    = false;
    }

    //Double-Check-Password
    else if(!validator.isEqual(pasw,pasw2)){
        bypass = false;
        error1.classList.remove("display","error");
        error1.classList.add("non-display");
        error2.classList.add("display","error");
        error2.classList.remove("non-display");
        error3.classList.add("non-display");
        error3.classList.remove("display","error")
    }
    
    else if(!validator.isEqual(password_security,"Segura")){
                bypass = false;
                error1.classList.remove("display","error");
                error1.classList.add("non-display");
                error2.classList.add("non-display");
                error2.classList.remove("display","error")
                error3.classList.add("display","error");
                error3.classList.remove("non-display")
    } 

    else{
        error1.classList.remove("display","error");
        error1.classList.add("non-display");
        error2.classList.add("non-display");
        error2.classList.remove("display","error")
        error3.classList.add("non-display");
        error3.classList.remove("display","error")
        alert("usuario registrado")
    }     

    return bypass;
}

function Test(){
    let email = $("#email").val();
    let pasw  = $("#password").val();
    if(email === "yordanbb@estudiantes.uci.cu" && pasw === "123456789"){
        return true;
    }

    let error = document.getElementById("error-user-pasw");
    error.classList.add("display","error");
    error.classList.remove("non-display");
    return false;
}

(function(){

    $(document).ready(function(){
        
        var check = 0;
        //SWAP REG-AUT
        $('.button').click(function(){
            $('.form-content').animate({
                height: "toggle",
                opacity: "toggle"
            },600);
        });
        
        //FORM ACTIVE
        let forms = document.getElementsByName("form-input");
        for(let i=0; i<forms.length; i++){
            if (!validator.isEmptyU(forms[i].value)) {
                forms[i].nextElementSibling.classList.add('active');
            }
            forms[i].addEventListener('blur',function(){
                if(this.value.length >= 1){
                    this.nextElementSibling.classList.add('active');
                    this.nextElementSibling.classList.remove('error');
                } else {
                    this.nextElementSibling.classList.remove("active");
                }
            });
        }


        //PASW SECURITY
        const mayus   = new RegExp("^(?=.*[A-Z].*[A-Z].*[A-Z])");
        const minus   = new RegExp("^(?=.*[a-z])");
        const special = new RegExp("^(?=.*[!@#$%&*])");
        const numbers = new RegExp("^(?=.*[0-9])");
        const len     = new RegExp("^(?=.{8,})");
        
        var ExpReg = [mayus,minus,special,numbers,len];
        var Elementos = [$("#mayus"),$("#minus"),$("#special"),$("#numbers"),$("#len")]
        var a = 0;

        $("#reg-password").on("keyup",function(){
            var pass = $("#reg-password").val();
            check = 0;
            for(let i=0; i<5; i++){
                if(ExpReg[i].test(pass)){
                    Elementos[i].hide();
                    check++;
                }
                else{
                    Elementos[i].show();
                }
            }

            if(check == 5){
                $("#password-security").html("Segura");
            }
        })
    });
}())