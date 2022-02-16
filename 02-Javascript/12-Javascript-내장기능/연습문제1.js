email = "leekh4232@gmail.com"

p = email.indexOf("@");
id = email.substring(0, p);
domain = email.substring(p+1);

console.log(id);
console.log(domain);