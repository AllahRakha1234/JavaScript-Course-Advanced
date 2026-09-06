
// ----------------------------- Cookies -----------------------------
// ===> Web server can set a cookie using the Set-Cookie HTTP header. The browser will then send the cookie back to the server with every request to the same domain.

// document.cookie = "name=Ali"   // Setting a cookie called SET CALL. It will add to existing cookies intead of replacing them
// document.cookie = "name=Zubair" // Will replace the value of previous cookie with the same name

// let key = prompt("Enter the key you want to retrieve from cookies:")
// let value = prompt("Enter your value for the key:")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}` // Handling special characters in cookies

// document.cookie = "age=12; expires=Sat, 05 Sep 2026 20:16:00 UTC; path=/;" // Deleting a cookie by setting its expiration date to the past

// const expires = new Date(Date.now() + 10 * 1000).toUTCString();
// console.log("🚀 ~ expires:", expires)
// document.cookie = `subject=Math; expires=${expires}; path=/`; // 10 seconds expiration
// console.log("🚀 ~ document.cookie :", document.cookie)
