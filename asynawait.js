// asyn function that returns a resolved promise
async function fetchData() {
    return "Data fetched successfully!";
}
// To see the resolved value, we can use .then() or await
fetchData().then(data => console.log(data)); // Logs: Data fetched successfully!