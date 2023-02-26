$('#sec-13').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrow: true,
    dots:true,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 2000,
  });

  $('#sec-1').slick({
    infinite: true,
    slidesToShow: 4,
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
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 550,
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

  var overlay = document.querySelector ("#overlay");
  var body = document.querySelector ("body");
  
  const abc = function (e) {
    var open = overlay.style.left = "0"
    if(open) {
      console.log("hey")
      body.style.overflow = "hidden";
    }
    else {
      body.style.overflow = "auto";
    }
    }
    
    document.querySelector ("#overlay #close").addEventListener ("click", function () {
    var close = overlay.style.left = "-100%";
    if (close) {
      body.style.overflow = "initial";
    }
    })