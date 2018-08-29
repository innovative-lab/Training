    document.getElementsByTagName("li")[0].addEventListener("click",clickHandler);
        document.getElementsByTagName("li")[4].addEventListener("click",stopHandler);
    
    function clickHandler(){
        alert("you clicked me");
    }
    function stopHandler(){
        document.getElementsByTagName("li")[0].removeEventListener("click",clickHandler);
    }