document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.search').forEach(input => {
      input.addEventListener('input', function() {
          const filter = this.value.toLowerCase();
          const listItems = this.closest('.competences').querySelectorAll('.list li');
          
          listItems.forEach(item => {
              const text = item.textContent.toLowerCase();
              if (text.includes(filter)) {
                  item.style.display = '';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
});
