    let boxList = document.querySelectorAll('ul')[0];
    let boxChi = boxList.children;
    let len = boxChi.length;
    let lasts = document.getElementsByClassName('slider__button--prev')[0];
    let nexts = document.getElementsByClassName('slider__button--next')[0];
    let num = 1;

    nexts.onmousedown = function () {
        if (num==len-2){
            boxList.style.transition = '0s';
            num=0;
        }
    };
    nexts.onmouseup = function(){
        num++;
        boxList.style.left = num*-590+"px";
        boxList.style.transition = '0.5s';
    };

    lasts.onmousedown = function () {
        if (num==0){
            boxList.style.transition = '0s';
            num=len-2;
        }
    };
    lasts.onmouseup = function(){
        num--;
        boxList.style.left = num*-590+"px";
        boxList.style.transition = '0.5s';
    };

