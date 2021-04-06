
//loading

setTimeout(() => loading() , 3000);
loadingLine = () =>{
    document.getElementById('loadingLine').style.width = '100%';
}
setTimeout(() => loadingLine() , 0);
// loadingLine();
loading = () => {
    document.getElementById('loading').style.opacity = '0';
    document.getElementById('loading').style.zIndex = '-20';
    document.getElementById('loading').style.transform = 'translateX(300px)';
}

//smooth scrolling
window.onscroll = function() {Function()};
function Function() {

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        // console.log('1');
        document.getElementById('bringUp').style.opacity = '1';
        document.getElementById('bringUp').style.transition = 'opacity 500';
    } else {
        document.getElementById('bringUp').style.opacity = '0';
        document.getElementById('bringUp').style.transition = 'opacity 500';
    }
}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("#bringUp").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

//menu side bar

var swipeMenu = () => {
    document.getElementById('menuSlider').style.width = '35%' ;
    // document.getElementById('menuSliderContainer').style.opacity = '1';
    document.getElementById('menuSliderContainer').style.display = 'block';
    document.getElementById('menuSliderContainer').style.zIndex = '1';
    setTimeout(()=>document.getElementById('li1').style.transform= 'translateX(0px)' , 100);
    setTimeout(()=>document.getElementById('li2').style.transform= 'translateX(0px)' , 200);
    setTimeout(()=>document.getElementById('li3').style.transform= 'translateX(0px)' , 300);
    setTimeout(()=>document.getElementById('li4').style.transform= 'translateX(0px)' , 400);
    setTimeout(()=>document.getElementById('li5').style.transform= 'translateX(0px)' , 500);
}
var swipeResponsiveMenu = () => {
    document.getElementById('menuResponsiveSlider').style.width = '100%' ;
    // document.getElementById('menuResponsiveSliderContainer').style.opacity = '1';
    document.getElementById('menuResponsiveSliderContainer').style.display = 'block';
    document.getElementById('menuResponsiveSliderContainer').style.zIndex = '1';
    setTimeout(()=>document.getElementById('li1Responsive').style.transform= 'translateX(0px)' , 100);
    setTimeout(()=>document.getElementById('li2Responsive').style.transform= 'translateX(0px)' , 200);
    setTimeout(()=>document.getElementById('li3Responsive').style.transform= 'translateX(0px)' , 300);
    setTimeout(()=>document.getElementById('li4Responsive').style.transform= 'translateX(0px)' , 400);
    setTimeout(()=>document.getElementById('li5Responsive').style.transform= 'translateX(0px)' , 500);
}

var closeMenu = () => {
    document.getElementById('menuSlider').style.width = '0%';
    // document.getElementById('menuSliderContainer').style.opacity = '0';
    document.getElementById('menuSliderContainer').style.display = 'none';
    document.getElementById('menuSliderContainer').style.zIndex = '-1';
    setTimeout(()=>document.getElementById('li1').style.transform= 'translateX(-100px)' , 100);
    setTimeout(()=>document.getElementById('li2').style.transform= 'translateX(-100px)' , 200);
    setTimeout(()=>document.getElementById('li3').style.transform= 'translateX(-100px)' , 300);
    setTimeout(()=>document.getElementById('li4').style.transform= 'translateX(-100px)' , 400);
    setTimeout(()=>document.getElementById('li5').style.transform= 'translateX(-100px)' , 500);
}
var closeResponsiveMenu = () => {
    document.getElementById('menuResponsiveSlider').style.width = '0%';
    // document.getElementById('menuResponsiveSliderContainer').style.opacity = '0';
    document.getElementById('menuResponsiveSliderContainer').style.display = 'none';
    document.getElementById('menuResponsiveSliderContainer').style.zIndex = '-1';
    setTimeout(()=>document.getElementById('li1Responsive').style.transform= 'translateX(-100px)' , 100);
    setTimeout(()=>document.getElementById('li2Responsive').style.transform= 'translateX(-100px)' , 200);
    setTimeout(()=>document.getElementById('li3Responsive').style.transform= 'translateX(-100px)' , 300);
    setTimeout(()=>document.getElementById('li4Responsive').style.transform= 'translateX(-100px)' , 400);
    setTimeout(()=>document.getElementById('li5Responsive').style.transform= 'translateX(-100px)' , 500);
}
//search input in menu
var openSearchInput = () => {
    document.getElementById('searchInput').style.width = '230px';
    document.getElementById('searchInput').style.overflow = 'visible';
    document.getElementById('searchInput').style.transition = 'width 500ms';
    document.getElementById('closeSearchIcon').style.opacity = '1';
    document.getElementById('openSearchIcon').style.opacity = '0';
}
var openSearchInputResponsiveMenu = () => {
    document.getElementById('searchInputResponsiveMenu').style.width = '230px';
    document.getElementById('searchInputResponsiveMenu').style.overflow = 'visible';
    document.getElementById('searchInputResponsiveMenu').style.transition = 'width 500ms';
    document.getElementById('closeSearchIconResponsiveMenu').style.opacity = '1';
    document.getElementById('openSearchIconResponsiveMenu').style.opacity = '0';
}

var closeSearchInput = () =>{
    document.getElementById('searchInput').style.width = '0px';
    document.getElementById('searchInput').style.overflow = 'hidden';
    document.getElementById('closeSearchIcon').style.opacity = '0';
    document.getElementById('openSearchIcon').style.opacity = '1';
}
var closeSearchInputResponsiveMenu = () =>{
    document.getElementById('searchInputResponsiveMenu').style.width = '0px';
    document.getElementById('searchInputResponsiveMenu').style.overflow = 'hidden';
    document.getElementById('closeSearchIconResponsiveMenu').style.opacity = '0';
    document.getElementById('openSearchIconResponsiveMenu').style.opacity = '1';
}


//Header Text Change

setInterval( () => textChange() , 18000);

setTimeout(() => firstOpen() , 0);
setTimeout(() => firstClose() , 3000);
setTimeout(() => secondOpen() , 6000);
setTimeout(() => secondClose() , 9000);
setTimeout(() => thirdOpen() , 12000);
setTimeout(() => thirdClose() , 15000);


var time = 0;
var textChange = () => {
    setTimeout(() => firstOpen() , 0);
    setTimeout(() => firstClose() , 3000);
    setTimeout(() => secondOpen() , 6000);
    setTimeout(() => secondClose() , 9000);
    setTimeout(() => thirdOpen() , 12000);
    setTimeout(() => thirdClose() , 15000);
}

var firstOpen = () => {
    // console.log('first text')
    document.getElementById('title2').style.width ='250px';
    document.getElementById('p1').style.width = '250px';
    //responsive
    document.getElementById('title2Responsive').style.width ='165px';
    document.getElementById('p1Responsive').style.width = '165px';
    //responsive2
    document.getElementById('title2Responsive2').style.width ='115px';
    document.getElementById('p1Responsive2').style.width = '115px';
}
var secondOpen = () => {
    // console.log('first text')
    document.getElementById('title2').style.width = '190px';
    document.getElementById('p2').style.width = '190px';
    //responsive
    document.getElementById('title2Responsive').style.width = '130px';
    document.getElementById('p2Responsive').style.width = '130px';
    //responsive2
    document.getElementById('title2Responsive2').style.width = '90px';
    document.getElementById('p2Responsive2').style.width = '90px';
}
var thirdOpen= () => {
    // console.log('first text')
    document.getElementById('title2').style.width = '190px';
    document.getElementById('p3').style.width = '190px';
    //responsive
    document.getElementById('title2Responsive').style.width = '130px';
    document.getElementById('p3Responsive').style.width = '130px';
    //responsive2
    document.getElementById('title2Responsive2').style.width = '90px';
    document.getElementById('p3Responsive2').style.width = '90px';
}

var firstClose = () => {
    // console.log('first text')
    document.getElementById('title2').style.width = '0px';
    document.getElementById('p1').style.width = '0px';
    //responsive
    document.getElementById('title2Responsive').style.width = '0px';
    document.getElementById('p1Responsive').style.width = '0px';
    //responsive2
    document.getElementById('title2Responsive2').style.width = '0px';
    document.getElementById('p1Responsive2').style.width = '0px';
}
var secondClose = () => {
    // console.log('first text')
    document.getElementById('title2').style.width = '0px';
    document.getElementById('p2').style.width = '0px';
    //responsive
    document.getElementById('title2Responsive').style.width = '0px';
    document.getElementById('p2Responsive').style.width = '0px';
    //responsive2
    document.getElementById('title2Responsive2').style.width = '0px';
    document.getElementById('p2Responsive2').style.width = '0px';
}
var thirdClose= () => {
    // console.log('first text')
    document.getElementById('title2').style.width = '0px';
    document.getElementById('p3').style.width = '0px';
    //responsive
    document.getElementById('title2Responsive').style.width = '0px';
    document.getElementById('p3Responsive').style.width = '0px';
    //responsive2
    document.getElementById('title2Responsive2').style.width = '0px';
    document.getElementById('p3Responsive2').style.width = '0px';
}

// Header image opacity change 

var headingPic1Display = () => {
    document.getElementById('pic1').style.opacity = 1;
    document.getElementById('pic2').style.opacity = 0;
    document.getElementById('pic3').style.opacity = 0;
    document.getElementById('pic4').style.opacity = 0;

    document.getElementById('pic1').style.transform = 'scale(1.1)';
    document.getElementById('pic1').style.transition = 'all 7000ms';
    document.getElementById('pic2').style.transform = 'scale(1)';
    document.getElementById('pic3').style.transform = 'scale(1)';
    document.getElementById('pic4').style.transform = 'scale(1)';
}
var headingPic4Display = () => {
    document.getElementById('pic4').style.opacity = 1;
    document.getElementById('pic2').style.opacity = 0;
    document.getElementById('pic3').style.opacity = 0;
    document.getElementById('pic1').style.opacity = 0;

    document.getElementById('pic4').style.transform = 'scale(1.1)';
    document.getElementById('pic4').style.transition = 'all 7000ms';
    document.getElementById('pic2').style.transform = 'scale(1)';
    document.getElementById('pic3').style.transform = 'scale(1)';
    document.getElementById('pic1').style.transform = 'scale(1)';
}
var headingPic2Display = () => {
    document.getElementById('pic1').style.opacity = 0;
    document.getElementById('pic2').style.opacity = 1;
    document.getElementById('pic3').style.opacity = 0;
    document.getElementById('pic4').style.opacity = 0;

    document.getElementById('pic2').style.transform = 'scale(1.1)';
    document.getElementById('pic2').style.transition = 'all 7000ms';
    document.getElementById('pic1').style.transform = 'scale(1)';
    document.getElementById('pic3').style.transform = 'scale(1)';
    document.getElementById('pic4').style.transform = 'scale(1)';
}
var headingPic3Display = () => {
    document.getElementById('pic1').style.opacity = 0;
    document.getElementById('pic2').style.opacity = 0;
    document.getElementById('pic3').style.opacity = 1;
    document.getElementById('pic4').style.opacity = 0;

    document.getElementById('pic3').style.transform = 'scale(1.1)';
    document.getElementById('pic3').style.transition = 'all 7000ms';
    document.getElementById('pic2').style.transform = 'scale(1)';
    document.getElementById('pic1').style.transform = 'scale(1)';
    document.getElementById('pic4').style.transform = 'scale(1)';
}
var headingDisplay = () => {
    setTimeout(() => headingPic1Display() , 5000);
    setTimeout(() => headingPic2Display() , 10000);
    setTimeout(() => headingPic3Display() , 15000);
    setTimeout(() => headingPic4Display() , 20000);
}
setTimeout(() => headingPic1Display() , 5000);
setTimeout(() => headingPic2Display() , 10000);
setTimeout(() => headingPic3Display() , 15000);
setTimeout(() => headingPic4Display() , 20000);


setInterval(() => headingDisplay() , 20000);

//second Div slider

// var swipeLeftPic1 = () => {
//     document.getElementById('secondDivImagesSlider').style.transform = 'translate3d(0px, 0px, 0px)';
//     // console.log('this is slider')
//     //responsive
//     document.getElementById('secondDivImagesSliderResponsive').style.transform = 'translate3d(0px, 0px, 0px)';
// }
// var swipeLeftPic2 = () => {
//     document.getElementById('secondDivImagesSlider').style.transform = 'translate3d(-470px, 0px, 0px)';
//     //responsive
//     document.getElementById('secondDivImagesSliderResponsive').style.transform = 'translate3d(-33%, 0px, 0px)';
// }
// var swipeLeftPic3 = () => {
//     document.getElementById('secondDivImagesSlider').style.transform = 'translate3d(-940px, 0px, 0px)';
//     //responsive
//     document.getElementById('secondDivImagesSliderResponsive').style.transform = 'translate3d(-66%, 0px, 0px)';
// }
// setTimeout(() => swipeLeftPic1() , 1000);
// setTimeout(() => swipeLeftPic2() , 3000);
// setTimeout(() => swipeLeftPic3() , 6000);
// secondDivSlider = () => {
//     setTimeout(() => swipeLeftPic1() , 1000);
//     setTimeout(() => swipeLeftPic2() , 3000);
//     setTimeout(() => swipeLeftPic3() , 6000);
// }
// setInterval(() => secondDivSlider() , 8000);

// send Div fade up

$(document).ready(function() {
    // Check if element is scrolled into view
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return elemBottom <= docViewBottom && elemTop >= docViewTop;
    }
    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
        // console.log('scroll');
        if (isScrolledIntoView($('#secondDiv')) === true) {
            $($('#secondDiv')).addClass("animate__animated animate__fadeInUp");
            document.getElementById('#secondDiv').style.opacity = '1';
        }
    })
}); 


// fourth div menu

var open = true ;


var openFourthDivMenu = () => {
    if(!open){
        // console.log('you close the menu bar')
        document.getElementById('iconMenuBar').style.opacity = '1';
        document.getElementById('iconExit').style.opacity = '0';
        open = true;
        document.getElementById('fourthDivMenuList').style.opacity = '0';
        // document.getElementById('fourthDivMenuList').addClass("animate__animated animate__fadeInLeft");
        document.getElementById('fourthDivMenuList').style.transform = 'translateX(60px)';
        // document.getElementById('fourthDivMenuList').style.width = '0px';
        document.getElementById('fourthDivMenuList').style.zIndex = '-1';
    }
    else{
        // console.log('you open the menu bar')
        document.getElementById('iconMenuBar').style.opacity = '0';
        document.getElementById('iconExit').style.opacity = '1';
        open = false;
        document.getElementById('fourthDivMenuList').style.opacity = '1';
        document.getElementById('fourthDivMenuList').style.transform = 'translateX(-0px)';
        document.getElementById('fourthDivMenuList').style.zIndex = '1';
        // document.getElementById('fourthDivMenuList').style.width = '300px';
        // document.getElementById('fourthDivMenuList').addClass("animate__animated animate__fadeInRight");

    }
}


var openFourthDivMenuResponsive = () => {
    if(!open){
        // console.log('you close the menu bar')
        document.getElementById('iconMenuBarResponsive').style.opacity = '1';
        document.getElementById('iconExitResponsive').style.opacity = '0';
        open = true;
        document.getElementById('fourthDivMenuListResponsive').style.opacity = '0';
        // document.getElementById('fourthDivMenuList').addClass("animate__animated animate__fadeInLeft");
        document.getElementById('fourthDivMenuListResponsive').style.transform = 'translateX(10px)';
        // document.getElementById('fourthDivMenuList').style.width = '0px';
        document.getElementById('fourthDivMenuListResponsive').style.zIndex = '-1';
    }
    else{
        // console.log('you open the menu bar')
        document.getElementById('iconMenuBarResponsive').style.opacity = '0';
        document.getElementById('iconExitResponsive').style.opacity = '1';
        open = false;
        document.getElementById('fourthDivMenuListResponsive').style.opacity = '1';
        document.getElementById('fourthDivMenuListResponsive').style.transform = 'translateX(-0px)';
        document.getElementById('fourthDivMenuListResponsive').style.zIndex = '1';
        // document.getElementById('fourthDivMenuList').style.width = '300px';
        // document.getElementById('fourthDivMenuList').addClass("animate__animated animate__fadeInRight");

    }
}





//fourth div like 


var liked = ($id) => {
    $likingLimits = $id.querySelector('.likingLimits').innerHTML;
    $likeNum = $id.querySelector('p > var').innerHTML;
    if($likingLimits == 'true')
    {
        $id.querySelector('p > var').innerHTML = Number($likeNum) + 1;
        $id.querySelector('.likingLimits').innerHTML = 'false';
        likeActions($id);
    }
    else
    {
        $id.querySelector('p > var').innerHTML = Number($likeNum) - 1;
        $id.querySelector('.likingLimits').innerHTML = 'true';
        disLikeActions($id);
    }
}
var likeActions = ($id) => {

    $id.querySelector('.likedAlert').style.opacity = '1';
    $id.querySelector('.likedAlert').style.top = '-8px';
    setTimeout(() => $id.querySelector('.likedAlert').style.opacity = '0' , 500);
    $id.style.marginTop = '30px';
    setTimeout(() => $id.style.marginTop = '20px' , 200);
    $id.querySelector('.likeicons > #fillLikeIcon').style.display = 'block';
    $id.querySelector('.likeicons > #fillLikeIcon').style.position = 'relative';
    $id.querySelector('.likeicons > #emptyLikeIcon').style.display = 'none';
    $id.querySelector('.likeicons > #emptyLikeIcon').style.position = 'absolute';

}

var disLikeActions = ($id) => {

    $id.querySelector('.likedAlert').style.opacity = '0';
    $id.querySelector('.likedAlert').style.top = '0px';
    $id.querySelector('.likeicons > #fillLikeIcon').style.display = 'none';
    $id.querySelector('.likeicons > #fillLikeIcon').style.position = 'absolute';
    $id.querySelector('.likeicons > #emptyLikeIcon').style.display = 'block';
    $id.querySelector('.likeicons > #emptyLikeIcon').style.position = 'relative';

}


// fourth div tabs

var fourthDivTabs = ($tabName) => {

    switch($tabName)
    {
        case 'all':
        document.getElementById('all').style.display = 'block';
        document.getElementById('branding').style.display = 'none';
        document.getElementById('webDesign').style.display = 'none';
        document.getElementById('graphicDesign').style.display = 'none';

        document.getElementById('allTitle').style.color = '#7beec7';
        document.getElementById('brandingTitle').style.color = 'black';
        document.getElementById('webDesignTitle').style.color = 'black';
        document.getElementById('graphicDesignTitle').style.color = 'black';
        break;

        case 'branding' :
        document.getElementById('all').style.display = 'none';
        document.getElementById('branding').style.display = 'block';
        document.getElementById('webDesign').style.display = 'none';
        document.getElementById('graphicDesign').style.display = 'none';
    
        document.getElementById('brandingTitle').style.color = '#7beec7';
        document.getElementById('allTitle').style.color = 'black';
        document.getElementById('webDesignTitle').style.color = 'black';
        document.getElementById('graphicDesignTitle').style.color = 'black';
        break;

        case 'webDesign':
        document.getElementById('all').style.display = 'none';
        document.getElementById('branding').style.display = 'none';
        document.getElementById('webDesign').style.display = 'block';
        document.getElementById('graphicDesign').style.display = 'none';

        document.getElementById('webDesignTitle').style.color = '#7beec7';
        document.getElementById('brandingTitle').style.color = 'black';
        document.getElementById('allTitle').style.color = 'black';
        document.getElementById('graphicDesignTitle').style.color = 'black';
        
        break;
        case 'graphicDesign' : 
        document.getElementById('all').style.display = 'none';
        document.getElementById('branding').style.display = 'none';
        document.getElementById('webDesign').style.display = 'none';
        document.getElementById('graphicDesign').style.display = 'block';

        document.getElementById('graphicDesignTitle').style.color = '#7beec7';
        document.getElementById('brandingTitle').style.color = 'black';
        document.getElementById('webDesignTitle').style.color = 'black';
        document.getElementById('allTitle').style.color = 'black';
        
        break;
    }
    
}

var fourthDivTabsResponsive = ($tabName) => {

    switch($tabName)
    {
        case 'all':
        document.getElementById('all').style.display = 'block';
        document.getElementById('branding').style.display = 'none';
        document.getElementById('webDesign').style.display = 'none';
        document.getElementById('graphicDesign').style.display = 'none';

        document.getElementById('allTitleResponsive').style.color = '#7beec7';
        document.getElementById('brandingTitleResponsive').style.color = 'black';
        document.getElementById('webDesignTitleResponsive').style.color = 'black';
        document.getElementById('graphicDesignTitleResponsive').style.color = 'black';
        break;

        case 'branding' :
        document.getElementById('all').style.display = 'none';
        document.getElementById('branding').style.display = 'block';
        document.getElementById('webDesign').style.display = 'none';
        document.getElementById('graphicDesign').style.display = 'none';
    
        document.getElementById('brandingTitleResponsive').style.color = '#7beec7';
        document.getElementById('allTitleResponsive').style.color = 'black';
        document.getElementById('webDesignTitleResponsive').style.color = 'black';
        document.getElementById('graphicDesignTitleResponsive').style.color = 'black';
        break;

        case 'webDesign':
        document.getElementById('all').style.display = 'none';
        document.getElementById('branding').style.display = 'none';
        document.getElementById('webDesign').style.display = 'block';
        document.getElementById('graphicDesign').style.display = 'none';

        document.getElementById('webDesignTitleResponsive').style.color = '#7beec7';
        document.getElementById('brandingTitleResponsive').style.color = 'black';
        document.getElementById('allTitleResponsive').style.color = 'black';
        document.getElementById('graphicDesignTitleResponsive').style.color = 'black';
        
        break;
        case 'graphicDesign' : 
        document.getElementById('all').style.display = 'none';
        document.getElementById('branding').style.display = 'none';
        document.getElementById('webDesign').style.display = 'none';
        document.getElementById('graphicDesign').style.display = 'block';
        
        document.getElementById('graphicDesignTitleResponsive').style.color = '#7beec7';
        document.getElementById('brandingTitleResponsive').style.color = 'black';
        document.getElementById('webDesignTitleResponsive').style.color = 'black';
        document.getElementById('allTitleResponsive').style.color = 'black';
        
        break;
    }
    
}

// function historySlider() {
//     //History Images slide
//     var historyimages = jQuery('#history-images');
//     if (historyimages.length > 0) {
//         historyimages.owlCarousel({
//             singleItem: true,
//             pagination: false,
//             autoPlay: 2000,
//             slideSpeed: 300
//         });
//     }
// };
// jQuery(document).ready(function($) {
// setTimeout(()=> historySlider() , 100);
// }


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 1,
        loop : true,
        autoplay : true,
        startPosition : '#firstPic',
        // slideTransition : 'all',
        autoplayTimeout : 2000,
        smartSpeed : 1000,
        autoplaySpeed : 1000,
        slideTransition : '1ms',
        freeDrag : true,
        // responsiveRefreshRate : 700,
        // responsive : true,
    });
  });

// setTimeout(()=> scaleAll() , 100);
// scaleAll = () => {
//     $selectedTab = document.getElementById('all').querySelectorAll('.row > .fourthDivPicAll');
//     $changeSelectedTab =  document.getElementById('all');
//     console.log($selectedTab.length);
//     for(var i=0 ; i < $selectedTab.length ; i++)
//     {
//         $changeSelectedTab.querySelectorAll('.row > .fourthDivPicAll')[i].style.transform = 'scale(1)';
//         console.log('scale(1)');
//     }
//     //minimize Others

//     $notSelectedTagBranding = document.getElementById('branding').querySelectorAll('.row > .fourthDivPicBranding');
//     $changeNotSelectedTagBranding = document.getElementById('branding');
//     $notSelectedTagGraphicDesign = document.getElementById('graphicDesign').querySelectorAll('.row > .fourthDivPicGraphicDesign');
//     $changeNotSelectedTagGraphicDesign = document.getElementById('graphicDesign');
//     $notSelectedTagWebDesign = document.getElementById('webDesign').querySelectorAll('.row > .fourthDivPicWebDesign');
//     $changeNotSelectedTagWebDesign = document.getElementById('webDesign');

//     for(var j=0 ; j<$notSelectedTagBranding.length ; j++)
//     {
//         $changeNotSelectedTagBranding.querySelectorAll('.row > .fourthDivPicBranding')[j].style.transform = 'scale(.5)';
//     }
//     for(var h = 0; h<$notSelectedTagGraphicDesign.length ; h++)
//     {
//         $changeNotSelectedTagGraphicDesign.querySelectorAll('.row > .fourthDivPicGraphicDesign')[h].style.transform = 'scale(.5)';
//     }
//     for(var t = 0 ; t<$notSelectedTagWebDesign.length ; t++)
//     {
//         $changeNotSelectedTagWebDesign.querySelectorAll('.row > .fourthDivPicWebDesign')[t].style.transform = 'scale(.5)'
//     }
// }

// setTimeout(()=> scaleBranding() , 100);
// scaleBranding = () => {
//     $selectedTab = document.getElementById('branding').querySelectorAll('.row > .fourthDivPicBranding');
//     $changeSelectedTab =  document.getElementById('branding');
//     for(var i=0 ; i<$selectedTab.length ; i++)
//     {
//         $changeSelectedTab.querySelectorAll('.row > .fourthDivPicBranding')[i].style.transform = 'scale(1)';
//     }
//     //minimize Others

//     $notSelectedTagAll = document.getElementById('all').querySelectorAll('.row > .fourthDivPicAll');
//     $changeNotSelectedTagAll = document.getElementById('all');
//     $notSelectedTagGraphicDesign = document.getElementById('graphicDesign').querySelectorAll('.row > .fourthDivPicGraphicDesign');
//     $changeNotSelectedTagGraphicDesign = document.getElementById('graphicDesign');
//     $notSelectedTagWebDesign = document.getElementById('webDesign').querySelectorAll('.row > .fourthDivPicWebDesign');
//     $changeNotSelectedTagWebDesign = document.getElementById('webDesign');

//     for(var j=0 ; j<$notSelectedTagAll.length ; j++)
//     {
//         $changeNotSelectedTagAll.querySelectorAll('.row > .fourthDivPicAll')[j].style.transform = 'scale(.5)';
//     }
//     for(var i = 0; i<$notSelectedTagGraphicDesign.length ; i++)
//     {
//         $changeNotSelectedTagGraphicDesign.querySelectorAll('.row > .fourthDivPicGraphicDesign')[i].style.transform = 'scale(.5)';
//     }
//     for(var t = 0 ; t<$notSelectedTagWebDesign.length ; t++)
//     {
//         $changeNotSelectedTagWebDesign.querySelectorAll('.row > .fourthDivPicWebDesign')[t].style.transform = 'scale(.5)'
//     }
// }




// setTimeout(()=> scaleWebDesign() , 100);
// scaleWebDesign = () => {
//     $selectedTab = document.getElementById('webDesign').querySelectorAll('.row > .fourthDivPicWebDesign');
//     $changeSelectedTab =  document.getElementById('webDesign');
//     console.log($selectedTab.length);
//     for(var i=0 ; i < $selectedTab.length ; i++)
//     {
//         $changeSelectedTab.querySelectorAll('.row > .fourthDivPicWebDesign')[i].style.transform = 'scale(1)';
//         console.log('scale(1)');
//     }
//     //minimize Others

//     $notSelectedTagBranding = document.getElementById('branding').querySelectorAll('.row > .fourthDivPicBranding');
//     $changeNotSelectedTagBranding = document.getElementById('branding');
//     $notSelectedTagGraphicDesign = document.getElementById('graphicDesign').querySelectorAll('.row > .fourthDivPicGraphicDesign');
//     $changeNotSelectedTagGraphicDesign = document.getElementById('graphicDesign');
//     $notSelectedTagAll = document.getElementById('all').querySelectorAll('.row > .fourthDivPicAll');
//     $changeNotSelectedTagAll = document.getElementById('all');

//     for(var j=0 ; j<$notSelectedTagBranding.length ; j++)
//     {
//         $changeNotSelectedTagBranding.querySelectorAll('.row > .fourthDivPicBranding')[j].style.transform = 'scale(.5)';
//     }
//     for(var h = 0; h<$notSelectedTagGraphicDesign.length ; h++)
//     {
//         $changeNotSelectedTagGraphicDesign.querySelectorAll('.row > .fourthDivPicGraphicDesign')[h].style.transform = 'scale(.5)';
//     }
//     for(var t = 0 ; t<$notSelectedTagAll.length ; t++)
//     {
//         $changeNotSelectedTagAll.querySelectorAll('.row > .fourthDivPicAll')[t].style.transform = 'scale(.5)'
//     }
// }


// setTimeout(()=> scaleGraphicDesign() , 100);
// scaleGraphicDesign = () => {
//     $selectedTab = document.getElementById('graphicDesign').querySelectorAll('.row > .fourthDivPicGraphicDesign');
//     $changeSelectedTab =  document.getElementById('graphicDesign');
//     console.log($selectedTab.length);
//     for(var i=0 ; i < $selectedTab.length ; i++)
//     {
//         $changeSelectedTab.querySelectorAll('.row > .fourthDivPicGraphicDesign')[i].style.transform = 'scale(1)';
//         console.log('scale(1)');
//     }
//     //minimize Others

//     $notSelectedTagBranding = document.getElementById('branding').querySelectorAll('.row > .fourthDivPicBranding');
//     $changeNotSelectedTagBranding = document.getElementById('branding');
//     $notSelectedTagAll = document.getElementById('all').querySelectorAll('.row > .fourthDivPicAll');
//     $changeNotSelectedTagAll = document.getElementById('all');
//     $notSelectedTagWebDesign = document.getElementById('webDesign').querySelectorAll('.row > .fourthDivPicWebDesign');
//     $changeNotSelectedTagWebDesign = document.getElementById('webDesign');

//     for(var j=0 ; j<$notSelectedTagBranding.length ; j++)
//     {
//         $changeNotSelectedTagBranding.querySelectorAll('.row > .fourthDivPicBranding')[j].style.transform = 'scale(.5)';
//     }
//     for(var h = 0; h<$notSelectedTagAll.length ; h++)
//     {
//         $changeNotSelectedTagAll.querySelectorAll('.row > .fourthDivPicAll')[h].style.transform = 'scale(.5)';
//     }
//     for(var t = 0 ; t<$notSelectedTagWebDesign.length ; t++)
//     {
//         $changeNotSelectedTagWebDesign.querySelectorAll('.row > .fourthDivPicWebDesign')[t].style.transform = 'scale(.5)'
//     }
// }