let isOpen = true

const handleClickClose = () => {
  $(".hamburger__bar--tertiary").animate(
    {
      width: "30%",
    },
    500,
    function () {
      $(this).css({
        display: "none",
      })
    },
  )

  $(".hamburger__bar--secondary")
    .css({
      transform: "translate(-50%, -50%)",
    })
    .animate(
      {
        top: "50%",
      },
      {
        complete: function () {
          $(this).css({
            transform: "translate(-50%, -50%) rotate(45deg)",
          })
        },
      },
    )

  $(".hamburger__bar--primary")
    .css({
      transform: "translate(-50%, -50%)",
    })
    .animate(
      {
        top: "50%",
      },
      {
        complete: function () {
          $(this).css({
            transform: "translate(-50%, -50%) rotate(130deg)",
          })
        },
      },
    )

  isOpen = false
}

const handleClickOpen = () => {
  $(".hamburger__bar--secondary").css({
    transform: "translate(-50%, 0%)",
  })

  $(".hamburger__bar--primary").css({
    transform: "translate(-50%, 0%)",
  })

  setTimeout(() => {
    $(".hamburger__bar--secondary").animate({
      top: "0px",
    })
    $(".hamburger__bar--primary").animate({
      top: "50px",
    })
  }, 500)
  setTimeout(() => {
    $(".hamburger__bar--tertiary").fadeIn().animate({
      width: "100%",
    })
  }, 100)

  isOpen = true
}

$(".hamburger").click(() => {
  if (isOpen) {
    handleClickClose()
  } else {
    handleClickOpen()
  }
})
