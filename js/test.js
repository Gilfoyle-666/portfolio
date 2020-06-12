

document.getElementById('calc').onclick = function(){
    var myform = calc.form;
   
    myform.result.value = +myform.r1.value + +myform.r2.value + +myform.r3.value + +myform.r4.value + +myform.r5.value + +myform.r6.value  + +myform.r7.value + +myform.r8.value + +myform.r9.value+ +myform.r10.value;
calc.disabled = true ;

var right = document.getElementsByClassName("right");
for (var i=0; i<right.length; ++i)
	right[i].style.color = "#25ba2f";

for (var i=0; i<right.length; ++i)
	right[i].style.fontWeight = "bold"; 

var finalscore = document.getElementById("finalscore").value;

if (myform.result.value<=6 && myform.result.value>=1 ) {
	alert('похоже , что Вы не очень интересуетесь технологиями, ваш результат - '+  finalscore + '  из 10' );
	}
else if (myform.result.value > 6  && myform.result.value<=8 ) {
  alert( 'Вы неплохо разбираетесь в мире инноваций  , ваш результат '+  finalscore + '  из 10' );
} 

else if (myform.result.value > 8 ) {
  alert( 'Вы явно в теме всех этих технических штук, ваш результат '+  finalscore + '  из 10' );
} 
else if (myform.result.value < 1) {
  alert( 'Похоже, что  Вы в мире hi-tech чувствете себя как рыба в воде, но решили ради шутки ответить на все вопросы неправильно, что ж мы оценили. А хотя может вы вообще ничего не нажимали...' );
}

}


document.getElementById('reset').onclick = function() {

  windows.location.reload(); // перезагружаем страницу
}