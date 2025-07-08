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
					
					if(this.d[n]=="undefined")
						{
						let xhr = new XMLHttpRequest();
						xhr.open("GET","articles/"+n_+".json",[false]);
						xhr.send();
						alert(xhr.responseText);	
						}
					else
						{
							
							
						}
					};
				
				
				
				} )();
			}
		
		
			alert(G.d[e]);
		
	}


