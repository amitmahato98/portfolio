const select = document.getElementsByClassName('selectcountry');
const inputamount = document.getElementById('inputamount');
const outputamount = document.getElementById('outputamount');
// outputamount.style.backgroundColor = 'red';

// console.log(select);

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then(data => data.json())
  .then((data) => {
    const entries = Object.entries(data)
    for( i=0; i < entries.length; i++){
      select[0].innerHTML += `<option value='${entries[i][0]}'>${entries[i][0]}</options>`
      select[1].innerHTML += `<option value='${entries[i][0]}'>${entries[i][0]}</options>`
    }
  }
);

function converter(){
  var inputamountVal = inputamount.value;
  
 if(select[0].value != select[1].value){
  const host = 'api.frankfurter.app';
  fetch(`https://${host}/latest?amount=${inputamountVal}&from=${select[0].value}&to=${select[1].value}`)
  .then(val => val.json())
  .then((val) => {
    // alert(val)
    console.log(val);
    outputamount.value = Object.values(val)[0];
    });
}else
  alert('wrong');
}

// url='https://api.currencyapi.com/v3/latest?apikey=cur_live_HJdtayeaHA6U1EmXX76G3DVlQUxAtAH5U206pdEM'

// co/nst
