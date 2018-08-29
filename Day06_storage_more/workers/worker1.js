var num = -100;

onmessage = function(evt){
    num = evt.data;
};

setInterval(sendNum, 1000);

function sendNum(){
    postMessage(Math.round(Math.random()*num));
}
