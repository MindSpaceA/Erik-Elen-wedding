/* =========================================================
   ERIK & ELEN WEDDING INVITATION
   JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const openingScreen = document.getElementById("openingScreen");
const openInvitation = document.getElementById("openInvitation");
const mainInvitation = document.getElementById("mainInvitation");

const musicButton = document.getElementById("musicButton");
const weddingMusic = document.getElementById("weddingMusic");

const countdownDays = document.getElementById("days");
const countdownHours = document.getElementById("hours");
const countdownMinutes = document.getElementById("minutes");
const countdownSeconds = document.getElementById("seconds");

const rsvpForm = document.getElementById("rsvpForm");
const rsvpSuccess = document.getElementById("rsvpSuccess");

const confirmationModal =
    document.getElementById("confirmationModal");

const modalClose =
    document.getElementById("modalClose");

const calendarButton =
    document.getElementById("calendarButton");


/* =========================================================
   OPEN INVITATION
========================================================= */

let invitationOpened = false;

openInvitation.addEventListener("click", () => {

    if (invitationOpened) {
        return;
    }

    invitationOpened = true;

    /*
        Small movement before disappearing.
    */

    openInvitation.style.transform =
        "translateY(-15px) scale(0.96)";

    openInvitation.style.opacity = "0";

    document.querySelector(".open-text").style.opacity = "0";
    document.querySelector(".open-arrow").style.opacity = "0";


    /*
        Wait for the opening animation.
    */

    setTimeout(() => {

        openingScreen.classList.add("hidden");

        mainInvitation.classList.add("visible");

        document.body.classList.remove("lock-scroll");

        /*
            Start music after user interaction.
            Browser allows audio because the click
            happened directly from the user.
        */

        playMusic();

    }, 700);


    /*
        Start page from the top.
    */

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

});


/* =========================================================
   MUSIC
========================================================= */

let musicPlaying = false;

function playMusic() {

    if (!weddingMusic) {
        return;
    }

    weddingMusic
        .play()
        .then(() => {

            musicPlaying = true;

            musicButton.classList.add("active");

            musicButton.querySelector(".music-icon").textContent = "❚❚";

        })
        .catch(() => {

            /*
                If browser blocks autoplay,
                user can press music button manually.
            */

            musicPlaying = false;

        });

}


function pauseMusic() {

    if (!weddingMusic) {
        return;
    }

    weddingMusic.pause();

    musicPlaying = false;

    musicButton.classList.remove("active");

    musicButton.querySelector(".music-icon").textContent = "♪";

}


musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        pauseMusic();

    } else {

        playMusic();

    }

});


/* =========================================================
   COUNTDOWN
========================================================= */

const weddingDate =
    new Date("October 2, 2026 13:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference =
        weddingDate - now;


    /*
        Wedding date has arrived.
    */

    if (difference <= 0) {

        countdownDays.textContent = "00";
        countdownHours.textContent = "00";
        countdownMinutes.textContent = "00";
        countdownSeconds.textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    countdownDays.textContent =
        formatNumber(days);

    countdownHours.textContent =
        formatNumber(hours);

    countdownMinutes.textContent =
        formatNumber(minutes);

    countdownSeconds.textContent =
        formatNumber(seconds);

}


function formatNumber(number) {

    return String(number).padStart(2, "0");

}


/*
    Run immediately.
*/

updateCountdown();


/*
    Update every second.
*/

setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   RSVP CHOICES
========================================================= */

const choiceButtons =
    document.querySelectorAll(".choice-button");


choiceButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const group =
            button.dataset.group;

        const value =
            button.dataset.value;


        /*
            Remove selected state
            from buttons in same group.
        */

        choiceButtons.forEach((otherButton) => {

            if (
                otherButton.dataset.group === group
            ) {

                otherButton.classList.remove(
                    "selected"
                );

            }

        });


        /*
            Select clicked button.
        */

        button.classList.add("selected");


        /*
            Save value to hidden input.
        */

        if (group === "side") {

            document.getElementById(
                "sideInput"
            ).value = value;

        }


        if (group === "attendance") {

            document.getElementById(
                "attendanceInput"
            ).value = value;

        }

    });

});


/* =========================================================
   RSVP FORM
========================================================= */

rsvpForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const guestName =
        document.getElementById(
            "guestName"
        ).value.trim();


    const guestCount =
        document.getElementById(
            "guestCount"
        ).value;


    const side =
        document.getElementById(
            "sideInput"
        ).value;


    const attendance =
        document.getElementById(
            "attendanceInput"
        ).value;


    /*
        Validate choices.
    */

    if (!side) {

        showMessage(
            "Խնդրում ենք ընտրել՝ Հարսի կողմ կամ Փեսայի կողմ։"
        );

        return;

    }


    if (!attendance) {

        showMessage(
            "Խնդրում ենք նշել՝ կգա՞ք, թե՞ ոչ։"
        );

        return;

    }


    if (!guestName) {

        showMessage(
            "Խնդրում ենք գրել Ձեր անունը և ազգանունը։"
        );

        return;

    }


    if (!guestCount) {

        showMessage(
            "Խնդրում ենք նշել հյուրերի թիվը։"
        );

        return;

    }


    /*
        At this stage the form is valid.

        Later we can connect this section
        to Google Sheets / Formspree / backend.
    */


    console.log("RSVP DATA");

    console.log({
        guestName,
        guestCount,
        side,
        attendance
    });


    /*
        Show success.
    */

    rsvpForm.style.display = "none";

    rsvpSuccess.classList.add("show");

    openConfirmationModal();

});


/* =========================================================
   SIMPLE MESSAGE
========================================================= */

function showMessage(message) {

    alert(message);

}


/* =========================================================
   RSVP MODAL
========================================================= */

function openConfirmationModal() {

    confirmationModal.classList.add("show");

    confirmationModal.setAttribute(
        "aria-hidden",
        "false"
    );

}


function closeConfirmationModal() {

    confirmationModal.classList.remove("show");

    confirmationModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


modalClose.addEventListener(
    "click",
    closeConfirmationModal
);


/*
    Close when clicking outside modal.
*/

confirmationModal.addEventListener(
    "click",
    (event) => {

        if (
            event.target.classList.contains(
                "modal-overlay"
            )
        ) {

            closeConfirmationModal();

        }

    }
);


/*
    Escape key closes modal.
*/

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeConfirmationModal();

        }

    }
);


/* =========================================================
   ADD TO CALENDAR
========================================================= */

calendarButton.addEventListener(
    "click",
    () => {

        /*
            Event details
        */

        const title =
            "Erik & Elen Wedding";


        const start =
            "20261002T130000";


        /*
            Example duration:
            6 hours.
        */

        const end =
            "20261002T190000";


        const details =
            "Erik & Elen Wedding Invitation";


        /*
            Google Calendar URL
        */

        const googleCalendarUrl =
            "https://calendar.google.com/calendar/render" +
            "?action=TEMPLATE" +
            "&text=" +
            encodeURIComponent(title) +
            "&dates=" +
            start +
            "/" +
            end +
            "&details=" +
            encodeURIComponent(details);


        window.open(
            googleCalendarUrl,
            "_blank"
        );

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-container, .timeline-item"
    );


/*
    Initial state.
*/

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


/*
    Intersection Observer
*/

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

const allImages =
    document.querySelectorAll("img");


allImages.forEach((image) => {

    image.addEventListener(
        "error",
        () => {

            image.style.background =
                "linear-gradient(135deg, #dce9f1, #f8f8f3)";

            image.style.minHeight =
                "250px";

            image.style.objectFit =
                "cover";

        }
    );

});


/* =========================================================
   PREVENT EMPTY MAP LINKS
========================================================= */

const mapButtons =
    document.querySelectorAll(
        ".map-button"
    );


mapButtons.forEach((button) => {

    button.addEventListener(
        "click",
        (event) => {

            if (
                button.getAttribute("href") === "#"
            ) {

                event.preventDefault();

                alert(
                    "Քարտեզի հղումը հետո կավելացնենք։"
                );

            }

        }
    );

});


/* =========================================================
   PAGE VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden &&
            musicPlaying
        ) {

            pauseMusic();

        }

    }
);


/* =========================================================
   INITIAL STATE
========================================================= */

document.body.classList.add(
    "lock-scroll"
);


/*
    Make sure invitation is hidden
    until the envelope is opened.
*/

mainInvitation.classList.remove(
    "visible"
);

openingScreen.classList.remove(
    "hidden"
);


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "♡ Erik & Elen Wedding Invitation loaded successfully."
);
