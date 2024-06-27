document.getElementById('SearchButton').addEventListener('click', function() {
    const query = document.getElementById('SearchInput').value;
    if (query) {
        const googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        window.open(googleSearchUrl, '_blank');
    }
});