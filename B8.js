let a =+prompt("Nhap so a");
let b =+prompt("Nhap so b");
let c =prompt("Nhap phep toan ban muon thuc hien");
switch(c){
    case '+':
        console.log("tong cua 2 so la: ",a+b);
        break;
    case '-':
        console.log("hieu cua 2 so la: ",a-b);
        break;
    case '/':
        console.log("thuong cua 2 so la:",a/b);
        break;
    case '*':
        console.log("tich cua 2 so la: ",a*b);
        break;
    default:
        console.log("khong hop le");
        break;
}