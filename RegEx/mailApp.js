const output = document.getElementById('Output'); 
const inputField = document.getElementById('input');
const checkMail =()=>{
    const input = inputField.value;
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const testing = regEx.test(input);
    if(testing===true){
        output.innerHTML=`
        <div  class="mx-auto text-center card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Verify Email</div>
        <div class="card-body">
          <h5 class="card-title">${input}</h5>
          <p class="card-text">Valid Email Format</p>
        </div>
        </div>
        `
    }
    else{
        output.innerHTML=`
        <div  class="mx-auto text-center card text-white bg-danger my-5" style="max-width: 18rem;">
        <div class="card-header">Verify Email</div>
        <div class="card-body">
          <h5 class="card-title">${input}</h5>
          <p class="card-text">Invalid Email Format</p>
        </div>
        </div>
        `
    }

    inputField.value='';
}


inputField.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button-search").click();
  }
});