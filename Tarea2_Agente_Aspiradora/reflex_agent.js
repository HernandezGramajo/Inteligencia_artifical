// MIT License
// Copyright (c) 2020 Luis Espino

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
					document.getElementById("log").innerHTML+="<br>Location: ".concat("B | DIRTY | DIRTY");
				} else if(contador==1){
					state[0]="A";
					state[1]="DIRTY";
					state[2]="CLEAN";
					contador++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat("A | DIRTY | CLEAN");
				} else if(contador==2){
					state[0]="B";
					state[1]="DIRTY";
					state[2]="CLEAN";
					contador++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat("B | DIRTY | CLEAN");
				}else if(contador==3){
					state[0]="A";
					state[1]="CLEAN";
					state[2]="DIRTY";
					contador++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat("A | CLEAN | DIRTY");
				}else if(contador==4){
					state[0]="B";
					state[1]="CLEAN";
					state[2]="DIRTY";
					contador++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat("B | CLEAN | DIRTY");
				}else if(contador==5){
					state[0]="A";
					state[1]="CLEAN";
					state[2]="CLEAN";
					contador++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat("A | CLEAN | CLEAN");
				}else if(contador==6){
					state[0]="B";
					state[1]="CLEAN";
					state[2]="CLEAN";
					contador++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat("B | CLEAN | CLEAN");
				}
				else if(contador==7){
					contador++;
					document.getElementById("log").innerHTML+="<br>Location: ".concat("A | CLEAN | CLEAN");
				}else if(contador==8){
					contador--;
					document.getElementById("log").innerHTML+="<br>Location: ".concat("B | CLEAN | CLEAN");
				}
			setTimeout(function(){ test(state); }, 2000);

	
}

var states = ["A","DIRTY","DIRTY"];
document.getElementById("log").innerHTML+="<br>Location: ".concat("A | DIRTY | DIRTY");
test(states);
