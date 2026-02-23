
let wi = window.innerWidth,he=window.innerHeight;
let wi_=0.9,he_=0.9;
let mw = "mainWindow";
let all_content={};
let actual_content;
let tablica=1;
let classy=["cells_of_questions","cells_of_main_table","themes"];
let lll = 10;
let vvv=5;
let mnozh1=0.9*0.2,mnozh2=0.9*0.8/(lll+2),mnozh3=0.9*0.9/vvv;
let blurch = document.createElement("div");
let zatenenie= document.createElement("div");

function toStart()
	{
		blurch.style.position="absolute";
		blurch.style.top="0px";
		blurch.style.left="0px";
		blurch.style.width=wi+"px";
		blurch.style.height=he+"px";
		blurch.style.backdropFilter="blur(5px)";
		zatenenie.style.position="absolute";
		zatenenie.style.top="0px";
		zatenenie.style.left="0px";
		zatenenie.style.width=wi+"px";
		zatenenie.style.height=he+"px";
		zatenenie.style.backdropFilter="brightness(20%)";
		blurch.appendChild(zatenenie);
		zatenenie = blurch;
		let r = 1;
		
		r = document.createElement("div");
		r.style.width=wi*wi_+"px";
		r.style.height=he*he_+"px";
		r.style.position="absolute";
		document.body.appendChild(r);
		r.setAttribute("id",mw);
		r.style.borderStyle="solid";
		r.style.borderWidth="4px";
		r.style.borderRadius="10px";
		r.style.top=(1-he_)*he/2+"px";
		r.style.left=(1-wi_)*wi/2+"px";
		r = new XMLHttpRequest();
		r.open("GET","tablica.json",true);
		r.responseType="text";
		r.onload=function()
			{
				
			let j= JSON.parse(r.responseText);
			r = 1;
			let bally=[];
			lll = lll+1;
			while(r<lll)
				{
					bally.push(r*100+"");
					r=r+1;
				}
			lll = lll-1;
			tablica = j;
			
			let tabli = document.createElement("table");
			tabli.setAttribute("id","main_table");
			all_content['main_table']=tabli;
			let arrow;
			let cell;
			let di;
			arrow = document.createElement("tr");
			cell = document.createElement("td");
			di = document.createElement("div");
			di.style.width=wi*mnozh1+"px";
			di.style.height=he*mnozh3+"px";
			di.setAttribute("class","themes");
			di.style.backgroundImage="url('своя_игра.png')";
			di.style.backgroundSize="100% 100%";
			cell.appendChild(di);
			arrow.appendChild(cell);
			tabli.appendChild(arrow);
			j=0;
			while(j<10)
				{
					cell = document.createElement("td");
					di = document.createElement("div");
					di.style.width=wi*mnozh2+"px";
					di.style.height=he*mnozh3+"px";
					cell.appendChild(di);
					arrow.appendChild(cell);
					j=[j,document.createElement('center')];
					j[1].innerText=bally[j[0]];
					di.appendChild(j[1]);
					di.setAttribute("class","themes");
					j=j[0]+1;
				}
			tablica.forEach(
			function(theme)
				{
					arrow = document.createElement("tr");
					cell = document.createElement("td");
					di = document.createElement("div");
					di.innerText = theme["theme"];
					di.style.width=wi*mnozh1+"px";
					di.style.height=he*mnozh3+"px";
					di.setAttribute("class","themes");
					cell.appendChild(di);
					arrow.appendChild(cell);
					let i = 0;
					let p=0;
					let qv = theme["questions"];
					while(i<lll)
						{
							p = qv[bally[i]];
							cell = document.createElement("td");
							di = document.createElement("div");
							di.style.width=wi*mnozh2+"px";
							di.style.height=he*mnozh3+"px";
							di.setAttribute("ask",p["ask"]);
							di.setAttribute("answer",p["answer"]);
							di.setAttribute("class","vopros");
							cell.appendChild(di);
							arrow.appendChild(cell);
							di.addEventListener('click',function(e)
								{
								let qwe=e
								if(!qwe.target.hasAttribute("ask"))
									return 0;
								let bolshoe_okno = document.createElement("div");
								document.body.appendChild(zatenenie);	
								bolshoe_okno.setAttribute('class',"oknoVoprosa");	
								document.body.appendChild(bolshoe_okno);
								bolshoe_okno.style.height=he*0.8+"px";
								bolshoe_okno.style.width=wi*0.8+"px";
								bolshoe_okno.style.top=he*0.11+"px";
								bolshoe_okno.style.left=wi*0.1+"px";
								let sod = document.createElement("center");
								sod.innerHTML = "Вопрос:<br/>"+qwe.target.getAttribute("ask")+"<br/>";
								bolshoe_okno.appendChild(sod);
								bolshoe_okno.appendChild(document.createElement("br"));
								sod = document.createElement("center");
								sod = [sod,document.createElement("div")];
								sod[1].setAttribute("class","otvet");
								sod[1].style.width=wi*0.4+"px";
								sod[1].innerText="Узнать верный ответ";
								sod[0].setAttribute("id","vernyi");
								sod[0].appendChild(sod[1]);
								bolshoe_okno.appendChild(sod[0]);
								bolshoe_okno.setAttribute("id","oknoVoprosa_");
								sod=sod[1];
								sod.addEventListener("click",(e)=>{
									bolshoe_okno.appendChild(document.createElement("br"));
									let g = [document.createElement('center'),document.createElement('div')];
									g[1].innerHTML="<br/>Ответ:<br/>"+qwe.target.getAttribute("answer")+"<br/>";
									g[0].appendChild(g[1]);
									bolshoe_okno.appendChild(g[0]);
									bolshoe_okno.removeChild(document.getElementById("vernyi"));
									bolshoe_okno.appendChild(document.createElement("br"));
									g = [document.createElement('center'),document.createElement('div')];
									g[0].appendChild(g[1]);
									bolshoe_okno.appendChild(g[0]);
									g[1].setAttribute("class","otvet");
									g[1].innerText="К списку вопросов.";
									g[1].addEventListener('click',
										(e)=>
											{
												let vvsp = document.createElement("div");
												vvsp.style.width=wi*mnozh2+"px";
												vvsp.style.height=he*mnozh3+"px";
												vvsp.style.backgroundImage="url('рисунок.svg')";
												vvsp.style.backgroundSize="100% 100%";
												let vvvsp = qwe.target;
												vvvsp.appendChild(vvsp);
												vvvsp.setAttribute("class","vopros_");
												vvvsp.removeAttribute("ask");
												vvvsp.removeAttribute("answer");
												document.body.removeChild(zatenenie);
												document.body.removeChild(bolshoe_okno);
											}
										);
									});
								}
									
									
									);
							i++;
						}
					
					
					tabli.appendChild(arrow);
					
				}
			
			);
			document.getElementById(mw).appendChild(tabli);
			}
		r.send();
		
	}
