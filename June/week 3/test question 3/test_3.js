city = ['Delhi', 'Mumbai', 'Jaipur','Kolkata','Indore' ];
let olref=document.getElementById('olref')
city.forEach(element => {
    olref.innerHTML += `<li>${element}</li>`
});

