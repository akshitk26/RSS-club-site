// click the scroll down button on the home page
 /*
const scrollButton = document.querySelector(".scrollButton"); // Select by class
const homePageContent = document.getElementById("homePageContent");

scrollButton.addEventListener("click", (event) => {
    event.preventDefault();

    // Calculate the target position based on the "homePageContent" element
    const targetPosition = homePageContent.getBoundingClientRect().top + window.scrollY;

    const distanceToScroll = targetPos - window.scrollY;
    const animationDuration = 500;
    const numberOfFrames = 60;
    const distancePerFrame = distanceToScroll/numberOfFrames;

    let currentFrame = 0;
    const smoothSCrollInterval = setInterval (() => {
        if(currentFrame < numberOfFrames) {
            window.scrollBy(0, distancePerFrame);
            currentFrame++
        } else {
            clearInterval(smoothScrollInterval);
        }
    }, animationDuration / numberOfFrames);
});

*/