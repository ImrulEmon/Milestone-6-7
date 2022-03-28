/**
 * run index.html & script.js in live server to see output
 * -Imrul Emon
 */

 const runloop =()=>{
    const result = document.getElementById('result');
    // FOREACH LOOP
    
    var t0 = performance.now();
    var tmp;
    var someNumbers = [1,2,3,4,5,6,7,8,9,10];
    for (var p = 0; p < 1000000; p++){
        _.each(someNumbers,function(value) {
            tmp = value;
        });
    }
    var t1=performance.now();
    console.log("Took: "+(t1-t0)+" msecs FOREACH LOOP");
    const p1 = document.createElement('p');
    p1.innerText=`Took: ${(t1-t0)} msecs FOREACH LOOP`;
    result.appendChild(p1);
    //-----------------------------------------------------
    //ES6 FOR...OF LOOP
    
    var t0 = performance.now();
    var tmp;
    var someNumbers = [1,2,3,4,5,6,7,8,9,10];
    for (var p = 0; p < 1000000; p++){
        for(var value of someNumbers){
            tmp = value;
        }
    }
    var t1=performance.now();
    console.log("Took: "+(t1-t0)+" msecs ES6 FOR...OF LOOP");
    const p2 = document.createElement('p');
    p2.innerText=`Took: ${(t1-t0)} msecs msecs ES6 FOR...OF LOOP`;
    result.appendChild(p2);
    //-----------------------------------------------------
    //FOR LOOP - VANILLA JAVASCRIPT
    
    var t0 = performance.now();
    var tmp;
    var someNumbers = [1,2,3,4,5,6,7,8,9,10];
    for (var p = 0; p < 1000000; p++){
        for(var i = 0; i<someNumbers.length; i++){
            tmp = someNumbers[i];
        }
    }
    var t1=performance.now();
    console.log("Took: "+(t1-t0)+" msecs FOR LOOP - VANILLA JAVASCRIPT");
    const p3 = document.createElement('p');
    p3.innerText=`Took: ${(t1-t0)} msecs msecs FOR LOOP - VANILLA JAVASCRIPT`;
    result.appendChild(p3);
    //-----------------------------------------------------
    
    // REVERSED LOOP - VANILLA JAVASCRIPT
    
    var t0 = performance.now();
    var tmp;
    var someNumbers = [1,2,3,4,5,6,7,8,9,10];
    for (var p = 0; p < 1000000; p++){
        for(var i = someNumbers.length-1; i>=0; i--){
            tmp = someNumbers[i];
        }
    }
    var t1=performance.now();
    console.log("Took: "+(t1-t0)+" msecs REVERSED LOOP - VANILLA JAVASCRIPT");
    
    const p4 = document.createElement('p');
    p4.innerHTML=`Took: ${(t1-t0)} msecs msecs FOR LOOP - VANILLA JAVASCRIPT
    <hr>`;
    result.appendChild(p4);
    //-----------------------------------------------------
    
    
 }
