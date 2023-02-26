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
        breakpoint: 768,
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

  onload = function() {
	if ('speechSynthesis' in window) with(speechSynthesis) {

		var playEle = document.querySelector('#play');
		var pauseEle = document.querySelector('#pause');
		var stopEle = document.querySelector('#stop');
		var flag = false;

		playEle.addEventListener('click', onClickPlay);
		pauseEle.addEventListener('click', onClickPause);
		stopEle.addEventListener('click', onClickStop);

		function onClickPlay(e) {
            e.preventDefault();
            // $('html, body').animate({scrollTop:0}, '300');
			if (!flag) {
				flag = true;
				utterance = new SpeechSynthesisUtterance(document.querySelector('#main').textContent);
				utterance.voice = getVoices()[0];
				utterance.onend = function() {
					flag = false;
					playEle.className = pauseEle.className = '';
					stopEle.className = 'stopped';
				};
				playEle.className = 'played';
				stopEle.className = '';
				speak(utterance);
			}
			if (paused) { 
				playEle.className = 'played';
				pauseEle.className = '';
				resume();
			}
		}

		function onClickPause() {
			if (speaking && !paused) {
				pauseEle.className = 'paused';
				playEle.className = '';
				pause();
			}
		}

		function onClickStop() {
			if (speaking) { /* stop narration */
				/* for safari */
				stopEle.className = 'stopped';
				playEle.className = pauseEle.className = '';
				flag = false;
				cancel();

			}
		}

	}

	else { /* speech synthesis not supported */
		msg = document.createElement('h5');
		msg.textContent = "Detected no support for Speech Synthesis";
		msg.style.textAlign = 'center';
		msg.style.backgroundColor = 'red';
		msg.style.color = 'white';
		msg.style.marginTop = msg.style.marginBottom = 0;
		document.body.insertBefore(msg, document.querySelector('div'));
	}
}

var overlay = document.querySelector ("#overlay");
var body = document.querySelector ("body");

const abc = function (e) {
  var open = overlay.style.left = "0"
  if(open) {
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