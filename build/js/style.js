//            背景切换
var images = ["images/slide1.jpg","images/slide2.jpg","images/slide3.jpg"];
var index = 1;
setInterval(function(){
    if(index==images.length){
        index = 1;  // 循环开始
    }
    $(".body").animate({opacity:0.3},3000,function(){
        // 当淡出结束时，切换背景图片，并开始新的淡入过程
        // background: url("images/splash01.jpg")
        $(this).css("backgroundImage",'url("' + images[index] + '")')
            .animate({opacity:1},5000); // 淡入
        index++;
    });
},600);
