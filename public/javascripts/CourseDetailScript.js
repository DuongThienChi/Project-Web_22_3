// click on module will show lessons
function toggleContent(module) {
    const content = document.getElementById(module);
    const OpenFlag = content.classList.contains("hidden");
    if (OpenFlag) {
        content.classList.remove("hidden", "slide-up");
        content.classList.add("slide-down");
    } else {
        content.classList.remove("slide-down");
        content.classList.add("slide-up");
        setTimeout(() => content.classList.add("hidden"), 300);
    }
}

function showAllCourses() {
    const toggleButton = document.getElementById("ShowAllBtn");
    const courseContainer = document.getElementById("CourseContainer");
    const Flag = courseContainer.classList.contains("custom-max-h");
    if (Flag) {
        courseContainer.classList.remove("custom-max-h");
        courseContainer.classList.remove("overflow-hidden");
        toggleButton.innerText = "Show Less";
    } else {
        courseContainer.classList.add("custom-max-h");
        courseContainer.classList.add("overflow-hidden");
        toggleButton.innerText = "Show All";
    }
}

// Check if the section is overflowing
function isSectionOverflowing(section) {
    if (!section) {
        return false;
    }
    return section.scrollHeight > section.clientHeight;
}

// Check if the course container is overflowing
const courseContainer = document.getElementById("CourseContainer");
const isOverflowing = isSectionOverflowing(courseContainer);
if (!isOverflowing) {
    const toggleButton = document.getElementById("ShowAllBtn");
    if (toggleButton) toggleButton.style.display = "none";
}
