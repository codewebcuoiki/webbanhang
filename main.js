
  const itemsPerPage = 5;
  const data = Array.from({ length: 23 }, (_, i) => `Mục ${i + 1}`);
  let currentPage = 1;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  function displayData(page) {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const pageData = data.slice(start, end);

    document.getElementById('content').innerHTML = pageData
      .map(item => `<div>${item}</div>`)
      .join('');
  }

  function renderPageNumbers() {
    const pageNumbers = document.getElementById('pageNumbers');
    pageNumbers.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = i === currentPage ? 'active' : '';
      btn.addEventListener('click', () => {
        currentPage = i;
        displayData(currentPage);
        renderPageNumbers();
      });
      pageNumbers.appendChild(btn);
    }
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayData(currentPage);
      renderPageNumbers();
    }
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayData(currentPage);
      renderPageNumbers();
    }
  });

  // Initial load
  displayData(currentPage);
  renderPageNumbers();

