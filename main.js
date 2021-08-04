
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  // const submit = document.querySelector('#subBtn')
// const form = document.querySelector('#myForm')
// lastname.addEventListener('click', updateSurname);

// submit.addEventListener('click', updateName);

// function updateName() {
//     const firstname = document.querySelector('#fname');
//     const lastname = document.querySelector('#lname');

//   let name = prompt('Enter a new name');
//   firstname.value = name;{
//       alert("Name changed successfully", name);
//   }
  
//   let surname = prompt('Enter a new surname');
//   lastname.value = surname;{
//     alert("Surname changed successfully", surname);
// }

//   }


