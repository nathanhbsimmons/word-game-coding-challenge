


export const timer = () => {
    let count = 60 
   
    return setInterval(() => {
        $("#counter").html(count--);
        if(count == 1) clearInterval(timer);
    }, 1000);
}

const  