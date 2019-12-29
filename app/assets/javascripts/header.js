$(document).on("turbolinks:load", function() {
  $("#upload-product-link").click(function() {
    $(".product-upload-modal")
      .modal({
        centered: false,
        closable: true
      })
      .modal("show");
  });
});
