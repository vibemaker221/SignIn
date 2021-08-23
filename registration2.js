/*reistration form validation functions*/
function validateregistration()
{  
    var username=document.getElementById('name') 
    var email=document.getElementById('email')
    var phoneno=document.getElementById('phno')
    var password=document.getElementById('psw')
    var pswrpt=document.getElementById('psw-rpt')

  
    if (username.value == null || username.value =='')
      {  
      alert('Name is required');  
      return false;  
      }
    if (email.value == null || email.value =='')
      {  
      alert('Email is required');  
      return false;  
      }
    if (phoneno.value == null || phoneno.value =='')
      {  
      alert('Phone no is required');  
      return false;  
      }
    if(password.value.length <= 8)
      {  
      alert('Password must be greater than 8 characters.')
      return false;  
      }  
    if(password.value.length >= 15)
      {  
      alert('Password must be lesser than 15 characters.')
      return false;  
      }
    if(pswrpt.value != password)
      {  
      alert('Please repeat the Password correctly.')
      return false; 
      }
}