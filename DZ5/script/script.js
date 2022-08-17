const header = document.querySelector('header');
window.addEventListener("scroll", function (e) {
    const scrollFromTop = document.querySelector("html").scrollTop;
    header.style.background = scrollFromTop > 0 ? "#549da4" : "black";
    header.style.transition = "all 2s";
});

const button = document.querySelector('.button');


async function fetchDataFromBack() {
    try {
        console.log('Fetch ssstart');
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();

        console.log('data', data);
    } catch(e) {
        console.log(e);
    }
    
}
fetchDataFromBack();


