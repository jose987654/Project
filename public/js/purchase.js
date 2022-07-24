var text1 = document.getElementById("unitprice");
var text2 = document.getElementById("qty");

function add_number() {
  const str1 = text1.value;
  const str2 = text2.value;
  var first_number = parseFloat(str1.replace(/,/g, ""));
  var second_number = parseFloat(str2.replace(/,/g, ""));
  if (isNaN(second_number)) second_number = 0;
  var result = first_number * second_number;
  //var Result = result.toLocaleString();
  document.getElementById("txtresult").value = result;
  return result;
}

// const Firstfn = () => {
//   const uid = document.registration.fname.focus();
//   return true;
// };

const rol = () => {
  let usrole = document.registration.userole;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const role1 = () => {
  let usrole = document.registration.pdct;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const usernam = () => {
  const usr = document.registration.coname;
  let letters = /^[A-Za-z]+$/;
  if (usr.value.match(letters)) {
    usr.style.border = "";
    return true;
  } else {
    usr.style.border = "3px solid red";
    //alert("username must have alphabet only");
    // usr.focus();
  }
};

const tel = () => {
  let telno = document.registration.telno;
  let numbers = /^[0-9]+$/;
  if (telno.value.match(numbers) && telno.value.length == 10) {
    telno.style.border = "";
    return true;
  } else {
    telno.style.border = "3px solid red";
    // telno.innerHTML = " select a branch";
    // telno.focus();
  }
};




// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

let validation2 = () =>{
  let branch = document.registration.branch;
  let customername = document.registration.customername;
  let telno = document.registration.telno;
  let pdct = document.registration.pdct;
  let date = document.registration.date;
  let unitprice = document.registration.unitprice;
  let quantity = document.registration.quantity;
  let nin = document.registration.nin;
//if statements
 //fullname validation
// branch validation
if(branch.value == "Default"){
  branch.style.border = '2px solid red';
  return false;
} else{
  branch.style.border = ''; 
}
// name validation 
if(customername.value.length < 1 ){
  customername.style.border = '2px solid red';
  return false;
}
else{
  customername.style.border = '';
}
// telno validation 
if(telno.value.length < 10 ){
  telno.style.border = '2px solid red';
  return false;
}
else{
  telno.style.border = '';
}
// telno validation 
//validating pdct
if(pdct.value == 'Default'){
  pdct.style.border = '2px solid red';  
  return false;
} else{
  pdct.style.border = '';
}
//validating residence.
if(date.value == ''){
  date.style.border = '2px solid red ';
  return false;
} else{
  date.style.border = '';  
}
//validating national id number.
if(unitprice.value.length<3){
  unitprice.style.border = '2px solid red'; 
  return false;
} 
else{
  unitprice.style.border = '';
}
//validating workers' id.
if(quantity.value.length<1){
  quantity.style.border = '2px solid red'; 
  return false;
} 
else{
  quantity.style.border = '';
}
return true
} 

var text1 = document.getElementById("unitprice");
var text2 = document.getElementById("qty");
function add_number() {
  const str1 = text1.value;
  const str2 = text2.value;
  var first_number = parseFloat(str1.replace(/,/g, ""));
  var second_number = parseFloat(str2.replace(/,/g, ""));
  if (isNaN(second_number)) second_number = 0;
  var result = Math.round(first_number * second_number *1000);
 // var Result = result.toLocaleString();

  document.getElementById("txtresult").value = result;
  return result;
}

const Firstfn = () => {
  const uid = document.registration.fname.focus();
  return true;
};

const branch = () => {
  let usrole = document.registration.brnch;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const sales = () => {
  let urole = document.registration.sale;
  if (urole.value == "Default") {
    urole.style.border = "3px solid red";
  } else {
    urole.style.border = "";
    return true;
  }
};

const cname = () => {
  const usr = document.registration.fname;
  let letters = /^[A-Za-z]+$/;
  if (usr.value.match(letters)) {
    usr.style.border = "";
    return true;
  } else {
    usr.style.border = "3px solid red";
    //alert("username must have alphabet only");
    // usr.focus();
  }
};



const pdt = () => {
  let usrole = document.registration.pdct;
  if (usrole.value == "Default") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};
const dte = () => {
  let usrole = document.registration.date;
  if (usrole.value == "") {
    usrole.style.border = "3px solid red";
  } else {
    usrole.style.border = "";
    return true;
  }
};

const add2 = () => {
  let telno = document.registration.unitprice;
  // let numbers = /^[0-9]+$/;
  if (telno.value == "") {
    telno.style.border = "3px solid red";
    return true;
  } else {
    telno.style.border = "";
    // telno.innerHTML = " select a branch";
    // telno.focus();
  }
};
const add1 = () => {
  let teln = document.registration.quantity;
  // let number = /^[0-9]+$/;
  if (teln.value == "") {
    teln.style.border = "3px solid red";
    return true;
  } else {
    teln.style.border = "";
    // telno.innerHTML = " select a branch";
    // telno.focus();
  }
};

const add22 = () => {
  let teln = document.registration.supplier;
  // let number = /^[0-9]+$/;
  if (teln.value == "") {
    teln.style.border = "3px solid red";
    return true;
  } else {
    teln.style.border = "";
    // telno.innerHTML = " select a branch";
    // telno.focus();
  }
};


