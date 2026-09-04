let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        let panel = this.nextElementSibling;
        let icon = this.querySelector(".icon");

        for (let j = 0; j < acc.length; j++) {
            let otherPanel = acc[j].nextElementSibling;
            let otherIcon = acc[j].querySelector(".icon");

            otherPanel.style.display = "none";
            otherIcon.textContent = "+";
        }

        panel.style.display = "block";
        icon.textContent = "-";
    });
}
