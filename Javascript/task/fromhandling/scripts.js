const registrationForm = document.getElementById("registrationForm")

const handleSubmit = (e) => {
    e.preventDefault();
    let nameEl = document.getElementById("name");
    let emailEl = document.getElementById("mail");
    let passwordEl = document.getElementById("password");
    let ageEl = document.getElementById("age");
    let dobEl = document.getElementById("dob");
    let genderEl = document.querySelector('input[name="gender"]:checked');
    let skillsEl = document.querySelectorAll('input[name="skills"]:checked');
    let qualificationEl = document.getElementById('qualification');
    let resumeEl = document.getElementById('resume');
    let introductionEl = document.getElementById('introduction');

    let cleanName = nameEl?.value?.trim()
    let cleanEmail = emailEl?.value?.trim()
    let cleanPassword = passwordEl?.value?.trim()
    let cleanAge = ageEl?.value?.trim()
    let cleanDob = dobEl?.value?.trim()
    let cleanGender = genderEl?.value?.trim()
    let cleanSkills = [];
    skillsEl?.forEach((el) => cleanSkills.push(el.value.trim()))
    let cleanQualification = qualificationEl?.value?.trim()
    let cleanResume = resumeEl?.files[0]
    let cleanIntroduction = introductionEl?.value?.trim();

    if (!validateName(cleanName)) {
        let errEl = createErrorEl("Please Enter a valid name. Name must be atleast 3 character long")
        nameEl.parentElement.appendChild(errEl)
    } else {
        nameEl.parentElement.querySelector('.error')?.remove();
    }

    if (!validateEmail(cleanEmail)) {
        let errEl = createErrorEl("Enter a valid email address (e.g., example@gmail.com)")
        emailEl.parentElement.appendChild(errEl)
    }
    else {
        emailEl.parentElement.querySelector('.error')?.remove();
    }

    if (!validatePassword(cleanPassword)) {
        isValid = false;
        passwordEl.parentElement.appendChild(
            createErrorEl("Password must be 6+ chars with number & letter")
        );
    } else {
        passwordEl.parentElement.querySelector('.error')?.remove();
    }


    if (!cleanDob) {
        isValid = false;
        dobEl.parentElement.appendChild(
            createErrorEl("Date of birth is required")
        );
    } else {
        dobEl.parentElement.querySelector('.error')?.remove();
    }

    const skillsBox = document.querySelector('input[name="skills"]')?.parentElement;

    if (cleanSkills.length === 0) {
        let errEl = createErrorEl("Select at least one skill");
        skillsBox?.appendChild(errEl);
    } else {
        skillsBox?.querySelector('.error')?.remove();
    }

    if (!cleanQualification) {
        isValid = false;
        qualificationEl.parentElement.appendChild(
            createErrorEl("Please select qualification")
        );
    } else {
        qualificationEl.parentElement.querySelector('.error')?.remove();
    }

    if (!validateResume(cleanResume)) {
        isValid = false;
        resumeEl.parentElement.appendChild(
            createErrorEl("Upload PDF/DOC file under 2MB")
        );
    } else {
        resumeEl.parentElement.querySelector('.error')?.remove();
    }

    if (!validateIntro(cleanIntroduction)) {
        isValid = false;
        introductionEl.parentElement.appendChild(
            createErrorEl("Introduction must be at least 10 characters")
        );
    } else {
        introductionEl.parentElement.querySelector('.error')?.remove();
    }


};


registrationForm.addEventListener('submit', handleSubmit);


function validateName(str) {
    let namePattern = /^(?=.{3,}$)[A-Za-z]+(?:[.\s][A-Za-z]+)*$/;
    return namePattern.test(str)
}
function validateEmail(str) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(str);
}
function createErrorEl(message) {
    const errEl = document.createElement("span")
    errEl.classList.add("error")
    errEl.textContent = message;
    return errEl
}

function validatePassword(str) {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(str);
}

function validateResume(file) {
    return !!file;
}

function validateIntro(str) {
    return str && str.length >= 10;
}

let dobEl = document.getElementById("dob");
let ageEl = document.getElementById("age");

dobEl.addEventListener("change", function () {

    let dob = new Date(dobEl.value);
    let now = new Date();

    let age = now.getFullYear() - dob.getFullYear();

    if (
        now.getMonth() < dob.getMonth() ||
        (now.getMonth() == dob.getMonth() && now.getDay() < dob.getDay())
    ) {
        age--;
    }

    ageEl.value = age;
});