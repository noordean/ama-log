Ama.ModalHandler = (function() {
  var exports = {};
  exports.initialize = function(linkElement, modalElement) {
    $(linkElement).click(function() {
      $(modalElement)
        .modal({
          centered: false,
          closable: true
        })
        .modal("show");
    });
  };

  return exports;
})();
