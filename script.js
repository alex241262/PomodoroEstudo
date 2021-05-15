function startTimer(duration, display){
	var timer = duration, minutes, seconds;

setInterval(function(){
	
	minutes = parseInt(timer / 60, 10);
	seconds = parseInt(timer % 60, 10);
	
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	
	display.textContent = minutes + ":" + seconds;
	
		if(--timer < 0){
		//alert("seu tempo terminou");		
		timer = duration * 0;
		document.getElementById('notificacao').play();
		}
	}, 1000);
}
function contar(){
	document.getElementById('timer').style.display = 'block';
	var input = document.querySelector('#tempo');//seleciono o valor no input
	var tempo = input.value;//salvo o valor na varialvel tempo
	
	var duration = 60 * tempo;//estipulando que a cada 5 segundos 
	var display = document.querySelector('#timer');
	startTimer(duration, display);
	document.getElementById('tempo').value="";
}
function Atualizar(){
	location.reload();
}
function valida(){
	var input = document.querySelector('#tempo');
	var valor = input.value;

	if(valor < 1){
		//alert("insira o tempo"+valor);
		return false;
	}else{

		contar();
	}
}