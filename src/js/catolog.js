// $(document).ready(function () {
//     $(".demo").slick({
//       dots: false,
//       infinite: true,
//       speed: 300,
//       slidesToShow: 5,
//       slidesToScroll: 5,
//       arrow: true,
//       responsive: [
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//           },
//         },
//       ],
//     });
//   });

  $(document).ready(function () {
    $(".demo").slick({
      speed: 300,
      slidesToScroll: 5,
      slidesToShow: 5,
      prevArrow: ` <div class="prev-search">
              <img src="../assents/images/prevArrow.svg" alt="" class="prev">
          </div>`,
      nextArrow: ` <div class="next-search">
              <img src="../assents/images/nextArrow.svg" alt="" class="next">
          </div>`,
    });
  });
  // $(document).ready(function () {
  //   $(".slick_slider").slick({
  //     dots: false,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 5,
  //     slidesToScroll: 5,
  //     arrow: true,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   });
  // });
  