function clearUpdate() {
    document.getElementById('updateModal').style.display = "none";
}

$(document).ready(function() {
    if (window.location.hostname != 'dsc.gg' && window.location.hostname != 'localhost') location.href = 'https://dsc.gg/dashboard'
    if (localStorage.getItem('read_update') != 'true') {
        //document.getElementById('updateModal').style.display = "block";
    }

    function tryCoupon() {
        var coupon = document.getElementById('coupon').value
        $.ajax({
            type: "GET",
            url: "/api/checkCoupon?coupon=" + coupon,
            contentType: "application/json"
        }).then((response) => {
            if (response === "500: Missing 'Coupon' in query") {
                document.getElementById('couponSuccess').style.display = 'none'
                document.getElementById('couponError').innerText = "You didn't enter a coupon code!"
                document.getElementById('couponError').style.display = ''
            } else if (response.code === 'resource_missing') {
                document.getElementById('couponSuccess').style.display = 'none'
                document.getElementById('couponError').innerText = 'Coupon code does not exist'
                document.getElementById('couponError').style.display = ''
            } else if (response.id === document.getElementById('coupon').value) {
                document.getElementById('couponError').style.display = 'none'
                document.getElementById('couponSuccess').innerText = 'Coupon will be applied at checkout'
                document.getElementById('couponSuccess').style.display = ''
            }
            console.log(response)
        });
    }

    const fragment = new URLSearchParams(window.location.hash.slice(1));
    accessToken = localStorage.getItem('access_token')
    tokenType = localStorage.getItem('token_type')
    if (fragment.has('access_token')) {
        localStorage.setItem('access_token', fragment.get('access_token'))
        localStorage.setItem('token_type', fragment.get('token_type'))
    }
    if (fragment.has('action')) {
        if (fragment.get('action') === 'saved') {
            notie.alert({
                type: 'success',
                text: 'Successfully saved changes',
                time: 4, // optional, default = 3, minimum = 1,
                position: 'bottom'
            })
        }

        if (fragment.get('action') === 'deleted') {
            notie.alert({
                type: 'success',
                text: 'Successfully deleted the link',
                time: 4, // optional, default = 3, minimum = 1,
                position: 'bottom'
            })
        }

        if (fragment.get('action') === 'transfer') {
            notie.alert({
                type: 'success',
                text: 'Successfully sent transfer request. Staff will review it shortly.',
                time: 4.3, // optional, default = 3, minimum = 1,
                position: 'bottom'
            })
        }
    }

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
                    location.href = './login'
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

                LogRocket.identify(response.id, {
                    name: response.username + '#' + response.discriminator,
                    email: response.email,
                    userid: response.id,
                    avatar: response.avatar,
                    nitro_type: response.premium_type
                });

                $.ajax({
                    type: "POST",
                    url: "/api/register",
                    contentType: "application/x-www-form-urlencoded",
                    data: {
                        token: encodeURIComponent(`${tokenType} ${accessToken}`)
                    }
                }).then((response) => {
                    if (response.includes('200')) {
                        location.reload()
                    }
                });

                $.ajax({
                    type: "GET",
                    url: "/api/announcements/" + userid,
                    contentType: "application/json"
                }).then((response) => {
                    console.log(response)
                    if (response[0] === undefined || response[0] === null) {
                        document.getElementById('announcements').innerHTML = '<h4 class="text-light">All caught up!</h4>'
                    } else {
                        res = response
                        console.log(response)
                        response.forEach(check => {
                            if (check.for != 'all') {
                                fetch('https://cors-anywhere.herokuapp.com/https://bans-data.ksoft.si/bans/' + check.author, {})
                                    .then(res => res.json())
                                    .then(response => {
                                        document.getElementById('announcements').innerHTML += `<div class="alert alert-${check.type}">
                            <button id="confirm_${check.id}" onclick="confirmDismiss('${check.id}')" type="button" data-dismiss="alert" aria-label="Close" style="float:right" class="grow"><span aria-hidden="true" class="btn btn-danger btn-sm" id="text_${check.id}">Dismiss</span></button><b>Private Announcement From <span>${response.user.username}:</span></b> ${check.message}</div>`
                                    });
                            } else {
                                document.getElementById('announcements').innerHTML += `<div class="alert alert-${check.type}"><b>Public Announcement:</b> ${check.message}</div>`
                            }
                        });
                    }
                });

                $.ajax({
                    type: "GET",
                    url: "/api/links/" + userid,
                    contentType: "application/json"
                }).then((response) => {
                    if (response === 'None') {
                        document.getElementById('insert_links').innerHTML = '<h4 class="text-light">No existing links</h4>'
                    } else {
                        var u_links = response;
                        response.forEach(check => {
                            if (check.redirect === undefined || check.redirect === null) return;
                            document.getElementById('insert_links').innerHTML += `<div class="rounded-lg" style="border: #52639c; padding: 0.4em;">
                        <div class="text-xl mb-2 text-white">
                            <span class="hover-blurple" style="border-radius: 5px; padding: 10px; font-size:1.1em; background: #16171a">&nbsp&nbsp&nbspdsc.gg/${check.link}&nbsp&nbsp</span> <i class="remove-mobile-arrow fas fa-arrow-right"></i>
                                <label>
                                    <span class="remove-mobile-link hover-blurple" style="border-radius: 5px; padding: 10px; font-size:1.1em; background: #16171a">&nbsp&nbsp&nbsp${check.redirect.slice(0,28)}&nbsp&nbsp&nbsp</span>
                            
                                <button 
                                class="grow rounded-sm text-sm px-3 mx-auto animate hover-pointer"
                                onclick="location.href = './manage#link=${check.link}'"
                                style="
                                    outline: none; 
                                    height: 35px;
                                    position: relative;
                                    bottom: 2.5px;
                                    left: 20px;
                                    background: #7289da;
                                    text-rendering: optimizeLegibility;
                                    font-size:0.9em;
                                    font-family: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif;
                                    line-height: 1.15;
                                ">Manage</button>
                        </div>
                    </div>`
                        });
                    }

                });

                $.ajax({
                    type: "GET",
                    url: "/api/info/" + userid,
                    contentType: "application/json"
                }).then((response) => {
                    console.log(response)
                    document.getElementById('total_links').innerText = response.links
                    if (response.premium === "true") {
                        document.getElementsByClassName('text-danger')[0].innerText = 'Subscribed!'
                        document.getElementsByClassName('badge badge-info align-middle')[0].innerText = 'Unlimited Links | Premium'
                        document.getElementsByClassName('text-danger')[0].classList.add('text-success')
                        document.getElementsByClassName('text-danger')[0].classList.remove('text-danger')
                        document.getElementsByClassName('rounded-full text-sm px-3 mx-auto animate hover-pointer')[0].style.display = 'none'
                        document.getElementsByClassName('col-4 hover-blurple')[0].innerHTML = document.getElementsByClassName('col-4 hover-blurple')[0].innerHTML.replace('Benefits of premium:', 'Your Benefits:')
                        has_3 = false
                    } else if (response.links >= 4) {
                        has_3 = true
                    } else {
                        has_3 = false
                    }
                }).catch((err) => {
                    response = err.responseText
                    if (response === 'User is blacklisted') return location.href = './403'
                });

                if (premium_type === 1 || premium_type === 2) {
                    premium = 'png';
                } else {
                    premium = 'png';
                }
                document.getElementById('name').innerText = `${username}#${tag}`
                document.getElementById('avatar').src = `https://cdn.discordapp.com/avatars/${userid}/${avatar}.${premium}?size=256`
            }
        });
});

link_type = 'server'

function change(type) {
    if (type === 'server') {
        link_type = 'server'
        document.getElementById('inLink').placeholder = 'https://discord.gg/something'
        //span id="typeOfInvite">Server Invite</span>
        document.getElementById('typeOfInvite').innerText = 'Server Invite'
        document.getElementById('clientId').style.display = 'none'
    }
    if (type === 'bot') {
        link_type = 'bot'
        document.getElementById('inLink').placeholder = 'https://discord.com/oauth2/authorize?client_id=something'
        document.getElementById('typeOfInvite').innerText = 'Bot Invite'
        document.getElementById('clientId').style.display = ''
    }
    if (type === 'template') {
        link_type = 'template'
        document.getElementById('inLink').placeholder = 'https://discord.new/something'
        document.getElementById('typeOfInvite').innerText = 'Server Template Link'
        document.getElementById('clientId').style.display = 'none'

    }
}

function submitLink() {
    if (link_type === 'server') {
        var value = document.getElementById('inLink').value
        var link = document.getElementById('shortLink').value
        $.ajax({
            type: "POST",
            url: "/api/create",
            contentType: "application/x-www-form-urlencoded",
            data: {
                token: encodeURIComponent(`${tokenType} ${accessToken}`),
                type: encodeURIComponent('server'),
                redirect: value,
                link: encodeURIComponent(link),
            }
        }).then((response) => {
            console.log(response)
            if (response.includes('200')) {
                location.href = './manage#link=' + link
            }
        }).catch((err) => {
            response = err.responseText
            if (response.includes('Short link is already taken')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">This short link is already taken!</div>'
            } else if (response.includes('many links')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">You have the max of 3 links!</div>'
            } else if (response.includes('Contains invalid chars 2')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your short link can not contain spaces! Try dashes (-) instead.</div>'
            } else if (response.includes('Contains invalid chars')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your short link contains invalid characters!</div>'
            } else if (response.includes('Redirect can not be blank')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your redirect can not be blank</div>'
            } else if (response.includes('Slug can not be blank')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your custom ending can not be blank!</div>'
            } else if (response.includes('Redirect is invalid')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your redirect should start with https://discord.gg</div>'
            }
        });
    }

    if (link_type === 'bot') {
        var value = document.getElementById('inLink').value
        var client = document.getElementById('clientIdInput').value
        var link = document.getElementById('shortLink').value

        $.ajax({
            type: "POST",
            url: "/api/create",
            contentType: "application/x-www-form-urlencoded",
            data: {
                token: encodeURIComponent(`${tokenType} ${accessToken}`),
                type: encodeURIComponent('bot'),
                redirect: value,
                client: client,
                link: encodeURIComponent(link),
            }
        }).then((response) => {
            console.log(response)
            if (response.includes('200')) {
                location.href = './manage#link=' + link
            }
        }).catch((err) => {
            response = err.responseText
            if (response.includes('Short link is already taken')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">This short link is already taken!</div>'
            } else if (response.includes('many links')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">You have the max of 3 links!</div>'
            } else if (response.includes('Contains invalid chars 2')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your short link can not contain spaces! Try dashes (-) instead.</div>'
            } else if (response.includes('Contains invalid chars')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your short link contains invalid characters!</div>'
            } else if (response.includes('Redirect can not be blank')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your redirect can not be blank</div>'
            } else if (response.includes('Slug can not be blank')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your custom ending can not be blank!</div>'
            } else if (response.includes('Redirect is invalid')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your redirect should start with https://discord.com/oauth2/authorize</div>'
            }
        });
    }

    if (link_type === 'template') {
        var value = document.getElementById('inLink').value
        var link = document.getElementById('shortLink').value

        $.ajax({
            type: "POST",
            url: "/api/create",
            contentType: "application/x-www-form-urlencoded",
            data: {
                token: encodeURIComponent(`${tokenType} ${accessToken}`),
                type: encodeURIComponent('template'),
                redirect: value,
                link: encodeURIComponent(link),
            }
        }).then((response) => {
            console.log(response)
            if (response.includes('200')) {
                location.href = './manage#link=' + link
            }
        }).catch((err) => {
            response = err.responseText
            if (response.includes('Short link is already taken')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">This short link is already taken!</div>'
            } else if (response.includes('many links')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">You have the max of 3 links!</div>'
            } else if (response.includes('Contains invalid chars 2')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your short link can not contain spaces! Try dashes (-) instead.</div>'
            } else if (response.includes('Contains invalid chars')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your short link contains invalid characters!</div>'
            } else if (response.includes('Redirect can not be blank')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your redirect can not be blank</div>'
            } else if (response.includes('Slug can not be blank')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your custom ending can not be blank!</div>'
            } else if (response.includes('Redirect is invalid')) {
                document.getElementById('errorDiv').innerHTML = '<div class="alert alert-danger">Your redirect should start with https://discord.new</div>'
            }
        });
    }
}

/*
$.ajax({
            type: "POST",
            url: "/api/update",
            contentType: "application/x-www-form-urlencoded",
            data: {
                token: encodeURIComponent(`${tokenType} ${accessToken}`),
                redirect: encodeURIComponent('hihi'),
                type: encodeURIComponent('server'),
                link: encodeURIComponent('hihi'),
            }
        }).then((response) => {
            console.log(response)
        });




        <div class="rounded-lg" style="border: #52639c; padding: 0.4em;">
        <div class="text-xl mb-2 text-white">
            <span class="hover-blurple" style="border-radius: 5px; padding: 10px; font-size:1.1em; background: #16171a">&nbsp&nbsp&nbspdsc.gg/vPbTeUJfrd&nbsp&nbsp&nbsp</span> <i class="fas fa-arrow-right"></i>
                <label>
                    <span class="hover-blurple" style="border-radius: 5px; padding: 10px; font-size:1.1em; background: #16171a">&nbsp&nbsp&nbspdiscord.gg/greger&nbsp&nbsp&nbsp</span>
            
                <button 
                class="rounded-sm text-sm px-3 mx-auto animate hover-pointer"
                style="
                    outline: none; 
                    height: 35px;
                    position: relative;
                    bottom: 2.5px;
                    left: 20px;
                    background: #7289da;
                    text-rendering: optimizeLegibility;
                    font-size:0.9em;
                    font-family: Whitney, Helvetica Neue, Helvetica, Arial, sans-serif;
                    line-height: 1.15;
                ">Manage</button>
        </div>
    </div>
*/



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


            setInterval(function() {
                $('.remove-mobile-link').each(function(i, obj) {
                    document.getElementsByClassName('remove-mobile-link')[i].style.display = 'none'
                    document.getElementsByClassName('remove-mobile-arrow')[i].style.display = 'none'
                });
            }, 500);

            //mobile modifications
            document.getElementsByClassName('navbar-nav ml-5')[0].style.display = 'none'
            document.getElementsByClassName('rounded-lg')[3].style.margin = '2em'
            document.getElementById('name').style.display = 'none';
            document.getElementsByClassName('navbar navbar-expand-lg')[0].style.padding = '25px';
            document.getElementsByClassName('navbar navbar-expand-lg')[0].style.marginBottom = '70px';
            document.getElementsByClassName('rounded-lg')[2].style.margin = '1.5em'
            document.getElementById('openButton').style.float = '';
            document.getElementById('openButton').style.marginLeft = 'auto';
            document.getElementById('openButton').style.display = 'block';
            document.getElementById('openButton').style.marginBottom = '20px';
            document.getElementById('openButton').style.marginRight = 'auto';

            document.getElementById('announcements').style.float = '';
            document.getElementById('announcements').style.marginLeft = 'auto';
            document.getElementById('announcements').style.width = '100%';
            document.getElementById('announcements').style.display = 'block';
            document.getElementById('announcements').style.marginBottom = '20px';
            document.getElementById('announcements').style.marginRight = 'auto';
            document.getElementById('yourLinkHeader').innerText = 'Your Links';
            document.getElementById('premiumStatusThingy').style.display = 'none';
            document.getElementById('premiumStatusThingy2').style.display = '';
            document.getElementsByClassName('col-8')[0].classList.add('col-12');
            document.getElementsByClassName('col-8')[0].classList.remove('col-8');
            document.getElementById('freeLinksUsed').innerText = 'Used'
            document.getElementsByClassName('rounded-md pl-3 pr-3 pb-3 object-center modal-content-1 bounce-in-fwd')[0].style.width = '90%';
            document.getElementsByClassName('rounded-md p-4 object-center modal-content-1 bounce-in-fwd')[0].style.width = '90%';
            document.getElementsByClassName('text-center')[3].innerHTML = 'You have reached the max of 3 links allowed<br><br>for free users. Consider buying premium for<br><br>unlimited links'


        }
    });
}

setTimeout(function() {
    var stateObj = {
        keep: "url"
    };
    history.pushState(stateObj, "page 2", "/dashboard");
}, 250);



function confirmDismiss(announceid) {
    $.ajax({
        type: "POST",
        url: "/api/dismissAnnouncement",
        contentType: "application/x-www-form-urlencoded",
        data: {
            id: announceid,
            token: encodeURIComponent(`${tokenType} ${accessToken}`)
        }
    }).then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    });
    //document.getElementById('confirm_' + id).innerHTML = `<span aria-hidden="true" class="btn btn-danger btn-sm">Confirm?</span>`
}