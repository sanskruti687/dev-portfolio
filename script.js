document.getElementById('read-more-btn').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        this.textContent = 'Read Less';
    } else {
        moreContent.classList.add('hidden');
        this.textContent = 'Read More';
    }
});

document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
});