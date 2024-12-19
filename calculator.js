let btn=document.getElementById("btn");
btn.onclick=function(e)
{
    let s1=document.getElementById("s1");
    let s2=document.getElementById("s2");
    let cevap=document.getElementById("cevap")
    let secim=document.getElementById('secim')
    if(secim.value == '-')
        {
            let cikarma= parseInt(s1.value)-parseInt(s2.value);
            cevap.innerText=cikarma;
        }
    else if( secim.value == '+')
        {
            let toplama= parseInt(s1.value)+parseInt(s2.value);
            cevap.innerText=toplama;
        }
     else if( secim.value == '*')
        {
            let toplama= parseInt(s1.value)*parseInt(s2.value);
            cevap.innerText=toplama;
        }
     else if( secim.value == '/')
        {
            let toplama= parseInt(s1.value)/parseInt(s2.value);
            cevap.innerText=toplama;
        }
    else if(secim.value == 'secim yapiniz')
        {
            cevap.innerText='secim yapsana';
        }
}