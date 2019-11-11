$(document).ready(function(){
  $('a.browse.item').popup({
    popup : $('.ui.flowing.basic.admission.popup'),//Popup Content selector
    on    : 'click', //Event trigger
    position   : 'bottom left',
    lastResort:true,
  });
})
