$(document).on("turbolinks:load", function() {
  $("#upload-product-link").click(function() {
    $(".ui.modal")
      .modal({
        centered: false
      })
      .modal("show");
  });
});
