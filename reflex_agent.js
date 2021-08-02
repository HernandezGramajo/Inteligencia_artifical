function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}
var contador =0;
function test(state){

				if(contador==0){
					state[0]="B";
					state[1]="DIRTY";
					state[2]="DIRTY";
					contador++;
					document.getElementById("log").innerHTML+="<br>Estado 2";
					document.getElementById("log").innerHTML+="<br> ".concat("Empieza en B | Sucio en A | Sucion en B");
				} else if(contador==1){
					state[0]="A";
					state[1]="DIRTY";
					state[2]="CLEAN";
					contador++;
					document.getElementById("log").innerHTML+="<br>Estado 3";
					document.getElementById("log").innerHTML+="<br> ".concat("Empieza en A | Sucio en A | Limpio en B");
				} else if(contador==2){
					state[0]="B";
					state[1]="DIRTY";
					state[2]="CLEAN";
					contador++;
					document.getElementById("log").innerHTML+="<br>Estado 4";
					document.getElementById("log").innerHTML+="<br> ".concat("Empieza en B | Sucio en A | Limpio en B");
				}else if(contador==3){
					state[0]="A";
					state[1]="CLEAN";
					state[2]="DIRTY";
					contador++;
					document.getElementById("log").innerHTML+="<br>Estado 5";
					document.getElementById("log").innerHTML+="<br> ".concat("Empieza en A | Limpio en A | Sucio en B");
				}else if(contador==4){
					state[0]="B";
					state[1]="CLEAN";
					state[2]="DIRTY";
					contador++;
					document.getElementById("log").innerHTML+="<br>Estado 6";
					document.getElementById("log").innerHTML+="<br> ".concat("Empieza en B | Limpio en A | Sucio en B");
				}else if(contador==5){
					state[0]="A";
					state[1]="CLEAN";
					state[2]="CLEAN";
					contador++;
					document.getElementById("log").innerHTML+="<br>Estado 7";
					document.getElementById("log").innerHTML+="<br> ".concat("Empieza en A | Limpio en A | Limpio en B");
				}else if(contador==6){
					state[0]="B";
					state[1]="CLEAN";
					state[2]="CLEAN";
					contador++;
					document.getElementById("log").innerHTML+="<br>Estado 8";
					document.getElementById("log").innerHTML+="<br> ".concat("Empieza en B | Limpio en A | Limpio en B");
				}
				else if(contador==7){
					contador++;
					document.getElementById("log").innerHTML+="<br>Se encicla ";
					document.getElementById("log").innerHTML+="<br> ".concat("Empieza en A | Limpio en A | Limpio en B");
				}else if(contador==8){
					contador--;
					document.getElementById("log").innerHTML+="<br>Se encicla ";
					document.getElementById("log").innerHTML+="<br> ".concat("Empieza en B | Limpio en A | Limpio en B");
				}
			setTimeout(function(){ test(state); }, 2000);

	
}

var states = ["A","DIRTY","DIRTY"];
document.getElementById("log").innerHTML+="<br>Estado 1";
document.getElementById("log").innerHTML+="<br> ".concat("Empieza en A | Sucio en A | Sucion en B");
test(states);