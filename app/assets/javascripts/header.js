$(document).on("turbolinks:load", function() {
  $("#upload-product-link").click(function() {
    Ama.ModalHandler.open(".product-upload-modal");
  });
});
