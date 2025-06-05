

/*
class Table
	{
	constructor()
		{
			this.tlb=null;
			
		}
	
		
	
	}
*/


function Table()
	{
	this.tbl = null;
	this.youDoNothing = ()=>{return (this.tbl==null);};
	
	}

alert((new Table()).youDoNothing());

