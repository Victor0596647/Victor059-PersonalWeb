var switchCon = document.getElementById('switch'); 
var toggle = document.getElementById('toggle');

changeBg();

switchCon.addEventListener("click", () => changeBg());

function changeBg(){
    if(toggle.style.left == '0px'){
        toggle.style.left = '55px';
        toggle.style.backgroundImage = 'linear-gradient(0deg, #c31432,#c31432)';
        document.body.style.backgroundImage = 'linear-gradient(0deg, #c31432,#c31432)';
        console.log('right');
    }else{
        toggle.style.left = '0px';
        toggle.style.backgroundImage = 'linear-gradient(-45deg, #ff0037, #8400ff)';
        document.body.style.backgroundImage = '-webkit-linear-gradient(-45deg, #200122,#6f0000, #ff0037, #8400ff, #23d5ab)';
        document.body.style.backgroundImage = 'linear-gradient(-45deg, #200122,#6f0000, #ff0037, #8400ff, #23d5ab)';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'gradient 15s ease infinite';
        console.log('left');
    }
}