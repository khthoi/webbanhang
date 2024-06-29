document.getElementById('SearchButton').addEventListener('click', function() {
    const query = document.getElementById('SearchInput').value;
    if (query) {
        const googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        window.open(googleSearchUrl, '_blank');
    }
});
function goToAboutMyProducts(id) {
    // Tạo URL đích với hash id
    var url = "../Page3/aboutmyproducts.html#" + id;
    // Chuyển hướng đến URL đích
    window.location.href = url;
}