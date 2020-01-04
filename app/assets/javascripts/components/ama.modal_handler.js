Ama.ModalHandler = (function() {
  var exports = {};
  exports.open = function(modalElement) {
    $(modalElement)
      .modal({
        centered: false,
        closable: true
      })
      .modal("show");
  };

  return exports;
})();
