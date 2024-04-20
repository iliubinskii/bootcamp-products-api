const renderCategories = (content) => {
  let html = /*html*/ `
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">`;

  if (content) {
    for (let i = 0; i < content.length; i++) {
      html += /*html */ `    
      <li><a class="dropdown-item" href="/categories/${content[i].id}">${content[i].name}</a></li>`;
    }
  }

  html += '</ul></div>';

  return html;
};

export default renderCategories;
