$(document).ready(function(){
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
   $('feedback').text(response.message)
   alert(data.form + ' : ' + response.message);
 });
});
});
