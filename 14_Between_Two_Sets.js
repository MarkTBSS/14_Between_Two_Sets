function getTotalX(a, b) {
    var lastOfA = a[a.length - 1]
    console.log(lastOfA)
    var firstOfB = b[0]
    console.log(firstOfB)
    var numberLookCount = 0;
    console.log(numberLookCount)

    for (var numberLook = lastOfA; numberLook <= firstOfB; numberLook++) {
        
        var isModZeroPassAllOfA = true;
        for (var i = 0; i < a.length; i++) {
            if (numberLook % a[i] !== 0) {
                isModZeroPassAllOfA = false;
                break;
            }
        }

        var isModZeroPassAllOfB = true; 
        for (var j = 0; j < b.length; j++) {
            if (b[j] % numberLook !== 0) { 
                isModZeroPassAllOfB = false;
            break;
            }
        }

        if (isModZeroPassAllOfA && isModZeroPassAllOfB) {
            numberLookCount++;
        }
    }

    return numberLookCount
}

var arrA = [2, 6]
var arrB = [24, 36]
console.log(getTotalX(arrA, arrB))