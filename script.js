/* =========================================================
   ERIK & ELEN — WEDDING INVITATION
   SCRIPT.JS
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const openingScreen =
    document.getElementById("openingScreen");

const openInvitation =
    document.getElementById("openInvitation");

const mainInvitation =
    document.getElementById("mainInvitation");

const musicButton =
    document.getElementById("musicButton");

const weddingMusic =
    document.getElementById("weddingMusic");

const rsvpForm =
    document.getElementById("rsvpForm");

const rsvpSuccess =
    document.getElementById("rsvpSuccess");

const confirmationModal =
    document.getElementById("confirmationModal");

const modalClose =
    document.getElementById("modalClose");



/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

let currentLanguage = "hy";


const translations = {

    hy: {

        openingTitle:
            "ՀԱՐՍԱՆԵԿԱՆ ՀՐԱՎԻՐԱՏՈՄՍ",

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

        time:
            "Ժամը՝",

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

        openingTitle:
            "СВАДЕБНОЕ ПРИГЛАШЕНИЕ",

        openInvitation:
            "Открыть приглашение",

        music:
            "Музыка",

        heroEyebrow:
            "Новое начало нашей истории любви",

        heroText1:
            "С любовью приглашаем Вас разделить с нами",

        heroText2:
            "радость самого прекрасного дня",

        heroText3:
            "в нашей жизни.",

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

        time:
            "Время:",

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

        map:
            "Посмотреть на карте",

        rsvpEyebrow:
            "Ваше присутствие очень важно для нас",

        rsvpTitle:
            "Подтвердите Ваше присутствие",

        rsvpSubtitle:
            "Для нас будет большой радостью разделить с Вами этот особенный день.",

        sideQuestion:
            "С какой стороны Вы будете сидеть?",

        attendanceQuestion:
            "Придёте ли Вы разделить с нами этот день?",

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
            "Ваш ответ принят.",

        successText2:
            "Мы с любовью ждём Вас.",

        finalText1:
            "С любовью ждём Вас",

        finalText2:
            "в этот важный и прекрасный день нашей жизни.",

        footerText:
            "С любовью",

        modalTitle:
            "Мы с любовью ждём Вас",

        modalText:
            "Спасибо за Ваш ответ."

    }

};



/* =========================================================
   CHANGE LANGUAGE
========================================================= */

function changeLanguage(language) {

    if (!translations[language]) {
        return;
    }


    currentLanguage = language;


    document.documentElement.lang =
        language === "hy"
            ? "hy"
            : "ru";


    /*
        Change normal text
    */

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );


    elements.forEach((element) => {

        const key =
            element.dataset.i18n;


        if (
            translations[language][key]
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    /*
        Change placeholders
    */

    const placeholderElements =
        document.querySelectorAll(
            "[data-placeholder-hy]"
        );


    placeholderElements.forEach(
        (element) => {

            if (language === "hy") {

                element.placeholder =
                    element.dataset.placeholderHy;

            } else {

                element.placeholder =
                    element.dataset.placeholderRu;

            }

        }
    );


    /*
        Change RSVP choice buttons
    */

    const choiceButtons =
        document.querySelectorAll(
            ".choice-button"
        );


    choiceButtons.forEach(
        (button) => {

            const value =
                language === "hy"
                    ? button.dataset.valueHy
                    : button.dataset.valueRu;


            if (button.dataset.group === "side") {

                button.textContent =
                    value;

            }


            if (
                button.dataset.group ===
                "attendance"
            ) {

                /*
                    Keep heart icon.
                */

                if (
                    button.dataset.valueHy
                        .startsWith("Այո") ||
                    button.dataset.valueRu
                        .startsWith("Да")
                ) {

                    button.textContent =
                        language === "hy"
                            ? "❤️ Այո, սիրով կգամ"
                            : "❤️ Да, с радостью приду";

                } else {

                    button.textContent =
                        language === "hy"
                            ? "🤍 Ցավոք, չեմ կարող գալ"
                            : "🤍 К сожалению, не смогу прийти";

                }

            }

        }
    );


    /*
        Active language button
    */

    const languageButtons =
        document.querySelectorAll(
            ".language-button"
        );


    languageButtons.forEach(
        (button) => {

            button.classList.toggle(
                "active",
                button.dataset.language ===
                    language
            );

        }
    );


    /*
        Keep already selected RSVP
        values after language change.
    */

    updateSelectedValues();


    /*
        Save language locally.
    */

    localStorage.setItem(
        "weddingLanguage",
        language
    );

}



/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

const languageButtons =
    document.querySelectorAll(
        ".language-button"
    );


languageButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                changeLanguage(
                    button.dataset.language
                );

            }
        );

    }
);



/* =========================================================
   LOAD SAVED LANGUAGE
========================================================= */

const savedLanguage =
    localStorage.getItem(
        "weddingLanguage"
    );


if (
    savedLanguage &&
    translations[savedLanguage]
) {

    changeLanguage(
        savedLanguage
    );

} else {

    changeLanguage("hy");

}



/* =========================================================
   MUSIC
========================================================= */

let musicPlaying = false;



function startMusic() {

    if (!weddingMusic) {
        return;
    }


    /*
        Start the selected wedding song.
    */

    weddingMusic.volume = 0.55;


    const playPromise =
        weddingMusic.play();


    if (
        playPromise !== undefined
    ) {

        playPromise
            .then(() => {

                musicPlaying = true;

                musicButton.classList.add(
                    "active"
                );

                const icon =
                    musicButton.querySelector(
                        ".music-icon"
                    );

                if (icon) {

                    icon.textContent =
                        "❚❚";

                }

            })
            .catch(() => {

                /*
                    Some browsers may still
                    block audio.

                    The music button remains
                    available for manual start.
                */

                musicPlaying = false;

            });

    }

}



function stopMusic() {

    if (!weddingMusic) {
        return;
    }


    weddingMusic.pause();

    musicPlaying = false;

    musicButton.classList.remove(
        "active"
    );


    const icon =
        musicButton.querySelector(
            ".music-icon"
        );


    if (icon) {

        icon.textContent =
            "♪";

    }

}



/* =========================================================
   OPEN INVITATION + START MUSIC
========================================================= */

let invitationOpened = false;


openInvitation.addEventListener(
    "click",
    () => {

        if (invitationOpened) {
            return;
        }


        invitationOpened = true;


        /*
            IMPORTANT:
            Music starts directly from this
            user click.
        */

        startMusic();


        /*
            Opening animation
        */

        openInvitation.style.transform =
            "translateY(-15px) scale(0.96)";


        openInvitation.style.opacity =
            "0";


        const openText =
            document.querySelector(
                ".open-text"
            );


        const openArrow =
            document.querySelector(
                ".open-arrow"
            );


        if (openText) {

            openText.style.opacity =
                "0";

        }


        if (openArrow) {

            openArrow.style.opacity =
                "0";

        }


        /*
            Show invitation
        */

        setTimeout(
            () => {

                openingScreen.classList.add(
                    "hidden"
                );


                mainInvitation.classList.add(
                    "visible"
                );


                document.body.classList.remove(
                    "lock-scroll"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            },
            700
        );

    }
);



/* =========================================================
   MUSIC BUTTON
========================================================= */

musicButton.addEventListener(
    "click",
    () => {

        if (musicPlaying) {

            stopMusic();

        } else {

            startMusic();

        }

    }
);



/* =========================================================
   COUNTDOWN
========================================================= */

const weddingDate =
    new Date(
        "October 2, 2026 13:00:00"
    ).getTime();


function formatNumber(number) {

    return String(number)
        .padStart(2, "0");

}



function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;


    const days =
        document.getElementById(
            "days"
        );


    const hours =
        document.getElementById(
            "hours"
        );


    const minutes =
        document.getElementById(
            "minutes"
        );


    const seconds =
        document.getElementById(
            "seconds"
        );


    if (
        !days ||
        !hours ||
        !minutes ||
        !seconds
    ) {

        return;

    }


    if (difference <= 0) {

        days.textContent = "00";

        hours.textContent = "00";

        minutes.textContent = "00";

        seconds.textContent = "00";

        return;

    }


    const daysValue =
        Math.floor(
            difference /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const hoursValue =
        Math.floor(
            (
                difference %
                (
                    1000 *
                    60 *
                    60 *
                    24
                )
            ) /
            (
                1000 *
                60 *
                60
            )
        );


    const minutesValue =
        Math.floor(
            (
                difference %
                (
                    1000 *
                    60 *
                    60
                )
            ) /
            (
                1000 *
                60
            )
        );


    const secondsValue =
        Math.floor(
            (
                difference %
                (
                    1000 *
                    60
                )
            ) /
            1000
        );


    days.textContent =
        formatNumber(
            daysValue
        );


    hours.textContent =
        formatNumber(
            hoursValue
        );


    minutes.textContent =
        formatNumber(
            minutesValue
        );


    seconds.textContent =
        formatNumber(
            secondsValue
        );

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);



/* =========================================================
   RSVP CHOICES
========================================================= */

const choiceButtons =
    document.querySelectorAll(
        ".choice-button"
    );


choiceButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                const group =
                    button.dataset.group;


                /*
                    Remove selection
                    from same group.
                */

                choiceButtons.forEach(
                    (otherButton) => {

                        if (
                            otherButton.dataset.group ===
                            group
                        ) {

                            otherButton.classList.remove(
                                "selected"
                            );

                        }

                    }
                );


                /*
                    Select current button.
                */

                button.classList.add(
                    "selected"
                );


                /*
                    Save selected value.
                */

                if (
                    group === "side"
                ) {

                    document.getElementById(
                        "sideInput"
                    ).value =
                        currentLanguage === "hy"
                            ? button.dataset.valueHy
                            : button.dataset.valueRu;

                }


                if (
                    group === "attendance"
                ) {

                    document.getElementById(
                        "attendanceInput"
                    ).value =
                        currentLanguage === "hy"
                            ? button.dataset.valueHy
                            : button.dataset.valueRu;

                }

            }
        );

    }
);



/* =========================================================
   UPDATE SELECTED RSVP VALUES
========================================================= */

function updateSelectedValues() {

    const selectedButtons =
        document.querySelectorAll(
            ".choice-button.selected"
        );


    selectedButtons.forEach(
        (button) => {

            const group =
                button.dataset.group;


            const input =
                group === "side"
                    ? document.getElementById(
                        "sideInput"
                    )
                    : document.getElementById(
                        "attendanceInput"
                    );


            if (!input) {
                return;
            }


            input.value =
                currentLanguage === "hy"
                    ? button.dataset.valueHy
                    : button.dataset.valueRu;

        }
    );

}



/* =========================================================
   RSVP FORM
========================================================= */

rsvpForm.addEventListener(
    "submit",
    (event) => {

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
            Validation
        */

        if (!side) {

            showMessage(
                currentLanguage === "hy"
                    ? "Խնդրում ենք ընտրել՝ Հարսի կողմ կամ Փեսայի կողմ։"
                    : "Пожалуйста, выберите сторону невесты или жениха."
            );

            return;

        }


        if (!attendance) {

            showMessage(
                currentLanguage === "hy"
                    ? "Խնդրում ենք նշել՝ կգա՞ք, թե՞ ոչ։"
                    : "Пожалуйста, укажите, сможете ли Вы прийти."
            );

            return;

        }


        if (!guestName) {

            showMessage(
                currentLanguage === "hy"
                    ? "Խնդրում ենք գրել Ձեր անունը և ազգանունը։"
                    : "Пожалуйста, введите имя и фамилию."
            );

            return;

        }


        if (!guestCount) {

            showMessage(
                currentLanguage === "hy"
                    ? "Խնդրում ենք նշել հյուրերի թիվը։"
                    : "Пожалуйста, укажите количество гостей."
            );

            return;

        }


        /*
            RSVP data
        */

        const rsvpData = {

            name: guestName,

            guests: guestCount,

            side: side,

            attendance: attendance,

            language: currentLanguage,

            submittedAt:
                new Date().toISOString()

        };


        console.log(
            "Wedding RSVP:",
            rsvpData
        );


        /*
            Save locally for now.
            Later we can connect Google Sheets.
        */

        localStorage.setItem(
            "weddingRSVP",
            JSON.stringify(
                rsvpData
            )
        );


        /*
            Hide form
        */

        rsvpForm.style.display =
            "none";


        /*
            Show success
        */

        rsvpSuccess.classList.add(
            "show"
        );


        /*
            Show beautiful modal
        */

        openConfirmationModal();

    }
);



/* =========================================================
   MESSAGE
========================================================= */

function showMessage(message) {

    alert(message);

}



/* =========================================================
   MODAL
========================================================= */

function openConfirmationModal() {

    confirmationModal.classList.add(
        "show"
    );


    confirmationModal.setAttribute(
        "aria-hidden",
        "false"
    );

}



function closeConfirmationModal() {

    confirmationModal.classList.remove(
        "show"
    );


    confirmationModal.setAttribute(
        "aria-hidden",
        "true"
    );

}



modalClose.addEventListener(
    "click",
    closeConfirmationModal
);



/* =========================================================
   CLOSE MODAL BY CLICKING OUTSIDE
========================================================= */

const modalOverlay =
    document.querySelector(
        ".modal-overlay"
    );


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeConfirmationModal
    );

}



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            closeConfirmationModal();

        }

    }
);



/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".timeline-item, .countdown-section .section-container, .rsvp-form, .final-photo"
    );


revealElements.forEach(
    (element) => {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

    }
);



const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";


                        entry.target.style.transform =
                            "translateY(0)";


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
    (element) => {

        revealObserver.observe(
            element
        );

    }
);



/* =========================================================
   MAP BUTTONS
========================================================= */

const mapButtons =
    document.querySelectorAll(
        ".map-button"
    );


mapButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            (event) => {

                const href =
                    button.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#"
                ) {

                    event.preventDefault();


                    showMessage(
                        currentLanguage === "hy"
                            ? "Քարտեզի հղումը հետո կավելացնենք։"
                            : "Ссылка на карту будет добавлена позже."
                    );

                }

            }
        );

    }
);



/* =========================================================
   IMAGE FALLBACK
========================================================= */

const images =
    document.querySelectorAll(
        "img"
    );


images.forEach(
    (image) => {

        image.addEventListener(
            "error",
            () => {

                image.style.background =
                    "linear-gradient(135deg, #dce9f0, #ffffff)";

                image.style.objectFit =
                    "cover";

            }
        );

    }
);



/* =========================================================
   INITIAL STATE
========================================================= */

document.body.classList.add(
    "lock-scroll"
);


mainInvitation.classList.remove(
    "visible"
);


openingScreen.classList.remove(
    "hidden"
);



/* =========================================================
   CONSOLE
========================================================= */

console.log(
    "♡ Erik & Elen Wedding Invitation is ready."
);
