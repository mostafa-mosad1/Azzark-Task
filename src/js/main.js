const btnMenu = document.querySelector("#btn-menu");
const showMenu = document.querySelector("#show-menu");
const closeMenu = document.querySelector("#close-menu");

btnMenu.addEventListener(`click`, function (e) {
  e.preventDefault();
  showMenu.classList.remove("translate-x-full");
});
closeMenu.addEventListener(`click`, function (e) {
  e.preventDefault();
  showMenu.classList.add("translate-x-full");
});
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx




window.addEventListener("DOMContentLoaded", () => {
  const items = [
    { title: "العقود", image: "./images/product-1.jpg" },
    { title: "الساعات", image: "./images/product-2.jpg" },
    { title: "الأطقم", image: "./images/product-3.jpg" },
    { title: "الحلقان", image: "./images/product-1.jpg" },
    { title: "الأساور", image: "./images/product-2.jpg" },
  ];

  let currentIndex = 2;
  const slider = document.getElementById("slider");

  if (!slider) {
    console.error("❌ عنصر #slider غير موجود");
    return;
  }

  function renderCards() {
    slider.innerHTML = "";

    for (let offset = -2; offset <= 2; offset++) {
      const index = (currentIndex + offset + items.length) % items.length;
      const item = items[index];

      const card = document.createElement("div");
      card.className =
          `card ${"card-"+index} animate-in rounded-xl flex-shrink-0 overflow-hidden bg-white/10 backdrop-blur-md text-center text-white shadow-lg`;

      // responsive
      const isMobile = window.innerWidth <= 640;
      card.style.width = offset === 0 ? (isMobile ? "220px" : "300px") : (isMobile ? "180px" : "270px");
      card.style.height = offset === 0 ? (isMobile ? "340px" : "510px") : (isMobile ? "300px" : "500px");

      card.style.transition =
        "transform 0.9s cubic-bezier(0.8, 0, 0.6, 1), width 0.9s, height 0.9s";

      if (offset === 0) card.classList.add("active");
      else if (offset < 0) card.classList.add("tilt-left");
      else card.classList.add("tilt-right");

      card.innerHTML = `
        <div class="relative w-full h-full flex flex-col justify-end">
          <img src="${item.image}" alt="${item.title}" class="absolute inset-0 w-full h-full object-cover rounded-xl z-0" />
          <div class="relative z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-3 rounded-b-xl flex flex-col items-center">
            <div class="text-lg font-bold mb-2">${item.title}</div>
            <a href="#" class="text-white underline text-base">تسوق الآن</a>
          </div>
        </div>
      `;

      slider.appendChild(card);
    }
  }

  function next() {
    currentIndex = (currentIndex + 1) % items.length;
    renderCards();
  }

  function prev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    renderCards();
  }

  window.next = next;
  window.prev = prev;

  renderCards();
});




// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

document.addEventListener("DOMContentLoaded", () => {
  const mainSubSlider = document.querySelector(".main-sub-slider");

  const SliderData = [
    {
      main: "./images/product-1.jpg",
      sub: "./images/sub-slider1.jpg",
      name: "السلاسل",
      des: "سلسة حمامة ",
      price: "500 ر.س",
      oldPrice: "650 ر.س",
    },
    {
      main: "./images/product-2.jpg",
      sub: "./images/sub-slider2.jpg",
      name: "السلاسل",
      des: "سلسة قلب حجر  ",
      price: "500 ر.س",
      oldPrice: "540 ر.س",
    },
    {
      main: "./images/product-3.jpg",
      sub: "./images/sub-slider3.svg",
      name: "الحلقان",
      des: "حلق ذهبي دائري",
      price: "500 ر.س",
      oldPrice: "600 ر.س",
    },
  ];

  let SliderIndexData = 0;

  function changeSliderData(index) {
    mainSubSlider.innerHTML = `<div class="flex  py-[50px] flex-col items-center md:flex-row gap-6">
          <div class="flex flex-col items-center">
            <h2
              class="pt-[32px] w-[157px] h-[48px] md:w-[235px] md:h-[48px] font-harmattan font-normal text-[32px] md:text-[48px] leading-[48px] tracking-normal"
            >
              عروض لا تفوتك!
            </h2>
            <p
              class="py-[41px] w-[311px] h-[48px] md:w-[273px] md:h-[48px] font-harmattan font-normal text-[20px] md:text-[24px] leading-[48px] text-[#252525BF]"
            >
              لكل مناسبة، لدينا المجوهرات التي تجعلها لا تُنسى
            </p>

            <div class="flex justify-center md:w-[475px] md:h-[520px] items-center gap-3 md:gap-10">
              <div id="arrow-right" class="size-6 md:size-10 cursor-pointer">
                <img
                  class="w-full  "
                  src="./images/next-slider.svg"
                  alt="next-slider"
                />
              </div>
              <div
                class="w-[254px] h-[420px] md:w-[302px] md:h-[520px] bg-white mt-7 rounded-[16px] shadow-md p-2 flex flex-col space-y-2 text-right font-harmattan"
              >
                <img
                  src='   ${SliderData[index].sub}  '
                  alt="حلق  "
                  class="w-full rounded-[12px] sub-slider"
                />

                <div class="flex justify-between items-center">
                  <p
                    class="w-[45px] h-[30px] md:w-[52px] md:h-[36px] text-mainColor font-baloo text-[16px] md:text-[20px] font-normal leading-[29px] md:leading-[35px] opacity-85"
                  >
                    ${SliderData[index].name}
                  </p>

                  <div class="flex w-fit text-yellow-400 text-[16px] space-x-1">
                    <span>★</span><span>★</span><span>★</span><span>★</span
                    ><span>★</span>
                  </div>
                </div>

                <p
                  class="w-[129px] h-[30px] md:w-[138px] md:h-[36px] text-[#252525] text-[20px] md:text-[22px] leading-[29px] md:leading-[35px] font-semibold font-baloo"
                >
                ${SliderData[index].des}
                </p>

                <div class="flex items-center gap-2 w-[112px] md:w-[160px] h-[30px]">
                  <span class="text-[#B70404] w-[58px] font-bold text-[16px] md:text-[18px]"
                    >${SliderData[index].price}</span
                  >
                  <span
                    class="text-[#25252580] opacity-50 w-[49px] line-through text-[14px] "
                    >${SliderData[index].oldPrice}</span
                  >
                </div>
              </div>
              <div id="arrow-left" class="size-6 md:size-10  cursor-pointer">
                <img
                  class="w-full  "
                  src="./images/next-slider.svg"
                  alt="next-slider"
                />
              </div>
            </div>
          </div>

          


          <div
            class="w-[353px] mt-[50px] h-[309px] md:w-[690px] lg:h-[604px] md:rounded-[32px]  rounded-[16px] relative overflow-hidden bg-white shadow-md"
          >
            <img class="size-full  min-slider"  src='   ${SliderData[index].main}  ' alt="products" />

            <div
              class="flex gap-1 w-[227px] h-[65px] mx-auto absolute bottom-5 left-1/2 -translate-x-1/2"
            >
              <div class="flex flex-col items-center">
                <p
                  class="w-[41.44px] h-[42.97px] text-white text-[20px] font-baloo font-normal leading-5 bg-[#FFFFFF26] backdrop-blur-[5.115942478179932px] rounded-sm flex items-center justify-center"
                >
                  04
                </p>
                <span class="text-white">ثانية</span>
              </div>
              <p class="text-2xl font-bold text-white">:</p>
              <div class="flex flex-col items-center">
                <p
                  class="w-[41.44px] h-[42.97px] text-white text-[20px] font-baloo font-normal leading-5 bg-[#FFFFFF26] backdrop-blur-[5.115942478179932px] rounded-sm flex items-center justify-center"
                >
                  30
                </p>
                <span class="text-white">دقيقة</span>
              </div>
              <p class="text-2xl font-bold text-white">:</p>
              <div class="flex flex-col items-center">
                <p
                  class="w-[41.44px] h-[42.97px] text-white text-[20px] font-baloo font-normal leading-5 bg-[#FFFFFF26] backdrop-blur-[5.115942478179932px] rounded-sm flex items-center justify-center"
                >
                  06
                </p>
                <span class="text-white">ساعة</span>
              </div>
              <p class="text-2xl font-bold text-white">:</p>
              <div class="flex flex-col items-center">
                <p
                  class="w-[41.44px] h-[42.97px] text-white text-[20px] font-baloo font-normal leading-5 bg-[#FFFFFF26] backdrop-blur-[5.115942478179932px] rounded-sm flex items-center justify-center"
                >
                  08
                </p>
                <span class="text-white">يوم</span>
              </div>
            </div>
          </div>
        </div>`;

    const arrowRight = document.querySelector("#arrow-right");
    const arrowLeft = document.querySelector("#arrow-left");

    

    

        arrowRight.addEventListener("click", (e) => {
      e.preventDefault();
      SliderIndexData =
        SliderIndexData < SliderData.length - 1 ? SliderIndexData + 1 : 0;
                console.log('sl',SliderIndexData);

      changeSliderData(SliderIndexData);
    });

    arrowLeft.addEventListener("click", (e) => {
      e.preventDefault();
      SliderIndexData =
        SliderIndexData === 0 ? SliderData.length - 1 : SliderIndexData - 1;
        console.log('sl',SliderIndexData);
        
      changeSliderData(SliderIndexData);
    });
  }
  changeSliderData(SliderIndexData);
});


document.querySelectorAll(".des h3").forEach((heading) => {
  heading.addEventListener("click", function () {
    const allParagraphs = document.querySelectorAll(".des p");
    const nextParagraph = this.nextElementSibling;

    allParagraphs.forEach((p) => {
      if (p !== nextParagraph) {
        p.style.display = "none";
      }
    });

    if (nextParagraph.style.display === "block") {
      nextParagraph.style.display = "none";
    } else {
      nextParagraph.style.display = "block";
    }
  });
});
