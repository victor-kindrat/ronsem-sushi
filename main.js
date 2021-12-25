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
};

reviewsBtn.onclick = function () {
    home.style.display = 'none';
    reviews.style.display = 'flex';
    footer.style.top = '-50px';
}

menu.onclick = function () {
    home.style.display = 'block';
    reviews.style.display = 'none';
    footer.style.top = '-75px';
}

homeBtn.onclick = function () {
    home.style.display = 'block';
    reviews.style.display = 'none';
    footer.style.top = '-75px';
}

reviewAddBtn.onclick = function () {
    if (userName.value === '' || rev.value === ''){
        wrongAlert.style.transition = '3s';
        wrongAlert.style.opacity = '1';
        setTimeout(function () {
            wrongAlert.style.opacity = '0';
            wrongAlert.style.transition = '0s';
        }, 5000);
    } else {
        let name = userName.value;
        let review = rev.value;
        reviewsList.innerHTML = reviewsList.innerHTML + '<div class="reviews__block">\n' +
            '                    <div class="reviews__headPart">\n' +
            '                        <h2 class="reviews__name">'+ name +'</h2>\n' +
            '                        <p class="reviews__date">'+ datev.getMonth() + '.' + datev.getDay() + '.' + (datev.getFullYear() - 2000) +'</p>\n' +
            '                    </div>\n' +
            '                    <p class="reviews__review">\n' + review + '</p>\n' +
            '</div>'
        userName.value = '';
        rev.value = ''
    }
}

let datev = new Date();

dateVal.innerText = datev.getMonth() + '.' + datev.getDay() + '.' + (datev.getFullYear() - 2000);