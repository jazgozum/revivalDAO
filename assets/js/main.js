
jQuery(function ($) {
    $(document).ready(function () {
  
      $('.team-col').owlCarousel({
        loop:true,
        autoplay: true,
        margin:30,
        nav:true,
        dots:false,
        items:4,
        responsive: {
          0: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1025: {
            items: 4,
          }
        },
      })
  
  
      var engagements_owl = $(".engagements-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        stagePadding: 150,
        responsive: {
          0: {
            items: 1,
            stagePadding: 100,
            margin: 10,
          },
          768: {
            items: 1,
            margin: 30,
          },
          1025: {
            items: 3,
          },
          1500: {
            items: 5,
          },
        },
      });
  
      // Go to the previous item
      $(".engagements-arrows .customPrevBtn").click(function (e) {
        e.preventDefault();
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        engagements_owl.trigger("prev.owl.carousel", [300]);
      });
      // Go to the next item
      $(".engagements-arrows .customNextBtn").click(function (e) {
        e.preventDefault();
        engagements_owl.trigger("next.owl.carousel");
      });
  
      engagements_owl.on("changed.owl.carousel", function (e) {
        $(".engagements-carousel .owl-item").removeClass("item-prev-prev-prev");
        $(".engagements-carousel .owl-item").removeClass("item-prev-prev");
        $(".engagements-carousel .owl-item").removeClass("item-prev");
        $(".engagements-carousel .owl-item").removeClass("item-center");
        $(".engagements-carousel .owl-item").removeClass("item-next");
        $(".engagements-carousel .owl-item").removeClass("item-next-next");
        $(".engagements-carousel .owl-item").removeClass("item-next-next-next");
  
        idx = e.item.index;
        var visibleItems = $(".engagements-carousel .owl-item.active").length;
        var halfVisible = visibleItems / 2;
        halfVisible = Math.round(halfVisible);
        idx = idx + halfVisible - 1;
        $(".engagements-carousel .owl-item")
          .eq(idx - 3)
          .addClass("item-prev-prev-prev");
        $(".engagements-carousel .owl-item")
          .eq(idx - 2)
          .addClass("item-prev-prev");
        $(".engagements-carousel .owl-item")
          .eq(idx - 1)
          .addClass("item-prev");
        $(".engagements-carousel .owl-item").eq(idx).addClass("item-center");
        $(".engagements-carousel .owl-item")
          .eq(idx + 1)
          .addClass("item-next");
        $(".engagements-carousel .owl-item")
          .eq(idx + 2)
          .addClass("item-next-next");
        $(".engagements-carousel .owl-item")
          .eq(idx + 3)
          .addClass("item-next-next-next");
      });
      engagements_owl.trigger("next.owl.carousel");
  
      var logos_owl = $(".logos-carousel").owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        dots: false,
        responsive: {
          0: {
            items: 1,
            stagePadding: 100,
          },
          768: {
            items: 4,
          },
          1025: {
            items: 5,
          },
          1500: {
            items: 5,
          },
        },
      });
    });
  });