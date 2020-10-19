var access_token = localStorage.getItem('access_token')
var token = `Bearer ${access_token}`
var socket = io();

$(function() {
    var socket = io();
    $('form').submit(function(e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', encodeURIComponent(token), $('#m').val());
        $('#m').val('');
        return false;
    });
});


fetch('https://discordapp.com/api/users/@me', {
        headers: {
            authorization: `Bearer ${access_token}`
        }
    })
    .then(res => res.json())
    .then(response => {
        function notLoggedin() {
            document.getElementById('no_messages').innerHTML = '<span class="text-danger"><br>You must be logged in to send messages.</span>'
            document.getElementById('sendIt').innerHTML = '<button class="btn btn-danger" style="width:80%;margin-left:-10%;display:inline-block;align-content:center" onclick="location.href = `./login`" >Login with Discord</button>'
        }
        if (response.message != undefined && response.message != null) return notLoggedin()

        socket.on('new message', (data) => {
            document.getElementById('no_messages').style.display = 'none'
            if (data.ticket != response.id) return;
            if (data.staff === true) {
                document.getElementById('chat').innerHTML += `<br><span><b class="text-primary">${data.user}: </b> ${data.message}</span>`
            } else {
                document.getElementById('chat').innerHTML += `<br><span><b>${data.user}: </b> ${data.message}</span>`
            }
        });
    });