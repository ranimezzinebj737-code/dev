let score = 0;

// switch between info and quiz
function showSection(section) {

    let info = document.getElementById("info");
    let quiz = document.getElementById("quiz");

    if (section === "info") {
        info.style.display = "block";
        quiz.style.display = "none";
    }

    if (section === "quiz") {
        quiz.style.display = "block";
        info.style.display = "none";
    }
}

// toggle info sous-titles
function toggle(id) {

    let el = document.getElementById(id);

    if (el.style.display === "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}

// quiz answers
function answer(correct) {

    if (correct) {
        score++;
    }

    document.getElementById("result").innerHTML = "Score: " + score;
}
// create stars
const starsContainer = document.createElement("div");
starsContainer.className = "stars";
document.body.appendChild(starsContainer);

for (let i = 0; i < 120; i++) {
    let star = document.createElement("div");
    star.className = "star";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDuration = (Math.random() * 5 + 3) + "s";
    star.style.opacity = Math.random();

    starsContainer.appendChild(star);
}