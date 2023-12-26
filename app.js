//synchronous programming
console.log("one");
console.log("two");
console.log("three");

//asynchronous programming
console.log("one");
console.log("two");
setTimeout(
    ()=>{
        console.log("hello");
    },5000
) 
console.log("three");

//callback function
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);


//secondtype callback
calculator(1,2,(a,b)=>{
console.log(a+b);
})

function getdata(dataid,getnextdata){
setTimeout(
    ()=>{
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    }
   , 2000
)
}
//callbackhell
getdata(1,()=>{
console.log("getting data2 ............");
    getdata(2,()=>{
        console.log("getting data3 ............");
        getdata(3,()=>{
            console.log("getting data4 ............");  
            getdata(4);
        })
    });
})

//promises
let promise=new Promise((resolve,reject)=>{
    console.log("I am promise");
    resolve("done");
})
let promise=new Promise((resolve,reject)=>{
    console.log("I am promise");
    reject("some error occured"); 
})

function getdata(dataid,getnextdata){
   return new Promise((resolve,reject)=>{
     setTimeout(
        ()=>{
            console.log("data",dataid);
            resolve("success"); 
            if(getnextdata){
                getnextdata();
            }
        }
       , 5000
    )
   })
     }


function getdata(dataid,getnextdata){
    return new Promise((resolve,reject)=>{
      setTimeout(
         ()=>{
          reject("some error occured");
             if(getnextdata){
                 getnextdata();
             }
         }
        , 5000
     )
    })
      }
const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        resolve("success");
      
    })
}
let promise=getpromise();
promise.then((res)=>{
    console.log("promise fulfilled",res);
})

const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        reject("error");
      
    })
}
let promise=getpromise();
promise.catch((err)=>{
    console.log("promise rejected",err);
})

function asyncfunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("resolve");
        },4000)
    })
}
function asyncfunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("resolve");
        },4000)
    })
}
console.log("data fetching");
let p1=asyncfunc1();
p1.then((res)=>{
console.log(res);
})


console.log("data fetching");
let p2=asyncfunc2();
p2.then((res)=>{
console.log(res);
})

//promise chaining

console.log("data fetching");
let p1=asyncfunc1();
p1.then((res)=>{
console.log(res);
console.log("fetching data2...........");
let p2=asyncfunc2();
p2.then((res)=>{
    console.log(res);
})
})



function getdata(dataid,getnextdata){
        return new Promise((resolve,reject)=>{
          setTimeout(
             ()=>{
           console.log("data",dataid);
           resolve("success");
                 }
             
            , 3000
         )
        })
          }
          //async-await
        async  function getalldata(){
            console.log("getting data1");
            await getdata(1);
            console.log("getting data2");

            await getdata(2);
            console.log("getting data3");

            await getdata(3);
            console.log("getting data4");

            await getdata(4);
            console.log("getting data5");

            await getdata(5);
            console.log("getting data6");

            await getdata(6);
            console.log("getting data7");

            await getdata(7);

        }

      //  using iife
       ( async  function (){
            console.log("getting data1");
            await getdata(1);
            console.log("getting data2");

            await getdata(2);
            console.log("getting data3");

            await getdata(3);
            console.log("getting data4");

            await getdata(4);
            console.log("getting data5");

            await getdata(5);
            console.log("getting data6");

            await getdata(6);
            console.log("getting data7");

            await getdata(7);

        })();

        // promise chain

         getdata(1).then((res)=>{
            console.log(res);
            getdata(2).then(()=>{
                console.log(res);
            })
         })

        

       // second type syntax
       getdata(1).then((res)=>{
        return getdata(2);
       }).then((res)=>{
        console.log(res);
       })


  //  async-await

    function api(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("weather data");
                resolve("success");
            },3000)
        })
    }


    async function getweatherdata(){
        await api();
        await api();

    }