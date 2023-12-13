let screen = document.getElementById('textBox');
let screen2 = document.getElementById('smallInput');
let operator = ''
let canClear = false;
let firstValue = ''
let secondValue = ''
let equates = '';


screen.value = 0

function clicked(num) {
    if (screen.value == 0) {
        screen.value = ''
    }

    if (canClear == true) {
        screen.value = ''
        canClear = false
    }
    screen.value += num;

}

function clear1() {

    screen.value = '0';
    screen2.value = ''
};

function clear2() {
    screen.value = '0';
};


// function deletes() {
//     if (equates == true) {
//       screen2.value = '';
//       equates = false;
//     } else {
//       if (screen2.value !== '') {
//         screen.value = screen.value.toString().slice(0, -1);
//         if (screen.value.toString().charAt(0) == '') {
//           screen.value = 0;
//         }
//       } else {
//         screen.value = screen.value.toString().slice(0, -1);
//         if (screen.value.toString().charAt(0) == '') {
//           screen.value = 0;
//         }
//       }
//     }
//   }
  
  

 function deletes() {

      if (equates == true) {
          screen2.value = ''
          equates = false;
      }     
      else {
        
         screen.value = screen.value.toString().slice(0, -1);
          
          if(screen.value.toString().charAt(0) == '') {
              screen.value = 0;
          }  
      }
   

 };


function operate(op) {
    if (operator) {
        equate()
    }

    canClear = true
    operator = op
    firstValue = screen.value

    screen2.value = screen.value + ' ' + op;

};



function equate() {
    secondValue = screen.value;
    equates = true;

    if (operator === '+') {
        screen.value = parseInt(firstValue) + parseInt(screen.value);
    }

    if (operator === '-') {
        screen.value = parseInt(firstValue) - parseInt(screen.value);
    }

    if (operator === '*') {
        screen.value = parseInt(firstValue) * parseInt(screen.value);
    }

    if (operator === '÷') {
        screen.value = parseInt(firstValue) / parseInt(screen.value);
    }
    
    

    screen2.value += (` ${secondValue} = `);

   
    operator = '';
    firstValue = '';
    secondValue = '';
}









































     //function operate(op)
     // if (screen.value !== '' && screen2.value !== ''){
    //     canEquate = true;
    // }

    // if (canEquate === true) {
    //     let evaluation = eval(screen2.value += screen.value);
    //              screen.value = evaluation;
    //          }



    //CORRECT