if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sworker.js").then(registration=>{
        console.log("Sevice worker registered")
        console.log(registration);
    }).catch(error=>{
            console.log("Service worker error")
            console.log(error)
        })
}
else{
    alert("Service worker not working");
}