
let G=0;
let i=0;

function just_do(e)
	{
		if(i!=0) return;
		else i=1;
		let tg = e.target;
		let stro =undefined;
		while(true)
			{
			console.log(tg.getAttribute('vybor'));
			if(tg.getAttribute('id')=='the_coat')
				return;
			else
				if(tg.getAttribute('vybor')!==undefined && tg.getAttribute('vybor')!==null)
					{
						stro = tg.getAttribute('vybor');
						break;
					}
				else
					tg = tg.parentElement;
			}
		if(G==0)
			G = new (function()
						{
							this.d={};
							this.vybor = (st)=>
										{ 
											
											let tg = document.getElementById('ev');
											let xhr;
											if(this.d[st]===undefined)
												{
													xhr = new XMLHttpRequest();
													xhr.open("GET","articles/"+st+".html");
													xhr.onload = () =>
														{
														if(xhr.status!=200)
														{i=0;alert('beda');}
														else
															{
																tg.setAttribute('vybor',st);
																this.d[st]=xhr.responseText;
																tg.innerHTML = this.d[st];
																i=0;
															}
														};
													xhr.onerror=()=>{i=0;}
													xhr.send();
												}
											else
												if(tg.getAttribute('vybor')!=st)
												{
													tg.innerHTML= this.d[st];
													tg.setAttribute('vybor',st);
													i=0;
												}
												else i=0;
												
											
										};
							
						}
					)();
		
		G.vybor(stro);
		
		
		e.stopPropagation;
	}
