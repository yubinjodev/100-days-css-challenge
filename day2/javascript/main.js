let isOpen = true

const handleClickClose = () => {
  $(".hamburger__bar--tertiary")
    .animate(
      {
        width: "30%",
        display: "none",
      },
      500,
    )
    .fadeOut()

  $(".hamburger__bar--secondary")
    .css({
      transform: "translate(-50%, -50%)",
    })
    .animate({
      top: "50%",
    })

  $(".hamburger__bar--primary")
    .css({
      transform: "translate(-50%, -50%)",
    })
    .animate({
      top: "50%",
    })

  isOpen = false
}

const handleClickOpen = () => {
  $(".hamburger__bar--tertiary").fadeIn().animate(
    {
      width: "100%",
    },
    500,
  )

  $(".hamburger__bar--secondary")
    .animate({
      top: "0px",
    })
    .css({
      transform: "translate(-50%, 0%)",
    })

  $(".hamburger__bar--primary")
    .animate({
      top: "50px",
    })
    .css({
      transform: "translate(-50%, 0%)",
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
