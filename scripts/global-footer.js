document.addEventListener('DOMContentLoaded', function() {
    // 1. Define the path to your footer HTML file
    const footerUrl = 'footer.html';

    // 2. Find the placeholder element where the footer will be inserted
    const footerPlaceholder = document.getElementById('global-footer-placeholder');

    // 3. Check if the placeholder exists before attempting to fetch
    if (!footerPlaceholder) {
        console.error('Footer placeholder element with ID "global-footer-placeholder" not found.');
        return;
    }

    // 4. Fetch the content of the footer file
    fetch(footerUrl)
        .then(response => {
            // Check if the request was successful (status code 200-299)
            if (!response.ok) {
                // Throw an error to be caught in the .catch block
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Read the response body as plain text
            return response.text();
        })
        .then(htmlContent => {
            // 5. Insert the fetched HTML content into the placeholder
            footerPlaceholder.innerHTML = htmlContent;
            
            // Optional: Remove the placeholder wrapper element itself,
            // leaving only the loaded footer content (the <footer class="site-footer">)
            const loadedFooter = footerPlaceholder.querySelector('.site-footer');
            if (loadedFooter) {
                footerPlaceholder.parentNode.replaceChild(loadedFooter, footerPlaceholder);
            }
            
            console.log('Global footer loaded successfully.');
        })
        .catch(error => {
            // 6. Handle any errors during the fetch operation
            console.error('Error loading the global footer:', error);
            footerPlaceholder.innerHTML = '<p>Error loading footer content.</p>';
        });
});
