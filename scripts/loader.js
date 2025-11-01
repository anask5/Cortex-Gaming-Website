window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');

    // Add the hidden class to fade out the loader
    loaderWrapper.classList.add('loader-hidden');

    // After the transition ends, set display to none so it doesn't take up space
    loaderWrapper.addEventListener('transitionend', function() {
        // We use .remove() to completely remove it from the page
        loaderWrapper.remove();
    });
});

// this is for the loading animation