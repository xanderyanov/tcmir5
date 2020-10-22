$(function () {

  function leftMenuUlLi () {
    $(".collap").on("click", function () {
      var $this = $(this);
      var t = $this.children('i');
      if (t.hasClass('icon-up3')) {
          $this.children().removeClass("icon-up3").addClass("icon-down3");
          $this.closest("li").addClass("collapsed");
      } else {
          $this.children().removeClass("icon-down3").addClass("icon-up3");
          $this.closest("li").removeClass("collapsed");
      }
  });
  }
  leftMenuUlLi ();
})