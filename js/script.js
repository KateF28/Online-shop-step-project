const gallerySliderImages = $(".gallery__slider-pags")[0],
    gallerySliderPags = $(".gallery__slider-pag"),
    gallerySliderArrowLeft = $("#gallerySliderLeft"),
    gallerySliderArrowRight = $("#gallerySliderRight"),
    galleryImgWidth = 75,
    mediaQueryMd = window.matchMedia("screen and (min-width: 768px)");
let leftMd = -148,
    left = -265;

$(gallerySliderPags).each(function() {
    $(this).click(function() {
        let imgSrc = $(this).find("img").attr("src");
        $(this).closest(".gallery__tabs-tab").find("img:first").attr("src", imgSrc);
    });
});

gallerySliderImages.style.left = left + "px";
slideTo = (direction) => {
    if (direction === "left") {
        left = left - galleryImgWidth;
    }
    if (direction === "right") left += galleryImgWidth;
    if (left < -265) left = 0;
    if (left > 0) left = -265;
    gallerySliderImages.style.left = left + "px";
};
gallerySliderArrowLeft.click(() => {
    slideTo("left");
});
gallerySliderArrowRight.click(() => {
    slideTo("right");
});

mediaQueryMd.addListener(changeGallerySliderPagsLeft);
changeGallerySliderPagsLeft(mediaQueryMd);

function changeGallerySliderPagsLeft(mq) {
    if (mq.matches) {
        gallerySliderImages.style.left = leftMd + "px";
        gallerySliderArrowLeft.click(() => {
            slideToMd("left");
        });
        gallerySliderArrowRight.click(() => {
            slideToMd("right");
        });
        slideToMd = (direction) => {
            if (direction === "left") {
                left = left - galleryImgWidth;
            }
            if (direction === "right") left += galleryImgWidth;
            if (left < -148) left = 0;
            if (left > 0) left = -148;
            gallerySliderImages.style.left = left + "px";
        };
    }
}

$(".gallery__content-link").each(function() {
    $(this).hover(function() {
        $(this).find(".gallery__content-add").toggle();
    });
});

mediaQueryMd.addListener(changeEmailInputPlaceholder);
changeEmailInputPlaceholder(mediaQueryMd);

function changeEmailInputPlaceholder(mq) {
    const subscriptionInput = $("#subscriptionFormInputGroup");
    if (mq.matches) {
        subscriptionInput.attr("placeholder", "Enter your email address");
    } else {
        subscriptionInput.attr("placeholder", "Subscribe to newsletter");
    }
}