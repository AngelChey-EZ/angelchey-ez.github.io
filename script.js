const socialButton = document.querySelector(".social-button");

function goToSocialMedia() {
    window.open(
        "https://www.instagram.com/carlitosalcarazz/?hl=en",
        "_blank"
    );
}

// make follow button jump
function makeButtonJump() {
    // Remove the animation
    socialButton.classList.remove("jump");

    // Force the browser to recognize the removal
    void socialButton.offsetWidth;

    // Add the animation again
    socialButton.classList.add("jump");
}

// Jump every 5 seconds
setInterval(makeButtonJump, 5000);

// tennis ball bounce
const tennisBall = document.querySelector(".tennis-ball");

function bounceBall() {
    tennisBall.classList.remove("bounce");

    // Force the browser to restart the animation
    void tennisBall.offsetWidth;

    tennisBall.classList.add("bounce");
}

// Bounce every 5 seconds
setInterval(bounceBall, 5000);