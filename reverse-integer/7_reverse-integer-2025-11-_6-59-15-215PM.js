/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -2147483648;      // -2^31
    const INT_MAX = 2147483647;       // 2^31 - 1
    
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    
    let rev = 0;
    while (x > 0) {
        rev = rev * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    
    rev *= sign;
    
    // Check 32-bit overflow
    if (rev < INT_MIN || rev > INT_MAX) {
        return 0;
    }
    
    return rev;
};