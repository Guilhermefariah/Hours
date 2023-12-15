function load(){
    let divMsg = document.getElementById('msg')
    let img = document.getElementById('image')
    let date = new Date()
    let hour = date.getHours()
    //let hour = 8
    divMsg.innerHTML = `Now it's ${hour} hours.`
    if (hour >= 0 && hour < 12) {
        img.src = 'image/3.png'
        //good morning
        document.body.style.background = '#3D5967'
    }else if (hour >= 12 && hour < 18){
        img.src = "image/2.png"
        // good afternoon
        document.body.style.background ='#E1B092'
    }else  {
        img.src = 'image/1.png'
        //good night
        document.body.style.background ='#3B3841'
    }


}