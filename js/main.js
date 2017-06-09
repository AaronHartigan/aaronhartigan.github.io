// Preload images
imageList = [
  "flcmobile.gif",
  "ssi.gif",
  "upchime.gif",
];

imageList.forEach(function(path) {
  new Image().src=`img/${path}`;
});

// add navigation click
let imageSelected = false;

$('.navigation > span').click(function() {
  $('.navigation > span').removeClass('navSelect');
  $(this).addClass('navSelect');
  $('body > div').removeClass('hide');
  const elements = $('body > div').not(`.navigation, .${this.id}`);
  elements.addClass('hide');
  $(`.${this.id}`).removeClass('hide');

  if ((this.id) === 'work') {
    imageSelected = true;
    setTimeout(function(){
      $('.workDisplay > img').addClass('showImage');
    }, 50);
  } else if (imageSelected === true) {
    imageSelected = false;
    $('.workDisplay > img').removeClass('showImage');
  }
})

// add portfolio items click
$('.workTextBox').click(function() {
  $('.workTextBox').removeClass('workSelected');
  $(this).addClass('workSelected');
  $('.workDisplay > img').attr("src", `img/${this.id}.gif`);
})