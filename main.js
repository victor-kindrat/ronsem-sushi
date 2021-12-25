let moreTrigger = 0;

more.onclick = function (){
    if (moreTrigger == 0) {
        hidden.style.display = 'block';
        arrow1.style.transform = 'rotate(180deg)';
        more.style.background = 'transparent';
        moreTrigger = 1;
    } else {
        hidden.style.display = 'none';
        arrow1.style.transform = 'rotate(0deg)';
        more.style.background = 'linear-gradient(180deg, rgba(242, 242, 242, 0) 0%, #F2F2F2 100%)';
        moreTrigger = 0;
    }

}