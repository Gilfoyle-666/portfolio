document.querySelector('#livesearch').oninput = function fd() {
	var elem1 =document.getElementById('livesearch1');
    let val = this.value.trim().toLowerCase() ;
	elem1.classList.remove("beginhide");
	let elasticItems = document.querySelectorAll('#livesearch1 li');
	
	if (val != '')  {
		elasticItems.forEach (function (elem) {
	if (elem.innerText.search(val) == -1) {
			elem.classList.add('hide');
		    		                      }
		
	else {
		elem.classList.remove('hide');	
		       }
	    				                      });
   		            }	
    else {
    	elasticItems.forEach(function(elem){
    		elem.classList.remove('hide');
    	});
         }	

	$( ".cancel").click( function (){ 
		var elem11 =document.getElementById('livesearch1');
		elem11.classList.add("beginhide");
		$("#livesearch").empty();
    								 })
																}			