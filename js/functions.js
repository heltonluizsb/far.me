$(function(){

	var windowOffY = $(window).scrollTop();
	var scrollBottom = $(window).scrollTop() + $(window).height();
	var menu = $('header');
	var menu_top = menu.offset().top;
	var menu_original_position = menu.css('position');
	var menu_original_margin_top = menu.css('margin-top');
	var menu_original_background = menu.css('background-color');
	var box06 = $('.box06');
	var box06_top = box06.offset().top;
	var box06_height = box06.height();
	var count_end = false;
	// var menu_animation = false;

	verify_menu();

	function verify_menu(){
		if(windowOffY >= menu_top){
			menu.css('position','fixed');
			menu.css('margin-top','0px');
			menu.css('background-color','#FFF3E2');
			// menu_animation = true;
			// console.log(menu_animation);
			// menu.animate({
			// 	backgroundColor:"#FFF3E2"
			// },500,function(){
			// 	menu_animation = false;
			// 	console.log(menu_animation);
			// });
			if((windowOffY >= (box06_top + (box06_height / 2))) && !count_end){
				number_counter();
			}
		}
		else if(windowOffY < menu_top){
			menu.css('position',menu_original_position);
			menu.css('margin-top',menu_original_margin_top);
			menu.css('background-color',menu_original_background);
			// menu_animation = true;
			// console.log(menu_animation);
			// menu.animate({
			// 	backgroundColor:"transparent"
			// },500,function(){
			// 	menu_animation = false;
			// 	console.log(menu_animation);
			// });
		}		
	}

	$(window).scroll(function(){
		windowOffY = $(window).scrollTop();
		scrollBottom = $(window).scrollTop() + $(window).height();
		var windowHeight = $(window).height();

		$('.sessao').each(function(){
			var elOffY = $(this).offset().top;
			if(elOffY < (windowOffY + windowHeight) && elOffY+$(this).height() > windowOffY){
				$('header ul li a').css('text-decoration','none');
				var target = $(this).attr('id');
				$('.'+target).css('text-decoration','underline');
				return;
			}
			else if((elOffY+$(this).height() < windowOffY) || elOffY > windowOffY){
				var target = $(this).attr('id');
				$('.'+target).css('text-decoration','none');
			}
		});

		if(windowOffY >= menu_top){
			menu.css('position','fixed');
			menu.css('margin-top','0px');
			menu.css('background-color','#FFF3E2');
			// menu_animation = true;
			// console.log(menu_animation);
			// menu.animate({
			// 	backgroundColor:"#FFF3E2"
			// },500,function(){
			// 	menu_animation = false;
			// 	console.log(menu_animation);
			// });
			if((windowOffY >= (box06_top - (box06_height / 8))) && !count_end){
				number_counter();
			}
		}
		else if(windowOffY < menu_top){
			menu.css('position',menu_original_position);
			menu.css('margin-top',menu_original_margin_top);
			menu.css('background-color',menu_original_background);
			// menu_animation = true;
			// console.log(menu_animation);
			// menu.animate({
			// 	backgroundColor:"transparent"
			// },500,function(){
			// 	menu_animation = false;
			// 	console.log(menu_animation);
			// });
		}
	})

	$('header ul li a').hover(function(){
		$(this).css('text-decoration','underline');
	},function(){
		$(this).css('text-decoration','none');		
	})

	reset_numbers_count();

	function reset_numbers_count(){
		$('.box-numeros-single h1 span').each(function () {
			$(this).attr('oldnumber',$(this).text());
			$(this).text('0');
		});

	}

	function number_counter(){
		$('.box-numeros-single h1 span').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).attr('oldnumber')
		    }, {
		        duration: 2000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(formatar(Math.ceil(now)));
		        }
		    });
		});
		count_end = true;
	}

	function formatar(nr) {
	  return String(nr)
	    .split('').reverse().join('').split(/(\d{3})/).filter(Boolean)
	    .join('.').split('').reverse().join('');
	}


});