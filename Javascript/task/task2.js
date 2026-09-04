const users = [{
    id: 101,
    name: "  alex JOHNSON ",
    dob: "1992-06-15",
    salary: "55000",
    skills: ["html", "css", "javascript"]
}, {
    id: 102,
    name: "  maria  smith  ",
    dob: "1988-11-03",
    salary: "72000",
    skills: ["react", "node", "css"]
}, {
    id: 103,
    name: "john doe",
    dob: "1996-02-25",
    salary: "48000",
    skills: ["vue", "javascript", "html"]
}];


const nameopration = (users) => {
    let allname = []
    users.forEach(element => {

        let name = element.name.replace(/\s+/g, " ").trim();

        name = name.toLowerCase().split(" ").map(
            word => word.charAt(0).toUpperCase() + word.slice(1)

        ).join(" ");

        allname.push(name)
    });
    return allname
}

getallname = nameopration(users)
console.log(getallname)

const skillopration = (users) => {
    let count = 0
    let skilllist = []
    users.forEach(u => {
        u.skills.forEach(skill => {
            if (skill == "javascript")
                count = count + 1

            skilllist.push(skill);
        });
    });

    let uniqueSkills = skilllist.filter((item, index) =>
        skilllist.indexOf(item) === index
    );
    console.log(uniqueSkills.sort())
    console.log(`${count} user know JavaScript`)
}

skillopration(users)

const salaryopration = (users) => {  
    let salarylist = []
    users.forEach(u => {
        s = Number(u.salary)
        salarylist.push(s)
    });
    salarylist.sort()
    let Average = Math.floor(salarylist.reduce((total, num) => total + num, 0) / 3)
    console.log(`average salary : ${Average}`)
    console.log(`Highest salary : ${salarylist[2]}`)
    console.log(`lowest salary : ${salarylist[0]}`)
}
salaryopration(users)

const dateOperation = (users) => {

    let oldestUser = null;
    let maxAge = 0;

    users.forEach(u => {

        let dob = new Date(u.dob);

        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();

        let m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        if (age > maxAge) {
            maxAge = age;
            oldestUser = {
                name: u.name,
                age: age
            };
        }
    });

    return oldestUser;
}

let age = dateOperation(users)
console.log(age)