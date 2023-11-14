document.addEventListener('DOMContentLoaded', () => {
    // const sample = document.getElementsById("hero");

    // sample.addEventListener("click", function(e) {
    //     console.log(e);
    // })

    
})

function dropDownMenu() {
    const nav = document.getElementById("main-nav-list");
    console.log(nav);
    if (nav.className === "nav-list") {
        nav.className += " responsive";
    } else {
        nav.className = "nav-list";
    }
}