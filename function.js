function dntFloodbdt(){

    const addFloodbdt=valueReturn('add-flood-bdt');
    const currFlooddonation=textReturn('flood-money');
    const cAddfloodbdt=parseFloat(addFloodbdt);
    const cFlooddonation=parseFloat(currFlooddonation);
    const newFloodbdt = cAddfloodbdt+cFlooddonation;  
    const remainBalance= myBalance() - cAddfloodbdt;
    document.getElementById('flood-money').innerText=newFloodbdt;
    document.getElementById('my-balance').innerText=remainBalance;

    
    const dia =document.getElementById('dialog');
    dia.showModal();
    document.getElementById('btn-close').addEventListener('click',function(){
        dia.close();
    })

    
    const div = document.createElement("div");
	div.className = "p-5 bg-white collapse space-y-2  mb-5 border bg-base-100";
	div.innerHTML = `<h1 class="font-bold text-xl">${cAddfloodbdt} Taka Donate for Flood at Noakhali, Bangladesh </h1>
    <p>${new Date().toString()} </p>` ;
    document.getElementById('History-container').appendChild(div);
    



 
}




function dntPalestinebdt(){

    const currPlaestinebdt=textReturn('palestine-money');
    const addPalestiebdt =valueReturn('add-palestine-money');
    const cPlaestinebdt = parseFloat(currPlaestinebdt);
    const cAddpalestinebdt= parseFloat(addPalestiebdt);
    const newPalestinebdt = cPlaestinebdt + cAddpalestinebdt;
    document.getElementById('palestine-money').innerText=newPalestinebdt;
    const remainBalance= myBalance() - cAddpalestinebdt;
    document.getElementById('my-balance').innerText=remainBalance;

    const dia =document.getElementById('dialog');
    dia.showModal();
    document.getElementById('btn-close').addEventListener('click',function(){
        dia.close();
    })

    const div = document.createElement("div");
	div.className = "p-5 bg-white collapse space-y-2  mb-5 border bg-base-100";
	div.innerHTML = `<h1 class="font-bold text-xl">${cAddpalestinebdt} TAKA Donate for Palestine People, Palestine </h1>
    <p>${new Date().toString()} </p>` ;
    document.getElementById('History-container').appendChild(div);
 
}

function dntQuotabdt(){

    const currQuotabdt=textReturn('quota-balance');
    const addQuotabdt =valueReturn('add-quota-money');
    const cQuotabdt = parseFloat(currQuotabdt);
    const cAddQuotabdt= parseFloat(addQuotabdt);
    const newQuotabdt =  cQuotabdt + cAddQuotabdt;
    document.getElementById('quota-balance').innerText=newQuotabdt;
    const remainBalance= myBalance() - cAddQuotabdt;
    document.getElementById('my-balance').innerText=remainBalance;

    const dia =document.getElementById('dialog');
    dia.showModal();
    document.getElementById('btn-close').addEventListener('click',function(){
        dia.close();
    })

    const div = document.createElement("div");
	div.className = "p-5 bg-white collapse space-y-2  mb-5 border bg-base-100";
	div.innerHTML = `<h1 class="font-bold text-xl">${cAddQuotabdt} TAKA Aid for Injured in the Quota Movement </h1>
    <p>${new Date().toString()} </p>` ;
    document.getElementById('History-container').appendChild(div);


 
}



function myBalance(){
    const mybdt= document.getElementById('my-balance').innerText;
    const cmyBalance= parseFloat(mybdt);
    return cmyBalance;
}


function valueReturn (id){
   const iValue = document.getElementById(id).value;
   return iValue;

}
function textReturn (id){
    const itext = document.getElementById(id).innerText;
    return itext;
 
 }


 


 






