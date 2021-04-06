//____________________________________________________________________
// pagePilig.js initialazion

$('#pagepiling').pagepiling({
	menu: '#navigationMenu',
	anchors: ['mainHeader','mainAboutUS','mainPortfolio','mainWhyUS','mainClients','mainAdvisement','mainOrder','mainBlog','mainFooter'],
	navigation: {
		'position': 'left',
		'tooltips': ['گاردیوم', 'درباره ما', 'نمونه کارها', 'خدمات','مشتریان','مشاوره رایگان','سفارش','وبلاگ','خبرنامه']
	},
});


//____________________________________________________________________
//navigation btns

const topNav = $('.topNav');
const bottomNav = $('.bottomNav');

topNav.click(goNextSection);
bottomNav.click(goPervSection);

function goNextSection() {
	$.fn.pagepiling.moveSectionUp();
}
function goPervSection() {
	$.fn.pagepiling.moveSectionDown();
}


//____________________________________________________________________
//open & close menu

const menuBtn = $('.menuHamburger');
const hamburgerBar = $('.menuHamburgerBar');

let showMenu = false;

// menuBtn.click();
menuBtn.click(toggleMenu);


function toggleMenu() {
	if (!showMenu) {
		// open hamburger 
		hamburgerBar.addClass('open');
		menuBtn.addClass('open');
		// show menu
		$(".menuOverlay").fadeToggle(200);
		// menu is open
		showMenu = true;
	} else {
		// close hamburger
		hamburgerBar.removeClass('open');
		menuBtn.removeClass('open');
		//hide menu
		$(".menuOverlay").fadeToggle(200);
		// menu is closed
		showMenu = false;
	}
}
$('.menuOverlay').on('click', function(){
	$(".menuOverlay").fadeToggle(200);   
	hamburgerBar.removeClass('open');
	menuBtn.removeClass('open');
	showMenu = false;
});


//____________________________________________________________________
//main page portfolio slider initialize

$('.portfolioSlider').slick({
	rtl: true,
	autoplay : false,
	responsive: [
		{
		breakpoint: 768,
			settings: {
				arrows: false,
			}
		},
	]
});

//____________________________________________________________________
//main page blog slider on mobile sized devices

$('.mainBlogSlider').slick({
	rtl: true,
	autoplay : true,
	responsive: [
		{
		breakpoint: 768,
			settings: {
				arrows: false,
			}
		},
	]
});

//____________________________________________________________________
//main page why us accordion

const accordionTab = $("#mainWhyUS .accTab");
accordionTab.click( openAndCloseTab );

function openAndCloseTab () {
	var thisTab = $(this);
	var open = "tabOpen";
	var tabs = $("#mainWhyUS .accTab");
	
	// if this tab is already open
	if (thisTab.hasClass(open)) {
		console.log("hi");
		thisTab.children(".accTabBody").slideUp();
		$(".accTab").removeClass(open);
		
	}
	else {
		$(".accTab").removeClass(open);
		$(".accTab").children(".accTabBody").slideUp();
		thisTab.addClass(open);
		thisTab.children(".accTabBody").slideDown();
	}
}

//____________________________________________________________________
//main page why us accordion

setTimeout(function() {
	$('#mainLoader').addClass('loaded');
}, 1000);

