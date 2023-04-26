  const ratingEls = document.querySelectorAll("rating");


  ratingEls.forEach(ratingEl => {
    ratingEl.addEventListener("click", (event) => {
     removeActive();
      event.target.classList.add("active");
     event.target.parentNode.classList.add("active");
    });
  });
  function removeActive(){
    ratingEls.forEach(ratingEls => {
        ratingEls.classList.remove("active");
  })
}