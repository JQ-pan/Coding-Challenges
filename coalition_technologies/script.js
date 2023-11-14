document.addEventListener('DOMContentLoaded', () => {
    const hamburgerElement = document.getElementById("hamburger");
    if (hamburgerElement) {
        hamburgerElement.addEventListener("click", dropDownMenu);
    }
    
    const navList = document.getElementById("main-nav-list");
    if (navList) {
        navList.addEventListener("click", function (event) {
            if (event.target.nodeName.toLowerCase() === "li") {
                const eventId = event.target.dataset.eventId;
                updateSchedule(datatable[eventId]);
                updateSelectedNav(navList, event.target);
            }
        });
    }
})

const datatable = {
    1: [
        { date: '25 Nov 2016', event: "Vestibulum viverra" },
        { date: '26 Nov 2016', event: "Vestibulum viverra" },
        { date: '27 Nov 2016', event: "Vestibulum viverra" },
        { date: '28 Nov 2016', event: "Vestibulum viverra" },
    ],
    2: [
        { date: '31 Oct 2023', event: "Happy Halloween" },
        { date: '31 Oct 2023', event: "Happy Halloween" },
        { date: '31 Oct 2023', event: "Happy Halloween" },
        { date: '31 Oct 2023', event: "Happy Halloween" },
    ],
    3: [
        { date: '25 Dec 2023', event: "Merry Christmas" },
        { date: '25 Dec 2023', event: "Merry Christmas" },
        { date: '25 Dec 2023', event: "Merry Christmas" },
        { date: '25 Dec 2023', event: "Merry Christmas" },
    ]
}

function dropDownMenu() {
    const nav = document.getElementById("main-nav-list");
    console.log(nav);
    if (nav.className === "nav-list") {
        nav.className += " responsive";
    } else {
        nav.className = "nav-list";
    }
}

function updateSchedule(events) {
    const scheduleList = document.querySelector(' .schedule ul');
    scheduleList.innerHTML = '';
    events.forEach((item, index) => {
        const li = document.createElement('li');
        const dateDiv = document.createElement('div');
        const eventDiv = document.createElement('div');

        dateDiv.textContent = item.date;
        eventDiv.textContent = item.event;

        li.appendChild(dateDiv);
        li.appendChild(eventDiv);

        scheduleList.appendChild(li);

        if ((index + 1) % 3 === 0) {
            const breakLi = document.createElement('li');
            breakLi.innerHTML = '&nbsp;';
            scheduleList.appendChild(breakLi);
        }
    })
}

function updateSelectedNav(navList, selectedElement) {
    const navItems = navList.querySelectorAll('li');
    navItems.forEach(item => item.classList.remove('selected'));
    selectedElement.classList.add('selected');
}