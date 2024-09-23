function dntFloodbdt(){


    const addFloodbdt=document.getElementById('add-flood-bdt').value;
    const currFlooddonation=document.getElementById('food-money').innerText;
    const cAddfloodbdt=parseFloat(addFloodbdt);
    const cFlooddonation=parseFloat(currFlooddonation);
    const newFloodbdt = cAddfloodbdt+cFlooddonation;  
    const remainBalance= myBalance() - cAddfloodbdt;
    document.getElementById('food-money').innerText=newFloodbdt;
    document.getElementById('my-balance').innerText=remainBalance;
}




function myBalance(){
    const mybdt= document.getElementById('my-balance').innerText;
    const cmyBalance= parseFloat(mybdt);
    return cmyBalance;
}