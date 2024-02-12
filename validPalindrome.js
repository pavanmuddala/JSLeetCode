
let k = "A man, a plan, a canal: Panama"
console.log(k)
console.log(k.split(" ").join(''))

const isAlphaNumeric = (s) => {
    if (!(s > 47 && s < 58) &&
        !(s > 64 && s < 91) && 
        !(s > 96 && s < 123)) {
        return false
    }
    else {
        return true
    }
}
k=k.split(" ").join('')
let res=''
for(let i=0;i<k.length;i++){
    console.log(isAlphaNumeric(k.charCodeAt(i)),i)
    if(isAlphaNumeric(k.charCodeAt(i))){
        res=res+k.charAt(i)
    }
}
let pal=''
pal=res.toLowerCase().split('').reverse().join('')
console.log(res.toLowerCase()==pal,"result")
