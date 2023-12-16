let light = document.querySelector("#go_light");
let dark = document.querySelector("#go_dark");
let main = document.documentElement;

dark.addEventListener("click", () => {
  main.classList.add("dark");
  dark.classList.add("hidden");
  light.classList.remove("hidden");
});

light.addEventListener("click", () => {
  main.classList.remove("dark");
  dark.classList.remove("hidden");
  light.classList.add("hidden");
});
