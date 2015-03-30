$(document).ready(function(){

  $('#calc-prices-button').click(function() {
    var rowTotal   = 0;
    var grandTotal = 0;

    for(var i = 0; i < $('.item-name').length; i++) {

      var quantity     =  Number($($('.quantity')[i]).val());
      var unitPrice    =  $('.item-price')[i];
      var arrayToText  =  $(unitPrice).text();
      var removeDollar =  arrayToText.replace("$", "");
      var itemPrice    =  Number(removeDollar);
      
      //var itemPrice = Number($($('.item-price')[i]).text().replace("$", ""));

      rowTotal  = quantity * itemPrice;
      // $(".item-total").text(rowTotal.toFixed(2));
      $($(".item-total")[i]).text(rowTotal.toFixed(2));
      grandTotal = grandTotal + quantity * itemPrice;
    }

    $("#total-price").text(grandTotal.toFixed(2)); 
  });

  });

   
  /*function addArrays(arr1, arr2, prop) {
  var func = function(curr) {
    return curr[prop];
  }
  var arr1v = arr1.map(func), arr2v = arr2.map(func), output = [];
  arr1v.forEach(function(curr, i){
    output[i] = arr1v[i] * arr2v[i];
  });
  return output;
}
addArrays([{value:7},{value:5},{value:6}],[{value:3},{value:4},{value:8} */
      
    
    
  
