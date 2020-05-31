Current_Client_Running_Ver = "2.5.3"

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