document.addEventListener("DOMContentLoaded", function(){
    console.log('App Ready');

//Target the input field
const input = document.querySelector('#input');

//Event listener on choose file
input.addEventListener('change', function(e) {
    //call file reader class
    const reader = new FileReader();

    //reader callback function on load
    reader.onload = function() {
        const img = new Image();
        //creates a base64 string from local file
        img.src = reader.result;
        document.body.appendChild(img);

    }

    

    reader.readAsDataURL(input.files[0]);

}, false);







});

