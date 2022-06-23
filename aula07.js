


let x = 10
let y ="a"

if ( y === "b" || x >= 10 ) {
    console.log (true)
} else {
    console.log (false)
}

// ---------//

let a = 3
let b = 8


if ( !( a == "3" || a === b ) && !( b !== 8 && a <= b) ) {
    console.log (true)
} else {
    console.log (false)
}


// ---------------//

let str = ""
let msg = "haha!"
let eBonito = "false"

if ( !((str || msg) && eBonito)) {
    console.log (true)
} else {
    console.log (false)
}