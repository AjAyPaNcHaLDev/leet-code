
function gcdOfStrings(str1, str2) 
{

if(str1+str2!=str2+str1){
    return ""
}

const a=str1.length;
const b=str2.length;
let gcd=0;
if(a>b){ 
    gcd=GCD(a,b);
}else{
     
    gcd=GCD(b,a)
}
 
return str1.substring(0,gcd)
};  

function GCD(a,b){     
    if(b==0){
        return a;
    }

    return GCD(b,a%b);
}
 gcdOfStrings("ABABAB", "AB")