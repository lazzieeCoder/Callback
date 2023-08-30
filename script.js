//! Normal console
/*console.log("first")
console.log("second")*/
//! callback using settimeout
/*console.log("app is started")
setTimeout(()=> console.log("loading..."),2000)
setTimeout(()=> console.log("app completed"),5000)
console.log("Under process")
*/
//app is started loading.. app completed under process (sync)
//app is started under process loading app completed.(async)
//!callback using function
/*var complete =()=>{  //complete is the name of the function
    console.log("Finish")
}
var add = (abc)=>{  //add name of the function & parameter is also function with name callback
      var x = 2;
      var y = 3;
      console.log("sum", x+y)
      abc();
   }
   add(complete);
   */

//! callstack , queue , webapi ,eventloop
/*console.log("a")
setTimeout(function(){
    console.log("b")
},3000)
console.log("c")
*/

//!callback hell
/*setTimeout(() => {
  console.log("10");
  document.getElementById("display").innerText = "10";

  setTimeout(() => {
    console.log("9");
    document.getElementById("display").innerText = "9";

    setTimeout(() => {
      console.log("8");
      document.getElementById("display").innerText = "8";

      setTimeout(() => {
        console.log("7");
        document.getElementById("display").innerText = "7";

        setTimeout(() => {
          console.log("6");
          document.getElementById("display").innerText = "6";

          setTimeout(() => {
            console.log("5");
            document.getElementById("display").innerText = "5";

            setTimeout(() => {
              console.log("4");
              document.getElementById("display").innerText = "4";

              setTimeout(() => {
                console.log("3");
                document.getElementById("display").innerText = "3";
                setTimeout(() => {
                  console.log("2");
                  document.getElementById("display").innerText = "2";
                  setTimeout(() => {
                    console.log("1");
                    document.getElementById("display").innerText = "1";
                    setTimeout(() => {
                      document.getElementById("display").innerText =
                        "Happy Raksha Bandan ✨";
                    },1000);//wish
                  }, 1000);//1
                }, 1000);//2
              }, 1000);//3
            }, 1000); //4
          }, 1000); //5
        }, 1000); //6
      }, 1000);//7
    }, 1000); //8
  }, 1000); //9
}, 1000);  //10
*/