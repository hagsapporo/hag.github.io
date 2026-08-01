document.documentElement.classList.add("js");

const clock = document.querySelector("#lab-clock");
const updateClock = () => {
  if (!clock) return;
  const time = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
  clock.textContent = `JST ${time}`;
};

updateClock();
window.setInterval(updateClock, 1000);

const reveals = document.querySelectorAll(".lab-reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 },
  );
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}
