// Callbacks
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
        console.log("Script loaded with src: " + src);
        // callback(src);
        callback(null, src); // In case of error, pass null
    };
    script.onerror = () => {
        console.log("Script not loaded with src: " + src);
        callback(new Error("Could not load script with src: " + src));
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if(error){
        console.log("Error: " + error);
        return;
    }
    alert("Hello World" + src);
}

function bye(error, src) {
    if(error){
        console.log("Error: " + error);
        sendEmergencyMessageToCeo();
        return;
    }
    alert("Goodbye" + src);
}


// Callback Hell or Pyramid of Doom
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function bye(error, src) {
    if(error){
        console.log("Error: " + error);
        sendEmergencyMessageToCeo();
        return;
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap2.bundle.min.js", function bye(error, src) {
        if(error){
            console.log("Error: " + error);
            sendEmergencyMessageToCeo();
            return;
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap3.bundle.min.js", function bye(error, src) {
            if(error){
                console.log("Error: " + error);
                sendEmergencyMessageToCeo();
                return;
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap4.bundle.min.js", function bye(error, src) {
                if(error){
                    console.log("Error: " + error);
                    sendEmergencyMessageToCeo();
                    return;
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap5.bundle.min.js", function bye(error, src) {
                    if(error){
                        console.log("Error: " + error);
                        sendEmergencyMessageToCeo();
                        return;
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap6.bundle.min.js", function bye(error, src) {
                        if(error){
                            console.log("Error: " + error);
                            sendEmergencyMessageToCeo();
                            return;
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap7.bundle.min.js", function bye(error, src) {
                            if(error){
                                console.log("Error: " + error);
                                sendEmergencyMessageToCeo();
                                return;
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap8.bundle.min.js", function bye(error, src) {
                                if(error){
                                    console.log("Error: " + error);
                                    sendEmergencyMessageToCeo();
                                    return;
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap9.bundle.min.js", function bye(error, src) {
                                    if(error){
                                        console.log("Error: " + error);
                                        sendEmergencyMessageToCeo();
                                        return;
                                    }
                                    loadScript()
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
