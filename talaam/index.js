


  function toggleSidebar() {
    document.querySelector(".sidebar-container").classList.toggle("active");
  }


  function closeSidebar() {
    document.querySelector(".sidebar-container").classList.remove("active");
  }

  // Close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    const sidebar = document.querySelector(".sidebar-container");
    const menuBtn = document.querySelector(".menu-btn");

    if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
      closeSidebar();
    }
  });

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const subTopic = document.getElementById("subTopic");
const subSubject = document.getElementById("subSubject");

function handleClick() {
  if (subSubject.style.display === "block") {
    subSubject.style.display = "none";
  } else {
    subSubject.style.display = "block";
  }
}
subTopic.addEventListener("click", handleClick);

const mainVideo = document.getElementById("mainVideo");
const smallVideo = document.getElementsByClassName("small-vid");
const bigVideo = document.getElementById("bigVideo");
const titleOne = document.getElementById("titleOne");
const titleTwo = document.getElementById("titleTwo");

smallVideo[0].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[0].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "بصمات الأصابع في القرآن الكريم";
  titleTwo.innerHTML = "Finger Prints in the Holy Quran";
};
smallVideo[1].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[1].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "أصل الحديد";
  titleTwo.innerHTML = "Origin of Iron";
};
smallVideo[2].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[2].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "تقليل سطح الأرض من الحدود الخارجية";
  titleTwo.innerHTML =
    "The reduction of the earth surface from the outline borders";
};
smallVideo[3].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[3].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "فوائد أكل التمر في القرآن الكريم";
  titleTwo.innerHTML = "Benefits of eating dates in the holy Quran";
};
smallVideo[4].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[4].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "ماذا يفعل التفكير، الدماغ أو القلب؟";
  titleTwo.innerHTML = "What does the thinking, brain or heart?";
};
smallVideo[5].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[5].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "طفاية حريق صوتية";
  titleTwo.innerHTML = "Sound Fire Extinguisher";
};
smallVideo[6].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[6].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "من أين يأتي الماء، الأرض أم السماء؟";
  titleTwo.innerHTML = "Where did water come from, earth or sky?";
};
smallVideo[7].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[7].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "تخطيط كهربية الدماغ (EEG)";
  titleTwo.innerHTML = "Electroencephalography (EEG)";
};
smallVideo[8].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[8].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "بئر الجحيم الغامض";
  titleTwo.innerHTML = "The Mysterious Well of Hell";
};
smallVideo[9].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[9].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "الإعصار الناري في القرآن الكريم";
  titleTwo.innerHTML = "The Mysterious Well of Hell";
};
smallVideo[10].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[10].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "الختان في الإسلام";
  titleTwo.innerHTML = "Circumcision in Islam";
};
smallVideo[11].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[11].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "مثلث برمودا";
  titleTwo.innerHTML = "The Bermuda Triangle";
};
smallVideo[12].onclick = function (e) {
  e.preventDefault();
  mainVideo.src = smallVideo[12].src;
  bigVideo.style.display = "block";
  mainVideo.style.display = "block";
  titleOne.innerHTML = "حركة الجبال";
  titleTwo.innerHTML = "The Movement of Mountains";
};

const change = document.getElementById("change");
const mainImage = document.getElementById("mainImage");
const text = document.getElementById("text");
