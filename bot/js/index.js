Array.prototype.random = function(length) {
    return this[Math.floor((Math.random() * length))];
}


$(document).ready(function() {
    var wumpus = ["https://i.imgur.com/v9I104U.png", "https://i.imgur.com/fHaiGHB.png", "https://i.imgur.com/ua3J2da.png", "https://i.imgur.com/wbO70md.png", "https://i.imgur.com/TB9uwsp.png", "https://i.imgur.com/3NPfQwV.png"]

    var wumpus_man = wumpus.random(wumpus.length)
    document.getElementById('wumpus').src = wumpus_man
    document.getElementById('wumpus2').src = wumpus_man
    document.getElementById('wumpus3').src = wumpus_man
    document.getElementById('wumpus4').src = wumpus_man
    document.getElementById('wumpus5').src = wumpus_man
    document.getElementById('wumpus6').src = wumpus_man
    document.getElementById('wumpus7').src = wumpus_man
    document.getElementById('wumpus8').src = wumpus_man
    document.getElementById('wumpus').style.display = ''

    const fragment = new URLSearchParams(window.location.hash.slice(1));
    if (fragment.has('action')) {
        if (fragment.get('action') === 'logout') {
            notie.alert({
                type: 'success',
                text: 'Successfully logged out of your account',
                time: 3, // optional, default = 3, minimum = 1,
                position: 'bottom'
            })
        }
    } else if (fragment.has('ref')) {
        const ref = fragment.get('ref')
        localStorage.setItem('ref', ref)
    }
    var typed = new Typed('#typed', {
        strings: ["Discord server", "Discord bot", "Discord template"],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1700,
        shuffle: false,
        smartBackspace: false,
        loop: true,
    });

    var accessToken = localStorage.getItem('access_token')
    var tokenType = localStorage.getItem('token_type')

    if (accessToken === null || accessToken === undefined || tokenType === null || tokenType === undefined) {
        document.getElementById('pfp').style.display = 'none';
        document.getElementById('login_text').onclick = 'location.href = "./login"'
        document.getElementById('login_text').style.display = ''
        document.getElementById('name').style.display = 'none'
        document.getElementById('login_text').innerHTML = '<i class="fab fa-discord"></i> Login with Discord'
    } else {
        fetch('https://discordapp.com/api/users/@me', {
                headers: {
                    authorization: `${tokenType} ${accessToken}`
                }
            })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.message != null) {
                    if (response.message.includes('Unauthorized')) {
                        //location.href = './login'
                        document.getElementById('pfp').style.display = 'none';
                        document.getElementById('login_text').onclick = 'location.href = "./login"'
                        document.getElementById('login_text').style.display = ''
                        document.getElementById('name').style.display = 'none'
                        document.getElementById('login_text').innerHTML = '<i class="fab fa-discord"></i> Login with Discord'
                    }
                } else {
                    username = response.username;
                    tag = response.discriminator;
                    premium_type = response.premium_type;
                    avatar = response.avatar;
                    userid = response.id;

                    document.getElementById('homepage_btn_1').innerText = 'Launch Dashboard'
                    document.getElementById('homepage_btn_1').onclick = function() {
                        location.href = './dashboard'

                        LogRocket.identify(response.id, {
                            name: response.username + '#' + response.discriminator,
                            email: response.email,
                            userid: response.id,
                            avatar: response.avatar,
                            nitro_type: response.premium_type
                        });
                    }

                    document.getElementById('homepage_btn_2').onclick = function() {
                        location.href = './dashboard'
                    }
                    document.getElementById('homepage_btn_2').innerText = 'Launch Dashboard'
                    if (premium_type === 1 || premium_type === 2) {
                        premium = 'png';
                    } else {
                        premium = 'png';
                    }

                    document.getElementById('name').innerText = `${username}#${tag}`
                    document.getElementById('avatar').src = `https://cdn.discordapp.com/avatars/${userid}/${avatar}.${premium}?size=256`
                }
            });
    }

});

window.onload = function() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('content').style.display = '';

    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    console.log('OK')
    toMatch.some((toMatchItem) => {
        if (navigator.userAgent.match(toMatchItem) !== null) {
            console.log(navigator.userAgent.match(toMatchItem));

            //mobile modifications
            document.getElementById('wumpus').style.display = 'none'
            document.getElementById('name').style.display = 'none';
            document.getElementById('break').innerHTML = '<br>'
            document.getElementsByClassName('navbar navbar-expand-lg')[0].style.padding = '25px';
            document.getElementsByClassName('rounded-lg')[1].style.padding = '15px'
            document.getElementsByClassName('rounded-lg')[1].style.height = ''
            document.getElementsByClassName('rounded-lg')[0].style.height = ''
            document.getElementsByClassName('rounded-lg')[0].style.padding = '15px'
            document.getElementsByClassName('rounded-lg')[0].style.height = '88vh'
            document.getElementsByClassName('rounded-lg')[1].style.height = '88vh'
            document.getElementsByClassName('mx-auto p-10')[1].style.padding = '0px'
            document.getElementsByClassName('navbar-nav ml-5')[0].style.display = 'none'
            document.getElementById('mobileNav').style.display = ''
            document.getElementsByClassName('cards cc_cursor')[0].style.marginLeft = '10%'
            document.getElementsByClassName('mx-auto p-10')[0].style.padding = '0px'
            document.getElementsByClassName(' text-2xl mb-2 text-white text-center')[0].style.marginTop = '-40px'
            document.getElementsByClassName(' text-2xl mb-2 text-white text-center')[1].style.marginTop = '-40px'
        }
    });
}

setTimeout(function() {
    var stateObj = {
        keep: "url"
    };
    history.pushState(stateObj, "page 2", "/");
}, 250);