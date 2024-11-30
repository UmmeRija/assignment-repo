 let a = prompt ("Enter your name", "Name")
 let b = prompt ("Enter your Father name", " Father Name")
 let c = prompt ("Enter your Age", "Age")
 let d = prompt ("Enter your Qualification", "Qualification")

// alert("welcome here")
if(a !== "" && b !== "" && c !== "" && d !== ""){
   alert("dear! "+a+" welcome here")
}else{
   alert ("Kindly Inter Your Information")
   location.assign("prompt.html")
}

document.write ("<h1 style='color: deeppink ;'> Your Name is "+(a)+ "<h1>")
document.write("<h2 style='color: rgb(255, 62, 165);'> Your  Father Name is " +(b)+ "<h2>")
document.write("<h3 style='color: rgb(255, 132, 197) ;'> Your Age is" +(c)+"<h3>")
document.write("<h4 style='color: rgb(255, 169, 215);'> Your Qualification is "+(d)+ "<h4>")
document.body.style.background = "rgb(253, 223, 244)";