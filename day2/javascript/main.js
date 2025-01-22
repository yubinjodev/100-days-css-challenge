let isOpen = true

const handleClickClose = () => {
  $(".hamburger__bar--tertiary")
    .animate({
      width: "30%",
    })
    .fadeOut()

  isOpen = false
}

const handleClickOpen = () => {
  $(".hamburger__bar--tertiary").fadeIn().animate({
    width: "100%",
  })

  isOpen = true
}

$(".hamburger").click(() => {
  if (isOpen) {
    handleClickClose()
  } else {
    handleClickOpen()
  }
})
