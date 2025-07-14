let G=0;
let gl_he = 0;
let gl_wi = 0;
let i=0;

function just_do(e)
	{
		if(i!=0) return;
		else i=1;
		let tg = e.target;
		let stro =undefined;
		while(true)
			{
			if(tg.getAttribute('id')=='small_menu_div')
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
											
											let tg = document.getElementById('ekran');
											let xhr;
											if(this.d[st]===undefined)
												{
													xhr = new XMLHttpRequest();
													xhr.open("GET","articles/"+st+".html");
													xhr.onload = () =>
														{
														if(xhr.status!=200)
														{i=0;}
														else
															{
																tg.setAttribute('vybor',st);
																this.d[st]=xhr.responseText;
																tg.innerHTML = this.d[st];
																i=0;
																//doSomethingINeed();
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
													//doSomethingINeed();
												}
												else i=0;
												
											
										};
							
						}
					)();
		
		G.vybor(stro);
		
		
		e.stopPropagation;
	}




function menu_creator()
	{
		let maxi = (a,b)=>{if(a<b) a=b; return a;};
		
		let wi = window.innerWidth,he=window.innerHeight;
		let tb_wi = wi*(9.3/10),tb_he = he*(9.6/10);
		let SM_he, SM_wi, HD_he,HD_wi,OP_wi;
		let head_he = 150;
		let tbl = document.createElement('table');
		//document.body.appendChild(tbl);
		document.getElementById('cntr').appendChild(tbl);
		let tr = document.createElement('tr');
		let td = document.createElement('td');
		let div = document.createElement('div');
		HD_he = 110;
		HD_wi = tb_wi;
		SM_he = maxi(200,tb_he-HD_he);
		SM_wi=200;
		OP_wi = maxi(200,tb_wi-SM_wi);
		
		tbl.classList= "main_table big_table";
		tbl.setAttribute('id','main_tbl');
		tbl.style.height = tb_he;
		tbl.style.width = tb_wi;
		
		tr.setAttribute('id','header_row');
		tr.classList = 'main_table big_table_inner';
		tr.style.width = HD_wi;
		tr.style.height = HD_he;
		tbl.appendChild(tr);
		tr = td;
		tr.setAttribute('id','header_td');
		tr.classList = 'main_table big_table_inner';
		tr.style.width = HD_wi;
		tr.style.height = HD_he;
		tr = document.getElementById('header_row');
		tr.appendChild(td);
		tr = div;
		tr.setAttribute('id','header_div');
		tr.style.width = HD_wi;
		tr.style.height = HD_he;
		td.appendChild(div);
		td.setAttribute('colspan','2');
		
		tr = document.createElement('tr');
		tr.setAttribute('id','output_row');
		tr.classList = 'main_table big_table_inner';
		tr.style.width = HD_wi;
		tr.style.height = HD_he;
		tbl.appendChild(tr);
		
		td = document.createElement('td');
		td.setAttribute('id','small_menu');
		td.classList = 'main_table big_table_inner';
		tr.appendChild(td);
		td.style.width=SM_wi;
		td.style.position="relative";
		td.style.height=SM_he;
		div = document.createElement('div');
		div.style.width=SM_wi*0.97;
		div.style.height=SM_he*0.95;
		div.style.overflowY="auto";
		div.style.position="relative";
		div.setAttribute('id','small_menu_div');
		td.appendChild(div);
		div.addEventListener('click',just_do)
		
		td = document.createElement('td');
		td.setAttribute('id','ev');
		tr.appendChild(td);
		td.style.width=maxi(200,OP_wi);
		td.style.height=SM_he;
		div = document.createElement('div');
		div.setAttribute('id','ekran');
		div.style.width=td.style.width;
		div.style.height=SM_he*0.95;
		div.style.overflowY="auto";
		div.style.position="relative";
		td.appendChild(div);
		
		
		(
		function()
			{
				let xhr = new XMLHttpRequest();
				xhr.open('GET','small_menu.html');
				xhr.onload=()=>
					{
					document.getElementById('small_menu_div').innerHTML=xhr.responseText;	
					};
				xhr.send();
				
			}
		)();
		
		
		
	}


