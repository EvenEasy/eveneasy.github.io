let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

var body = document.getElementsByTagName('body')[0]
window.onscroll = function(event) {
    var scroll = window.pageYOffset;
    if (scroll < 500) {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    }
    else if (scroll > 500 && scroll < 1200) {
        body.style.backgroundColor = '#324cff';
        body.style.color = 'white';
    }
    else {
        body.style.backgroundColor = '#080919';
        body.style.color = 'white';
    }
}

function add_order(type) {
    if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
    item=type;
    console.log(type);
    tg.MainButton.setText(`Ви обрали ${type}`);
    tg.MainButton.show();
}

let welcometext = document.getElementById("welcometext");


tg.onEvent('mainButtonClicked', function(){
	tg.sendData(item);
});

welcometext.innerHTML = `<b>${tg.initDataUnsafe.user.first_name}</b> Ласкаво просимо у Snizhok Bot послуги`;
