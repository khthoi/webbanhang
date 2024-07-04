document.getElementById('SearchButton').addEventListener('click', function() {
    const query = document.getElementById('SearchInput').value;
    if (query) {
        const googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        window.open(googleSearchUrl, '_blank');
    }
});

function scrollToElementFromHash() {
    const id = window.location.hash.substring(1);
    if (id) {
        const element = document.getElementById(id);
        if (element) {
            const elementYPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementYPosition, behavior: 'smooth'
            });
        }
    }
}

window.onload = scrollToElementFromHash;