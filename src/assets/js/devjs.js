$(function () {

  function leftMenuUlLi () {
    $(".collap").on("click", function () {
      var $this = $(this);
      var t = $this.text();
      if (t === "-") {
          $this.text("+");
          $this.closest("li").addClass("collapsed");
      } else {
          $this.text("-");
          $this.closest("li").removeClass("collapsed");
      }
  });
  }
  leftMenuUlLi ();
})