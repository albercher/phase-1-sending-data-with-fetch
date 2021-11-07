function submitData(username, useremail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: `${username}`,
            email: `${useremail}`,
        }),
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (obj) {
        document.body.innerHTML = `${obj.id}`
    })
    .catch(function (message) {
        document.body.innerHTML = `${message}`
    })
}

// .catch(function (error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });