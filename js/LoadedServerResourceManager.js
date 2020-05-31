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
            if(ver_mustUpdate == true) {
                alert("You must update your Mario to play.")
                window.location.href = "US_RequiredUpdate.html";
            }else {
                alert("A new version of Mario is avaliable.")
            }
        }
    } else {
        alert("You are not online so some things might not work...")
    }
}

window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOfflineStatus);