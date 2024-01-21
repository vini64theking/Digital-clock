function clockProgram(){
    const now=new Date();
    let hours=now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const mins=now.getMinutes().toString().padStart(2,0);
    const sec=now.getSeconds().toString().padStart(2,0);
    const timestring=`${hours}:${mins}:${sec} ${meridiem}`;
    document.getElementById("clock").textContent = timestring;
    
}

clockProgram();
setInterval(clockProgram, 1000);