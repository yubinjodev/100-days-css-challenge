let isOpen = false

const handleClickClose = () => {
  $(".hamburger-menu__bar")
    .css({
      position: "unset",
      transform: "unset",
    })
    .animate(
      {
        top: "unset",
        left: "unset",
      },
      5_000,
    )

  isOpen = false
}

const handleClickOpen = () => {
  $(".hamburger-menu__bar")
    .css({
      position: "absolute",
      transform: "translate(-50%, -50%)",
    })
    .animate(
      {
        top: "50%",
        left: "50%",
      },
      5_000,
      () => {},
    )

  isOpen = true
}

$(".hamburger-menu").click(() => {
  if (isOpen) {
    handleClickClose()
  } else {
    handleClickOpen()
  }
})
