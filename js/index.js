var allowAutoScroll = true

const scrollTo = id => {
  const target = $(id == '#' || id == '' ? 'html' : id)
  const scrollTop = target.get(0).offsetTop
  $(".mdl-layout__content").animate({ scrollTop }, 1000, 'swing', () => {
    allowAutoScroll = true
  })
}

$('a.scroll').click(function() {
  if (allowAutoScroll) {
    allowAutoScroll = false
    scrollTo($(this).attr('href'))
  }
})

$(window).on('load', () => {
  $('.fadeIn').delay(500).fadeTo(1000, 1)
  $('.fadeIn-slow').delay(1500).fadeTo(2000, 1)
})
