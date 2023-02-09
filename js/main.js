let progressBars = document.querySelectorAll(".progress-value");
let percentages = [70, 50, 90];

function updateProgresses() {
    for (let i = 0; i < progressBars.length; i++) {
        progressBars[i].style.width = `${percentages[i]}%`;
        progressBars[i].textContent = `${percentages[i]}%`;
    }
}

updateProgresses();

// Example of how to change the percentages dynamically
document.querySelector("button").addEventListener("click", function() {
    percentages = [75, 60, 90];
    updateProgresses();
});


window.addEventListener("load", function() {
    // Define an array of elements to animate
    let elements = [
        { id: "experience", finalValue: 10},
        { id: "number", finalValue: 143 },
        { id: "customers", finalValue: 114 },
        { id: "Honors", finalValue: 20 },
    ];

    // Set the animation duration in milliseconds
    let animationDuration = 1000;

    // Animate each element
    elements.forEach(function(element) {
        // Get the element with the specified ID
        let el = document.getElementById(element.id);
        // Set the initial value for the number
        let currentValue = 0;
        // Get the start time for the animation
        let start = performance.now();

        // Animate the number
        let animate = function(timestamp) {
            // Calculate the elapsed time
            let elapsed = timestamp - start;
            // Update the current value based on the elapsed time and the duration
            currentValue = easeOutCubic(elapsed, 0, element.finalValue, animationDuration);
            // Update the text of the element
            el.textContent = Math.round(currentValue);
            // If the animation is not complete, request another frame
            if (elapsed < animationDuration) {
                window.requestAnimationFrame(animate);
            }
        };

        // Start the animation
        window.requestAnimationFrame(animate);
    });
});

// Easing function to slow down the animation towards the end
function easeOutCubic(t, b, c, d) {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
}

// JavaScript
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("card");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}

const submitBtn = document.getElementById('submitBtn');

