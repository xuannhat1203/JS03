let a =+prompt("Nhap nam muon kiemt tra");
if(a%100==0){
    if(a%400==0){
        console.log("day la nam nhuan");
    }else{
        console.log("day khong phai nam nhuan");
    }
}else if(a%4==0){
    console.log("day la nam nhuan");
}else{
    console.log("Khong phai nam nhuan");
}