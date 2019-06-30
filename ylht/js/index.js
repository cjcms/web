$(function(){
	$('.nav li:last').css({ 'border-right': '0'})
	$('.knowledge-item').eq(1).css({'margin-left': '17px'})
	$('.knowledge-item').eq(3).css({'margin-left': '17px'})
	$('.knowledge-item').eq(5).css({'margin-left': '17px'})
	// $('.knowledge-list .knowledge-item').eq(3).css({ "margin-left": "17px;"})
	// $('.knowledge-list .knowledge-item').eq(5).css({ "margin-left": "17px;"})

	var img_url = ''
	jQuery(".banner-box").slide( { 
		mainCell:".banner ul", 
		titCell: '.banner-page ul',
		autoPage: '<li></li>',
		effect: 'fade',
		autoPlay: true,
		trigger:'click',
		easing: 'swing',
		interTime: 5000,
		delayTime: 500,
		mouseOverStop: true,
		pnLoop: true,
		startFun: function(i, c, s) {
			img_url = s.find('.banner li').eq(0).find('img').attr('src')
			img_url = img_url ? img_url : '../images/banner_img1.jpg'
			s.css({ 'background-image': "url("+img_url+")"})
		}
	});

	jQuery("#evolution").slide( { 
		mainCell:".bd ul", 
		titCell: '.hd ul',
		autoPage: '<li></li>',
		effect: 'fade',
		autoPlay: true,
		trigger:'click',
		easing: 'swing',
		interTime: 6000,
		delayTime: 500,
		mouseOverStop: true,
		pnLoop: true
	});

	jQuery("#picture").slide({
		titCell:".hd ul",
		mainCell:".picture-list ul",
		swing: 'swing',
		autoPage:true,
		effect:"left",
		autoPlay:true,
		vis: 5
	});
})