document.addEventListener("DOMContentLoaded", function () {
    let prevScrollPos = window.pageYOffset;
    let isHeaderVisible = true;

    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            // Show the header when scrolling up
            document.getElementById("header-section").style.top = "0";
        } else {
            // Hide the header when scrolling down
            document.getElementById("header-section").style.top = "-60px";
        }

        // Toggle visibility of the sticky header
        if (currentScrollPos > 200) {
            if (!isHeaderVisible) {
                document.getElementById("stickyHeader").style.display = "block";
                isHeaderVisible = true;
            }
        } else {
            if (isHeaderVisible) {
                document.getElementById("stickyHeader").style.display = "none";
                isHeaderVisible = false;
            }
        }

        prevScrollPos = currentScrollPos;
    };

    // JavaScript to toggle header background color
    const toggleButton = document.getElementById("toggleButton");

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            document.getElementById("header-section").classList.toggle("header-background-toggle");
        });
    }
});
