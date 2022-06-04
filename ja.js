function dia(){
    let a= parseInt(document.getElementById('inp').value);
    let b= parseInt(document.getElementById('inp1').value);

if(a>b){
    alert("la frequence reelle doit etre inferieur a la frequence percue")
}
else{
    let x= (a/b)*((b/a)*343-343);
    console.log(x);
    document.getElementById("resu").innerHTML= x.toFixed(2) + 'm/s';
}
}