(function($){
    var ind;
    // 첫화면으로 이동
    $('html, body').animate({
        scrollLeft: '0',
    }, 500);
    $('#menu li').eq(0).addClass('on');
    // ind = $(this).find('section').index(); //-1이 나옴...
    // console.log('여기 확인'+ind);
    // $('#menu li').eq(ind+1).addClass('on')
    // 왼쪽에 메뉴를 클릭하면 해당 섹션으로 가로스크롤로 이동하게 하시오.
    $('#menu li a').on('click', function(e){
        // e.preventDefault()
        $(this).parent().addClass('on')
        $(this).parent().siblings().removeClass('on')
        ind = $(this).parent().index();
        $('html, body').stop().animate({
            scrollLeft: ind*$(window).width() // *$(window).width() : 한 화면 길이
        }, 500)
        return false;
    })
    
    // 마우스휠 이벤트 발생시 휠의 방향이 위쪽이면 이전섹션으로 이동하게 하고,
    // 휠의 방향이 아래쪽이면 다음섹션으로 이동하게 구현하시오.
    var secIndex;
    $('section').on('mousewheel', function(e, wh){
        if(wh>0){
            secIndex =$(this).prev().index();
            if(secIndex < 0){
                secIndex =0;
            }
        } else if( wh< 0){
            secIndex = $(this).next().index();
            if(secIndex < 0){
                secIndex = 3; //마지막 세션에 머무르도록
            }
        }
        $('html, body').stop().animate({
            scrollLeft: secIndex*$(window).width()
        }, 500)
        $('#menu li').eq(secIndex).addClass('on')
        $('#menu li').eq(secIndex).siblings().removeClass('on')
    })

    $('section').on('mousemove', function(e){ //이벤트 자체를 받는 변수 e
        var posX = e.pageX //마우스 자체의 x값을 알아내는 속성(메소드 아님)
        var posY = e.pageY
        console.log(posX, posY)
        // $('section').eq(0).find('img:nth-of-type(1)').css({
        // //nth-child 못써서 nth-of-type
        //     right: posX+10+'px',
        //     bottom: posY+10+'px',
        //     bottom: 20-(posY/30)
        //     // right: 20-(posX/30),  // 빼줘야지 구해진 x좌표 값에 따라서 의미있는 값이 된데
        //     // bottom: 20-(posY/30), // 30은 그냥 적당히 넣은 값이래.
        // })    
        // $('section').eq(0).find('img:nth-of-type(2)').css({
        //     right: 130-(posX/20),
        //     bottom: 40-(posY/20)
        // })
        
        $("section:nth-child(1) img:nth-of-type(1)").css({
            right:20-(posX/30), bottom:20-(posY/30)     })
        $("section:nth-child(1) img:nth-of-type(2)").css({
            right:130-(posX/20), bottom:-40-(posY/20)   })
        $("section:nth-child(1) img:nth-of-type(3)").css({
            right:60+(posX/20), top:180+(posY/20)       })
    
        $("section:nth-child(2) img:nth-of-type(1)").css({ 
            right:-180-(posX/30), bottom:-480-(posY/30) })
        $("section:nth-child(2) img:nth-of-type(2)").css({ 
            right:130+(posX/50), bottom:-40+(posY/50) })
    
        $("section:nth-child(3) img:nth-of-type(1)").css({
            right:280-(posX/30), bottom:30-(posY/30) })
        $("section:nth-child(3) img:nth-of-type(2)").css({
            right:110+(posX/20), bottom:-270+(posY/20) })
        $("section:nth-child(3) img:nth-of-type(3)").css({
            right:-70+(posX/20), bottom:-130+(posY/20) })	        
        $("section:nth-child(4) img:nth-of-type(1)").css({
            rig });
    })
})(jQuery)