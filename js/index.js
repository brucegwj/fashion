/**
 * Created by Administrator on 2016/10/1.
 */
$(function () {
    //ͼƬ�л�
    $('.nav_list li').click(function () {
        var num=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.page_list').eq(num).fadeIn().siblings().fadeOut();
    });
    //navͼƬ
    var index=0;
    $('.nav_r,.nav_l').click(function () {
        index++;
        if(index===2){
            index=0;
        }
        var w=210;
        $('.nav_list').css('left',-w*index);
    });
    ////page5ҳ��ͼƬ�л�
    var index2= 0,pic=0;
    $('.pic_r').click(function () {
        index2++;
        pic=index2;
        if(index2===35){
            index2=0;
        }
        var w=310;
        $('.pic_list').css('left',-w*index2);
    });
    $('.pic_l').click(function () {
        pic--;
        if(pic===0){
            pic=30;
        }
        console.log(pic);
        var w=310;
        $('.pic_list').css('left',-w*pic);
    });
    //���°�ť���
    $('.btn_b').click(function(){
        var index = $('.nav_list').find('.active').index()+1;
        if(index===5){
            index=0;
        }
        $('.nav_list li').eq(index).click();
    });
    //��ת������
    $('.to-top a').click(function () {
        window.pageYOffset=0;
    });
});
