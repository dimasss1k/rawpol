(function($) {
	$.fn.menumaker = function(options) {  
	 var cssmenu = $(this), settings = $.extend({
	   format: "dropdown",
	   sticky: false
	 }, options);
	 let timer;
	 return this.each(function() {
	   $(this).find(".button").on('click', function(){
		 $(this).toggleClass('menu-opened');
		 var mainmenu = $(this).next('ul');
		 if (mainmenu.hasClass('open')) { 
		   mainmenu.slideToggle().removeClass('open');
		 }
		 else {
		   mainmenu.slideToggle().addClass('open');
		   if (settings.format === "dropdown") {
			 mainmenu.find('ul').show();
		   }
		 }
	   });
	   cssmenu.find('li ul').parent().addClass('has-sub');
	multiTg = function() {
		 cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
		 cssmenu.find('.submenu-button').on('click', function() {
		   $(this).toggleClass('submenu-opened');
		   if ($(this).siblings('ul').hasClass('open')) {
			 $(this).siblings('ul').removeClass('open').slideToggle();
		   }
		   else {
			 $(this).siblings('ul').addClass('open').slideToggle();
		   }
		 });
	   };
	   if (settings.format === 'multitoggle') multiTg();
	   else cssmenu.addClass('dropdown');
	   if (settings.sticky === true) cssmenu.css('position', 'fixed');
	resizeFix = function() {
	  var mediasize = 1000;
		 if ($( window ).width() > mediasize) {
		   cssmenu.find('ul').show();
		 }
		 if ($(window).width() <= mediasize) {
		   cssmenu.find('ul').hide().removeClass('open');
		 }
	   };
	   resizeFix();
	   return $(window).on('resize', resizeFix);
	 });
	  };
	})(jQuery);
	
	(function($){
	$(document).ready(function(){
	$("#cssmenu").menumaker({
	   format: "multitoggle"
	});
	});
	})(jQuery);
		
(function(){
 
	$("#cart").on("click", function() {
	  $(".shopping-cart").fadeToggle( "fast");
	});
	
  })();

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});
$(function() {
	var Accordion1 = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links1 = this.el.find('.link1');
		// Evento
		links1.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion1.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open1');

		if (!e.data.multiple) {
			$el.find('.submenu1').not($next).slideUp().parent().removeClass('open1');
		};
	}	

	var accordion1 = new Accordion1($('#accordion1'), false);
});
$(function() {
	var Accordion2 = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links2 = this.el.find('.link2');
		// Evento
		links2.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion2.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open2');
 
		if (!e.data.multiple) {
			$el.find('.submenu2').not($next).slideUp().parent().removeClass('open2');
		};
	}	

	var accordion2 = new Accordion2($('#accordion2'), false);
});
function app() {
    const buttons = document.querySelectorAll('.button1')
    const cards = document.querySelectorAll('.card')

    function filter (category, items) {
        items.forEach((item) => {
            const isItemFiltered = !item.classList.contains(category)
            const isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('hide')
                item.classList.remove('anime')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter
            filter(currentCategory, cards)
            
        })
    })

    cards.forEach((card) => {
        card.ontransitionend = function () {
            if (
                card.classList.contains('anime')) {
                buttons.classList.add('active')
                card.classList.add('hide')
            }
        }
    })
}

app()

const dropdownMenu = (val) => {
	const dropdown = val.getAttribute("data-mobile-dropdown");
	const dropdownLinks = document.querySelector(dropdown);
	dropdownLinks.classList.toggle("menushow");
};
console.log('1231')