let isOpen = true

const handleClickClose = () => {
  $(".hamburger__bar--tertiary")
    .animate({
      width: "30%",
    })
    .fadeOut()

  $(".hamburger__bar").animate({
    marginTop: "0px",
    marginBottom: "0px",
  })

  $(".hamburger__bar--primary").css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100px",
  })
  $(".hamburger__bar--secondary").css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100px",
  })

  isOpen = false
}

const handleClickOpen = () => {
  $(".hamburger__bar--tertiary").fadeIn().animate({
    width: "100%",
  })

  $(".hamburger__bar").animate({
    marginTop: "0px",
    marginBottom: "0px",
  })

  $(".hamburger__bar--primary").css({
    position: "unset",
    top: "unset",
    left: "unset",
    transform: "unset",
  })

  $(".hamburger__bar--secondary").css({
    position: "unset",
    top: "unset",
    left: "unset",
    transform: "unset",
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
