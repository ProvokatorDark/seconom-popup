window.onload = function () {
    document.querySelectorAll('.slides li div#wrap').forEach(image => {
        image.onclick = () => {
            let mainImg = (image.querySelector('img'))
            console.log(mainImg)
            document.querySelector('.popup-window-slides').style.display = 'block';
            document.querySelector('.popup-window span').style.display = 'block'
            $(".popup-window-slides").slick('setPosition');
        }
    })
    document.querySelector('.popup-window span').onclick = () => {
        document.querySelector('.popup-window-slides').style.display = 'none';
        document.querySelector('.popup-window span').style.display = 'none';
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent)) {
        $('.popup-window-slides').slick({
            arrows: false,
            dots: true,
            fade: true,
            infinite: true,
            adaptiveHeight:false
        });
    } else (
        $('.popup-window-slides').slick({
            arrows: true,
            dots: true,
            fade: true,
            infinite: true,
            adaptiveHeight:true
        })
    )


};



