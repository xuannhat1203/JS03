let a =+prompt("Nhap canh thu nhat cua tam giác");
let b =+prompt("Nhap canh thu hai cua tam giác");
let c =+prompt("Nhap canh thu ba cua tam giác");
if((a+b)>c && (a+c)>b && (b+c)>a){
    console.log("đay là 3 cạnh của tam giác");
}else{
    console.log("đây không phải 3 cạnh của tam giác");
}