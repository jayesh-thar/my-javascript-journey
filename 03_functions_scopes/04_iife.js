// Immediately Invoked Function Expressiona (IIFE)

(function chai() {
    console.log(`DB Connected`);
})();
//immediately invoked function is run but we have to stop the context by ending using ";"

( function aurcode() {
    //Named IIFE
    console.log(`DB Connected two`);
} )();

( () => {
    console.log(`DB Connected three`);
} )();

( (name) => {
    console.log(`DB Connected four ${name}`);
} )('jayesh')
