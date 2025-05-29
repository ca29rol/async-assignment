
// create a function name it sendRemainder
// use setTimeout to send the emails at the specified time
// then call the emails using the function name
async function SendReminder(emails){
setTimeout(()=>{
    console.log(`This reminder sent to ${emails} `)
},5000);
}
SendReminder('@MessagePort.com');
SendReminder('micromek@gmail. com');
SendReminder('mayamikontama@gmail.com');

// 2
// initialize the starting point of the attempt
// create a function named tryLogin
// use a promise to simulate the attempts as they increament from the starting point to the finishing attempt point(3)
// use async to the function and iterate through the attemps
// use try and await to pass the massages after ther promise has pass
let attempt=0;
function tryLogin(){
    return new Promise((resolve,reject)=>{
        attempt++;
        console.log(`attempt ${attempt}`);
        setTimeout(()=>{
            if (attempt===3){
                resolve("Login successfull");
            }
            else{
                reject("Login failed");
            }
        },1000)
    });
}
async function login() {
    for (let i=0; i <3; i++){
        try{
            const massage=await tryLogin();
            console.log(massage);
            return;
        }
        catch (error){
        console.log("Retry loading...");
        }
    }
    console.log("Login failed after 3 attempts")
}
login();

// 3
// initialize a count down variable to 5
// use setInterval to create an interval to run the given millseconds
// then the callback will go through the counting 
// and log in time up when the count reaches 0 from 5 dreacrising by 1 and clears the interval
let counts=5
const count=setInterval(() =>{
    console.log(`count ${counts}`);
    counts--;
    if(counts===0){
        clearInterval(count);
        console.log(`time's up`)
    }
},1000);

// 4
// create a function loading page 
// use await to wait for the promise
// The massages must be displayed if the page has loaded at a specific time
// After all massages timed has completed it then logs "Page fully loaded"
function wait(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms)
    )
}
async function loadPage(){
    console.log("Loading header......");
    await wait(1000);
     console.log("Loading content......");
    await wait(2000);
     console.log("Loading footer......");
    await wait(1000);
    console.log("Page fully loaded")
}
loadPage();

// 5
// creating a function named fetchPrice
// difine async (fetchPriceStock) which will use the fetchPrice
// use await to wait for promisesto resolve
function fetchPrice(symbol){
    return new Promise((resolve)=>{
     setTimeout(()=>{
        resolve(`Price for ${symbol} retrived`)
     },2000);
    });
}
async function fetchPriceStock(){
    const symbols=['AAPL','GOOG'];
    for (const symbol of symbols){
        const massage = await fetchPrice(symbol);
        console.log(massage);
    }
}
fetchPriceStock();