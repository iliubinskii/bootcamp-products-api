const formEl = document.querySelector("form");

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const response = await fetch("/create-product", {
    method: "POST",
    body: formData,
  });
  const { id } = await response.json();
  console.log(data);
});
