
btnSubmit.onclick=function(){
  let enterIncome = Number(inptIncome.value) 
  if (enterIncome < 30000) {
  lblResponse.hidden = true 
  lblResponse.textContent = (`With your income of $ ${enterIncome}, you are in a tax bracket of 8%.`)
}
else if (enterIncome >30000 && income < 99,999) { 
  lblResponse.hidden = true 
  lblResponse.textContent = (`With your income of $ ${enterIncome}, you are in a tax bracket of 15%.`)
  } 
else if (enterIncome < 99,999) {
  lblResponse.hidden = true 
  lblResponse.textContent = (`With your income of $ ${enterIncome}, you are in a tax bracket of 25%.`)
  }
else {
   lblResponse.hidden = true 
  lblResponse.textContent = ("You did not enter an income amount.")
  }
btnAgain.onclick=function(){
  location.reload() 
}
