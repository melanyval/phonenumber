const createPhoneNumber = numbers => {
  
  if(numbers.length !== 10) return "Wrong phone number"; 

  let phoneNumber = '';

  numbers = numbers.join('');

  phoneNumber = '(' + numbers.substring(0,3) + ') ';
  phoneNumber = phoneNumber + numbers.substring(3,6) + '-';
  phoneNumber = phoneNumber + numbers.substring(6,10);

  return phoneNumber;
}