// DOM MANIPULATION -- ELEMENT ACCESSING METHODS

// console.log(document.body)
// console.log(document.body.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// let fc = document.body.firstElementChild
// console.log(fc)
// console.log(fc.parentElement)
// console.log(fc.parentNode)
// console.log(fc.firstChild.nextSibling)

// console.log(fc.firstElementChild) // GIVES FIRST ELEMENT EVEN THERE IS TEXT,COMMENT BETWEEN
// console.log(fc.firstChild)   // GIVES FIRST ELEMENT WHICH COULD BE TEXT,COMMENT
// console.log("children: ",fc.children)
// console.log("children length: ",fc.children.length)
// console.log("children array: ",Array.from(fc.children))

/*
==> POINTS:
$0 ==> points to the last selected element
$1 ==> points to the second last selected element
*/

// ADDING NEW CHILD TO EXISTING ELEMENT/PARENT

// let newChildElement = document.createElement("p1")
// newChildElement.textContent = "This is a paragraph element which is added."
// fc.appendChild(newChildElement)

// fc.innerHTML += "<h1>This is h1 tag</h1>"

// setTimeout(() => {
//     let tempChild = document.body.firstElementChild.lastElementChild
//     console.log(tempChild)
//     fc.removeChild(tempChild)
// }, 2000);

// MATCHES, CLOSEST AND CONTAINS IN DOM

// let firstContainer = document.getElementById('id1')
// let span1Element = document.getElementById('span-1')
// let h2Element = document.getElementById('h-2')
// console.log(firstContainer.matches('.box'))
// console.log(span1Element.closest('#span-1'))
// console.log(span1Element.closest('#h-2'))
// console.log(h2Element.contains(span1Element))
// console.log(span1Element.contains(h2Element))

// INNER AND OUTER HTML TAG, HIDDEN, CONSOLE.DIR
// let firstChild = document.body.firstElementChild
// console.log(firstChild)  // return simply an element
// console.dir(firstChild) // return as an object
// console.dir(firstChild.innerHTML)   // returns only the inner html
// console.dir(firstChild.outerHTML)  // return that element also
// console.dir(firstChild.textContent)  // return only the text content
// let h3Element = document.getElementById("h-3")
// console.log(h3Element)
// $0.hidden = false   // in console

// HTML ATTRIBUTES
// let cont = document.getElementsByClassName('container')[0]
// let h2Element = document.getElementById('h-2')
// console.log(cont.attributes)
// console.log(cont.getAttribute("class"))  // To get the attribute values
// console.log(cont.hasAttribute("class"))
// console.log(cont.setAttribute("hidden", "true"))
// ==> We can also make custom attributes on. It is recommed by JS to make using data-* where * can be anything means any word or text.
// let first = document.getElementById('id1')
// console.log(first)
// console.log(first.dataset)
// console.log(first.dataset.game)
// console.log(first.dataset.player)

// HTML TABLE NAVIGATION
// ==> There are also js commands to manage the tbody, td, trow, tcaption and all other table attributes

// HTML INSERTION METHOD: APPEND, PREPEND, BEFORE, AFTER AND REPLACE
// let cont = document.getElementsByClassName('container')[0]
// let parag = document.createElement('p')
// let h2Element = document.getElementById('h-2')
// parag.innerHTML = "I am new created paragraph"
// cont.append(parag)
// cont.appendChild(parag)
// cont.prepend(parag)
// cont.before(parag)
// cont.after(parag)
// h2Element.replaceWith(parag)

// HTML INSERTION METHODS USE TO INSERT HTML TO A SPECIFIED POSITION RELATIVE TO A SPECIFIC ELEMENT & NODE REMOVAL (This method is part of the Element interface and allows you to inject HTML strings at different positions relative to the target element.)

// let cont = document.getElementsByClassName('container')[0]
// let elementToInsert = "<p>I am new created paragraph</p>"
// cont.insertAdjacentHTML("beforebegin", elementToInsert)
// cont.insertAdjacentHTML("afterbegin", elementToInsert)
// cont.insertAdjacentHTML("beforeend", elementToInsert)
// cont.insertAdjacentHTML("afterend", elementToInsert)
// setTimeout(() => {
//     cont.remove()
// }, 2000);

// CLASSNAME ADN CLASSLIST
// let cont = document.getElementsByClassName('container')[0]
// console.log(cont)
// let second = document.getElementById('second')
// console.log(second)
// second.className = "textBlack yellow"
// console.log(second.classList.contains('red'))
// console.log(second.classList.add('textBlack'))
// console.log(second.classList.remove('red'))
// console.log(second.classList.toggle('red'))

// SETTIMEOUT AND SETINTERVAL METHODS ==> setTimeout(function, delay, arg1, arg2 .....)

// let msgEvent = setTimeout(() => {
//     document.write("Hi, I am written by a set timeout event.")
// }, 2000);
// console.log(msgEvent)
// clearTimeout(msgEvent)

// let msgEvent1 = setInterval(() => {
//     document.write("Hi, I am written by a set timeout event.")
// }, 2000);
// console.log(msgEvent1)
// clearInterval(msgEvent1)

// let summ = (a,b,c)=>{
//     console.log("Sum of numbers is: ", a+b+c)
// }
// setTimeout(summ, 2000, 1, 2, 3);

// BROWSWER EVENTS ==> (To make removeEventListener working the handle should refer to the same function) :-
// INSTRUCTIN: Adding a JavaScript event will overwrite the inline written event handlers

// let clickHandler = (event)=>{
//     console.log(event.type)
//     console.log(event.currentTarget)
//     console.log(event.clientX, event.clientY)
//     console.log("Button 2 clicked!")
// }
// let btn2 = document.getElementById('btn2')

// btn2.addEventListener('click', clickHandler)
// btn2.addEventListener('mouseup', ()=>{
//     console.log("On mouse up")
// })

// btn2.addEventListener('mousedown', ()=>{
//     console.log("On mouse down")
// })

// setTimeout(() => {
//     btn2.removeEventListener('click', clickHandler)
// }, 5000);

// btn2.onclick = (event)=>{       // other way to assign event
//     console.log(event.type)
//     console.log("Btn2 clicked!")
// }

// JS CALLBACKS, ASYNCHRONOURS (means the order of execution of code has been defined externally), PROMISES
// CALLBACKS --> It is just passing a function as an argument and then when needed executing it inside the function in which it was passed later

// const loadScript = (src, callback)=>{
//     let script = document.createElement('script')
//     script.src = src
//     script.onerror = ()=>{
//         // console.log("Error while loading script with SRC: ", src)
//         callback(new Error("SRC got some Error."), src)
//     }
//     script.onload = ()=>{
//         // console.log("Script has SRC: ", src) // BUT I DON'T WANT TO RUN IT BUT A FUNCTION DEFINED BY ME
//         callback(null, src)   // null is passed as there is no error
//     }
//     document.body.appendChild(script)
// }

// let hi = (error, src)=>{                           // Let say the callback function also takes an argument
//     if(error){
//         console.log(error)
//         return
//     }
//     console.log("Hi, How are you ? " + src)
// }

// let goodMorning = (error, src)=>{                  // Let say the callback function also takes an argument
//     if(error){
//         console.log(error)
//         return
//     }
//     console.log("GoodMorning! " + src)
// }

// loadScript("/index1.js", hi)
// loadScript("/index1.js", goodMorning)
// loadScript("/index1.jsss", goodMorning)

// CALLBACK HELL / PYRAMID OF DOOM OF CALLBACK: (ISSUES)
// 1) The person which got the hold on the callback function gives error is TRUE even the script loaded sucessfully mistakenly but this will create problem which will create a huge problem. PROMISES will solve it
// 2) Use of callback is not encourage. It can be use if there are only one or two callback to be executed. If there are a lot of callback which calls other callbacks and so on. This will create a callback HELL or PARADOME of callback which is a problem. (e.g. Its example could be that when one webstie loads, loads another website, then another website and this go on)

// PROMISES IN JS: (Promise gives the promise for execution of code either in result of fail or success)
// Promise has two Callbacks known as RESOLVE AND REJECT
// Promise object returned by promise has two properties which are STATE AND RESULT
// pr.then((function1(){}, function2(){})  ==> Syntax to give both function combined
// pr.then((function1(){}, null)  ==> To handle only successful completion of promises
// pr.then((null, function2(){})  ==> To handle only errors on completion of promises OR can use catch

// let pr1 = new Promise((resolve, reject)=>{
//     console.log("Promise 1 is pending")
//     setTimeout(() => {
//         resolve(true)
//     }, 3000);
// })

// let pr2 = new Promise((resolve, reject)=>{
//     console.log("Promise 2 is pending")
//     setTimeout(() => {
//         reject(new Error("Error occured"))
//     }, 3000);
// })

// console.log(pr1)
// console.log(pr2)

// pr1.then((value)=>{
//     console.log("Pr1: ", value)
// })

// pr2.catch((error)=>{
//     console.log("Pr2: ", error)
// })

// pr1.then(
//     (value)=>{console.log("Pr1: ", value)},  // function 1
//     (error)=>{console.log("Pr1: ", error)}   // function 2
// )
// pr2.then(
//     (value)=>{console.log("Pr2: ", value)},
//     (error)=>{console.log("Pr2: ", error)}
// )

// PROMISE CHAINING: (It is a way to execute multiple promises one after another). Its example is use below the loadScript Function

// let pr1 = new Promise((resolve, reject) => {
//   console.log("Promise 1 is pending");
//   setTimeout(() => {
//     resolve(1);
//   }, 3000);
// });

// pr1
//   .then((value) => {
//     console.log("Result of pr1 is: ", value);
//     let pr2 = new Promise((resolve, reject) => {
//       console.log("I am pr2.");
//       resolve(2);
//     });
//     return pr2;
//   })
//   .then((value) => {
//     console.log("Result of pr2 is: ", value);
//     return 3; // Now returning 3 is even be handle as a PROMISE returned
//   })
//   .then((value) => {
//     console.log("Result of pr3 is: ", value);
//     return 4;
//   })
//   .then((value) => {
//     console.log("Result of pr4 is: ", value);
//     return 5;
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// LOAD SCRIPT FUNCTION USING PROMISES ==> *** (Either retrun the promise from the function if you want to use the .then on the result variable below. If you want get only the result then you can store the promise in the pr variable as in the comment below and use .then inside the function or just use other logic like here we use onload and onerror function) ::: We can also store the promise in the variable and then can return the promise as 'return pr' It will also serve same as we return directly the promise ***

// const loadScript = (src) => {
//   //   let pr = new Promise((resolve, reject) => {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = () => {
//       console.log("Script loaded successfully.");
//       resolve(1);
//     };
//     script.onerror = () => {
//       console.log("Error while loading script.");
//       reject(0);
//     };
//   });
// };
// let result = loadScript(
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
// );
// ** IF PROMISE IS NOT RETURNED FROM THE FUNCTION THEN USE IT LIKE THIS **
// console.log("This is the result: ", result);
// console.log(result);

// ** IF THE PROMISE IS RETURNED FROM THE FUNCTION THEN USE IT LIKE THIS **
// result
//   .then((value) => {
//     console.log("First script ready to load.", value);
//     // Here we can load other scripts as well
//     return loadScript(
//       "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
//     );
//   })
//   .then((value) => {
//     console.log("Second script ready to load.", value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ATTACING MULTIPLE HANLDERS TO A SINGLE PROMISE

// let pr1 = new Promise((resolve, reject)=>{
//     console.log("Promise 1 is pending")
//     setTimeout(() => {
//         resolve(1)
//     }, 3000);

// })

// pr1.then((value)=>{
//     console.log("Result of pr1 first time is: ", value)
//     return 2
// })

// pr1.then((value)=>{
//     console.log("Result of pr1 second time is: ", value)
//     return 2
// })

// pr1.then((value)=>{
//     console.log("Result of pr1 third time is: ", value)
//     return 2
// })

// PROMISE API ::: 6 PROMISE METHOD

// let pr1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("This is promise 1.");
//     resolve(1);
//   }, 4000);
// });

// let pr2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("This is promise 2.");
//     // resolve(2);
//     reject(new Error());
//   }, 2000);
// });

// let pr3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("This is promise 3.");
//     resolve(3);
//   }, 3000);
// });

// It will return the promise which will resolve when all the promises are resolved. If any of the promise is rejected then it will not resolve the promise
// let res1 = Promise.all([pr1, pr2, pr3]);
// res1.then((data) => {
//   console.log("DATA: ", data);
// });

// It will return the promise which will resolve when all the promises are resolved or rejected. It return the state and the result either resolve or reject which is AMAZING THING
// let res1 = Promise.allSettled([pr1, pr2, pr3]);
// res1.then((data) => {
//   console.log("DATA: ", data);
// });

// It will return the resolved promise by checking the next if the promise failed. If all the promises are rejected then it will reject the promise.
// let res1 = Promise.any([pr1, pr2, pr3]);
// res1.then((data) => {
//   console.log("DATA: ", data);
// });

// It will return the promise which will first of all resolove or REJECTED
// let res1 = Promise.race([pr1, pr2, pr3]);
// res1.then((data) => {
//   console.log("DATA: ", data);
// });

// let res1 = Promise.resolve(1);
// res1.then((data) => {
//   console.log("DATA: ", data);
// });

// let res1 = Promise.reject(new Error("Error occured."));
// res1.then((data) => {
//   console.log("DATA: ", data);
// });

// AYSYNC & AWAIT ==> (It is a way to write the promises in a more synchronous and controlled way) (All the async functions return a promise) (All the async functions are non-blocking and run parallel with other code) ***(In JavaScript, await can only be used inside an async function)***

// const getWeather = async () => {
//   const islWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("27 C");
//     }, 2000);
//   });

//   const lahWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ temp: 25, condition: "Cloudy" });
//     }, 2000);
//   });
//   //   islWeather.then(alert);
//   //   lahWeather.then((data) => {
//   //     console.log(data.temp, data.condition);
//   //   });
//   //   let [isl, lah] = await Promise.all([islWeather, lahWeather]);
//   // OR
//   let isl = await islWeather;
//   let lah = await lahWeather;
//   return [isl, lah];
// };

// const cherry = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Cherry is resolved.");
//     }, 1000);
//   });
// };

// const cherry = async () => {
//   console.log("This is cherry function using async.");
// };

// console.log("Welcome to weather station:");
// getWeather();
// getWeather().then((data) => {
//   console.log(data);
//   console.log("Islamabad: ", data[0]);
//   console.log("Lahore: ", data[1].temp, data[1].condition);
// });

// ** main function ** to run the async functions together paralelly
// let mainFunc = async () => {
//   console.log("This is main function.");
//   //   let res1 = getWeather();
//   //   let res2 = cherry();
//   let res1 = await getWeather();
//   let res2 = await cherry(); // No need for async with the cherry function as it is already returning a promise. If it is not returning a promise then we have to use async with it.
//   console.log("res1: ", res1);
// };
// mainFunc();

// ERROR HANDLING ==> TRY AND CATCH BLOCKS ::: TRY-CATCH WORKS ONLY FOR SYNCHRONOUS CODE(TRY-CATCH DOES NOT WORK FOR THE SCHEDULE CODE LIKE IN SETTIMEOUT, SETINTERVAL, PROMISES, ASYNC FUNCTIONS, EVENT HANDLERS, ETC. BECAUSE THEY ARE DEPENDENT ON SOME EVENT OR TIME OR WILL EXECUTE IN THE FUTURE)

// setTimeout(() => {
//   console.log("This is a first set timeout function.");
// }, 1000);

// console.log(arham); // THIS WILL STOP THE EXECUTION OF THE CODE. SO, TO AVOID THIS WE USE TRY-CATCH BLOCKS
// try {
//   console.log(arham);
// } catch (error) {
//   console.log(error);
// }

// setTimeout(() => {
//   console.log("This is a second set timeout function.");
// }, 2000);

// setTimeout(() => {
//   console.log("This is a third set timeout function.");
// }, 3000);

// THIS WILL NOT HANDLE AS THE THING WHICH GIVES THE ERROR IS NOT IN THE TRY-CATCH BLOCK
// try {
//   setTimeout(() => {
//     console.log(rizwan);
//   }, 4000);
// } catch (error) {
//   console.log("Error occured: ", error);
// }

// THIS IS THE SOLUTION FOR THE ABOVE CODE PROBLEM
// try {
//   setTimeout(() => {
//     try {
//       console.log(rizwan);
//     } catch (error) {
//       console.log("Error inside the timeout: ", error);
//     }
//   }, 4000);
// } catch (error) {
//   console.log("Error occured: ", error);
// }

// setTimeout(() => {
//   console.log("This is a five set timeout function.");
// }, 5000);

// ERROR OBJECT AND CUSTOM ERRROS IN JS: (It has two properties which are name and message)

// try {
//   console.log(firstname);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

// let age = Number.parseInt(prompt("Enter the age"));
// try {
//   if (age > 120) {
//     // throw new Error("Age is not probably possible.");
//     throw new ReferenceError("Age is not probably possible.");
//   } else {
//     console.log("True age.");
//   }
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error);
// }

// FINALLY IN JS ==> (It is used to run the code which is necessary to run in any case either the code is successful or not even if the code is returning something and it is after the return statement) ::: *** NEED *** (Sometimes the catch block may produce error which will stop the execution of the code. So finally block will execute in this case as well.)

// try {
//   console.log(firstname);
// } catch (error) {
//   console.log("Error has been handled.");
//   console.log(secondName);
// } finally {
//   console.log("This is finally block.");
// }

// let fun = () => {
//   try {
//     console.log(firstname);
//     return; // Even the return statement is there but the finally block will execute
//   } catch (error) {
//     console.log("Error has been handled.");
//   } finally {
//     console.log("This is finally block.");
//   }
// };
// fun();

// PARACTISE QUESTIONS ::: QUESTION 4

// let pr1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("This is promise 1.");
//     resolve(1);
//   }, 1000);
// });

// let pr2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("This is promise 2.");
//     resolve(2);
//   }, 3000);
// });

// let pr3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("This is promise 3.");
//     resolve(3);
//   }, 2000);
// });

// async function main2() {
//   //   //   console.time("start");
//   //   console.log(new Date().getMilliseconds());
//   //   let res1 = await pr1;
//   //   console.log("Result of pr1 is: ", res1);
//   //   let res2 = await pr2;
//   //   console.log("Result of pr2 is: ", res2);
//   //   let res3 = await pr3;
//   //   console.log("Result of pr3 is: ", res3);
//   //   console.log(new Date().getMilliseconds());
//   //   //   console.timeEnd("start");

//   // Using promise.all will run the promises in parallel and will return the result in an array when all the promises are resolved
//   let res1 = pr1;
//   let res2 = pr2;
//   let res3 = pr3;
//   let res123 = await Promise.all([res1, res2, res3]);
//   console.log("Result of pr124 is: ", res123);
// }

// main2();

// ------------------- *** 65 VIDEOS DONE TILL HERE *** ----------------------------------

// FETCH API & HEADERS fetch(url, [options]) ==> (It is used to make the network requests to the server and get the data from the server) (It is a promise based API) (It is a modern way to make the network requests)(It is a part of the window object)(IT IS TWO-STAGE PROCESS: 1) FETCHING THE DATA 2) READING THE DATA) (THE REASON OF TWO STAGES IS THAT AT FIRST STAGE WE CAN CHECK STATUS AND REPONSE RESULT AND CAN EXECUTE THE LOGIC IF THE RESPONSE HAS A HUGE DATA)
// HEADERS ARE USED FOR REQUEST AND RESPONSE ==> (WHILE SENDING THE REQUEST WE SET THE HEADERS WHILE GET HEADERS IN THE FETCH RESPONSE)
// (IT IS ALSO UNDER THE UMBRELLA OF AJAX (Asynchronous JavaScript and XML))(E.g:) var xhr = new XMLHttpRequest();xhr.open("GET", "https://api.example.com/data", true);

// This is a joke API
// let pr = fetch("https://official-joke-api.appspot.com/random_joke"); // It will return a promise
// pr.then((response) => {
//   console.log("Response: ", response);
//   console.log("Response_OK: ", response.ok);
//   console.log("Response_Status: ", response.status);
//   console.log("Response_Headers: ", response.headers);
//   //   return response.text();
//   return response.json();
// })
//   .then((data) => {
//     console.log("Data: ", data);
//   })
//   .catch((error) => {
//    });

// Second OBJECT here is for the headers
// let pr = fetch("https://official-joke-api.appspot.com/random_joke", {});

// *** POST & GET REQEUST IN FETCH API (jsonplaceholder website)***
// 1) USING PROMISES

// const options = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     userId: "1",
//     id: "1111",
//     title: "This is a title",
//     body: "This is a body",
//   }),
// };

// let pr1 = fetch("https://jsonplaceholder.typicode.com/posts", options);
// pr1
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
// console.log("idForGetReq", idForGetReq);
// let pr2 = fetch("https://jsonplaceholder.typicode.com/todos/1");
// pr2
//   .then((response) => response.json())
//   .then((json) => console.log("Result of get request:", json));

// 2) USING ASYNC-AWAIT

// const sendTodo = async (todo) => {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   };
//   let pr1 = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   let response = await pr1.json();
//   return response;
// };

// const getTodo = async (id) => {
//   let pr2 = await fetch("https://jsonplaceholder.typicode.com/todos/" + id);
//   let response = await pr2.json();
//   return response;
// };

// const mainFunc = async () => {
//   let todo = {
//     userId: "1",
//     id: "100",
//     title: "This is a title",
//     body: "This is a body",
//   };
//   let data = await sendTodo();
//   console.log(data);
//   let data2 = await getTodo(1);
//   console.log(data2);
// };

// mainFunc();

// *** COOKIES IN JS *** ::: (It is key-value pairs collection.) (It is a small piece of data which is stored in user browswr for various purposes)(Every website's cookies can be seen)(It is sent by the browser with every request)

// document.cookie = "name=zahid"; // It will add the cookie in the browser as a new cookie.It will not overwrite the previous cookies.
// console.log(document.cookie);
// document.cookie = "id=112233";
// console.log(document.cookie);
// document.cookie = "name=ahad"; // It will change the previous name value
// console.log(document.cookie);

// EncodeURIComponent ::: (It is used to encode special characters like ;, =, etc. in the cookie)
// let key = prompt("Enter the key for the cookie.");
// let value = prompt("Enter the value for the cookie.");
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// console.log(document.cookie);
// console.log(decodeURIComponent("abc%3B%3D")); // It is cookie key
// console.log(decodeURIComponent("1122%4033")); // It is cookie value

// Cookie OPTIONS ===> (Every cookie has some options which are path, domain, expires, max-age, secure, samesite, httponly) (These are added using semi-colon but it will be only one cookie)(Setting a cookie is called a SETCALL)(Setting path=/a ==> The cookie will be only availabe at / and /a and /a/ onwards path but not on all the other paths)(Max 4KB data can be stored in cookies)(Max 20 cookies can be stored or it is browser dependent)
// The below set cookie will be accessible by this PATH:   (http://127.0.0.1:5500/abc/index.html)

// document.cookie =
//   "name=arham; expires=Tue, 26 Jun 2024 00:00:00 UTC; path=/abc; domain";
// console.log(document.cookie);

// LOCALSTORAGE ::: (It is like mini datebase for the browswer) (Both the key and value should be in string format) (JSON.strigify converts the object to string and JSON.parse convert back to the key-value object)
// localStorage.setItem("name", "zahid");
// console.log(localStorage.getItem("name"));
// localStorage.removeItem("name");
// localStorage.setItem("name", "ali");
// localStorage.setItem("id", "3");
// localStorage.setItem("color", "red");
// localStorage.setItem("age", "40");
// console.log(localStorage.length);
// console.log(localStorage);
// console.log(localStorage.key(0)); // key(index) ==> Gives the key at the position
// console.log(localStorage.name); // Calling localStorage as an OBJECT and ATTRIBUTES
// setTimeout(() => {
//   localStorage.clear();
//   console.log("LocalStorage clear successfully!");
// }, 2000);

// SESSIONSTORAGE ::: (It is like localStorage but the data is removed when the session is closed) (It is for the same PAGE and same TAB but not loss on refreshing the page) (It is very less in use than localStorage) (Methods are almost same as localStorage)
// EVENT ON STORAGE ==> (An event onstorage using window object can be set which is triggered when the storage is updated and has properties like key, oldvalue, newvalue, url, storageArea)(Two examine this event, open two tabs and update the storage in one tab and see the event in the other tab)
// sessionStorage.setItem("name", "zahid");
// sessionStorage.getItem("name");
// sessionStorage.removeItem("name");
// sessionStorage.clear();
// sessionStorage.length;
// console.log(sessionStorage);
// window.onstorage = (event) => {
//   alert("Storage Changed!!!");
//   console.log(event);
// };

// *** PARACTISE SET 5 ***::: IIF STANDS FOR INSTANT INVOKE FUNCTION
// const sleep = async (sec) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("I am a sleep function.");
//       resolve(JSON.stringify({ name: "zahid", age: 20 }));
//     }, second * 1000);
//   });
// };
// (() => {
//   console.log("I am a IIF.");
//   setTimeout(async () => {
//     let res = await sleep(2);
//     console.log("Result of sleep function: ", res);
//     res1 = JSON.parse(res);
//     console.log("Result of sleep function: ", res1);
//   }, 2000);
// })();

// -------------------------- *** OOP SECTION *** ----------------------------------
// *** PROTOTYPES ***::: (A mechanism by which js OBJECTS can inherit features from one another)(Everything in js is an object) (USEFUL VIDEO: https://www.youtube.com/watch?v=6b601MrVEi0) (According to video, big use of prototype is that it loads the FEATURE when it is required) (Everything in js has prototype property like OBJECT, STRING etc and we can set them and also make custom prototypes)

// console.log(Object.prototype);  // Check the default prototypes of an object
// console.log(String.prototype); // Check the default prototypes of an string
// SECTION-1
// let obj1 = {
//   name: "AR",
//   id: 1,
//   language: "python",
//   getName: function () {
//     console.log("Name: ", name);
//   },
// };
// let obj2 = {
//   name: "Zaidi",
//   id: 2,
//   language: "Java",
//   getName: function () {
//     // console.log("Name: ", obj2.name);
//     console.log("Name: ", this.name);
//   },
// };
// console.log(obj2.getName());
// obj2.__proto__.age = 20;
// obj1.__proto__ = obj2;
// console.log("obj1.age: ", obj1.age); // It will give the age as it is in the prototype of obj2 and obj2 is in the prototype of obj1

// SECTION-2
// let tempObj = {
//   getID: () => {
//     console.log("I am a ID function.");
//   },
// };

// let obj1 = {
//   name: "AR",
//   id: 1,
//   language: "python",
//   //   getID: () => {
//   //     console.log("Self ID");
//   //   },
//   //   getIdFun: tempObj.getID, // Check obj1 in the conosle
// };
// let obj2 = {
//   name: "Zaidi",
//   id: 2,
//   language: "Java",
// };
// obj1.__proto__ = tempObj; // Check obj1 in the conosle
// obj2.__proto__ = tempObj;
// console.log(obj1.getID());

// SECTION-3 ==> (Creating custom prototypes)
// Object.prototype.getAppData = () => {
//   console.log("I am a custom prototype.");
// };
// String.prototype.getAppData1 = () => {
//   console.log("I am a custom prototype in string.");
// };
// let obj1 = {
//   name: "AR",
// };
// let str1 = "abc";
// console.log(obj1.getAppData());
// console.log(str1.getAppData1());

// *** CLASSES AND OBJECTS IN JS ***
// ==> With Constructor
// class Car {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   run() {
//     console.log("Car is running.");
//   }

//   getInfo() {
//     console.log("Name: ", this.name);
//     console.log("Color: ", this.color);
//   }
// }

// let car1 = new Car("BMW", "white");
// car1.run();
// car1.getInfo();

// ==> Without Constructor
// class Car {
//   run() {
//     console.log(this.name + " " + this.color + " Car is running.");
//   }

//   getInfo() {
//     console.log("Name: ", this.name);
//     console.log("Color: ", this.color);
//   }
//   fillInfo(name, color) {
//     this.name = name;
//     this.color = color;
//   }
// }
// let car1 = new Car();
// car1.fillInfo("BMW", "white");
// car1.run();
// car1.getInfo();

// *** INHERITANCE IN JS (It's one use is that changing code at one change in all places) ***
// class Animal {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   eating() {A
//     console.log(`${this.name} is eating.`);
//   }
// }

// class Monkey extends Animal {
//   shout() {
//     console.log(`${this.name} is shouting.`);
//   }
// }

// let monkey1 = new Monkey("Monkey", "Brown");
// monkey1.eating();
// monkey1.shout();

// *** METHOD OVERRIDING & SUPER KEYWORD IN JS ***
// class Animal {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   eating() {
//     console.log(`${this.name} is Eating.`);
//   }
//   running() {
//     console.log(`${this.name} is running.`);
//   }
// }

// class Monkey extends Animal {
//   // Method overriding
//   running() {
//     super.running(); // calling the parent class method
//     console.log(`${this.name} is running at a speed of 5km/hour.`);
//   }
//   shout() {
//     console.log(`${this.name} is shouting.`);
//   }
// }

// let monkey1 = new Monkey("Brune", "Brown");
// monkey1.eating();
// monkey1.shout();
// monkey1.running();

// *** CONSTRUCTOR OVERRIDING IN JS ***
// class Animal {
//   constructor() {
//     console.log("I am an animal constructor.");
//   }
// }

// class Monkey extends Animal {
//   // If the child class does not have constructor. Then this will run automatically
//   //   constructor(...args) {
//   //     super();
//   //   }
//   constructor() {
//     super(); // This should called before the use of this keyword
//     console.log("I am an monkey constructor.");
//   }
// }
// let m1 = new Monkey();

// *** STATIC METHDOS IN JS ==> (Can be called with CLASS NAME without need of object) ***

// class Animal {
//   constructor() {
//     console.log("I am an animal constructor.");
//   }

//   static capitalize(name) {
//     // return name.charAt(0).toUpperCase() + name.slice(1);
//     return name.charAt(0).toUpperCase() + name.substr(1);
//   }
// }

// console.log(Animal.capitalize("ali"));

// *** GETTER, SETTER AND INSTANCE OF IN JS ***
// class Animal {
//   constructor(name) {
//     this.name = name;
//     console.log("I am an animal constructor.");
//   }
//   get getName() {
//     console.log("I am a getter. " + this._name);
//   }
//   set setName(newName) {
//     this._name = newName;
//     console.log("I am a setter. " + this.name);
//   }
// }

// class Rabbit extends Animal {
//   constructor() {
//     super(); // It is necessary to call the parent constructor
//     console.log("I am rabbit constructor.");
//   }
// }

// let a1 = new Animal("Dog");
// a1.getName;
// a1.setName = "Cat";
// a1.getName;
// let a2 = 3;
// let r1 = new Rabbit();
// console.log(a1 instanceof Animal);
// console.log(a2 instanceof Animal);
// console.log(r1 instanceof Animal); // It is also an instance of the parent class

// *** IIFE (Imediately Invoked Function Expressions) IN JS ***
// ==> Mostly used to execute async, await, avoiding from polluting the global namespace, etc.

// *** DESTRUCTURING & SPREAD OPERATOR IN JS *** (It is used to extract the values from the object or array and assign them to the variables)

// let arr1 = [1, 2, 3, 4, 5];
// let [a, b, c, d, e] = arr1;
// console.log(a, b, c, d, e);
// let [f, g] = arr1;
// console.log(a, b);
// let [h, i, j, k, l, m] = arr1;
// console.log(h, i, j, k, l, m); // m will be undefined

// let arr1 = [1, 2, 3, 4, 5];
// let [a, b, ...rest] = arr1;
// console.log(a, b, rest);

// let obj1 = { a: 1, b: "hi" };
// const { a, b } = obj1;
// console.log(a, b);
// let arr1 = [1, 2, 3, 4, 5];
// let obj2 = { ...arr1 }; // This will convert array into object with indices as keys
// console.log(obj2);
// console.log(obj2[3]);

// const sum = (a, b, c) => {
//   return a + b + c;
// };
// let arr1 = [1, 2, 3];
// console.log(sum(...arr1));

// let obj1 = { id: 1, name: "Ahad", age: 22 };
// console.log(obj1);
// console.log({ ...obj1, name: "Zahid", age: 20 }); // It'll change the name and age of the object (Working:First of all take the whole object whole and then chnage the given key-value pair)
// console.log({ name: "Zahid", age: 20, ...obj1 }); // It'll change the name and age of the object (Reason: The values first change and then override by the real object)

// *** LOCAL & GLOBAL SCOPE IN JS *** (Local scope is the scope of the FUNCTION and BLOCK but global scope is the scope of the WHOLE CODE)

// let a = 100;  // Global scope
// function greet() {
//   a = 200; // Function scope (Local)
//   let b = 20;
//   {
//     let b = 10; // Block scope (Local)
//     console.log("Hi " + b);
//   }
//   console.log("Hi " + b);
//   console.log("Hi " + a);
// }
// console.log(a);
// greet();

// *** HOISTING IN JS *** (It is a mechanism in JS where the variables,functions and class defination declaration are moved to the top of the code before the execution of the code) ::: ** (var variable will be declared at the top and can initialize later but let and const variables have to be initialized before the use) (FUNCTION & CLASS EXPRESSIONS are not hoisted in JS) **

// greet();
// function greet() {
//   console.log("Hi");
// }

// greet();      // It will give error as FUNCTION EXPRESSIONS are not hoisted in JS
// const greet = () => {
//   console.log("Hi");
// };

// console.log(a); // It will give undefined but not error
// var a = 100;
// console.log(a);

// let b;
// console.log(b); // It will give error
// // let b = 200;

// console.log(c); // It will give error
// const c = 300;

// *** CLOSURES IN JS *** (It is a function inside a function which has access to the outer function variables or its lexical environment) (It is a way to create private variables in JS)

// const outer = () => {
//   //   let a = 10;
//   // Here inner function is closure. It will have access to variable a
//   let inner = () => {
//     console.log(a);
//   };
//   let a = 10; // Still it will work as it is a closure
//   return inner;
// };
// let f = outer();
// console.log(f());

// *** ARROW FUNCTIONS IN JS *** (THIS keyword has 3 cases ::: 1) Alone this is a global object. 2) Inside a function this will refer to the function. 3) Inside an event this will refer to the element which is clicked)

// const greet = () => console.log("Hi");

// let obj1 = {
//   name: "Zahid",
//   age: 20,
//   getName: function () {
//     console.log(this);
//     console.log(`Name: ${this.name}`); // Here this will refer to the object obj1
//     let that = this;
//     setTimeout(function () {
//       console.log(this);
//       console.log(`Name: ${this.name}`); // Here this will refer to the window object
//       //   console.log(`Name: ${that.name}`); // This will solve the above problem
//     }, 2000);
//   },
// };
// obj1.getName();

// *** JS IN THE SERVER SIDE *** (Node.js is used to run the JS on the server side) (It is a runtime environment to run the JS code) (It is built on the V8 engine) (It is used to build the server side applications) (It is used to build the APIs, web servers, etc.) (NODE JS REPL mean  ** Read-Eval-Print-Loop **)

// console.log("I am node js code."); // Run it by click the above run button or in the terminal using "node index.js"

// ------------------ *** 95 VIDEOS DONE HERE *** ------------------------------------

// NEXT VIDEOS CODE IS IN THE CODE1 DIRECTORY
