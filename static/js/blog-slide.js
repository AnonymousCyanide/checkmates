
// alert("hell")
$('#sec-1').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    dots:true,
    // autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    nextArrow: '<div class="right"><i class="fa fa-angle-right"></i></div>',
    prevArrow: '<div class="left"><i class="fa fa-angle-left"></i></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrow: true,
          dots:true,
          adaptiveHeight: true
        }
      }
    ]
  });

  $('.ads-div .secc').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    dots:true,
    // autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
    nextArrow: '<div class="right"><i class="fa fa-angle-right"></i></div>',
    prevArrow: '<div class="left"><i class="fa fa-angle-left"></i></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrow: true,
          dots:true,
          adaptiveHeight: true
        }
      }
    ]
  });

  $('#card-parent').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    dots:true,
    autoplaySpeed: 2000,
    // autoplay: true,
    adaptiveHeight: true,
    nextArrow: '<div class="right"><i class="fa fa-angle-right"></i></div>',
    prevArrow: '<div class="left"><i class="fa fa-angle-left"></i></div>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: true,
          dots:true,
          adaptiveHeight: true
        }
      }
    ]
  });
  

  var flag = true;

  document.querySelector ("#f-top #down-arrow").addEventListener ("click", function () {
    if (flag === true) {
      document.querySelector ("#f-btm").style.display = "initial";
      document.querySelector ("#down-arrow").style.transform = "rotate(180deg)";
      flag = false;
    }
    else {
      document.querySelector ("#down-arrow").style.transform = "rotate(360deg)";
      document.querySelector ("#f-btm").style.display = "none";
      flag = true;
    }
  })


 


    $('#main #option_bar').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrow: true,
      dots:true,
      autoplay: true,
      adaptiveHeight: true,
      autoplaySpeed: 2000,
      nextArrow: '<div class="right"><i class="fa fa-angle-right"></i></div>',
      prevArrow: '<div class="left"><i class="fa fa-angle-left"></i></div>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrow: true,
            dots:true,
            adaptiveHeight: true
          }
        }
      ]
    });