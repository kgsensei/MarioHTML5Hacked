updateOnlineStatus()

function updateOnlineStatus() {
    online = true
}

function updateOfflineStatus() {
    online = false
}

function RunMarioScripts() {
    if(online == true) {
        if(ver_current != Current_Client_Running_Ver) {
            alert("A new version of Mario is avaliable.")
        }if(ver_mustUpdate.indexOf(Current_Client_Running_Ver) > -1) {
            alert("A new version of Mario is required to play.")
            window.location.href = "US_RequiredUpdate.html";
        }
    }if(online == false) {
        alert("You are not online so some things might not work...")
    }
}

window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOfflineStatus);