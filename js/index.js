var switchCon = document.getElementById('switch'); 
var toggle = document.getElementById('toggle');

if(getCookie('direction') == null){
    setCookie('direction','left',14);
}
changeBg(getCookie('direction'));

switchCon.addEventListener("click", () => checkBg());

function changeBg(dir){
    if(dir == 'right'){
        toggle.style.left = '55px';
        toggle.style.backgroundImage = 'linear-gradient(0deg, #c31432,#c31432)';
        document.body.style.backgroundImage = 'linear-gradient(0deg, #c31432,#c31432)';
        document.body.style.animation = '';
    }else if(dir == 'left'){
        toggle.style.left = '0px';
        toggle.style.backgroundImage = 'linear-gradient(-45deg, #ff0037, #8400ff)';
        document.body.style.backgroundImage = '-webkit-linear-gradient(-45deg, #200122,#6f0000, #ff0037, #8400ff, #23d5ab)';
        document.body.style.backgroundImage = 'linear-gradient(-45deg, #200122,#6f0000, #ff0037, #8400ff, #23d5ab)';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'gradient 15s ease infinite';
    }
}

function checkBg(){
    if(getCookie('direction') == 'left'){
        setCookie('direction','right',14);
    }else if(getCookie('direction') == 'right'){
        setCookie('direction','left',14);
    }
    changeBg(getCookie('direction'));
}

function setCookie(name, value, expire){
    const date = new Date();
    date.setTime(date.getTime() + (expire * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const arr = cDecoded.split("; ");
    let result = null;

    arr.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1);
        }
    })
    return result;
}