var timeout;

//wachten tot pagina klaar is met laden
window.onload = function() {

    //als de gebruiker gaat scrollen wordt de scrollpositie in scrollY gezet
    //en wordt de navigatie in nav gezet, de navigatie scrollt dan mee
    window.onscroll = function() {
        var scrollY = window.scrollY;
        var nav = document.querySelector('.nav');
        var banner = document.querySelector('.banner');

        //checken of gebruiker verder dan 160 pixels gescrollt heeft
        //zoja dan voegen we de fixed class toe van de navagigatie en/of banner

        if (scrollY >= 160) {
            nav.classList.add('fixed');
            banner.classList.add('fixed');
	    //zonee dan halen we de fixed class eraf van de navagigatie en/of banner
        } else {
            nav.classList.remove('fixed');
            banner.classList.remove('fixed');
        }
    }
	//Swiper van de komende voorstellingen
    if (window.Swiper) {
        var swiper = new Swiper('.swiper-1', {
            direction: 'horizontal',
            loop: true,
			// automatische werking van de swiper
            autoplay: {
                delay: 4000
            },
			//Werking van de buttons van de komende voorstellingen
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
		//Swiper van de agenda
		var swiper2 = new Swiper('.swiper-2', {
			direction: 'horizontal',
			slidesPerView: 3,
			slidesPerGroup: 3,
			loop: true,
			
			//Werking van de buttons van de komende voorstellingen
			navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
		});
    }
	//inschrijfformulier
	//de knoppen ervan
    var buttonNext = document.querySelector('.button.next');
    var buttonPrev = document.querySelector('.button.prev');
	var formulier = document.querySelector('.inschrijven');
	
	//Controle kijken of de knoppen aanwezig zijn
	if (buttonNext && buttonPrev) {
		var active = document.querySelector('.form-step-active');
		//Als de pagina niet meer terug kan, laat vorige niet zien
		if (!active.previousElementSibling) {
			buttonPrev.style.visibility = 'hidden';
		}
		//controle of er nog een volgende pagina is
		buttonNext.onclick = function() {
			var active = document.querySelector('.form-step-active');
			var next = active.nextElementSibling;
			//als je geen volgende meer is veranderd volgende in verzenden
			if (!next.nextElementSibling) {
				buttonNext.innerHTML = '<a href="formulier-verzonden.html">Verzenden';
				
			}
			//vorige knop zichtbaar maken als je 'terug kan'
			buttonPrev.style.visibility = 'visible';
			
			//Als er nog een pagina is tonen
			if (next) {
				active.classList.remove('form-step-active');
				next.classList.add('form-step-active');
			// zo niet formulier versturen
			} else {
				form.submit();
				
			}
		}
		//terugknop
		buttonPrev.onclick = function() {
			var active = document.querySelector('.form-step-active');
			var prev = active.previousElementSibling;
			//als je niet terug kan dan is de terugknop niet zichtbaar
			if (!prev.previousElementSibling) {
				buttonPrev.style.visibility = 'hidden';
			}
			//zorgt als je verder kan er weer volgende staat ipv verznden
			buttonNext.innerHTML = 'Volgende';
			//Als je op terug klikt, ga je terug.
			if (prev) {
				active.classList.remove('form-step-active');
				prev.classList.add('form-step-active');
			}
		}
	}
	//Maanden selector agenda
	//Kijken of de pagina de dropdown bestaat
	var maanden = document.getElementById('maanden');
	
	
	if (maanden) {
	//Als maand van de selector veranderd, dan toont die de juiste pagina ervan (niet alle pagina's zijn aangemaakt)
		maanden.onchange = function() {
			var value = maanden.value;
			
			window.location.href = 'maand-'+value+'.html';
		}
	}
	//Voorstelling seletor agenda
	//Kijken of de pagina de dropdown bestaat
		var voorstelling = document.getElementById('voorstelling');
	//Als voorstelling van de selector veranderd, dan toont die de juiste pagina ervan (niet alle pagina's zijn aangemaakt)
	if (voorstelling) {
		voorstelling.onchange = function() {
			var value = voorstelling.value;
			
			window.location.href = 'voorstelling-'+value+'.html';
		}
	}
}

