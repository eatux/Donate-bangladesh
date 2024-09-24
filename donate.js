document.getElementById('btn-add-flood-bdt')
.addEventListener('click',function(event){
    event.preventDefault();

    const input = parseFloat(valueReturn('add-flood-bdt'));
    if (input <= 0 || isNaN(input)) {
		alert("Invalid Donation amount");
		return;
	}else{
        dntFloodbdt();	
	
    }
    
   
    
   
   
})

document.getElementById('btn-palestine-donation')
.addEventListener('click',function(event){
    event.preventDefault();

    const input = parseFloat(valueReturn('add-palestine-money'));
    if (input <= 0 || isNaN(input)) {
		alert("Invalid Donation amount");
		return;
	}else{
        dntPalestinebdt();
    }
   
  
})

document.getElementById('btn-quota-donation')
.addEventListener('click',function(event){
    event.preventDefault();
    const input = parseFloat(valueReturn('add-quota-money'));
    if (input <= 0 || isNaN(input)) {
		alert("Invalid Donation amount");
		return;
	}else{
        dntQuotabdt();
    }
    
  
})

document.getElementById('btn-history').addEventListener('click',function(){
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('History-section').classList.remove('hidden')
    document.getElementById('btn-history').classList.add('bg-green-300')
    document.getElementById('btn-donation').classList.remove('bg-green-300')
    

  
})
document.getElementById('btn-donation').addEventListener('click',function(){
    
    document.getElementById('donation-section').classList.remove('hidden')
    document.getElementById('History-section').classList.add('hidden')
    document.getElementById('btn-donation').classList.add('bg-green-300')
    document.getElementById('btn-history').classList.remove('bg-green-300')

})







