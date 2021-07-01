function Log_in() {
    username= document.getElementById("user_name").value
    localStorage.setItem("userKey",username)
    window.location="kwitter_room.html"
}