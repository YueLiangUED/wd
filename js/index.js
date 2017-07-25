(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //跳转
    $("#remen").on('click',function () {
        window.location.href = 'index_01.html';
    });
    $("#taocan").on('click',function () {
        window.location.href = 'index_02.html';
    });
    $("#liuliang").on('click',function () {
        window.location.href = 'index_03.html';
    });
    $("#kuandai").on('click',function () {
        window.location.href = 'index_04.html';
    });
    $("#haoka").on('click',function () {
        window.location.href = 'index_05.html';
    });
    $("#shenghuo").on('click',function () {
        window.location.href = 'index_06.html';
    });
    $("#zhongduan").on('click',function () {
        window.location.href = '';
    });
});
