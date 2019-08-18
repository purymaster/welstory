$(function(){

	//브라우저 업데이트
	if (navigator.userAgent.match(/MSIE 8/)) {
		$('.ie8').show();
    };
	
	//슬라이드 메뉴 제어
	$('nav').before("<div class='deemed'></div>");
	
	$('.deemed').click(function(){
		$('nav').animate({"right":"-255px"},"fast","swing",function(){
			$('nav > ul > li > ul').slideUp();
		});
		$(this).fadeOut();
	});
	
	$('header .menu').click(function(){
		$('.deemed').fadeIn();
		$('nav').animate({"right":"0"},"fast","swing");
	});
	
	$('nav > ul > li > a').click(function(){
		if($(this).next('ul').css('display') == 'block'){
			$('nav > ul > li > ul').slideUp();
		} else {
			$('nav > ul > li > ul').slideUp();
			$(this).next('ul').slideDown();
		};
	});
	
	//체크박스 제어
	$("#checkall").click(function(){
		if($("#checkall").prop("checked")){
			$("input[name=check]").prop("checked",true);
		} else {
			$("input[name=check]").prop("checked",false);
		};
	});
	
	//숫자 입력제어
	$("input[name=num]").keydown(function(e){
		var key_val = e.keyCode;
		if((key_val >= 37 && key_val <= 40) || (key_val >= 48 && key_val <= 57) || (key_val >= 96 && key_val <= 105) || (key_val == 8) || (key_val == 46)){
			return;
		} else {
			return false;
		};
	});
	
	//수량 입력제어
	$('.amount .add').click(function(e){
		e.preventDefault();
		var amount = $(this).parent().find('input').val();
		if(amount >= 999){
			alert('최대 주문 가능 수량은 999개입니다.')
			return false;
		} else {
			amount++;
			$(this).parent().find('input').val(amount);
		};
	});
	$('.amount .sub').click(function(e){
		e.preventDefault();
		var amount = $(this).parent().find('input').val();
		if(amount <= 1){
			alert('최소 주문 가능 수량은 1개입니다.')
			return false;
		} else {
			amount--;
			$(this).parent().find('input').val(amount);
		};
	});
	$('.amount input').focusout(function(){
		$(this).val($(this).val().replace(/(^0+)/, ""));
		if($(this).val() == 0){
			alert('최소 주문 가능 수량은 1개입니다.')
			$(this).val(1);
		};
	});
});