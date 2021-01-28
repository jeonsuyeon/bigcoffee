/*main.js*/
$(function(){
    $('.btn_toggle').on('click',function(){
        $('#gnb').show();
    })
    //메인메뉴닫기
    $('.btn_close').on('click',function(){
        $('#gnb').hide();
        });
        /***이미지슬라이더*페이드효과로 할것임 */
  
        let num = 1;
    let slider = setInterval(function(){
        if(num > 2) {num=0;}
       //전체이미지를 fadeout
        $('.slider > img').removeClass('show');
        $('.slider > img').eq(num).addClass('show');
        num++;
    },3000);
});

