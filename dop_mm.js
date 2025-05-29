
function dop_mm()
	{
	document.getElementById("zaglav").setAttribute("colspan",3);
	
	s2=document.getElementById("str2");
	s2.removeChild(document.getElementById("dop_menu"));
	td=document.createElement("td");
	td.style.width=window.innerWidth*30/100.0;
	s2.appendChild(td);
	d=document.createElement("div");
	d.style.width=window.innerWidth*30/100.0;
	d.style.height=(window.innerHeight-100)+"px";
	d.style.paddingLeft=0;
	d.style.paddingRight=0;
	td.appendChild(d);
	td.setAttribute("class","cell_mm");
	d.setAttribute("class","cell_mm2");
	//td.classList.add("cell_mm2");
	td.style.backgroundColor="#000000";
	
	
	td=document.createElement("td");
	td.style.width=window.innerWidth*30/100.0;
	s2.appendChild(td);
	td.setAttribute("class","cell_mm");
	d=document.createElement("div");
	d.style.width=window.innerWidth*30/100.0;
	d.style.height=(window.innerHeight-100)+"px";
	td.appendChild(d);
	d.setAttribute("align","justify");
	d.innerText='"Проект Геона"- это незабываемый рассказ о сложном приключении небольшого отряда людей с Земли на другой планете с элементами антиутопии.' ;
	
	td=document.createElement("td");
	td.style.width=window.innerWidth*30/100.0;
	s2.appendChild(td);
	d=document.createElement("div");
	d.style.width=window.innerWidth*30/100.0;
	d.style.height=(window.innerHeight-100)+"px";
	td.appendChild(d);
	td.setAttribute("class","cell_mm");
	}
function delo(ev)
	{
		dop_mm();
	}

