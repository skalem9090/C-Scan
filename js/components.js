document.querySelectorAll('.ManageMenuItem').forEach(item => {
    item.addEventListener('click', event => {
        const contentId = event.currentTarget.getAttribute('data-content-id');
        showContent(contentId);
    });
});