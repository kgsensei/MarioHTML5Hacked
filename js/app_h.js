var Current_Client_Running_Ver = "2.5.3"

function setlives() {
    if(NotGame == false) {
        livemar = prompt("Lives (Number Only): ")
        Mario.MarioCharacter.Lives = livemar
    }
}
function setcoin() {
    if(NotGame == false) {
        coinmar = prompt("Coins (Number Only): ")
        Mario.MarioCharacter.Coins = coinmar
    }
}
function oninv() {
    if(NotGame == false) {
        mariofire = prompt("0 = Not Fire\n1 = Fire\n\nAllow Code:")
        if(mariofire == 0) {
            Mario.MarioCharacter.Fire = false
        } else {
            Mario.MarioCharacter.Fire = true
        }
    }
}
function mariospeeda() {
    if(NotGame == false) {
        mariospeed = prompt("Speed: ")
        Mario.MarioCharacter.AirInertia = mariospeed
    }
}
function levelmax() {
    if(NotGame == false) {
        Mario.MarioCharacter.GetFlower()
    }
}
Mario.GodMode = function() {
    if(NotGame == false) {
        Mario.MarioCharacter.InvulnerableTime = 999999
        setTimeout(function(){ Mario.GodMode(); }, 500);
    }
}
function ApplySettings() {
    brightness = document.getElementById("briRange").value;
    if(brightness <= 5) {
        document.body.style.backgroundColor = "rgb(20, 20, 20)"
    }if(brightness > 5 && brightness < 10) {
        document.body.style.backgroundColor = "rgb(30, 30, 30)"
    }if(brightness > 10 && brightness < 20) {
        document.body.style.backgroundColor = "rgb(40, 40, 40)"
    }if(brightness > 20 && brightness < 30) {
        document.body.style.backgroundColor = "rgb(50, 50, 50)"
    }if(brightness > 30 && brightness < 40) {
        document.body.style.backgroundColor = "rgb(60, 60, 60)"
    }if(brightness > 40 && brightness < 50) {
        document.body.style.backgroundColor = "rgb(70, 70, 70)"
    }if(brightness == 50) {
        document.body.style.backgroundColor = "rgb(80, 80, 80)"
    }
}