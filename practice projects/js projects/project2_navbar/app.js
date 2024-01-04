const navToggle = document.querySelector(".nav-toggle");
const texts = document.querySelector(".links");

navToggle.addEventListener("click", function()
{
    if(texts.classList.contains("show-links"))
    {
        texts.classList.remove("show-links")
    }

    else 
    {
        texts.classList.add("show-links");
    }
});