const renderProducts = (content) => {
  if (!content) return '';
  let html = /*html*/ `<div class="row row-cols-1 row-cols-md-3 g-4">`;
  for (let i = 0; i < content.length; i++) {
    html += /*html */ `
        <div class="col">
            <div class="card h-100">
                <img src="${
                  content[i].image ? content[i].image : '#'
                }" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${content[i].title}</h5>
                    <p class="card-text">${content[i].description}</p>
                    
                </div>
                <div class="card-footer">
                    <small class="text-muted">
                        <p class="card-text">Price: ${content[i].price}$</p>
                    </small>
                </div>
            </div>
        </div>`;
  }
  html += '</div>';
  return html;
};

export default renderProducts;
