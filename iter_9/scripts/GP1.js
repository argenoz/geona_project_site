let G=0;
let gl_he = 0;
let gl_wi = 0;
let i=0;
let wi = window.innerWidth,he=window.innerHeight;
let MC=0;
let small_pict_size_x=210.0,small_pict_size_y=200.0;

let PICTs={};

let P_W=0,to_BG=0;


async function inicia()
	{
	const { instance } = await WebAssembly.instantiateStreaming(
      fetch("./scripts/blabla.wasm")
    );
    let i1 = 131, i2 = 2; 
    alert(instance.exports.sum((new Uint32Array([1,3,4,1]))[1]));
	}

inicia();

function just_do(e)
	{

		let pictures_work = () =>
						{
							
							let toBigPicture = (e)=>
									{
										
										let pct=e.target.getAttribute('src');
										if(pct==undefined||pct==null)
											{
												e.stopPropagation();
												e.target.parentElement.click();
												return;
											}
										let fon;
										e.stopPropagation();
										//if(e.target.tagName!='IMG'&&e.target.tagName!='img')
											{
												fon = document.createElement('div');
												fon.style ="position:absolute;height:"+(he)+";width:"+(wi)+";backdrop-filter:blur(5px) brightness(30%);top:0;left:0;";
												
												pct=[pct,document.createElement('img')];
												let src_=pct[0];
												
												pct=pct[1];
												
												
												let obrabotka=()=>{
												fon.appendChild(pct);
												document.body.appendChild(fon);
												e=[pct,fon,e.target];
												if(pct.height>=he||pct.width>=wi)
													{
														
														if(pct.height>=he)
															fon = ((he*4.0/5.0)/pct.height);
														else
															fon = ((wi*4.0/5.0)/pct.width);
														
														pct.height=pct.height*fon;
														pct.width=pct.width*fon;
														
													}
												pct.style = "position:relative;"+"top:"+((he-pct.height)/5.0)+";left:"+((wi-pct.width)/2.0)+";";
												e[1].setAttribute('fon','fon');
												e[1].addEventListener('click',
												(eve)=>
													{
													eve.stopPropagation();
													eve = eve.target;
													if(eve.getAttribute('fon')=='fon')
														{
															eve.parentElement.removeChild(eve);
														}
													}
												);
												e.push(e[2].getAttribute('descript'));
												if(e[3]!==null && e[3]!==undefined)
													{
														fon = document.createElement('div');
														//fon.innerText=e[3];
														fon.style = "position:absolute;"+"border-radius:5px;padding:5px 5px 5px 5px;"+
																	"top:"+(((he-pct.height)/5.0)+e[0].height+20)+";"+
																	"left:"+(wi/6.0)+";"+
																	"height:"+((he-(((he-pct.height)/5.0)+e[0].height+20))*4/5.0)+";width:"+(wi*2/3.0)+";background-color:#FFDEAD;border-style:solid;border-width:4px;overflow-y:auto;";
														e[1].appendChild(fon);
														let xhr = new XMLHttpRequest();
														xhr.open("GET","./picts/dscrpt/"+e[3]);
														xhr.onload=()=>
																{
																	
																	if(xhr.status!=200) return 0;
																	fon.innerHTML = xhr.responseText;
																};
														xhr.send();
																	
													}
												
												};//konec lambda
												
												pct.addEventListener('load',()=>{obrabotka();});
												pct.setAttribute('src',src_);
											}
										
									};
							to_BG = toBigPicture;
							return 0;
							let imgs = document.getElementsByTagName('img');
							let i=0;
							let tmp;
							let mnj;
							while(i<imgs.length)
								{
									tmp = imgs[i];
									//tmp.addEventListener('load',()=>{console.log('fff');});
									if(tmp.height != tmp.width)
										{
										if(tmp.height>tmp.width)
											mnj = (small_pict_size_y)/(0.0+tmp.height);
										else
											mnj = (small_pict_size_x)/(0.0+tmp.width);
										//alert('qwe');
										}
									else
										if(small_pict_size_x<small_pict_size_y)
											mnj = (small_pict_size_y)/(0.0+tmp.height);
										else
											mnj = (small_pict_size_x)/(0.0+tmp.width);	
											
									//tmp.height = tmp.height*mnj;
									//tmp.width = tmp.width*mnj;
									//tmp.style.width=tmp.width*mnj;
									//tmp.style.height=tmp.height*mnj;
									tmp.style="height:"+(tmp.height*mnj)+";width:"+(tmp.width*mnj)+";";
									//console.log([tmp.height,tmp.width,w[0],w[1]]);
									tmp.addEventListener('click',toBigPicture);
									i=1+i;
								}
							
						}
						;
		P_W = pictures_work;
		P_W();
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
		
			if(stro=='vmenu')
				{
					G=0;
					i=0;
					e.stopPropagation;
					
					document.getElementById('cntr').innerHTML='';
					MC();
					
					return;
				}
			else
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
																//pictures_work();
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
													//pictures_work();
													//doSomethingINeed();
												}
												else i=0;
												
											
										};
							
						}
					)();
		
		G.vybor(stro);
		
		
		
	}





MC = menu_creator;

function menu_creator()
	{
		let maxi = (a,b)=>{if(a<b) a=b; return a;};
		let tmp=1;
		let font_size_of_header = 50;
		
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
		SM_wi=250;
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
		
		div.innerText='Проект "Геона"';
		
		tmp = document.createElement('center');
		tmp.appendChild(div);
		tmp.style.position="relative";
		tmp.style.top=20;
		div.style.fontSize=font_size_of_header;
		td.appendChild(tmp);
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
		()=>
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

function pict_loaded(e)
	{
		let tmp = e.target;
		//tmp.setAttribute('onload',"");
		let mnj=0;
		let he=0,wi=0;
		if(tmp.height != tmp.width)
		{
			if(tmp.height>tmp.width)
			mnj = (small_pict_size_y)/(0.0+tmp.height);
			else
			mnj = (small_pict_size_x)/(0.0+tmp.width);
		}
		else
			if(small_pict_size_x<=small_pict_size_y)
				mnj = (small_pict_size_y)/(0.0+tmp.height);
			else
				mnj = (small_pict_size_x)/(0.0+tmp.width);
			let r=[tmp.width,tmp.height];
		
		he=tmp.height*mnj;
		wi=tmp.width*mnj;
		tmp.style="height:"+he+";width:"+wi+";"+"user-select:none;";
		//console.log([r[0],r[1],tmp.width,tmp.height,mnj]);
		//alert(to_BG);
		tmp.addEventListener('click',to_BG);
		
		
	}



