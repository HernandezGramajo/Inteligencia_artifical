function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}
var contador =-1;
var contador2=0;
function test(state){
				if(contador==-1){
					state[0]="A";
					state[1]="DIRTY";
					state[2]="DIRTY";
					contador++;
					contador2++;
					document.getElementById("estado1").innerHTML+="<br>Estado 1";
					document.getElementById("estado1").innerHTML+="<br> ".concat("Empieza en A | Sucio en A | Sucion en B");
					document.getElementById("imagen1").innerHTML='<img src="./img/estado1.png" />';

				}else if(contador==0){
					state[0]="B";
					state[1]="DIRTY";
					state[2]="DIRTY";
					contador++;
					document.getElementById("estado2").innerHTML+="<br>Estado 2";
					document.getElementById("estado2").innerHTML+="<br> ".concat("Empieza en B | Sucio en A | Sucion en B");
					document.getElementById("imagen2").innerHTML='<img src="./img/estado2.png" />';
				} else if(contador==1){
					state[0]="A";
					state[1]="DIRTY";
					state[2]="CLEAN";
					contador++;
					document.getElementById("estado3").innerHTML+="<br>Estado 3";
					document.getElementById("estado3").innerHTML+="<br> ".concat("Empieza en A | Sucio en A | Limpio en B");
					document.getElementById("imagen3").innerHTML='<img src="./img/estado3.png" />';
				} else if(contador==2){
					state[0]="B";
					state[1]="DIRTY";
					state[2]="CLEAN";
					contador++;
					document.getElementById("estado4").innerHTML+="<br>Estado 4";
					document.getElementById("estado4").innerHTML+="<br> ".concat("Empieza en B | Sucio en A | Limpio en B");
					document.getElementById("imagen4").innerHTML='<img src="./img/estado4.png" />';
				}else if(contador==3){
					state[0]="A";
					state[1]="CLEAN";
					state[2]="DIRTY";
					contador++;
					document.getElementById("estado5").innerHTML+="<br>Estado 5";
					document.getElementById("estado5").innerHTML+="<br> ".concat("Empieza en A | Limpio en A | Sucio en B");
					document.getElementById("imagen5").innerHTML='<img src="./img/estado5.png" />';
				}else if(contador==4){
					state[0]="B";
					state[1]="CLEAN";
					state[2]="DIRTY";
					contador++;
					document.getElementById("estado6").innerHTML+="<br>Estado 6";
					document.getElementById("estado6").innerHTML+="<br> ".concat("Empieza en B | Limpio en A | Sucio en B");
					document.getElementById("imagen6").innerHTML='<img src="./img/estado6.png" />';
				}else if(contador==5){
					state[0]="A";
					state[1]="CLEAN";
					state[2]="CLEAN";
					contador++;
					document.getElementById("estado7").innerHTML+="<br>Estado 7";
					document.getElementById("estado7").innerHTML+="<br> ".concat("Empieza en A | Limpio en A | Limpio en B");
					document.getElementById("imagen7").innerHTML='<img src="./img/estado7.png" />';
				}else if(contador==6){
					state[0]="B";
					state[1]="CLEAN";
					state[2]="CLEAN";
					contador++;
					document.getElementById("estado8").innerHTML+="<br>Estado 8";
					document.getElementById("estado8").innerHTML+="<br> ".concat("Empieza en B | Limpio en A | Limpio en B");
					document.getElementById("imagen8").innerHTML='<img src="./img/estado8.png" />';
				}
				else if(contador==7){
					contador++;
					
					contador =-1;
					
					if(contador2==2){
						document.getElementById("sucio").innerHTML+="<br>Fin del ciclo ";
						return;
					}else{
						document.getElementById("sucio").innerHTML+="<br>Ensuciando ... ";
					document.getElementById("sucio").innerHTML+="<br>Ensuciando ... ";
					document.getElementById("sucio").innerHTML+="<br>Limpiando ... ";
						for(var i =1; i<9;i++){
							document.getElementById("estado"+i).innerHTML+="<br>";
						document.getElementById("imagen"+i).innerHTML='<br>';
	
						}

					}
				}
			setTimeout(function(){ test(state); }, 2000);

	
}

var states = ["A","DIRTY","DIRTY"];
document.getElementById("sucio").innerHTML+="<br>Limpiando ... ";
test(states);