/**
 * Callback
 */

console.log('/////////////////////////////////////////////////////////////////////////////////////////////')

function loadScript(src) {
    let script = document.createElement('script');
    script.src = '/Users/HP/Desktop/Advance/Advance/JAVASCRIPT/Lection47JS/lection47/' + src;

    document.head.append(script);
}

loadScript('script.js')
// great();

console.log('/////////////////////////////////////////////////////////////////////////////////////////////')

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = '/Users/HP/Desktop/Advance/Advance/JAVASCRIPT/Lection47JS/lection47/' + src;

    document.onload = () => callback(script)

    document.head.append(script);
}

loadScript('script.js', script => {
    console.log(script)
    sayHello();
});

console.log('/////////////////////////////////////////////////////////////////////////////////////////////')

function loadScript1(src, callback) {
    let script = document.createElement('script');
    script.src = '/Users/HP/Desktop/Advance/Advance/JAVASCRIPT/Lection47JS/lection47/' + src;

    script.onload = () => callback(script)

    document.head.append(script);
}

loadScript1('script.js', script => {
    console.log(script.src)
    sayHello();

    loadScript1('script2.js', script => {
        console.log(script.src);
        sayBye();

        loadScript1('script3.js', script => {
            console.log(script.src);
            foo()
        })
    })
})