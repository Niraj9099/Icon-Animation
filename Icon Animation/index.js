const tempLoad = () => {
        
    let temp = document.getElementById('temp');
    temp.innerHTML =  ' <i class="fa fa-thermometer-empty" aria-hidden="true"></i> ';
    temp.style.color = "rgb(54, 34, 46)"
       
    setTimeout(()=>{
        temp.innerHTML =  ' <i class="fa fa-thermometer-quarter" aria-hidden="true"></i> ';
        temp.style.color = "yellow"
    },1000)

    setTimeout(()=>{
        temp.innerHTML =  ' <i class="fa fa-thermometer-half" aria-hidden="true"></i> ';
    },2000)

    setTimeout(()=>{
        temp.innerHTML =  ' <i class="fa fa-thermometer-three-quarters" aria-hidden="true"></i> ';
    },3000)
    
    setTimeout(()=>{
        temp.innerHTML =  ' <i class="fa fa-thermometer-full" aria-hidden="true"></i> ';
        temp.style.color = "red"
    },4000)

}
    tempLoad();
    setInterval(tempLoad, 5000)

     const dots = () => {
    let dot = document.getElementById('dot');
    dot.innerHTML = '.'
    
    setTimeout(()=>{
        dot.innerHTML = '..'
    },500)

    setTimeout(()=>{
        dot.innerHTML = '...'
    },800)

    setTimeout(()=>{
        dot.innerHTML = '....'
    },1000)

     }

    dots();
    setInterval(dots, 1500)