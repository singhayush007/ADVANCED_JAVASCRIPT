var arr = [
  {
    dp: "https://i.pinimg.com/474x/3d/a4/cc/3da4cce65aafac18407bade9728a76da.jpg",
    story:
      "https://www.viapais.com.ar/resizer/v2/PTU25V222FFPPLMXSPI6QAGNLU.jpg?quality=75&smart=true&auth=8f8d86aa740d87aa8e9c88e5289551c52e624cac745a5076c7f1c26f14aaa082&width=980&height=640", // Gigi Hadid
  },
  {
    dp: "https://www.lorealparis.co.in/-/media/project/loreal/brand-sites/oap/apac/in/articles/new-spoke/new-spoke/jen_v3.jpg?cx=0.53&cy=0.39&cw=650&ch=760&hash=272D35D5F60D9F14569759ACFE4B22DC",
    story:
      "https://assets.vogue.com/photos/64b67ff5406cf236781d5fd4/master/w_1600%2Cc_limit/KJ_1707_02.png", // Kendall Jenner
  },
  {
    dp: "https://dziendobry.tvn.pl/_e/i/najnowsze/cdn-zdjecie-b6my5s-bella-hadid-5636799/alternates/WEBP_SQUARE_1280",
    story:
      "https://hips.hearstapps.com/hmg-prod/images/bblbl-1663695964.jpg?resize=640:*", // Bella Hadid
  },
  {
    dp: "https://media.allure.com/photos/597b62469b40996459472681/16:9/w_2560%2Cc_limit/emrata.jpg",
    story:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-2169620692-66d399d20e495.jpg", // Emily Ratajkowski
  },
  {
    dp: "https://akns-images.eonline.com/eol_images/Entire_Site/2021830/rs_1200x1200-210930081259-1200-ecomm-Hailey_Bieber-gj.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
    story:
      "https://images.prestigeonline.com/wp-content/uploads/sites/6/2025/07/04005107/hailey-bieber-makeup.jpeg", // Hailey Bieber
  },
];

var stories = document.querySelector("#stories");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter =
    clutter +
    `<div class="story">
            <img id="${idx}" src="${elem.dp}" alt="">
           </div>`;
});
stories.innerHTML = clutter;

stories.addEventListener("click", function (eventObj) {
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${
    arr[eventObj.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
});
