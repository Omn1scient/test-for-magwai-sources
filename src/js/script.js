function ready() {

}

document.addEventListener("DOMContentLoaded", ready);

console.log('script.js')



/*

// mobile header callback
var headerCallbackBlock = document.querySelector('.header .header__col-phone');
var headerMobileCallback = document.querySelector('.header .mobile-callback-icon');
var headerCallbackMobileClose = document.querySelector('.header .callback-block__mobile-close');

headerMobileCallback.addEventListener('click', function(evt) {
  evt.preventDefault();
  headerCallbackBlock.classList.add('callback-show');
});

headerCallbackMobileClose.addEventListener('click', function() {
  headerCallbackBlock.classList.remove('callback-show');
});


 */

// mobile menu hamburger click
var headerMenuButton = document.querySelector('.header-menu-button');
var mobileHamburger = document.querySelector('.hamburger');
var mobileMenu = document.querySelector('.header .mobile-menu');
var mobileOverlay = document.querySelector('.mobile-menu-overlay');

headerMenuButton.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (!headerMenuButton.classList.contains('active')) {
    headerMenuButton.classList.add('active');
    mobileHamburger.classList.add('active');
    mobileMenu.classList.add('mobile-menu--show');
    //document.querySelector('body').style.position = "fixed";
    document.querySelector('body').classList.add('body-fixed');
    document.querySelector('header').classList.add('m-menu-open')
    mobileOverlay.classList.add('overlay-show');
    header.classList.add('header-fixed');

    if (window.pageYOffset < 50) {
      if (window.innerWidth < 767) {
        headerHolder.style.minHeight = (header.offsetHeight + headerWrapper.offsetHeight) - 55 + 'px';
      }
      else {
        headerHolder.style.minHeight = (header.offsetHeight + headerWrapper.offsetHeight) - 95 + 'px';
      }
    }

  } else {
    headerMenuButton.classList.remove('active');
    mobileHamburger.classList.remove('active');
    mobileMenu.classList.remove('mobile-menu--show');
    document.querySelector('body').classList.remove('body-fixed');
    //document.querySelector('body').style.position = "static";
    mobileOverlay.classList.remove('overlay-show');
    document.querySelector('header').classList.remove('m-menu-open')

    if (window.pageYOffset < 50) {
      header.classList.remove('header-fixed');
      headerHolder.style.minHeight = 0 + 'px';
    }

  }
})


var header = document.querySelector('header');
var dropdownMenu = document.querySelectorAll('.dropdown-menu');


if (window.innerWidth > 991 && document.querySelector('body').classList.contains('home')) {
  header.addEventListener('mouseenter', function (e) {
    header.classList.remove('transparent');
  });

  header.addEventListener('mouseleave', function () {
    headerHover()
  })
}

function headerHover() {
  for (let i = 0; i < dropdownMenu.length; i++) {
    if (!dropdownMenu[0].classList.contains('show') && !dropdownMenu[1].classList.contains('show')) {
      if (window.pageYOffset < 50 && document.querySelector('body').classList.contains('home')) {
        header.classList.add('transparent');
      }
    }
  }
}


if (document.querySelector('.swiper')) {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 500,
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}


// Simple bar initialization
if (document.querySelector('.custom-scrollbar') !== null) {
  var customScrollbar = document.querySelectorAll('.custom-scrollbar');

  for (var i = 0; i < customScrollbar.length; i++) {
    new SimpleBar(customScrollbar[i], {
      autoHide: false,
      scrollbarMinSize: 10,
      scrollbarMaxSize: 35
    })
  }
}

// FIXED CALL BUTTON //
setTimeout(function() {
  if (document.querySelector('.dialog-button a')!== null) {

    var callButton = document.querySelector('.dialog-button a');
    var callrequestModal = new bootstrap.Modal(document.getElementById('modalCallrequest'))

    if (window.innerWidth > 992) {
      callButton.addEventListener('click', function(evt) {
        evt.preventDefault();
        callrequestModal.show();
      })
    }
  }
}, 500);


//mobileOverlay.addEventListener('click', function() {
  //document.querySelector('body').style.position = "static"
  //mobileMenu.classList.remove('menu-show');
  //mobileOverlay.classList.remove('overlay-show');
//})

/*
// mobile filter click
if (document.querySelector('.components-filter__mobile-filter-title') !== null) {
  var mobileFilterBtn = document.querySelector('.components-filter__mobile-filter-title');
  var filterCloseBtn = document.querySelector('.filter__form-close-btn');
  var productsFilter = document.querySelector('.components-inner-catalog__filter');

  mobileFilterBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.querySelector('body').style.position = "fixed"
    productsFilter.classList.add('filter-show');
    mobileOverlay.classList.add('overlay-show');
  })

  mobileOverlay.addEventListener('click', function() {
    document.querySelector('body').style.position = "static"
    productsFilter.classList.remove('filter-show');
    mobileOverlay.classList.remove('overlay-show');
  })

  filterCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.querySelector('body').style.position = "static"
    productsFilter.classList.remove('filter-show');
    mobileOverlay.classList.remove('overlay-show');
  })
}

 */

/*
// mobile submenu item
if (window.innerWidth < 992) {
  var mobileSubmenuWrapper = document.querySelectorAll('.header .dropdown-menu-item');
  var mobileSubmenu = document.querySelectorAll('.header .dropdown-menu-item__list');

  var dropdown = document.querySelectorAll('.header .dropdown');

  for (var i = 0; i < mobileSubmenuWrapper.length; i++) {
    mobileSubmenuClick(mobileSubmenuWrapper[i], mobileSubmenu[i]);
  }

  function mobileSubmenuClick(mobileSubmenuElement, mobileSubmenu) {
    mobileSubmenuElement.addEventListener('click', function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      mobileSubmenu.classList.toggle('mobile-show');
    })
  }
}

 */


//fixed-header
var headerHolder = document.querySelector('.header-holder');
var headerWrapper = document.querySelector('.header__wrapper');
var headerTopAddress = document.querySelector('.header__top-address');


window.onscroll = function showHeader() {
  if (window.pageYOffset > 50) {
    header.classList.add('header-fixed');
    header.classList.remove('transparent');
    headerTopAddress.style.display = 'none';

    if (window.innerWidth < 767) {
      headerHolder.style.minHeight = (header.offsetHeight + headerWrapper.offsetHeight) - 30 + 'px';
    } else {
      headerHolder.style.minHeight = (header.offsetHeight + headerWrapper.offsetHeight) - 52 + 'px';
    }

    } else {
    headerTopAddress.style.display = 'block';
    header.classList.remove('header-fixed')
    headerHolder.style.minHeight = 0 + 'px';
    headerHover()
  }
};



/*
// smooth scrolling to anchor
$(document).on('click', 'a[data-scroll^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: ($($.attr(this, 'data-scroll')).offset().top - 100)
  }, 700);
});



 */

/*
// tabs
$('.nav-tabs a').click(function(){
  $(this).tab('show');
});



 */

