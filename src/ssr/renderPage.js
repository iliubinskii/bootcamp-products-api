export function renderPage(contents) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <ul>
          <li href="/">Home</li>r
          <li href="/cart">Home</li>
          <li>Add product</li>
        </ul>
        <div id="contents">${contents}</div>
        <form>
          <input type="text" name="name" placeholder="Name">
          <input type="text" name="price" placeholder="Price">
          <input type="file">
          <input type="submit" value="Add product">
        </form>
      </body>
    </html>
  `;
}
