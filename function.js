function dntFloodbdt(){


    const addFloodbdt=document.getElementById('add-flood-bdt').value;
    const currFlooddonation=document.getElementById('flood-money').innerText;
    const cAddfloodbdt=parseFloat(addFloodbdt);
    const cFlooddonation=parseFloat(currFlooddonation);
    const newFloodbdt = cAddfloodbdt+cFlooddonation;  
    const remainBalance= myBalance() - cAddfloodbdt;
    document.getElementById('flood-money').innerText=newFloodbdt;
    document.getElementById('my-balance').innerText=remainBalance;


    const floodHistory=document.createElement('div');
    // floodHistory.classList.add('bg-yellow-300');
    floodHistory.innerHTML = `<div class=" bg-base-100 p-10 rounded  shadow-xl text-xl lg:w-1200  lg:mx20 "> <p> ${newFloodbdt} Taka is Donated for famine-2024 at Feni, Bangladesh <p/></div>`
    document.getElementById('History-container').appendChild(floodHistory)
    
   
}




function dntPalestinebdt(){

    const currPlaestinebdt=document.getElementById('palestine-money').innerText;
    const addPalestiebdt =document.getElementById('add-palestine-money').value;
    const cPlaestinebdt = parseFloat(currPlaestinebdt);
    const cAddpalestinebdt= parseFloat(addPalestiebdt);
    const newPalestinebdt = cPlaestinebdt + cAddpalestinebdt;
    document.getElementById('palestine-money').innerText=newPalestinebdt;
    const remainBalance= myBalance() - cAddpalestinebdt;
    document.getElementById('my-balance').innerText=remainBalance;
 
}

function dntQuotabdt(){

    const currQuotabdt=document.getElementById('quota-balance').innerText;
    const addQuotabdt =document.getElementById('add-quota money').value;
    const cQuotabdt = parseFloat(currQuotabdt);
    const cAddQuotabdt= parseFloat(addQuotabdt);
    const newQuotabdt =  cQuotabdt + cAddQuotabdt;
    document.getElementById('quota-balance').innerText=newQuotabdt;
    const remainBalance= myBalance() - cAddQuotabdt;
    document.getElementById('my-balance').innerText=remainBalance;
 
}



function myBalance(){
    const mybdt= document.getElementById('my-balance').innerText;
    const cmyBalance= parseFloat(mybdt);
    return cmyBalance;
}