async function getdata() {
    try {
        let response = await fetch("https://fakestoreapi.com/users");
        let data = await response.json();
        console.log(data)
        let table = document.getElementById("usertable");

        data.forEach(user => {
            let row = table.insertRow();

            row.insertCell(0).innerText = user.id;
            row.insertCell(1).innerText = `${user.name.firstname} ${user.name.lastname}`;
            row.insertCell(2).innerText = user.phone
            row.insertCell(3).innerText = user.email;
            row.insertCell(4).innerText = user.address.city;
            row.insertCell(5).innerText = user.password;
        });

    } catch (err) {
        console.log(err);
    }
}

getdata();