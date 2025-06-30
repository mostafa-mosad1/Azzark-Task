const btnMenu = document.querySelector("#btn-menu");
const showMenu = document.querySelector("#show-menu");
const closeMenu = document.querySelector("#close-menu");
const navLinks = document.querySelector(".all-section-title");
const productsCard = document.querySelector(".products-card");

//  Header

const allSection = [
  {
    title: "الرئــيسية",
    arrow: false,
    activ:true
  },
  {
    title: "المدونة",
    arrow: false,
    activ:false,
  },

  {
    title: "تخفيضات",
    arrow: true,
    activ:false
  },
  {
    title: "العقود",
    arrow: true,
    activ:false
  },
  {
    title: "الخواتم",
    arrow: true,
    activ:false
  },
  {
    title: "الأساور",
    arrow: true,
    activ:false
  },
  {
    title: "السلاسل",
    arrow: true,
    activ:false
  },
  {
    title: "الحلقان",
    arrow: true,
    activ:false
  },
  {
    title: "خواتم الخطوبة",
    arrow: true,
    activ:false
  },
  {
    title: "اكسسوارات الشعر",
    arrow: true,
    activ:false
  },
  {
    title: "الساعات",
    arrow: true,
    activ:false
  },
];

let containerAllSection = "";

allSection.forEach((sec, index) => {
  containerAllSection += `
          <li>
            <a
              class="w-[200px] h-[22px] font-harmattan font-semibold text-[18px] leading-[22px] tracking-normal text-right"
              href="#"
            >
              <div class="flex justify-between px-6 py-3 items-baseline">
                ${sec.title}
                ${sec.arrow?`<img src="./images/icons/down-arrow 1.svg" class="size-4" alt="" />`:""}
              </div>
            </a>
          </li>
          <li>
            <hr />
          </li>
          `;
});


navLinks.innerHTML = containerAllSection;

btnMenu.addEventListener(`click`, function (e) {
  e.preventDefault();
  showMenu.classList.remove("left-[100%]");
  document.body.style.overflow = "hidden";
});
closeMenu.addEventListener(`click`, function (e) {
  e.preventDefault();
  showMenu.classList.add("left-[100%]");
  document.body.style.overflow = "";
});

// sec-3

const latestProductsData = [
  {
    img1:"./images/latest-products/new-product1.jpg",
    img2:"./images/latest-products/new-product3.jpg",
    title:"أكسسوارات شعر",
    des:"اكسسوار باللون الدهبي",
    price:"200 ر.س",
    oldPrice:"300 ر.س"
  },
  {
    img1:"./images/latest-products/new-product2.jpg",
    img2:"./images/latest-products/new-product4.jpg",
    title:" العقود",
    des:"عقد أنيق",
    price:"500 ر.س",
    oldPrice:"650 ر.س"
  },
  {
    img1:"./images/latest-products/new-product3.jpg",
    img2:"./images/latest-products/new-product1.jpg",
    title:"أساور إنسيال",
    des:"أسورة جنزير",
    price:"700 ر.س",
    oldPrice:"800 ر.س"
  },
  {
    img1:"./images/latest-products/new-product4.jpg",
    img2:"./images/latest-products/new-product2.jpg",
    title:"الخواتم",
    des:"خاتم خطبة أنيق",
    price:"300 ر.س",
    oldPrice:"450 ر.س"
  },
]


let latestProductsContainer =``;

latestProductsData.forEach((product,index)=>{
  latestProductsContainer += `
    <div
          class="w-[196px] md:w-[302px] group bg-mainColor bg-opacity-10 rounded-[16px] shadow-md p-2 flex flex-col space-y-2 text-right font-harmattan"
        >
          <div class="relative overflow-hidden">
            <img
              src="${product.img1}"
              alt="الخواتم  "
              class="rounded-[12px] sub-slider absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src="${product.img2}"
              alt="الخواتم  "
              class="rounded-[12px] sub-slider transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            <img
              class="absolute bg-[#F3F3F3] p-2 rounded-full top-4 left-4"
              src="./images/heart.svg"
              alt="heart"
            />

            <div
              class="absolute flex justify-center items-end gap-4 p-2 -bottom-20 group-hover:bottom-4 transition-all duration-500 inset-x-0 mx-auto"
            >
              <img
                class="bg-[#F3F3F3] p-2 rounded-full"
                src="./images/heart.svg"
                alt="heart"
              />
              <img
                class="bg-[#F3F3F3] p-2 rounded-full"
                src="./images/heart.svg"
                alt="heart"
              />
            </div>
          </div>

          <div class="flex justify-between items-center">
            <p
              class="w-[250px] h-[30px] md:w-[200px] md:h-[36px] text-mainColor font-harmattan text-[12px] md:text-[20px] font-normal leading-[19px] md:leading-[25px] opacity-85"
            >
              ${product.title}
            </p>

            <div class="flex w-fit text-yellow-400 text-[16px] space-x-1">
              <span>★</span><span>★</span><span>★</span><span>★</span
              ><span>★</span>
            </div>
          </div>

          <p
            class="text-[#252525] text-[16px] md:text-[22px] leading-[18px] md:leading-[25px] font-medium font-harmattan"
          >
        ${product.des}
          </p>

          <div class="flex items-center gap-2 w-[112px] md:w-[160px] h-[30px]">
            <span
              class="text-[#B70404] w-[58px] font-harmattan text-[16px] md:text-[18px]"
              >${product.price}</span
            >
            <span
              class="text-[#25252580] opacity-50 w-[49px] line-through text-[14px]"
              >${product.oldPrice}</span
            >
          </div>
        </div>
  `;
});

productsCard.innerHTML = latestProductsContainer;

// sec-5

document.addEventListener("DOMContentLoaded", () => {
  const mainSubSlider = document.querySelector(".main-sub-slider");

  const SliderData = [
    {
      main: "./images/sec2-slider/product-1.jpg",
      sub: "./images/sec2-slider/sub-slider1.jpg",
      name: "السلاسل",
      des: "سلسة حمامة ",
      price: "500 ر.س",
      oldPrice: "650 ر.س",
    },
    {
      main: "./images/sec2-slider/product-2.jpg",
      sub: "./images/sec2-slider/sub-slider2.jpg",
      name: "السلاسل",
      des: "سلسة قلب حجر  ",
      price: "500 ر.س",
      oldPrice: "540 ر.س",
    },
    {
      main: "./images/sec2-slider/product-3.jpg",
      sub: "./images/sec2-slider/sub-slider3.svg",
      name: "الحلقان",
      des: "حلق ذهبي دائري",
      price: "500 ر.س",
      oldPrice: "600 ر.س",
    },
  ];

  let SliderIndexData = 0;

  mainSubSlider.style.transition = "opacity 0.4s ease";

  function changeSliderData(index) {
    mainSubSlider.style.opacity = 0;

    setTimeout(() => {
      mainSubSlider.innerHTML = `
        <div class="flex relative z-[999] py-[50px] flex-col items-center md:flex-row gap-6">
          <div class="flex flex-col items-center">
            <h2 class="pt-[32px] w-[157px] h-[48px] md:w-[235px] md:h-[48px] font-harmattan font-normal text-[32px] md:text-[48px] leading-[48px] tracking-normal">
              عروض لا تفوتك!
            </h2>
            <p class="py-[41px] w-[311px] h-[48px] md:w-[273px] md:h-[48px] font-harmattan font-normal text-[20px] md:text-[24px] leading-[48px] text-[#252525BF]">
              لكل مناسبة، لدينا المجوهرات التي تجعلها لا تُنسى
            </p>

            <div class="flex justify-center md:w-[475px] md:h-[520px] items-center gap-3 md:gap-10">
              <div id="arrow-right" class="size-6 md:size-10 cursor-pointer">
                <img class="w-full" src="./images/next-slider.svg" alt="next-slider" />
              </div>
              <div class="w-[254px] h-[420px] md:w-[302px] md:h-[520px] bg-white mt-7 rounded-[16px] shadow-md p-2 flex flex-col space-y-2 text-right font-harmattan">
                <img src="${SliderData[index].sub}" alt="صورة فرعية" class="w-full rounded-[12px] sub-slider" />
                <div class="flex justify-between items-center">
                  <p class="w-[45px] h-[30px] md:w-[52px] md:h-[36px] text-mainColor font-baloo text-[16px] md:text-[20px] font-normal leading-[29px] md:leading-[35px] opacity-85">
                    ${SliderData[index].name}
                  </p>
                  <div class="flex w-fit text-yellow-400 text-[16px] space-x-1">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
                <p class="w-[129px] h-[30px] md:w-[138px] md:h-[36px] text-[#252525] text-[20px] md:text-[22px] leading-[29px] md:leading-[35px] font-semibold font-baloo">
                  ${SliderData[index].des}
                </p>
                <div class="flex items-center gap-2 w-[112px] md:w-[160px] h-[30px]">
                  <span class="text-[#B70404] w-[58px] font-bold text-[16px] md:text-[18px]">${SliderData[index].price}</span>
                  <span class="text-[#25252580] opacity-50 w-[49px] line-through text-[14px]">${SliderData[index].oldPrice}</span>
                </div>
              </div>
              <div id="arrow-left" class="size-6 md:size-10 cursor-pointer">
                <img class="w-full rotate-180" src="./images/next-slider.svg" alt="previous-slider" />
              </div>
            </div>
          </div>

          <div class="w-[353px] mt-[50px] h-[309px] md:w-[690px] lg:h-[604px] md:rounded-[32px] rounded-[16px] relative overflow-hidden bg-white shadow-md">
            <img class="size-full min-slider" src="${SliderData[index].main}" alt="صورة رئيسية" />
            <div class="flex gap-1 w-[227px] h-[65px] mx-auto absolute bottom-5 left-1/2 -translate-x-1/2">
              <div class="flex flex-col items-center">
                <p class="w-[41.44px] h-[42.97px] text-white text-[20px] font-baloo bg-[#FFFFFF26] backdrop-blur-[5.11px] rounded-sm flex items-center justify-center">04</p>
                <span class="text-white">ثانية</span>
              </div>
              <p class="text-2xl font-bold text-white">:</p>
              <div class="flex flex-col items-center">
                <p class="w-[41.44px] h-[42.97px] text-white text-[20px] font-baloo bg-[#FFFFFF26] backdrop-blur-[5.11px] rounded-sm flex items-center justify-center">30</p>
                <span class="text-white">دقيقة</span>
              </div>
              <p class="text-2xl font-bold text-white">:</p>
              <div class="flex flex-col items-center">
                <p class="w-[41.44px] h-[42.97px] text-white text-[20px] font-baloo bg-[#FFFFFF26] backdrop-blur-[5.11px] rounded-sm flex items-center justify-center">06</p>
                <span class="text-white">ساعة</span>
              </div>
              <p class="text-2xl font-bold text-white">:</p>
              <div class="flex flex-col items-center">
                <p class="w-[41.44px] h-[42.97px] text-white text-[20px] font-baloo bg-[#FFFFFF26] backdrop-blur-[5.11px] rounded-sm flex items-center justify-center">08</p>
                <span class="text-white">يوم</span>
              </div>
            </div>
          </div>
        </div>
      `;

      mainSubSlider.style.opacity = 1;

      // إعادة ربط الأسهم
      document.querySelector("#arrow-right").addEventListener("click", (e) => {
        e.preventDefault();
        SliderIndexData =
          SliderIndexData < SliderData.length - 1 ? SliderIndexData + 1 : 0;
        changeSliderData(SliderIndexData);
      });

      document.querySelector("#arrow-left").addEventListener("click", (e) => {
        e.preventDefault();
        SliderIndexData =
          SliderIndexData === 0 ? SliderData.length - 1 : SliderIndexData - 1;
        changeSliderData(SliderIndexData);
      });
    }, 400); // مدة الإخفاء قبل تغيير المحتوى
  }

  changeSliderData(SliderIndexData);
});


// document.querySelectorAll(".des h3").forEach((heading) => {
//   heading.addEventListener("click", function () {
//     const allParagraphs = document.querySelectorAll(".des p");
//     const nextParagraph = this.nextElementSibling;

    

//     allParagraphs.forEach((p) => {
//       if (p !== nextParagraph) {
//         p.style.display = "none";
//               p.style.opacity = "0";

//       }
//     });

//     if (nextParagraph.style.display === "block") {
//       nextParagraph.style.display = "none";
//     } else {
//       nextParagraph.style.display = "block";
//       nextParagraph.style.opacity = "1";
//     }
//   });
// });


let activeIndex = -1;
    function toggleAccordion(element, index) {
      const paragraph = element.nextElementSibling;
      const icon = element.querySelector('img');
      const allParagraphs = document.querySelectorAll('.des p');
      const allIcons = document.querySelectorAll('.des img');

      // Close all other accordions
      allParagraphs.forEach((p, i) => {
        if (i !== index) {
          p.classList.remove('max-h-32', 'opacity-100', 'py-4');
          p.classList.add('max-h-0', 'opacity-0');
          allIcons[i].style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current accordion
      if (activeIndex === index) {
        // Close current
        paragraph.classList.remove('max-h-32', 'opacity-100', 'py-4');
        paragraph.classList.add('max-h-0', 'opacity-0');
        icon.style.transform = 'rotate(0deg)';
        activeIndex = -1;
      } else {
        // Open current
        paragraph.classList.remove('max-h-0', 'opacity-0');
        paragraph.classList.add('max-h-32', 'opacity-100', 'py-4');
        icon.style.transform = 'rotate(45deg)';
        activeIndex = index;
      }
    }
    // Initialize first item as open
    document.addEventListener('DOMContentLoaded', function () {

      const firstParagraph = document.querySelector('.des p');
      const firstIcon = document.querySelector('.des img');
      firstParagraph.classList.remove('max-h-0', 'opacity-0');
      firstParagraph.classList.add('max-h-32', 'opacity-100', 'py-4');
      firstIcon.style.transform = 'rotate(45deg)';
      activeIndex = 0;
    });