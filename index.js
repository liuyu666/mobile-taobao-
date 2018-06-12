// vue

var sup = new Vue({
	  el: '#sup',
	  data: {
	    jd:"JD.png",
		search:"搜索.png",
		nav_pic:"导航条.png",
		isActive:true,
		login:"登录",
		search_word:"不止5折 国际运动超级品类日"
	  },
	  methods:{

	  }
});
var pic_content = new Vue({
	  el: '#pic_content',
	  data: {
	  	img_side_left:"img_side_left1.webp",
	  	img_mid:"img_mid1.webp",
	  	img_side_right:"img_side_right1.webp",
	  	isActive:true
	  },
	  methods:{
	  }
});
var icon = new Vue({//创建vue实例
	el:"#icon",
	data:{//数据
		objects:[  
	        {  
	        name:'京东超市',  
	        url:'京东超市.png'
	        },  
	        {  
	        name:'全球购',  
	        url:'全球购.png'
	        },  
	        {  
	        name:'京东超市',  
	        url:'京东超市.png'
	        },
	        {  
	        name:'京东超市',  
	        url:'京东超市.png'
	        },
	        {  
	        name:'京东超市',  
	        url:'京东超市.png'
	        } 
        ],
		objects1:[  
	        {  
	        name:'京东超市',  
	        url:'京东超市.png'
	        },  
	        {  
	        name:'全球购',  
	        url:'全球购.png'
	        },  
	        {  
	        name:'京东超市',  
	        url:'京东超市.png'
	        },
	        {  
	        name:'京东超市',  
	        url:'京东超市.png'
	        },
	        {  
	        name:'京东超市',  
	        url:'京东超市.png'
	        } 
        ],
		isActive:true
	}
});
var broadcast = new Vue({
	el:"#broadcast",
	data:{
		red_word:"热",
		words:["网吧的low配置为什么那么快","坑爹的笔记本，把我害得好惨","试了九把剃须刀，这把最好用","无屏！这才是手机的究极形态"]
	}
})
// jQuery
// 下滑一定距离显示搜索栏
$(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('#sup').addClass("scroll").removeClass("no_scroll");
        }else{
            $('#sup').addClass("no_scroll").removeClass("scroll");
        }
    });
// 轮播图
var index = 0;//定义一个全局变量，存索引值
$(function(){

	setInterval(function(){//定时器，每4秒换一张图片
        index++; 
        if(index==5){
        	index=0
        };
        changePic();
    }, 3000);

	//写一个换图片的函数 根据index值换图片（封装）
	function changePic(){
		//选取index的图片显示和小圆点变蓝，其余兄弟元素移除class,改变css样式。
		$(".pic li").eq(index).addClass("current").siblings().removeClass("current");
		$(".circle li").eq(index).addClass("first").siblings().removeClass("first");
	};

	//点击小圆点获取index值
	$(".circle li").click(function() {
        index = $(this).index(); 
        console.log(index);
        changePic();
    });
    // 点击左边index-1，调用换图片函数
    $(".left").click(function() {
        index--; 
        if(index==-1){
        	index=5
        };//保证index值正确，实现循环
        console.log(index);
        changePic();
    });
    // 点击右边index+1，调用换图片函数
    $(".right").click(function() {
        index++; 
        if(index==5){
        	index=0
        };
        console.log(index);
        changePic();
    })
});
// 京东快报
function AutoScroll(obj) {
	$(obj).find("ul:first").animate({
	marginTop: "-22px"
	}, 500, function() {
	$(this).css({ marginTop: "0px" }).find("li:first").appendTo(this);
	});
	}
	$(document).ready(function() {
	setInterval('AutoScroll("#giftactive_demo")', 2000)
	});