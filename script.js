
  var submitButton = document.getElementById('submitbtn');

  var cont = document.getElementById('cover');

  var thanksMessage = document.getElementById('thanksMessage');

  var suceesss = document.getElementById('success')

  var dismiss = document.getElementById('dismiss_btn')


  suceesss.style.display = "none";


  submitButton.addEventListener('click', function() {
    cont.style.display = 'none';
    suceesss.style.display = "block";
  });

dismiss.addEventListener('click', function()
{
  suceesss.style.display = "none";

  cont.style.display = 'block';
  
});


