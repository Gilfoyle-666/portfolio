
function printed_el_text( el ){
	 text = el.innerHTML;
		i = 0;
		print = function (){
			i++;
			if( i <= text.length ){
				el.innerHTML = text.substr(0, i);
				setTimeout( print, 50 );
			}
		};
		 print();
};

document.getElementById('but_hd_sh').onclick=function(){ 
	printed_el_text( document.getElementById("garbage_tag") 
	)};