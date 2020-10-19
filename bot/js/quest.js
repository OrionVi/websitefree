setInterval(function() {

    document.getElementById('startQuest').onclick = function() {
        document.getElementById('wumpus').classList = ''
        document.getElementById('wumpus').classList = 'animate__animated animate__bounceOut animate__faster'
        document.getElementById('wumpus').addEventListener('animationend', () => {
            document.getElementById('wumpus').style.display = 'none'
            document.getElementById('wumpusNav').style.display = 'block'
            document.getElementById('wumpus2').style.display = 'block'
        });
        document.getElementById('wumpusModal').style.display = 'none'
    }

    document.getElementById('wumpus2').onclick = function() {
        document.getElementById('wumpus2').classList = ''
        document.getElementById('wumpus2').classList = 'animate__animated animate__bounceOut animate__faster'
        document.getElementById('wumpus2').addEventListener('animationend', () => {
            document.getElementById('howManyFound').innerText = '1'
            document.getElementById('wumpus3').style.display = 'block'
        });
    }

    document.getElementById('wumpus3').onclick = function() {
        document.getElementById('wumpus3').classList = ''
        document.getElementById('wumpus3').classList = 'animate__animated animate__bounceOut animate__faster'
        document.getElementById('wumpus3').addEventListener('animationend', () => {
            document.getElementById('howManyFound').innerText = '2'
            document.getElementById('wumpus4').style.display = 'block'
        });
    }

    document.getElementById('wumpus4').onclick = function() {
        document.getElementById('wumpus4').classList = ''
        document.getElementById('wumpus4').classList = 'animate__animated animate__bounceOut animate__faster'
        document.getElementById('wumpus4').addEventListener('animationend', () => {
            document.getElementById('howManyFound').innerText = '3'
            document.getElementById('wumpus5').style.display = 'block'
        });
    }


    document.getElementById('wumpus5').onclick = function() {
        document.getElementById('wumpus5').classList = ''
        document.getElementById('wumpus5').classList = 'animate__animated animate__bounceOut animate__faster'
        document.getElementById('wumpus5').addEventListener('animationend', () => {
            document.getElementById('howManyFound').innerText = '4'
            document.getElementById('wumpus6').style.display = 'block'
        });
    }


    document.getElementById('wumpus6').onclick = function() {
        document.getElementById('wumpus6').classList = ''
        document.getElementById('wumpus6').classList = 'animate__animated animate__bounceOut animate__faster'
        document.getElementById('wumpus6').addEventListener('animationend', () => {
            document.getElementById('howManyFound').innerText = '5'
            document.getElementById('wumpus7').style.display = 'block'
        });
    }


    document.getElementById('wumpus7').onclick = function() {
        document.getElementById('wumpus7').classList = ''
        document.getElementById('wumpus7').classList = 'animate__animated animate__bounceOut animate__faster'
        document.getElementById('wumpus7').addEventListener('animationend', () => {
            document.getElementById('howManyFound').innerText = '6'
            document.getElementById('wumpus8').style.display = 'block'
        });
    }


    document.getElementById('wumpus8').onclick = function() {
        document.getElementById('wumpus8').classList = ''
        document.getElementById('wumpus8').classList = 'animate__animated animate__bounceOut animate__faster'
        document.getElementById('wumpus8').addEventListener('animationend', () => {
            document.getElementById('wumpusNav').style.display = 'none'
            document.getElementById('wumpusDone').style.display = 'block'
        });
    }

}, 2000);