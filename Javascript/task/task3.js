
const getRandomId = () => Math.floor(100 + Math.random() * 900);

const userProfile = [{
    id: getRandomId(),
    name: "alex johnson",
    email: "alex@gmail.com",
    skills: ["html", "css", "javascript"],
    inActive: true
}, {
    id: getRandomId(),
    name: "maria smith",
    email: "maria@gmail.com",
    skills: ["react", "node", "css"],
    inActive: true
}, {
    id: getRandomId(),
    name: "john doe",
    email: "john@gmail.com",
    skills: ["vue", "javascript", "html"],
    inActive: true
}];

const getUserInfo = () => {
    return userProfile.map(user =>
        `user:id=${user.id} , name=${user.name} , email=${user.email} , skills=${user.skills.join(",")} , inActive=${user.inActive ? "it is active" : "it is not active"}`
    );
}

const addSkill = (skill, username) => {
    userProfile.forEach(user => {
        if (user.name === username) {
            user.skills.push(skill)
        }
    })

    console.log(getUserInfo());
}

const deactivate = (username) => {
    let user = userProfile.find(u => u.name === username);

    if (user) {
        user.inActive = !user.inActive;
    }

    console.log(getUserInfo());
}

console.log(getUserInfo());
addSkill("python", "john doe");
deactivate("john doe"); 
