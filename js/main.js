$(document).ready(function(){
$('#create-card').on('click',function(){
  let name= $('#new-card').val(); // accept new input
  $('#new-card').val(''); //to clear input after entry

  let html = '';
    html += '<div class="shop">';
    html += '<div class="name">'+ name +'</div>';
    html += '<img src="assets/ghana.jpg"></img>';
    html += '<div class="description"> Spanning a land mass of 238,535 km2 (92,099 sq mi),Ghana is bordered by the Ivory Coast in the west,Burkina Faso in the north, Togo in the east,</div>';
    html += '<br/>';
    html += '<div class="rate">Rate: $499.00</div>';
    html += '<br/>';
    html += '<button class="cart-add" type="button" name="button">Add to Cart</button>';
    html += '<button class="cart-remove" type="button" name="button">Remove from Cart</button>';
    html += '<br/>';
    html += '<a class="more-info-link" href="#">More info</a>';
    html += '<div class="more-info">and the Gulf of Guinea and Atlantic Ocean in the south.Ghana means "Warrior King" in the Soninke language.</div>';
    html += '</div>';

  $('#design').prepend(html); //add a new cart
});

$('#design').on('click','.more-info-link',function(event){
 event.preventDefault();
  $(this).parent().find('.more-info').toggle(100);//this display the more info hidden
 $(this)
 .animate({"margin-left": 5}, 'fast')
 .animate({"margin-left": 0}, 'fast');

});
$('#design').on('click','.cart-remove',function(){
  $(this).parent().remove(); // remove cart from entry

});


$('#newsletter-checkbox').on('change',function(){
  if($(this).is(':checked')){
  $('#newsletter-select').show();
  }else{
    $('#newsletter-select').hide();
  }
});
$('#newsletter-checkbox').trigger('change');
$('#form-send').on('send', function(event){
 event.preventDefault();

let data=  { form: $(this).serialze() };

 $.ajax($(this).attr('action'),{
   type: 'post',
   data: data
 })
 .done(function(response){
   $('#feedback').text(response.message);
});
});
});
