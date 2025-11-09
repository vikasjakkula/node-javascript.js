// callbackfunction example
function fetchData(callback){
    const data = "Data fetched via callback!";
    callback(data);
}
fetchData((result) => {
    console.log(result);
});