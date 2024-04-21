const renderCategories = (content) => {
  let html = /*html*/ `
        <div class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">`;

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
