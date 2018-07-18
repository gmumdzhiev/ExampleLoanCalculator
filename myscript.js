function calculate() {

  //Input and Total

  var amount = document.getElementById('amount');
  var apr = document.getElementById('apr');
  var years = document.getElementById('years');
  var zipcode = document.getElementById('zipcode');
  var payment = document.getElementById('payment');
  var total = document.getElementById('total');
  var totalinterest = document.getElementById('totalinterest');

  //Calculation

  var principal = parseFloat(amount.value);
  var interest = parseFloat(apr.value) / 100 / 12;
  var payments = parseFloat(years.value) * 12;

  //Compute the monthly payment figure

  var x = Math.pow(1 + interest, payments);
  var monthly = (principal * x * interest) / (x - 1);

  if (isFinite(monthly)) {
    payment.innerHTML = monthly.toFixed(2);
    total.innerHTML = (monthly * payments).toFixed(2);
    totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);
    save(amount.value, apr.value, years.value, zipcode.value);

    try {
      getLenders(amount.value, apr.value, years.value, zipcode.value);
    }
    catch (e) {/* And ignore those errors*/ }
  }

  else {
    payment.innerHTML = '';
    total.innerHTML = '';
    totalinterest.innerHTML = '';
    chart();
  }
}