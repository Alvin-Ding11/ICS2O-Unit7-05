let age = 0
let day = 0

document.getElementById('button').addEventListener('click', decision)

function decision () {
  age = document.getElementById('agein').value
  age = parseInt(age)

  day = document.getElementById('dayin').value

  if ((day != 'Saturday' && day != 'Sunday') && (age < 18 && age > 0)) {
    document.getElementById('ans').innerHTML = 'Rise and shine! It is time for school'
  } else if ((day != 'Saturday' && day != 'Sunday') && (age >= 18)) {
    document.getElementById('ans').innerHTML = 'Pour yourself some coffee! It is time to go to work'
  } else if (age <= 0) {
    document.getElementById('ans').innerHTML = 'You think your slick eh?'
  } else {
    document.getElementById('ans').innerHTML = 'Go have some fun! Enjoy the Weekend'
  }

  document.getElementById('thx').innerHTML = 'Thank you for visting our website, we hope you have a great day!' 
}