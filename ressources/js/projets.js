document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.search').forEach(input => {
        input.addEventListener('input', function() {
            const filter = this.value.trim().toLowerCase();
            const competencesContainer = this.closest('.competences');
            if (!competencesContainer) return;

            const listItems = competencesContainer.querySelectorAll('.list li');

            listItems.forEach(item => {
                const nomElement = item.querySelector('.nom');
                if (!nomElement) return;

                const text = nomElement.textContent.trim().toLowerCase();
                item.style.setProperty("display", text.includes(filter) ? "" : "none", "important");
            });
        });
    });
});
