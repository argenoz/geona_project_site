let G=0;


function menu__(e)
	{
		if(G==0)
			{
				G = new ( function()  {
				this.d = {};	
				this.vybor = (n_) => 
					{
					let n = n_;
					let ev = document.getElementById("ekrav_vyvoda");
					ev.replaceChildren();
					let stro = n_.target.getAttribute('vybor');
					if(ev.getAttribute("vybor")!==stro)
					if(this.d[stro]===undefined)
						{
						let xhr = new XMLHttpRequest();
						xhr.open("GET","articles/"+stro+".json");
						xhr.send();
						xhr.onload=() => {
								this.d[stro] = JSON.parse(xhr.responseText)['ans'];
						let evv = document.createElement('div');
						evv.innerText= this.d[stro];
						ev.appendChild(evv);
						ev.setAttribute("vybor",stro);
						evv.setAttribute('align',"justify");
										};	
						}
					else
						{
							let evv = document.createElement('div');
							evv.innerText= this.d[stro];
							ev.appendChild(evv);
							ev.setAttribute("vybor",stro);
							evv.setAttribute('align',"justify");
						}
					};
				
				
				
				} )();
			}
		
			
			G.vybor(e);
			
		
	}


