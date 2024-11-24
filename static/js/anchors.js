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

function showCopyNotification(target) {
    // Create a small notification element
    const notification = document.createElement("span");
    notification.textContent = "Link copied!";
    notification.className = "copy-notification";

    // Position the notification near the target
    const rect = target.getBoundingClientRect();
    notification.style.position = "absolute";
    notification.style.left = `${rect.left + window.pageXOffset + 25}px`;
    notification.style.top = `${rect.top + window.pageYOffset - 3}px`;

    document.body.appendChild(notification);

    // Remove the notification after 2 seconds
    setTimeout(() => notification.remove(), 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    // Update <details> when the page is loaded with a hash
    updateDetailsFromHash();

    // Listen for hash changes (e.g., when clicking another anchor link)
    window.addEventListener("hashchange", updateDetailsFromHash);

    // Handle click events for copy-link elements
    document.querySelectorAll(".copy-link").forEach((link) => {
        link.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevent toggling <details>
            const anchorId = this.dataset.id;
            const url = `${window.location.origin}${window.location.pathname}#${anchorId}`;
            
            // Copy the URL to the clipboard
            navigator.clipboard.writeText(url).then(() => {
                showCopyNotification(this); 
            }).catch((err) => {
                console.error("Failed to copy text: ", err);
            });
        });
    });
});
