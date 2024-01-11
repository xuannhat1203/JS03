let a =+prompt("Nhap so a");
let b =+prompt("Nhap so b");
let c =+prompt("Nhap so c");
let deta = b*b-4*a*c;
if(deta<0){
    console.log("Phuong trinh vo nghiem");
}else if(deta==0){
    console.log("x1=x2=",-b/(2*a));
}else{
    console.log("nghiem thu nhat bang = ",x1 = (-b + Math.sqrt(deta))/(2*a));
    console.log("nghiem thu hai bang = ",x1 = (-b - Math.sqrt(deta))/(2*a));
}