document.getElementById('btn-add-flood-bdt')
.addEventListener('click',function(event){
    event.preventDefault();
    dntFloodbdt();

   
})

document.getElementById('btn-palestine-donation')
.addEventListener('click',function(event){
    event.preventDefault();
   dntPalestinebdt();
  
})

document.getElementById('btn-quota-donation')
.addEventListener('click',function(event){
    event.preventDefault();
    dntQuotabdt();
  
})

document.getElementById('btn-history').addEventListener('click',function(event){
    
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('History-section ').classList.remove('hidden')


})
document.getElementById('btn-donation').addEventListener('click',function(event){
    
    document.getElementById('donate-section').classList.remove('hidden')
    document.getElementById('History-section ').classList.add('hidden')


})






