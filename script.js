/* =========================================================
   ERIK & ELEN — WEDDING INVITATION
   SCRIPT.JS
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const openingScreen = document.getElementById("openingScreen");
const openInvitation = document.getElementById("openInvitation");
const mainInvitation = document.getElementById("mainInvitation");

const musicButton = document.getElementById("musicButton");
const weddingMusic = document.getElementById("weddingMusic");

const languageButtons = document.querySelectorAll(".language-button");

const rsvpForm = document.getElementById("rsvpForm");
const rsvpSuccess = document.getElementById("rsvpSuccess");

const confirmationModal = document.getElementById("confirmationModal");
const modalClose = document.getElementById("modalClose");
const modalOverlay = document.querySelector(".modal-overlay");



/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

let currentLanguage = "hy";


const translations = {

    hy: {

        openInvitation:
            "Բացել հրավիրատոմսը",

        music:
            "Երաժշտություն",

        heroEyebrow:
            "Մեր սիրո պատմության նոր սկիզբը",

        heroText1:
            "Սիրով հրավիրում ենք Ձեզ կիսելու մեզ հետ",

        heroText2:
            "մեր կյանքի ամենագեղեցիկ օրվա",

        heroText3:
            "ուրախությունն ու երջանկությունը։",

        dateLabel:
            "Հոկտեմբերի 2",

        countdownEyebrow:
            "Մինչև մեր օրը",

        countdownTitle:
            "Սիրով սպասում ենք այս օրվան",

        days:
            "Օր",

        hours:
            "Ժամ",

        minutes:
            "Րոպե",

        seconds:
            "Վայրկյան",

        programEyebrow:
            "Մեր հատուկ օրը",

        programTitle:
            "Օրվա ծրագիր",

        programSubtitle:
            "Օրվա յուրաքանչյուր պահը ցանկանում ենք կիսել Ձեզ հետ։",

        event1Title:
            "Հարսանեկան արարողություն",

        event1Place:
            "Հարսի տուն",

        event1Address:
            "Հասցեն կավելացվի այստեղ",

        event2Title:
            "Պսակադրություն",

        event2Place:
            "Եկեղեցու անունը",

        event2Address:
            "Եկեղեցու հասցեն կավելացվի այստեղ",

        event3Title:
            "Հարսանեկան հանդիսություն",

        restaurantName:
            "Ռեստորանի անունը",

        restaurantAddress:
            "Ռեստորանի հասցեն կավելացվի այստեղ",

        time:
            "Ժամը՝",

        map:
            "Տեսնել քարտեզի վրա",

        rsvpEyebrow:
            "Ձեր ներկայությունը մեզ համար կարևոր է",

        rsvpTitle:
            "Հաստատեք Ձեր ներկայությունը",

        rsvpSubtitle:
            "Մեզ համար մեծ ուրախություն կլինի Ձեզ հետ կիսել այս առանձնահատուկ օրը։",

        sideQuestion:
            "Որտե՞ղ եք ցանկանում նստել",

        attendanceQuestion:
            "Կգա՞ք մեզ հետ կիսելու այս օրը",

        nameLabel:
            "Անուն, ազգանուն",

        guestCountLabel:
            "Հյուրերի թիվ",

        select:
            "Ընտրեք",

        submit:
            "Հաստատել ներկայությունը",

        successTitle:
            "Շնորհակալ ենք 🤍",

        successText1:
            "Ձեր պատասխանը գրանցված է։",

        successText2:
            "Սիրով սպասում ենք Ձեզ։",

        finalText1:
            "Սիրով սպասում ենք Ձեզ",

        finalText2:
            "մեր կյանքի այս կարևոր ու գեղեցիկ օրը։",

        footerText:
            "Սիրով",

        modalTitle:
            "Սիրով սպասում ենք Ձեզ",

        modalText:
            "Շնորհակալ ենք Ձեր պատասխանի համար։"

    },


    ru: {

        openInvitation:
            "Открыть приглашение",

        music:
            "Музыка",

        heroEyebrow:
            "Новое начало нашей истории любви",

        heroText1:
            "С любовью приглашаем Вас разделить с нами",

        heroText2:
            "самый красивый день нашей жизни",

        heroText3:
            "нашу радость и счастье.",

        dateLabel:
            "2 октября",

        countdownEyebrow:
            "До нашего дня",

        countdownTitle:
            "С любовью ждём этот день",

        days:
            "Дней",

        hours:
            "Часов",

        minutes:
            "Минут",

        seconds:
            "Секунд",

        programEyebrow:
            "Наш особенный день",

        programTitle:
            "Программа дня",

        programSubtitle:
            "Мы хотим разделить с Вами каждый момент этого особенного дня.",

        event1Title:
            "Свадебная церемония",

        event1Place:
            "Дом невесты",

        event1Address:
            "Адрес будет добавлен здесь",

        event2Title:
            "Венчание",

        event2Place:
            "Название церкви",

        event2Address:
            "Адрес церкви будет добавлен здесь",

        event3Title:
            "Свадебное торжество",

        restaurantName:
            "Название ресторана",

        restaurantAddress:
            "Адрес ресторана будет добавлен здесь",

        time:
            "Время:",

        map:
            "Посмотреть на карте",

        rsvpEyebrow:
            "Ваше присутствие очень важно для нас",

        rsvpTitle:
            "Подтвердите своё присутствие",

        rsvpSubtitle:
            "Для нас будет большой радостью разделить с Вами этот особенный день.",

        sideQuestion:
            "С какой стороны Вы хотите сидеть?",

        attendanceQuestion:
            "Придёте ли Вы разделить этот день с нами?",

        nameLabel:
            "Имя, фамилия",

        guestCountLabel:
            "Количество гостей",

        select:
            "Выберите",

        submit:
            "Подтвердить присутствие",

        successTitle:
            "Спасибо 🤍",

        successText1:
            "Ваш ответ зарегистрирован.",

        successText2:
            "Будем рады видеть Вас.",

        finalText1:
            "С любовью ждём Вас",

        finalText2:
            "в этот важный и прекрасный день нашей жизни.",

        footerText:
            "С любовью",

        modalTitle:
            "Будем рады видеть Вас",

        modalText:
            "Спасибо за Ваш ответ."

    }

};



/* =========================================================
   CHANGE LANGUAGE
========================================================= */

function setLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage = language;

    document.documentElement.lang = language === "hy"
        ? "hy"
        : "ru";


    /* TEXT */

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (
            translations[language][key] !== undefined
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    /* PLACEHOLDERS */

    document.querySelectorAll("[data-placeholder-hy]").forEach(input => {

        const placeholder =
            language === "hy"
                ? input.dataset.placeholderHy
                : input.dataset.placeholderRu;

        input.placeholder = placeholder;

    });


    /* LANGUAGE BUTTONS */

    languageButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.language === language
        );

    });


    /* RSVP BUTTON VALUES */

    document.querySelectorAll(
        ".choice-button[data-value-hy]"
    ).forEach(button => {

        const value =
            language === "hy"
                ? button.dataset.valueHy
                : button.dataset.valueRu;

        /*
         * Preserve emoji if it already exists
         */
        const emoji =
            button.textContent.trim().startsWith("❤️")
                ? "❤️ "
                : button.textContent.trim().startsWith("🤍")
                    ? "🤍 "
                    : "";

        button.textContent =
            emoji + value;

    });

}



/* =========================================================
   LANGUAGE BUTTON EVENTS
========================================================= */

languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        setLanguage(
            button.dataset.language
        );

    });

});



/* =========================================================
   OPEN INVITATION
========================================================= */

if (openInvitation) {

    openInvitation.addEventListener("click", async () => {

        openingScreen.classList.add("hidden");

        document.body.classList.remove("lock-scroll");

        mainInvitation.classList.add("visible");


        /* Start music */

        if (weddingMusic) {

            try {

                await weddingMusic.play();

                musicButton.classList.add("active");

                updateMusicIcon();

            } catch (error) {

                console.log(
                    "Music could not start automatically."
                );

            }

        }


        /* Small delay before scrolling */

        setTimeout(() => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 250);

    });

}



/* =========================================================
   MUSIC
========================================================= */

function updateMusicIcon() {

    if (!musicButton) {
        return;
    }

    const icon =
        musicButton.querySelector(".music-icon");

    if (!icon) {
        return;
    }


    if (
        weddingMusic &&
        !weddingMusic.paused
    ) {

        icon.textContent = "❚❚";

    } else {

        icon.textContent = "▶";

    }

}


if (musicButton) {

    musicButton.addEventListener("click", async () => {

        if (!weddingMusic) {
            return;
        }


        if (weddingMusic.paused) {

            try {

                await weddingMusic.play();

                musicButton.classList.add("active");

            } catch (error) {

                console.log(
                    "Music playback failed."
                );

            }

        } else {

            weddingMusic.pause();

            musicButton.classList.remove("active");

        }


        updateMusicIcon();

    });

}



/* =========================================================
   COUNTDOWN
========================================================= */

/*
   Wedding date:
   October 2, 2026

   Change the time below if needed.
*/

const weddingDate =
    new Date("2026-10-02T13:00:00");


function updateCountdown() {

    const now = new Date();

    const difference =
        weddingDate.getTime() -
        now.getTime();


    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");


    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {

        return;

    }


    if (difference <= 0) {

        daysElement.textContent = "00";

        hoursElement.textContent = "00";

        minutesElement.textContent = "00";

        secondsElement.textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) %
            24
        );


    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) %
            60
        );


    const seconds =
        Math.floor(
            (difference /
                1000) %
            60
        );


    daysElement.textContent =
        String(days).padStart(2, "0");


    hoursElement.textContent =
        String(hours).padStart(2, "0");


    minutesElement.textContent =
        String(minutes).padStart(2, "0");


    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);



/* =========================================================
   RSVP CHOICE BUTTONS
========================================================= */

const choiceButtons =
    document.querySelectorAll(".choice-button");


choiceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const group =
            button.dataset.group;


        const buttonsInGroup =
            document.querySelectorAll(
                `.choice-button[data-group="${group}"]`
            );


        buttonsInGroup.forEach(item => {

            item.classList.remove(
                "selected"
            );

        });


        button.classList.add(
            "selected"
        );


        const value =
            currentLanguage === "hy"
                ? button.dataset.valueHy
                : button.dataset.valueRu;


        if (group === "side") {

            const input =
                document.getElementById(
                    "sideInput"
                );

            if (input) {
                input.value = value;
            }

        }


        if (group === "attendance") {

            const input =
                document.getElementById(
                    "attendanceInput"
                );

            if (input) {
                input.value = value;
            }

        }

    });

});



/* =========================================================
   RSVP FORM
========================================================= */

if (rsvpForm) {

    rsvpForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const sideInput =
                document.getElementById(
                    "sideInput"
                );

            const attendanceInput =
                document.getElementById(
                    "attendanceInput"
                );

            const guestName =
                document.getElementById(
                    "guestName"
                );

            const guestCount =
                document.getElementById(
                    "guestCount"
                );


            /* Validation */

            if (
                !sideInput.value ||
                !attendanceInput.value ||
                !guestName.value.trim() ||
                !guestCount.value
            ) {

                showFormMessage();

                return;

            }


            /* Hide form */

            rsvpForm.style.display =
                "none";


            /* Show success */

            rsvpSuccess.classList.add(
                "show"
            );


            /* Show modal */

            openModal();


            /* Scroll */

            setTimeout(() => {

                rsvpSuccess.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 150);

        }
    );

}



/* =========================================================
   FORM VALIDATION MESSAGE
========================================================= */

function showFormMessage() {

    const message =
        currentLanguage === "hy"
            ? "Խնդրում ենք լրացնել բոլոր դաշտերը։"
            : "Пожалуйста, заполните все поля.";


    alert(message);

}



/* =========================================================
   MODAL
========================================================= */

function openModal() {

    if (!confirmationModal) {
        return;
    }


    confirmationModal.classList.add(
        "show"
    );


    confirmationModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "lock-scroll"
    );

}


function closeModal() {

    if (!confirmationModal) {
        return;
    }


    confirmationModal.classList.remove(
        "show"
    );


    confirmationModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "lock-scroll"
    );

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            confirmationModal.classList.contains("show")
        ) {

            closeModal();

        }

    }
);



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-container, .timeline-item, .hero-photo, .final-photo, .rsvp-form"
    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal-element"
    );

});


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "revealed"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(
        element
    );

});



/* =========================================================
   PREVENT MAP LINKS WITH "#"
========================================================= */

document.querySelectorAll(
    '.map-button[href="#"]'
).forEach(button => {

    button.addEventListener(
        "click",
        event => {

            event.preventDefault();


            const message =
                currentLanguage === "hy"
                    ? "Քարտեզի հղումը դեռ պետք է ավելացվի։"
                    : "Ссылка на карту пока не добавлена.";


            alert(message);

        }
    );

});



/* =========================================================
   IMAGE FALLBACK
========================================================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener(
        "error",
        () => {

            image.classList.add(
                "image-error"
            );

        }
    );

});



/* =========================================================
   INITIAL LANGUAGE
========================================================= */

setLanguage("hy");



/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
