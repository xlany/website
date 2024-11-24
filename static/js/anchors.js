// static/js/anchors.js
/**
 * Designed to trigger upon clicking an anchor link
 *  i.e. http://xlany.com/recommendations.html#sunscreen
 * Collapses all the existing opened sections
 * Opens only the section specified in the anchor link
 */
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

document.addEventListener("DOMContentLoaded", function () {
    // Update <details> when the page is loaded with a hash
    updateDetailsFromHash();

    // Listen for hash changes (e.g., when clicking another anchor link)
    window.addEventListener("hashchange", updateDetailsFromHash);
});
