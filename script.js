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

/// Main Game Part Starts Here

let win = (loose = draw = 0);

let MatchResult = (userch, comch) => {
  if (store_Val[comch] === userch) {
    document.querySelector("#msg").innerHTML = "Game Draw ! ";
    draw++;
    DrawMatch();
  } else {
    if (userch === "sscr") {
      if (store_Val[comch] === "rock") {
        document.querySelector("#msg").innerHTML = "Computer win";
        loose++;
        Losemsg();
      } else {
        document.querySelector("#msg").innerHTML = "You Win";
        win++;
        Winmsg();
      }
    } else if (userch === "paper") {
      if (store_Val[comch] === "sscr") {
        document.querySelector("#msg").innerHTML = "Computer win";
        loose++;
        Losemsg();
      } else {
        document.querySelector("#msg").innerHTML = "You Win";
        win++;
        Winmsg();
      }
    } else if (userch === "rock") {
      if (store_Val[comch] === "paper") {
        document.querySelector("#msg").innerHTML = "Computer win";
        loose++;
        Losemsg();
      } else {
        document.querySelector("#msg").innerHTML = "You Win";
        win++;
        Winmsg();
      }
    }
  }
};

let click_User = document.querySelectorAll(".box");
click_User.forEach((sec) => {
  sec.addEventListener("click", () => {
    let userch = sec.getAttribute("id");
    let comch = Computerch();
    MatchResult(userch, comch);
    Display();
  });
});

//storing the Value in the
let store_Val = ["sscr", "paper", "rock"];
// Function For GenRandom Index
let Computerch = () => {
  return Math.floor(Math.random() * 3);
};
// For Messege Display Style Win
let Winmsg = () => {
  document.getElementById("msg").style.backgroundColor = "green";
  document.getElementById("msg").style.color = "white";
};
// For Messege Display Style Loose
let Losemsg = () => {
  document.getElementById("msg").style.backgroundColor = "red";
  document.getElementById("msg").style.color = "white";
};
// For Messege Display Style Draw
let DrawMatch = () => {
  document.getElementById("msg").style.backgroundColor = "#333";
  document.getElementById("msg").style.color = "white";
};

/// Display Score Value
let win_d = document.querySelector("#user_score");
let loose_d = document.querySelector("#Computer_score");
let draw_d = document.querySelector("#drw");
let Display = () => {
  win_d.innerHTML = win;
  loose_d.innerHTML = loose;
  draw_d.innerHTML = draw;
};
