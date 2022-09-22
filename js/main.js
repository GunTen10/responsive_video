/* 스크롤 시, 헤더 배경색 추가 */
$(window).scroll(function(){
    $('#header_wrap').addClass('scroll');
    if($(window).scrollTop() == 0) { // scrollTop() 스크롤바 위치를 알아오거나 정함
        $('#header_wrap').removeClass('scroll');
    }
});

/* 모바일 상태에서 햄버거 버튼을 누르면 메뉴 표시 */
$('.m_menuBtn').click(function(){
    $('.m_menuBtn').toggleClass('on');

    if($(this).hasClass('on')){
        $('.menu_container').fadeIn();
        $('body').css({'overflow':'hidden'});
    } else{
        $('.menu_container').fadeOut();
        $('body').css({'overflow':'auto'});
    }
});

$(window).resize(function(){
    let winW = $(window).width(); // 브라우저의 가로길이
    console.log('브라우저의 가로길이는?', winW);

    if(winW >= 1023 && $('.menu_container').is(':hidden')){
        console.log('nav가 안보여요');  
        $('.menu_container').removeAttr('style');
    }
});