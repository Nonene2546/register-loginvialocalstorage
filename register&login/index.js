// localStorage.setItem("data", null)
var result = JSON.parse(localStorage.getItem("data"))
console.log(result)



document.getElementById("register-button").addEventListener("click",function(){
    const email = $('#user-email').val();
    const password = $('#user-password').val();
    if(email==0||password==0){
        alert("Please fill up all requirement forms")
    }
    var stored_data = JSON.parse(localStorage.getItem("data"))
    // var new_data = {
    //     [email]: password
    // }
    // console.log(new_data)
    if(stored_data === null){
        stored_data = {}
    }
    stored_data[email] = password
    localStorage.setItem("data",JSON.stringify(stored_data))
    var result = JSON.parse(localStorage.getItem("data"))
    console.log(result)
    $('#user-email').val("")
    $('#user-password').val("")
    alert("Register successful!!")
})

document.getElementById("login-button").addEventListener("click", function(){
    const email = $('#user-email').val();
    const password = $('#user-password').val();
    if(email==0||password==0){
        alert("Please fill up all requirement forms")
    }
    var result = JSON.parse(localStorage.getItem("data"))
    $('#user-email').val("")
    $('#user-password').val("")
    if(result[email] == password){
        alert("login successful")
    }
    else{
        alert("login fail")
    }
})
