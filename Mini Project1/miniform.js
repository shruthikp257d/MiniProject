//....main form validation


function validation(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let contry=document.getElementById("contry").value;
    let phone=document.getElementById("phone").value;
    let adate=document.getElementById("adate").value;
    let ddate=document.getElementById("ddate").value;
    let person=document.getElementById("person").value;
    let child=document.getElementById("child").value;
    let rooms=document.getElementById("rooms").value;
    let trip=document.getElementById("trip").value;
    let inform=document.getElementById("inform").value;

    
    // var regexpname=/\d+$/;
    var regexmail=/^([a-z A_Z 0-9.\-]+)@([a-z A-Z 0-9-]).([a-z]{2,8}).([a-z]{2,8})?$/;
    var regexphone=/^[6-9]\d{9}$/;

   
   
    if (name.trim()==""){

        // document.getElementById("text1").style.visibility="visible";
        alert("Please enter your name");
        
        

        return false;
    } 

    else if (!regexmail.test(email)||email.trim()==""){
        // document.getElementById("text2").style.visibility="visible";
        alert("Please check mail section");
        

        
        return false;
    
    }

    else if (contry.trim()==""){

        // document.getElementById("text3").style.visibility="visible";
        alert("Please enter your contry");

        
        

        return false;
    } 

    else if (!regexphone.test(phone)||phone.trim()==""){

        // document.getElementById("text4").style.visibility="visible";
        alert("Please check the phonenumber");

        

        return false;
    } 

    else if (adate.trim()==""){

        // document.getElementById("text5").style.visibility="visible";
        alert("Blank arraival date");

        

        return false;
    } 

    else if (ddate.trim()==""){

        // document.getElementById("text6").style.visibility="visible";
        alert("Blank diparture date");

        

        return false;
    } 

   else if (person==""){

        // document.getElementById("text7").style.visibility="visible";
        alert("Blank Number of adults");

        

        return false;
    } 

    else if (child==""){

        // document.getElementById("text8").style.visibility="visible";
        alert("Blank Number of children");

        

        return false;
    } 

    else if (rooms==""){

        // document.getElementById("text9").style.visibility="visible";
        alert("Blank Number of rooms");

        

        return false;
    } 

    else if (trip==""){

        // document.getElementById("text10").style.visibility="visible";
        alert("Blank Trip");

        

        return false;
    } 

    else if (inform.trim()==""){

        // document.getElementById("text11").style.visibility="visible";
        alert("Blank Additional information");

        

        return false;
    } 

    else{
        return true;
    }










}



//modal

function contact(){

    let name1=document.getElementById("name1").value;
    let email1=document.getElementById("email1").value;
    let phone1=document.getElementById("number1").value;
    let message1=document.getElementById("message1").value;

    var regexmail1=/^([a-z A_Z 0-9.\-]+)@([a-z A-Z 0-9-]).([a-z]{2,8}).([a-z]{2,8})?$/;
    var regexphone1=/^[6-9]\d{9}$/;

     
    if (name1.trim()==""){

        // document.getElementById("text_a").style.visibility="visible";
        alert("Please enter your name")
        

        return false
    } 

    else if (!regexmail1.test(email1)||email1.trim()==""){
        // document.getElementById("text_b").style.visibility="visible";
        alert("Check your mail id")
        
        return false
    
    }

    
    else if (!regexphone1.test(phone1)||phone1.trim()==""){

        // document.getElementById("text_c").style.visibility="visible";
        alert("Check your phone number")
        

        return false
    } 

    else if (message1.trim()==""){

        // document.getElementById("text_d").style.visibility="visible";
        alert("Enter your message ")
        

        return false
    } 

    else{
        return true;
    }

}