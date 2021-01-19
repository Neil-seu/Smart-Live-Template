$('#testimonialCarousel').carousel({
  interval: 2000
})

$('.carousel .carousel-item').each(function () {
  var minPerSlide = 1;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }

    next.children(':first-child').clone().appendTo($(this));
  }
});

$('.portfolio-item').isotope({
  itemSelector: '.card',
  layoutMode: 'fitRows',
});
$('.portfolioMainLinks a').click(function () {
  $('.portfolioMainLinks a').removeClass('active');
  $(this).addClass('active');

  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter: selector
  });
  return false;
});

$(window).load(function () {
  equalheight('.card');
});

equalheight = function (container) {

  var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
  $(container).each(function () {

    $el = $(this);
    $($el).height('auto')
    topPostion = $el.position().top;

    if (currentRowStart != topPostion) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
}

$(window).resize(function () {
  equalheight('.card');
});
