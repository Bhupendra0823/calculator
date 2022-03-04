var x=0;
var y=0;
var bac="";
var len=0;
function scr(val)
{
    document.getElementById("calculation").value +=  val;
}
function solve()
{
    
    var x = document.getElementById("calculation").value
    var y = eval(x);
    document.getElementById("calculation").value=y; 
}

function clr()
{
    document.getElementById("calculation").value="";
}
function back() 
{
    bac=document.getElementById("calculation").value;
    len=bac.length;
    if(bac=="undefined"||bac=="infinity"||bac=="NaN")
    {
        document.getElementById("calculation").value="";
    }
    else
    document.getElementById("calculation").value=bac.substring(0,len-1);
}