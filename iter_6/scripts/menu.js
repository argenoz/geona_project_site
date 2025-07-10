let G=0;
let i = 0;

function menu__(e)
	{
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
								this.d[stro] =xhr.responseText;
						ev.innerHTML= this.d[stro];
						ev.setAttribute("vybor",stro);
										};	
						}
					else
						{
							i=0;
							ev.replaceChildren();
							ev.innerHTML= this.d[stro];
							ev.setAttribute("vybor",stro);
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





