function divisor(a, b) {
    const minNumber = Math.min(a, b);
    let gcd=1;

    for (let i = 1; i <= minNumber; i++) {
        if (a % i == 0 && b % i == 0){
           gcd=i; 
        }
        
    }
    console.log(gcd);
}
divisor(15, 5);
divisor(2154, 458);