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

const languageButtons =
    document.querySelectorAll(".language-button");

const rsvpForm =
    document.getElementById("rsvpForm");

const rsvpSuccess =
    document.getElementById("rsvpSuccess");

const confirmationModal =
    document.getElementById("confirmationModal");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.querySelector(".modal-overlay");


/* =========================================================
   LANGUAGE
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
            "մեր կյանքի ամենագեղեցիկ օրը",

        heroText3:
            "♡",

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

        event2Title:
            "Պսակադրություն",

        event2Place:
            "Սուրբ Շողակաթ եկեղեցի",

        event3Title:
            "Հարսանեկան հանդիսություն",

        restaurantName:
            "ՀԱՐՍՆԱՔԱՐ ՌԵՍՏՈՐԱՆԱՅԻՆ ՀԱՄԱԼԻՐ",

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
            "Սիրով հրավիրում ենք Ձեզ",

        finalText2:
            "կիսելու մեր կյանքի այս գեղեցիկ ու կարևոր օրը։",

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
            "♡",

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

        event2Title:
            "Венчание",

        event2Place:
            "Церковь Святой Шогакат",

        event3Title:
            "Свадебное торжество",

        restaurantName:
            "Ресторанный комплекс HARSNAQAR",

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
            "С любовью приглашаем Вас",

        finalText2:
            "разделить с нами этот важный и прекрасный день.",

        footerText:
            "С любовью",

        modalTitle:
            "Будем рады видеть Вас",

        modalText:
            "Спасибо за Ваш ответ."

    }

};


/* =========================================================
   LANGUAGE CHANGE
========================================================= */

function setLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage = language;


    /* HTML LANGUAGE */

    document.documentElement.lang =
        language === "hy"
            ? "hy"
            : "ru";


    /* =====================================================
       NORMAL TEXT
       ONLY TRANSLATE ELEMENTS THAT NEED TRANSLATION
    ===================================================== */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            if (
                translations[language][key] !== undefined
            ) {

                element.textContent =
                    translations[language][key];

            }

        });


    /* =====================================================
       PLACEHOLDERS
    ===================================================== */

    document
        .querySelectorAll("[data-placeholder-hy]")
        .forEach(input => {

            const placeholder =
                language === "hy"
                    ? input.dataset.placeholderHy
                    : input.dataset.placeholderRu;

            if (placeholder) {
                input.placeholder = placeholder;
            }

        });


    /* =====================================================
       LANGUAGE BUTTONS
    ===================================================== */

    languageButtons.forEach(button => {

        button.classList.toggle(
            "active",
            button.dataset.language === language
        );

    });


    /* =====================================================
       RSVP CHOICE BUTTONS
    ===================================================== */

    document
        .querySelectorAll(
            ".choice-button[data-value-hy]"
        )
        .forEach(button => {

            const value =
                language === "hy"
                    ? button.dataset.valueHy
                    : button.dataset.valueRu;


            /*
               Keep heart emoji if the button originally
               contains one.
            */

            const hasHeart =
                button.dataset.heart === "true";


            if (hasHeart) {

                button.textContent =
                    "❤️ " + value;

            } else {

                button.textContent =
                    value;

            }


            /*
               Keep selected hidden input updated
            */

            if (
                button.classList.contains("selected")
            ) {

                const group =
                    button.dataset.group;


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

                        input.value =
                            value;

                    }

                }

            }

        });

}


/* =========================================================
   SAVE RSVP HEART STATE
========================================================= */

document
    .querySelectorAll(".choice-button")
    .forEach(button => {

        if (
            button.textContent
                .trim()
                .startsWith("❤️")
        ) {

            button.dataset.heart = "true";

        }

    });


/* =========================================================
   LANGUAGE BUTTON EVENTS
========================================================= */

languageButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            setLanguage(
                button.dataset.language
            );

        }
    );

});


/* =========================================================
   OPEN INVITATION
========================================================= */

if (openInvitation) {

    openInvitation.addEventListener(
        "click",
        async () => {

            if (openingScreen) {

                openingScreen.classList.add(
                    "hidden"
                );

            }


            document.body.classList.remove(
                "lock-scroll"
            );


            if (mainInvitation) {

                mainInvitation.classList.add(
                    "visible"
                );

            }


            /* =================================================
               MUSIC
            ================================================= */

            if (weddingMusic) {

                try {

                    await weddingMusic.play();

                    if (musicButton) {

                        musicButton.classList.add(
                            "active"
                        );

                    }

                    updateMusicIcon();

                } catch (error) {

                    console.log(
                        "Music could not start automatically."
                    );

                }

            }


            /* =================================================
               SCROLL TOP
            ================================================= */

            setTimeout(
                () => {

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                },
                250
            );

        }
    );

}


/* =========================================================
   MUSIC ICON
========================================================= */

function updateMusicIcon() {

    if (!musicButton) {
        return;
    }


    const icon =
        musicButton.querySelector(
            ".music-icon"
        );


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


/* =========================================================
   MUSIC EVENTS
========================================================= */

if (weddingMusic) {

    weddingMusic.addEventListener(
        "pause",
        () => {

            if (musicButton) {

                musicButton.classList.remove(
                    "active"
                );

            }

            updateMusicIcon();

        }
    );


    weddingMusic.addEventListener(
        "play",
        () => {

            if (musicButton) {

                musicButton.classList.add(
                    "active"
                );

            }

            updateMusicIcon();

        }
    );

}


/* =========================================================
   MUSIC BUTTON
========================================================= */

if (musicButton) {

    musicButton.addEventListener(
        "click",
        async () => {

            if (!weddingMusic) {
                return;
            }


            if (weddingMusic.paused) {

                try {

                    await weddingMusic.play();

                } catch (error) {

                    console.log(
                        "Music playback failed."
                    );

                }

            } else {

                weddingMusic.pause();

            }

        }
    );

}


/* =========================================================
   COUNTDOWN
========================================================= */

/*
   Wedding date:
   October 2, 2026 — 13:00
*/

const weddingDate =
    new Date(
        2026,
        9,
        2,
        13,
        0,
        0
    );


function updateCountdown() {

    const now =
        new Date();


    const difference =
        weddingDate.getTime() -
        now.getTime();


    const daysElement =
        document.getElementById(
            "days"
        );

    const hoursElement =
        document.getElementById(
            "hours"
        );

    const minutesElement =
        document.getElementById(
            "minutes"
        );

    const secondsElement =
        document.getElementById(
            "seconds"
        );


    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {

        return;

    }


    if (difference <= 0) {

        daysElement.textContent =
            "00";

        hoursElement.textContent =
            "00";

        minutesElement.textContent =
            "00";

        secondsElement.textContent =
            "00";

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                difference /
                (1000 * 60 * 60)
            ) % 24
        );


    const minutes =
        Math.floor(
            (
                difference /
                (1000 * 60)
            ) % 60
        );


    const seconds =
        Math.floor(
            (
                difference /
                1000
            ) % 60
        );


    daysElement.textContent =
        String(days).padStart(
            2,
            "0"
        );


    hoursElement.textContent =
        String(hours).padStart(
            2,
            "0"
        );


    minutesElement.textContent =
        String(minutes).padStart(
            2,
            "0"
        );


    secondsElement.textContent =
        String(seconds).padStart(
            2,
            "0"
        );

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
    document.querySelectorAll(
        ".choice-button"
    );


choiceButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

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

                    input.value =
                        value;

                }

            }


            if (group === "attendance") {

                const input =
                    document.getElementById(
                        "attendanceInput"
                    );

                if (input) {

                    input.value =
                        value;

                }

            }

        }
    );

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


            /* =================================================
               VALIDATION
            ================================================= */

            if (
                !sideInput ||
                !attendanceInput ||
                !guestName ||
                !guestCount ||
                !sideInput.value ||
                !attendanceInput.value ||
                !guestName.value.trim() ||
                !guestCount.value
            ) {

                showFormMessage();

                return;

            }


            /* =================================================
               HIDE FORM
            ================================================= */

            rsvpForm.style.display =
                "none";


            /* =================================================
               SUCCESS
            ================================================= */

            if (rsvpSuccess) {

                rsvpSuccess.classList.add(
                    "show"
                );

            }


            /* =================================================
               MODAL
            ================================================= */

            openModal();


            /* =================================================
               SCROLL
            ================================================= */

            if (rsvpSuccess) {

                setTimeout(
                    () => {

                        rsvpSuccess.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                    },
                    150
                );

            }

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


/* =========================================================
   MODAL CLOSE
========================================================= */

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


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            confirmationModal &&
            confirmationModal.classList.contains(
                "show"
            )
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


revealElements.forEach(
    element => {

        element.classList.add(
            "reveal-element"
        );

    }
);


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

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

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        element => {

            element.classList.add(
                "revealed"
            );

        }
    );

}


/* =========================================================
   MAP LINKS
========================================================= */

document
    .querySelectorAll(
        '.map-button[href="#"]'
    )
    .forEach(
        button => {

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

        }
    );


/* =========================================================
   IMAGE FALLBACK
========================================================= */

document
    .querySelectorAll("img")
    .forEach(
        image => {

            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "image-error"
                    );

                }
            );

        }
    );


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
