const scrollTo = id => {
  const target = $(id == '#' || id == '' ? 'html' : id)
  console.log(target.get(0).offsetTop);
  const scrollTop = target.get(0).offsetTop
  $('html').animate({ scrollTop }, 500, 'swing')
}

$('a.scroll').click(function() {
  scrollTo($(this).attr('href'))
})

$(document).ready(() => {
  $('.fade-in').delay(500).fadeTo(1000, 1)
  // console.log($('.fade-in'));
  $('.fade-in-slow').delay(1500).fadeTo(2000, 1)
})
