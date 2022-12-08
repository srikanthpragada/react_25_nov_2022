
var pwd = "A93@dk"

upper = /[A-Z]/.test(pwd) 
digit = /\d/.test(pwd) 
specialchar =  /[@*#_]/.test(pwd)

if(upper && digit && specialchar)
    valid =true
else
    valid = false 