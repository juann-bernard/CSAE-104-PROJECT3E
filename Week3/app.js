
// ========================================
// SPLASH SCREEN
// ========================================

const splashScreen = document.getElementById("splashScreen");
const skipSplash = document.getElementById("skipSplash");

function hideSplash() {

    if (!splashScreen || splashScreen.classList.contains("is-hidden")) {
        return;
    }

    splashScreen.classList.add("is-hidden");

    window.setTimeout(() => {
        splashScreen.setAttribute("aria-hidden", "true");
    }, 700);

}

// SKIP SPLASH SCREEN
if (skipSplash) {
    skipSplash.addEventListener("click", hideSplash);
}

// AUTOMATICALLY HIDE SPLASH SCREEN
window.addEventListener("load", () => {
    window.setTimeout(hideSplash, 2600);
});


// ========================================
// SHOW LOGIN OR REGISTRATION FORM
// ========================================

function showForm(type) {

    const overlay = document.getElementById("authOverlay");
    const login = document.getElementById("loginForm");
    const register = document.getElementById("registerForm");

    if (!overlay || !login || !register) {
        return;
    }

    overlay.style.display = "flex";

    if (type === "login") {

        login.style.display = "block";
        register.style.display = "none";

    } 
    else if (type === "register") {

        login.style.display = "none";
        register.style.display = "block";

    }

}


// ========================================
// CLOSE LOGIN OR REGISTRATION FORM
// ========================================

function closeForm() {

    const overlay = document.getElementById("authOverlay");

    if (overlay) {
        overlay.style.display = "none";
    }

}


// ========================================
// CLOSE WHEN CLICKING OUTSIDE THE FORM
// ========================================

const authOverlay = document.getElementById("authOverlay");

if (authOverlay) {

    authOverlay.addEventListener("click", function(event) {

        if (event.target === this) {
            closeForm();
        }

    });

}


// ========================================
// CLOSE USING ESCAPE KEY
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeForm();
    }

});
