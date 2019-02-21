var welcomescreen_slides = [
    {
        id: 'slide0',
        picture: '<div class="tutorialicon"><i class="fas fa-piggy-bank"></i></div>',
        text: 'Welcome to STRATTON  OAKMONT. An investing app you can "trust".'
  },
    {
        id: 'slide1',
        picture: '<div class="tutorialicon"><i class="fas fa-paw"></i></div>',
        text: 'You are Scrooge McDuck...Its simple - Just make more $$$ <br><BR>P.S. Tried finding a duck icon.'
  },
    {
        id: 'slide2',
        picture: '<div class="tutorialicon"><i class="fas fa-university"></i></div>',
        text: 'Since its your first day, we only want you to manage MSFT <i class="fab fa-windows"></i> and get a hang of it.<br><br>We keeping it real so we charge a $9 comission fee during each transaction...We like money too.<br>P.S. we have a chance for you to make over $7000'
  },
    {
        id: 'slide3',
        picture: '<div class="tutorialicon"><i class="fas fa-money-bill-alt"></i></div>',
        text: 'Here is a dollar which is 5000 Kenzos in MY WORLD!...Go get Rich!<br><br> You can comeback to the tutorial by tapping on i<br><br><a id="tutorial-close-btn" onClick="welcomescreen.close();">End Tutorial</a>'
  }
];

var options = {
    'bgcolor': '#2cd048',
    'fontcolor': '#fff'
}
var welcomescreen = new Welcomescreen(welcomescreen_slides, options);