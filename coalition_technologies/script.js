document.addEventListener('DOMContentLoaded', () => {
    const sample = document.getElementsByClassName("hero");

    sample.addEventListener("click", function(e) {
        console.log(e);
    })
})