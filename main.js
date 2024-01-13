const observerCallback = (entries, className) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add(className);
		}
	});
};

//Animation Slide
const observerSlide = new IntersectionObserver((entries) => {
	observerCallback(entries, "show-slide");
});
const hiddenElementsSlide = document.querySelectorAll(".hidden-slide");
hiddenElementsSlide.forEach((el) => observerSlide.observe(el));

//Animation Slide-left
const observerSlideLeft = new IntersectionObserver((entries) => {
	observerCallback(entries, "show-slide-left");
});
const hiddenElementsSlideLeft = document.querySelectorAll(".hidden-slide-left");
hiddenElementsSlideLeft.forEach((el) => observerSlideLeft.observe(el));

//Animation UP
const observerUp = new IntersectionObserver((entries) => {
	observerCallback(entries, "show-up");
});
const hiddenElementsUp = document.querySelectorAll(".hidden-up");
hiddenElementsUp.forEach((el) => observerUp.observe(el));

//Animation Emerge
const observerEmerge = new IntersectionObserver((entries) => {
	observerCallback(entries, "show-emerge");
});
const hiddenElementsEmerge = document.querySelectorAll(".hidden-emerge");
hiddenElementsEmerge.forEach((el) => observerEmerge.observe(el));

//Animation Slidein
const observerSlidein = new IntersectionObserver((entries) => {
	observerCallback(entries, "show-slidein");
});
const hiddenElementsSlidein = document.querySelectorAll(".hidden-slidein");
hiddenElementsSlidein.forEach((el) => observerSlidein.observe(el));

//Animation Slidein-left
const observerSlideinLeft = new IntersectionObserver((entries) => {
	observerCallback(entries, "show-slidein-left");
});
const hiddenElementsSlideinLeft = document.querySelectorAll(
	".hidden-slidein-left"
);
hiddenElementsSlideinLeft.forEach((el) => observerSlideinLeft.observe(el));
