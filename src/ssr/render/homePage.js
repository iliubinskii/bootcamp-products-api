import renderCategories from './renderCategories.js';
import renderProducts from './renderProducts.js';

export function renderHomePage(data) {
  return /*html*/ `
        <!DOCTYPE html>
        <html>
          <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <title>SSR</title>
          </head>
          <body>
            <header>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid justify-content-start">
                        <a href='/' class="navbar-brand">Home</a>
                        <a href='#' class="navbar-brand" >Cart</a>
                        ${renderCategories(data.categories)}
                    </div>
                </nav>
            </header>
            <div id="contents" class="container mt-5">${renderProducts(
              data.products
            )}</div>
          </body>
        </html>
      `;
}
