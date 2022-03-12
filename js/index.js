 $(document).ready(function(){
    var servicesS = $('#services');
    var processS = $('#process');
    var yearsS = $('#years');
    var positiveS = $('#positive');

   

    $(window).scroll(function(){
        var scroll = $(window).scrollTop() + $(window).height();
        var offsetServices = servicesS.offset().top - 600;
        var offsetProcess = processS.offset().top;
        var offsetYears = yearsS.offset().top - 400;
        var offsetPositive = positiveS.offset().top;


        if (scroll > offsetServices) {

            window.addEventListener('scroll', function() {
                var number = pageYOffset - offsetServices;

                if (number < -500) {
                    number = 0;
                } else if (number > 2000) {
                    number = 0;
                } 


                $('.services__mix-img').css(
                    'transform',
                    'translateY(-' + number / 18 + 'px)'
                );


                if (number / 400 > 1.9 ) {
                    number = 1;
                } else if (number / 400 > 1) {
                    $('.services__img').css(
                        'transform',
                        'scale(' + number / 400 + ')'
                    )
                } 

                console.log(number)
                
            });
        };

        if (scroll > offsetProcess) {
            window.addEventListener('scroll', function() {
                var number = pageYOffset - offsetProcess;

                if (number < -500) {
                    number = 0;
                } else if (number > 800) {
                    number = 0;
                } 


                $('.process__img-main').css(
                    'transform',
                    'translateY(-' + number / 18 + 'px)' + 'rotate(' + 6 + 'deg)'
                );

                
                
            })
        }


       if (scroll > offsetPositive) {

            window.addEventListener('scroll', function() {
                var number = pageYOffset - offsetPositive;

                if (number < -200) {
                    number = 0;
                } else if (number > 1100) {
                    number = 0;
                } 


                $('.positive__img').css(
                    'transform',
                    'translateY(-' + number / 18 + 'px)'
                );
 

               // console.log(number) ;
                
            });
        };



        if (scroll > offsetYears) {
            window.addEventListener('scroll', function() {
                var number = pageYOffset - offsetYears;

                $('.years__background').addClass('years__active');
                
                if (number < 0) {
                    $('.years__background').removeClass('years__active');
                } else if (number > 2100) {
                    $('.years__background').removeClass('years__active');
                } else if (number > 1400) {
                    $('.years__background').removeClass('years__active');
                }


                console.log(number) ;
            })
        }

        
    })



})



const animItems = document.querySelectorAll('.animate__up, .animate__left, .animate__right');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (var i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset =offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('animate__active');
            } else{
                if (!animItem.classList.contains('animate__no-hide')) {
                    animItem.classList.remove('animate__active');
                }
            }


        }
    }
}

function offset(el){
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXoffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

setTimeout(() => {
    animOnScroll();
}, 300)

