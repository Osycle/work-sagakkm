"use strict";



(function() {
	$(function() {



		/*AOS*/
		if( "AOS" in window ){
			AOS.init({
				offset: 100,
				once: true,
				duration: 1100,
				delay: 150
			});
			setTimeout(function() { AOS.refresh(); }, 1);
		}


		/* SELECT2 */
		if ( $(".js-select").length )
			$(".js-select").select2({
				placeholder: "Выберите...",
				// ajax: {
				//   url: 'https://api.github.com/search/repositories',
				//   dataType: 'json'
				//   // Additional AJAX parameters go here; see the end of this chapter for the full code of this example
				// },
				allowClear: false
			});
		
		if ( $(".js-select").length )
		$(".js-select.search-hide").select2({
			minimumResultsForSearch: Infinity
		});


		/*Owl carousel*/
		var owlBtn = ['<span class="owl-btn previous"><svg viewBox="0 0 100 100"><path d="M 198.608,246.104 382.664,62.04 c 5.068,-5.056 7.856,-11.816 7.856,-19.024 0,-7.212 -2.788,-13.968 -7.856,-19.032 L 366.536,7.864 C 361.476,2.792 354.712,0 347.504,0 340.296,0 333.54,2.792 328.476,7.864 L 109.328,227.008 c -5.084,5.08 -7.868,11.868 -7.848,19.084 -0.02,7.248 2.76,14.028 7.848,19.112 l 218.944,218.932 c 5.064,5.072 11.82,7.864 19.032,7.864 7.208,0 13.964,-2.792 19.032,-7.864 l 16.124,-16.12 c 10.492,-10.492 10.492,-27.572 0,-38.06 z" class="arrow"></path></svg></span>', '<span class="owl-btn next"><svg viewBox="0 0 100 100"><path d="M 198.608,246.104 382.664,62.04 c 5.068,-5.056 7.856,-11.816 7.856,-19.024 0,-7.212 -2.788,-13.968 -7.856,-19.032 L 366.536,7.864 C 361.476,2.792 354.712,0 347.504,0 340.296,0 333.54,2.792 328.476,7.864 L 109.328,227.008 c -5.084,5.08 -7.868,11.868 -7.848,19.084 -0.02,7.248 2.76,14.028 7.848,19.112 l 218.944,218.932 c 5.064,5.072 11.82,7.864 19.032,7.864 7.208,0 13.964,-2.792 19.032,-7.864 l 16.124,-16.12 c 10.492,-10.492 10.492,-27.572 0,-38.06 z" class="arrow"></path></svg></span>']
		$(".short-brick-items.owl-carousel").owlCarousel({
			nav: true,
			//items: 3,
			dots: !checkSm(),
			dotsEach: true,
			autoplay: true,
			touchDrag: true,
			responsive:{
				0:{items:1},
				991:{items:4}
			},
			navText : owlBtn,
			margin: 30
		});


		/*FANCYBOX*/
		if ($("[data-fancybox]").length != 0)
			$("[data-fancybox]").fancybox({
				afterShow: function(instance, current) {},
				animationEffect : "zoom",
				animationDuration : 800,
				touch : false,
				thumbs : {
					autoStart   : true
				},
				transitionDuration : 366,
				transitionEffect: "zoom-in-out"
			});
		// SMOTHSCROLL-LINK
		if( "smoothScroll" in window )
			smoothScroll.init({
				easing: 'easeInOutCubic',
				offset: 85
			});



		//MIN-MENU
		$("#min-menu").mmenu({
			extensions: [
				"wrapper-bg", // wrapper-bg black
				"theme-dark",
				//"theme-white",
				//"fullscreen",
				"listview-50",
				"fx-panels-slide-up",
				"fx-listitems-drop",
				"border-offset",
				"position-front",
				"position-right"
			],
			navbar: {
				title: "Меню"
			},
			navbars: [{
					height: 0,
					content: [
						// '<div class="close-btn close-content bar">' +
						// '<a  href="#page" ><span class="icon-bar"></span><span class="icon-bar"></span></a>' +
						// '</div>'
					]
				},
				{
					content: ["prev", "title"]
				}
			]
		}, {});






		/*ELEVATEZOOM*/
		function createZoom(productZoom) {
			if( checkSm() )
				return false;
			$('.zoomContainer').remove();
			productZoom.elevateZoom({
				scrollZoom: true,
				zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 500,
				lensFadeIn: 300,
				lensFadeOut: 300,
				cursor: "crosshair",
				//tint: true,
				tintColour: '#000',
				tintOpacity: 0.5,
				zoomType: "inner",//lens //inner
				//lensShape : "round",
				//lensSize    : 200,
				imageCrossfade: false,
				easing: true
			});
		}


		/*FLIKITY*/
		
		$('.button-carousel-nav').on('click', 'li', function() {
			var that = $(this);
			var selector = that.attr('data-selector');
			that.addClass("is-selected");
			that.siblings().removeClass("is-selected");
		});

		//arrow
		var arrowStyle = "M 198.608,246.104 382.664,62.04 c 5.068,-5.056 7.856,-11.816 7.856,-19.024 0,-7.212 -2.788,-13.968 -7.856,-19.032 L 366.536,7.864 C 361.476,2.792 354.712,0 347.504,0 340.296,0 333.54,2.792 328.476,7.864 L 109.328,227.008 c -5.084,5.08 -7.868,11.868 -7.848,19.084 -0.02,7.248 2.76,14.028 7.848,19.112 l 218.944,218.932 c 5.064,5.072 11.82,7.864 19.032,7.864 7.208,0 13.964,-2.792 19.032,-7.864 l 16.124,-16.12 c 10.492,-10.492 10.492,-27.572 0,-38.06 z";

		/*bnr-carousel*/
		if( $(".bnr-carousel .carousel-items figure").length ){
			window.bnrCarousel = $(".bnr-carousel").children(".carousel-items").flickity({
				imagesLoaded: true,
				autoPlay: 6000,
				pauseAutoPlayOnHover: true,
				arrowShape: "M 10,50 L 75,100 L 70,90 L 30,50  L 70,10 L 75,0 Z",
				initialIndex: 0,
				friction: 1,
				selectedAttraction: 1,
				prevNextButtons: true,
				draggable: false,
				wrapAround: true,
				pageDots: false,
				contain: false,
				percentPosition: true,
				cellSelector: 'figure',
				cellAlign: "center"
			});
			bnrCarousel.data("flickity");
			//dots
			for( var i = 0; i < $(bnrCarousel).find("figure").length; i++){
				bnrCarousel.siblings().find(".button-carousel-nav ul").append('<li role="button" class="button"></li>');
			}
			bnrCarousel.on( 'select.flickity', function( event, index ) {
				var index = $(this).find("figure.is-selected").index();
			  $(this).siblings()
			  			.find(".button-carousel-nav ul .button")
			  			.eq(index)
			  			.addClass("is-selected")
			  			.siblings()
			  			.removeClass("is-selected");
			});
	    $('.bnr-carousel .button-carousel-nav').on( 'click', 'li', function() {
	      var index = $(this).index();
	      bnrCarousel.flickity( 'select', index );
	    });
		}
		$(".bnr-carousel .carousel-items").append("<div class='container container-arrows'></div>").find(".container-arrows").append($(".bnr-carousel .carousel-items .flickity-prev-next-button"))
		

		//flickity vertical carousel
		// external js: flickity.pkgd.js
		var $carousel = $('.production-carousel').flickity({
				imagesLoaded: true,
				//autoPlay: 6000,
				pauseAutoPlayOnHover: true,
				arrowShape: "M 10,50 L 75,100 L 70,90 L 30,50  L 70,10 L 75,0 Z",
				initialIndex: 0,
				friction: 1,
				selectedAttraction: 1,
				prevNextButtons: checkSm(),
				draggable: false,
				wrapAround: true,
				pageDots: false,
				contain: false,
				percentPosition: true,
				cellAlign: "center"
			});
		if( $('.production-carousel').length > 0 ){
			var $carouselNav = $('.carousel-nav');
			var $carouselNavCells = $carouselNav.find('.carousel-cell');
			function changeZoomImg (){
				var zoomImg = $(".production-carousel .carousel-cell.is-selected img") || null;
				if ( zoomImg ) createZoom(zoomImg);
			}
			changeZoomImg();
			$carouselNav.on( 'click', '.carousel-cell', function( event ) {
			  var index = $( event.currentTarget ).index();
			  $carousel.flickity( 'select', index );
			  changeZoomImg();
			});

			var flkty = $carousel.data('flickity');
			var navTop  = $carouselNav.position().top;
			var navCellHeight = $carouselNavCells.height();
			var navHeight = $carouselNav.height();

			$carousel.on( 'select.flickity', function() {
			  // set selected nav cell
			  $carouselNav.find('.is-nav-selected').removeClass('is-nav-selected');
			  var $selected = $carouselNavCells.eq( flkty.selectedIndex )
			    .addClass('is-nav-selected');
			  // scroll nav
			  var scrollY = $selected.position().top +
			    $carouselNav.scrollTop() - ( navHeight + navCellHeight ) / 3.77;
			  $carouselNav.animate({
			    scrollTop: scrollY
			  });
			});
		}
	    




    



		function onLoaded() {
			/*MASONRY*/
			if ($(".grid-img").length != 0) {
				var $grid = $(".grid-img").masonry({
					itemSelector: ".grid-img-item",
					columnWidth: ".grid-img-sizer",
					percentPosition: true
				});
			}
			$(window).trigger("resize");
		}





		//SCROLL
		var minMenu = $(".header-scroll") || null;
		var headerRange = false;
		var staffProgressStatus = false;
		$(window).on("scroll", function(e) {

			//Адаптация хедера при скролинге
			if ($(window).scrollTop() > 100 && headerRange == false) {

				headerRange = true;
				if (minMenu) minMenu.addClass("scrolled").addClass("down");

			} else if ($(window).scrollTop() < 100 && headerRange == true) {
				headerRange = !true;
				if (minMenu) minMenu.removeClass("scrolled");
			} //.originalEvent.wheelDelta

		});
		$(window).trigger("scroll");




		//Preloader
		window.preLoader = {

			preImg: function(img) {
				var images = img || document.images,
					imagesTotalCount = images.length,
					imagesLoadedCount = 0,
					preloadPercent = $(".percent").text("0 %");

				if (imagesTotalCount == 0) {
					preOnload();
					$(preloadPercent).text("100 %");
				}

				for (var i = 0; i < imagesTotalCount; i++) {
					var image_clone = new Image();
					image_clone.onload = image_loaded;
					image_clone.onerror = image_loaded;
					image_clone.src = images[i].src;
				}

				function preOnload() {
					onLoaded();
				}

				function image_loaded() {
					imagesLoadedCount++;
					var per = (100 / imagesTotalCount * imagesLoadedCount) << 0;

					setTimeout(function() {
						//console.log(per);
						$(preloadPercent).text(per + "%");
					}, 1);

					if (imagesLoadedCount >= imagesTotalCount) preOnload();
				}
			}
		};
		preLoader.preImg();












    // Прибавление-убавление значении
    function counterAddRem(container, fn){
      var form = $(container).find("[data-counter]") || null;;
      if( !form )
        return;
      var cntfactor = form.attr("data-counter")*1;

      $(container).on("click", "[data-counter-btn]", function(){
        var cntVal;
        var cntInput = $(this).closest( form ).find("[data-counter-input]");
        
        cntVal = (cntInput.val()*1);

        if( $(this).hasClass("plus") )
          cntVal = cntVal + cntfactor;
        if( $(this).hasClass("minus") & cntVal > 0 )
          cntVal = cntVal - cntfactor;
        if( isNaN( cntVal ) || cntVal < 0) cntVal = 0;
        	cntInput.val( cntVal ).attr("value", cntVal)

        if( typeof fn == "function" )
        	fn();
      })
      $(".cnt-input").on( "keypress", function(e){
        //console.log(this, e);
      } )
    };
    //counterAddRem();



		// production finstorage-time
		$("[data-change-active]").on("change", function(){
			var activeClass =  "is-selected";
			var attrValue = $(this).attr("data-change-active");
			var arrClass = attrValue.split("|");
			$(arrClass[0]).children().removeClass(activeClass);
			$(arrClass[1]).addClass(activeClass);
		})
		// statement удаление ненужных полей ИП
		$(".statement-types input").on("change", function(){
			var that = $(this)
			var hideClass = that.attr("data-hideclass") || null;
			var hideType = that.attr("data-statement-type") || null;
			$("[data-hideinput-container]").removeClass("none");
			if( !hideClass )
				return;
			if( hideType != null )
				$('[data-hideinput-container="' + hideType + '"]').addClass("none");
			

			console.log(hideType);
		})


		/* ------------------
			BASKET
		-------------------*/
		var basketContainer = $(".basket-table");

		// Имена классов
		var productNameClass = "product-name";
		var productPriceClass = "product-price";
		var productTotalpriceClass = "product-totalprice";
		var productRemoveClass = "product-remove";
		var productTablerowClass = "product-tablerow";
		// Постфикс
		var pricePostfix = "р";

		//Функция возведения в число
		function cntClear(str){
			var int = "";
			str.match(/(\d+)/gim).map(function(argument){
				int += argument;
			})
			return int*1;
		}

		// Функция пересчёт стоимости с учётом кол-во
		function recountProduct(productTablerow){
			var productTablerow = $(productTablerow);
			var productQuantity = productTablerow.find(".cnt-input").val()*1;
			var productPrice = productTablerow.find("." + productPriceClass).text();
			var newPrice = productQuantity * cntClear(productPrice);
			productTablerow.find("." + productTotalpriceClass).text(newPrice + pricePostfix);
			productTablerow.find(".cnt-input");
			recountTableProducts(basketContainer);
			//console.log(newPrice, productQuantity);
		}
		// Итоговая стоимость услуг в таблице
		function recountTableProducts(basketContainer){
			var elTotalprices = basketContainer.find("."+ productTotalpriceClass);
			var totalPrice = 0;
			if(!elTotalprices)
				return false;
			elTotalprices.map(function(i, el){
				totalPrice += cntClear($(el).text());
			})
			$(".totalprice-products").text(totalPrice + pricePostfix);
		}
		// Проверка на совпадений
		function checkAlikeProduct(productInputId){
			var productTablerow = $(basketContainer).find("[data-product-input-id='"+ productInputId + "']");
			if(productTablerow.length > 0)
				return productTablerow;
			else
				return false;
		}
		function scrollBasketTable(){
			setTimeout(function(){
				$("html").animate({
					scrollTop: $(basketContainer).offset().top-100
				}, 500);
			}, 500);
		}
		//Функция добавлние доп. услуг
		function addExtraServices(modalForm, productInputId, productName, productPrice){
			var inputCheckbox = modalForm.find("input[type='checkbox']:checked");
			var productTablerow = $("[data-product-input-id=" + productInputId + "]")
			var newProductName = "";
			var newProductPrice =  cntClear(productPrice);
			inputCheckbox.map(function(i ,el){
				var extraServiceName = $(el).attr("data-extra-service-name");
				var extraServicePrice = $(el).attr("data-extra-service-price");
				newProductPrice = newProductPrice + cntClear(extraServicePrice);
				newProductName += "<br>" + extraServiceName;
			})
			productTablerow.find("." + productPriceClass).text("").append(newProductPrice + pricePostfix);
			productTablerow.find("." + productNameClass).append(newProductName);
			recountProduct(productTablerow);
		}

		//Функция добавление услуг в таблицу
		function addBasketTable( productInputId, productName, productPrice ){
			var productTablerow = checkAlikeProduct(productInputId);
			if(productTablerow){
				//productTablerow.removeClass("anim-flicker");
				setTimeout(function(){
					productTablerow.addClass("anim-flicker");
				}, 1000)
				scrollBasketTable();
				console.log(productTablerow);
				productTablerow.remove();
				//return false;
			}
			
			var template = '<tr class="'+productTablerowClass+' anim-flicker" data-product-input-id="'+productInputId+'">'+
								        '<td class="'+productNameClass+'">'+productName+'</td>'+
								        '<td class="'+productPriceClass+'">'+productPrice+'</td>'+
								        '<td>'+
													'<div class="cnt-production" data-counter="1">'+
														'<button type="button" class="cnt-btn minus" data-counter-btn=""><i class="fa fa-caret-left"></i></button>'+
														'<input class="cnt-input" name="products-cnt" value="1" disabled="disabled" data-counter-input="">'+
														'<button type="button" class="cnt-btn plus" data-counter-btn=""><i class="fa fa-caret-right"></i></button>'+
													'</div>'+
								        '</td>'+
								        '<td class="product-totalprice">'+productPrice+'</td>'+
								        '<td class="'+productRemoveClass+'"><i role="button" class="fa fa-close fa-1-5x"></i></td>'+
								    	'</tr>';
			$(basketContainer).find("tbody").append(template);

			var productTablerow = $("[data-product-input-id="+productInputId+"]");
			counterAddRem( productTablerow, function(){recountProduct( productTablerow);} );//активация прибавление-убавление значении
			recountProduct(productTablerow);
			scrollBasketTable();
		}

		// Добавление в модальном окне
		$(".btn-add-modal").on("click", function(){
			var that = $(this);
			var modalForm = that.closest("form");
			var input = modalForm.find("[data-product-name]"+"input:checked");

			if(input.length <= 0)
				return;
			var productInputId = input.attr("id");
			var productName = input.attr("data-product-name");
			var productPrice = input.attr("data-product-price");

			addBasketTable( productInputId, productName, productPrice );

			addExtraServices(modalForm, productInputId, productName, productPrice);

			$("[data-fancybox-close]").trigger("click");
		});


		// Добавление
		$(".btn-add").on("click", function(){
			var that = $(this);
			var productItem = that.closest(".product-item");

			var productInputId = productItem.attr("id");
			var productName = productItem.attr("data-product-name");
			var productPrice = productItem.attr("data-product-price");

			addBasketTable( productInputId, productName, productPrice );

			$("[data-fancybox-close]").trigger("click");
		});
		//Удаление с таблицы
		$(basketContainer).on("click", ("."+productRemoveClass), function(){
			var that = $(this);
			that.closest("."+productTablerowClass).remove();
		});












	});
})(jQuery);

var isWebkit = /Webkit/i.test(navigator.userAgent),
		isChrome = /Chrome/i.test(navigator.userAgent),
		isMac = /Mac/i.test(navigator.userAgent),
		isMobile = !!("ontouchstart" in window),
		isAndroid = /Android/i.test(navigator.userAgent),
		isEdge = /Edge/i.test(navigator.userAgent);

if( isEdge ){
	if(window.navigator.platform.indexOf('Mac') < 0){
		console.log("isEdge");
		(function(){var D={frameRate:50,animationTime:200,stepSize:60,pulseAlgorithm:true,pulseScale:6,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:true,arrowScroll:50,touchpadSupport:true,fixedBackground:true,excluded:""};var u=D;var s=false;var p=false;var h={x:0,y:0};var b=false;var w=document.documentElement;var d;var y;var G=[120,120,120];var o={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var u=D;function J(){var K=false;if(K){a("keydown",t)}if(u.keyboardSupport&&!K){f("keydown",t)}}function E(){if(!document.body){return}var K=document.body;var L=document.documentElement;var O=window.innerHeight;var M=K.scrollHeight;w=(document.compatMode.indexOf("CSS")>=0)?L:K;d=K;J();b=true;if(top!=self){p=true}else{if(M>O&&(K.offsetHeight<=O||L.offsetHeight<=O)){L.style.height="auto";if(w.offsetHeight<=O){var N=document.createElement("div");N.style.clear="both";K.appendChild(N)}}}if(!u.fixedBackground&&!s){K.style.backgroundAttachment="scroll";L.style.backgroundAttachment="scroll"}}var z=[];var g=false;var m=+new Date;function F(N,M,R,O){O||(O=1000);x(M,R);if(u.accelerationMax!=1){var K=+new Date;var S=K-m;if(S<u.accelerationDelta){var P=(1+(30/S))/2;if(P>1){P=Math.min(P,u.accelerationMax);M*=P;R*=P}}m=+new Date}z.push({x:M,y:R,lastX:(M<0)?0.99:-0.99,lastY:(R<0)?0.99:-0.99,start:+new Date});if(g){return}var Q=(N===document.body);var L=function(U){var T=+new Date;var ab=0;var aa=0;for(var W=0;W<z.length;W++){var ad=z[W];var ac=T-ad.start;var V=(ac>=u.animationTime);var X=(V)?1:ac/u.animationTime;if(u.pulseAlgorithm){X=j(X)}var Z=(ad.x*X-ad.lastX)>>0;var Y=(ad.y*X-ad.lastY)>>0;ab+=Z;aa+=Y;ad.lastX+=Z;ad.lastY+=Y;if(V){z.splice(W,1);W--}}if(Q){window.scrollBy(ab,aa)}else{if(ab){N.scrollLeft+=ab}if(aa){N.scrollTop+=aa}}if(!M&&!R){z=[]}if(z.length){A(L,N,(O/u.frameRate+1))}else{g=false}};A(L,N,0);g=true}function l(N){if(jQuery("body").hasClass("woocommerce-checkout")){return}if(jQuery(N.target).closest(".navbar-collapse").length===1){return}if(jQuery(N.target).closest(".chosen-results").length===1){return}if(jQuery(N.target).closest(".select2-results").length===1){return}if(jQuery(N.target).closest(".modal-open").length===1){return}if(jQuery(N.target).closest(".search-header-wrapper").length===1){return}if(!b){E()}var O=N.target;var M=B(O);if(!M||N.defaultPrevented||k(d,"embed")||(k(O,"embed")&&/\.pdf/i.test(O.src))){return true}var L=N.wheelDeltaX||0;var K=N.wheelDeltaY||0;if(!L&&!K){K=N.wheelDelta||0}if(!u.touchpadSupport&&I(K)){return true}if(Math.abs(L)>1.2){L*=u.stepSize/120}if(Math.abs(K)>1.2){K*=u.stepSize/120}F(M,-L,-K);N.preventDefault()}function t(L){var Q=L.target;var O=L.ctrlKey||L.altKey||L.metaKey||(L.shiftKey&&L.keyCode!==o.spacebar);if(/input|textarea|select|embed/i.test(Q.nodeName)||Q.isContentEditable||L.defaultPrevented||O){return true}if(k(Q,"button")&&L.keyCode===o.spacebar){return true}var M,S=0,R=0;var N=B(d);var P=N.clientHeight;if(N==document.body){P=window.innerHeight}switch(L.keyCode){case o.up:R=-u.arrowScroll;break;case o.down:R=u.arrowScroll;break;case o.spacebar:M=L.shiftKey?1:-1;R=-M*P*0.9;break;case o.pageup:R=-P*0.9;break;case o.pagedown:R=P*0.9;break;case o.home:R=-N.scrollTop;break;case o.end:var K=N.scrollHeight-N.scrollTop-P;R=(K>0)?K+10:0;break;case o.left:S=-u.arrowScroll;break;case o.right:S=u.arrowScroll;break;default:return true}F(N,S,R);L.preventDefault()}function n(K){d=K.target}var i={};setInterval(function(){i={}},10*1000);var v=(function(){var K=0;return function(L){return L.uniqueID||(L.uniqueID=K++)}})();function c(L,K){for(var M=L.length;M--;){i[v(L[M])]=K}return K}function B(N){var L=[];var K=w.scrollHeight;do{var M=i[v(N)];if(M){return c(L,M)}L.push(N);if(K===N.scrollHeight){if(!p||w.clientHeight+10<K){return c(L,document.body)}}else{if(N.clientHeight+10<N.scrollHeight){overflow=getComputedStyle(N,"").getPropertyValue("overflow-y");if(overflow==="scroll"||overflow==="auto"){return c(L,N)}}}}while(N=N.parentNode)}function f(M,L,K){window.addEventListener(M,L,(K||false))}function a(M,L,K){window.removeEventListener(M,L,(K||false))}function k(L,K){return(L.nodeName||"").toLowerCase()===K.toLowerCase()}function x(K,L){K=(K>0)?1:-1;L=(L>0)?1:-1;if(h.x!==K||h.y!==L){h.x=K;h.y=L;z=[];m=0}}var e;function I(K){if(!K){return}K=Math.abs(K);G.push(K);G.shift();clearTimeout(e);var M=(G[0]==G[1]&&G[1]==G[2]);var L=(q(G[0],120)&&q(G[1],120)&&q(G[2],120));return !(M||L)}function q(L,K){return(Math.floor(L/K)==L/K)}var A=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(M,L,K){window.setTimeout(M,K||(1000/60))}})();function C(K){var M,N,L;K=K*u.pulseScale;if(K<1){M=K-(1-Math.exp(-K))}else{N=Math.exp(-1);K-=1;L=1-Math.exp(-K);M=N+(L*(1-N))}return M*u.pulseNormalize}function j(K){if(K>=1){return 1}if(K<=0){return 0}if(u.pulseNormalize==1){u.pulseNormalize/=C(1)}return C(K)}var H=/chrome/i.test(window.navigator.userAgent);var r="onmousewheel" in document;if(r&&H){f("mousedown",n);f("mousewheel",l);f("load",E)}})();
	}
}

// COMMON FUNCTION





function checkSm() {
	return $(document).width() <= 991;
}


function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntFloat(min, max) {
	return Math.random() * (max - min) + min;
}

function onResized(f) {
	if (typeof f === "function") f();
	$(window).on("resize", function(e) {
		if (typeof f === "function") f();
	});
	return this;
}

function scrolledDiv(el) {
	try {
		var docViewTop = $(window).scrollTop(),
			docViewBottom = docViewTop + $(window).height(),
			elTop = $(el).offset().top,
			elBottom = elTop + $(el).height() / 1.8;
	} catch (err) {
		console.error();
	}

	return elBottom <= docViewBottom && elTop >= docViewTop;
}

function roundFix( num, cnt ){
	num = num+""
	cnt = cnt + (/./.test(num) || null ? 1 : 0);
	return num.substring( 0,  cnt)*1
}

function intSpace( int, replaceType ){
		var cnt = 0;
		var newInt = "";
		int = int*1;
		replaceType = replaceType || " ";
		if( typeof int === NaN )
			return;
		var arrInt = (int+"").match(/([0-9])/gim).reverse();
		for (var i = 0; i < arrInt.length; i++) {
			cnt++;
			newInt = arrInt[i]+newInt
			if(cnt === 3){
				newInt = replaceType+newInt;
				cnt = 0;
			}
		}
		return newInt;
}
