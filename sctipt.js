$('document').ready(function() {
 
	alert('Привет!');

  

	var w ;

	w = prompt('Введите ваше имя?','Пример');
	$('#t').html(w);

  $('button').on('click' , function(){

	var value1 , value2 , value3 ;

	value1 = $('#q').val();
	value2 = $('#w').val();

	value1 = parseInt(value1);
	value2 = parseInt(value2);

	value3 = value1 * value2;

	alert( 'Ответ ' + '\n' + value3);
	alert('Спасибо что возпользывались калькулятором!!');


	});

});