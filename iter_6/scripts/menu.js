let G=0;
let i = 0;

function menu__(e)
	{
		/*
		let tg = e.target,tmp;
		while(true)
			{
				tmp = tg.getAttribute('vybor');
				//console.log(tmp);
				if(tmp!==undefined)
					if(tmp!==null)
						break;
				tg = tg.parentElement;
			}
			*/
		if(i==0)
		if(G==0)
			{
				i=1;
				
				G = new ( function()  {
				this.d = {};	
				this.vybor = (n_) => 
					{
					let n = n_;
					let ev = document.getElementById("ev");
					
					ev = document.getElementById("ekrav_vyvoda");
					let stro = n.target.getAttribute('vybor');
					if(ev.getAttribute("vybor")!==stro)
					if(this.d[stro]===undefined)
						{
						
						let xhr = new XMLHttpRequest();
						xhr.open("GET","articles/"+stro+".html");
						xhr.send();
						xhr.onload=() => {
							i=0;
						if(xhr.status!=200)
							return;
						ev.replaceChildren();	
								//this.d[stro] = JSON.parse(xhr.responseText)['ans'];
								this.d[stro] =xhr.responseText;
						let evv = document.createElement('div');
						//evv.innerText= this.d[stro];
						evv.innerHTML=this.d[stro];
						ev.appendChild(evv);
						ev.setAttribute("vybor",stro);
						evv.setAttribute('align',"justify");
						evv.style.top=0;
						evv.style.left=0;
						evv.style.position="relative";
										};	
						}
					else
						{
							i=0;
							ev.replaceChildren();
							let evv = document.createElement('div');
							//evv.innerText= this.d[stro];
							evv.innerHTML=this.d[stro];
							ev.appendChild(evv);
							ev.setAttribute("vybor",stro);
							evv.setAttribute('align',"justify");
							evv.style.top=0;
							evv.style.left=0;
							evv.style.position="relative";
						}
					else {ev.setAttribute("vybor",stro); i=0;}
					};
				
				
				
				} )();
			}
		
			
			
			if(e.target.getAttribute('vybor')!==null)
				{
				G.vybor(e);
				e.stopPropagation();
				}
			else
				e.target.parentElement.click();
		
	}





