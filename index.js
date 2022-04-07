const strengthMeter = document.getElementById('strength-meter')
const passwordInput = document.getElementById('password-input')
const reasonsContainer = document.getElementById('reasons')

function calculatePasswordStrength(password) {
  const weaknesses = []
  weaknesses.push(lengthWeaknesses(password))
  return weaknesses
}

function lengthWeaknesses(password) {
  const length = password.length
  
  if ()
}