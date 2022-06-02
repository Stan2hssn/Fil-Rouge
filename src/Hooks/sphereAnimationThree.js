import anime from "animejs";

const fitElementToParent = (el, padding) => {
    let timeout = null;

    function resize() {
        if (timeout) clearTimeout(timeout);
        anime.set(el, {scale: 1});
        let pad = padding || 0;
        let parentEl = el.parentNode;
        let elOffsetWidth = el.offsetWidth - pad;
        let parentOffsetWidth = parentEl.offsetWidth;
        let ratio = parentOffsetWidth / elOffsetWidth;
        timeout = setTimeout(anime.set(el, {scale: ratio, rotate: "90deg"}), 10);
    }

    resize();
    window.addEventListener("resize", resize);
};

const sphereAnimationThree = () => {
    let sphereEl = document.querySelector(".sphere-animationThree");
    let spherePathEls = sphereEl.querySelectorAll(".sphere path");
    let pathLength = spherePathEls.length;
    let aimations = [];

    fitElementToParent(sphereEl);

    let breathAnimation = anime({
        begin: function () {
            for (let i = 0; i < pathLength; i++) {
                aimations.push(anime({
                    targets: spherePathEls[i], stroke: {
                        value: ["rgba(255,75,75,1)", "rgba(80,80,80,.35)"], duration: 500,
                    }, translateX: [2, 4], translateY: [2, -12], easing: "easeOutQuad", autoplay: false,
                }));
            }
        }, update: function (ins) {
            aimations.forEach(function (animation, i) {
                let percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
                animation.seek(animation.duration * percent);
            });
        }, duration: Infinity, autoplay: false,
    });

    let introAnimation = anime
        .timeline({
            autoplay: false,
        })
        .add(
            {
                targets: spherePathEls, strokeDashoffset: {
                    value: [anime.setDashoffset, 0],
                    duration: 0,
                    easing: "easeInOutCirc",
                    delay: anime.stagger(190, {direction: "reverse"}),
                }, duration: 2000, delay: anime.stagger(60, {direction: "reverse"}), easing: "linear",
            }, 0);

    let shadowAnimation = anime({
        targets: "#sphereGradient",
        x1: "25%",
        x2: "25%",
        y1: "0%",
        y2: "25%",
        duration: 30000,
        easing: "easeOutQuint",
        autoplay: false,
    }, 0);

    function init() {
        introAnimation.play();
        breathAnimation.play();
        shadowAnimation.play();
    }

    init();
};

export default sphereAnimationThree;
