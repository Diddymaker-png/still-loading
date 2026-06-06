const progress = document.querySelector(".progress-bar");
const text = document.querySelector("#loading-text");
const loader = document.querySelector("#loader");

let width = 0;

const messages = [
    "Loading personality...",
    "Loading hobbies...",
    "Compiling life choices...",
    "Installing character development...",
    "Checking sleep schedule..."
];

const interval = setInterval(() => {

    if(width < 99){
        width++;
        progress.style.width = width + "%";

        if(width % 20 === 0){
            text.textContent =
                messages[Math.floor(Math.random()*messages.length)];
        }

    }else{

        text.textContent =
        "Bro it's literally 99%.";

        setTimeout(() => {

            text.textContent =
            "Okay okay we're done.";

            progress.style.width = "100%";

            setTimeout(() => {

                loader.style.opacity = "0";

                setTimeout(() => {
                    loader.remove();
                },500);

            },1500);

        },2000);

        clearInterval(interval);

    }

},30);
const startBtn =
document.getElementById("start-btn");

if(startBtn){

    startBtn.addEventListener("click",()=>{

        document
        .getElementById("about")
        .scrollIntoView({

            behavior:"smooth"

        });

    });

}

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach(section=>{

        const top =
        section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("active");

        }

    });

});

function revealSections(){

    reveals.forEach(section=>{

        const top =
        section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            section.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();

const progressBar =
document.querySelector(
    ".scroll-progress"
);

window.addEventListener(
    "scroll",
    ()=>{

        const scrollTop =
        window.scrollY;

        const docHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;

        const progress =
        (scrollTop / docHeight) * 100;

        progressBar.style.width =
        progress + "%";

    }
);

const cards =
document.querySelectorAll(
".achievement-card"
);

cards.forEach(card=>{

    card.addEventListener(
        "mousemove",
        e=>{

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const rotateX =
            (y / rect.height - .5) * -10;

            const rotateY =
            (x / rect.width - .5) * 10;

            card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

        }
    );

    card.addEventListener(
        "mouseleave",
        ()=>{

            card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

        }
    );

});

let clicks = 0;

document
.querySelector(".hero h1")
.addEventListener(
"click",
()=>{

    clicks++;

    if(clicks === 7){

        alert(
        "Achievement Unlocked:\nProfessional Procrastinator"
        );

    }

});

function unlockAchievement(name){

    const popup =
    document.getElementById(
        "achievement-popup"
    );

    document.getElementById(
        "achievement-text"
    ).textContent = name;

    popup.classList.add("show");

    setTimeout(()=>{

        popup.classList.remove("show");

    },3000);

}

const champion =
document.querySelector(
".champion-card"
);

champion.addEventListener(
"click",
()=>{

    unlockAchievement(
        "DFNC Champion"
    );

});
const statuses = [

"Still Loading...",
"Buffering...",
"Error 404: Future Not Found",
"Collecting Side Quests",
"Main Quest Locked",
"Under Construction",
"Trying My Best",
"Ask Again Later",
"Currently Winging It",
"Running On Caffeine"

];

document.getElementById(
"career-status"
).textContent =

statuses[
Math.floor(
Math.random() *
statuses.length
)
];

let secret = "";

document.addEventListener("keydown",(e)=>{

    secret += e.key.toLowerCase();

    if(secret.includes("future")){

        unlockAchievement(
            "Future Investigator"
        );

        alert(
            "Future Status:\nStill Loading..."
        );

        secret = "";

    }

});

document
.getElementById("future-btn")
.addEventListener("click",()=>{

    alert(
        "ERROR 404\nFuture Not Found"
    );

});

document
.querySelector(".quote-meme img")
.addEventListener("click",()=>{

    unlockAchievement(
        "Ancient Wisdom"
    );

});

let completed = false;

window.addEventListener("scroll",()=>{

if(
window.innerHeight + window.scrollY >=
document.body.offsetHeight - 10
&& !completed
){

completed = true;

unlockAchievement(
"Website Completionist"
);

}

});

let click = 0;

document
.getElementById("final-secret")
.addEventListener("click",()=>{

clicks++;

if(clicks===5){

alert(
"Congratulations.\nYou found absolutely nothing."
);

}

});