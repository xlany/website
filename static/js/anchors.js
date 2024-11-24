// static/js/anchors.js
document.addEventListener("DOMContentLoaded", function () {
    function updateDetailsFromHash() {
        // Collapse all <details> elements
        document.querySelectorAll("details").forEach((details) => {
            details.open = false;
        });

        // Expand the targeted <details> element if the hash matches
        const hash = window.location.hash;
        if (hash) {
            const targetDetails = document.querySelector(hash);
            if (targetDetails && targetDetails.tagName === "DETAILS") {
                targetDetails.open = true; // Expand the targeted <details>
                targetDetails.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }

    // Update <details> when the page is loaded with a hash
    updateDetailsFromHash();

    // Listen for hash changes (e.g., when clicking another anchor link)
    window.addEventListener("hashchange", updateDetailsFromHash);
});
