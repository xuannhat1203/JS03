let a =+prompt("Nhap ngay");
let b =+prompt("Nhap thang");
let c =+prompt("Nhap nam");
switch (b) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 11:
        if(a>0 && a<31 && c>0){
            console.log(a+"/"+b+"/"+c);
            break;
        }
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        if(a>0 && a<30 && c>0){
            console.log(a+"/"+b+"/"+c);
            break;
        }
        break;
    case 2:
        if(a>0 && a<=29 && c>0){
            console.log(a+"/"+b+"/"+c);
            break;
        }
        break;
    default:
        break;
}