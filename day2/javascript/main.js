let open = false

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
      5000, // Duration in milliseconds (5 seconds)
      () => {},
    )
}

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
      5000, // Duration in milliseconds (5 seconds)
    )
}

$(".hamburger-menu").click(() => {
  if (open) {
    open = false
    handleClickClose()
  } else {
    open = true
    handleClickOpen()
  }
})
