function img_prev() {
    const arrow = document.querySelectorAll('.arrow');
    const para = document.querySelectorAll('.right-pros p');
    const left_preview = document.querySelector('.left-preview');
    const offcanvasNavbar = document.getElementById('offcanvasNavbar');

    para.forEach((el, idx) => {
        const arrows = arrow[idx];
        el.addEventListener('mouseenter', () => {
            //right pro
            const imgs = el.getAttribute('img_url');
            el.style.marginLeft = "1vw";
            el.style.paddingLeft = "0 2vw";
            if (arrows) {
                arrows.style.opacity = 1;
                arrows.style.marginRight = 0;
                arrows.style.paddingRight = "0.8vw";
            };
            //left-preview
            left_preview.style.backgroundImage = `url(${imgs})`;
            left_preview.classList.add("left_image");
            gsap.to(left_preview,
                { opacity: 1, duration: 0.4, ease: 'power1.out' }
            );
        });

        el.addEventListener('mouseleave', () => {
            el.style.marginLeft = "-1vw";
            el.style.paddingLeft = "0";
            if (arrows) {
                arrows.style.opacity = 0;
                arrows.style.marginRight = "-1vw";
            };
            gsap.to(left_preview, {
                opacity: 0,
                duration: 0.6,
                ease: 'power1.in',
                onComplete: () => {
                    left_preview.style.backgroundImage = 'none'; // Remove background image after animation
                }
            });
        });
    });

}

function form() {
    const form = document.querySelector(".form");
    const submit = document.querySelectorAll("#submit");

    form.addEventListener('submit', () => {
        setTimeout(() => {
            const inp = document.querySelectorAll(".contact_inp");
            inp.forEach(ele => {
                ele.value = "";
            })
        }, 5000);
    })
}
img_prev();


function offcanvasColor() {
    offcanvasNavbar.addEventListener('show.bs.offcanvas', function () {
        offcanvasNavbar.classList.add('show');
        offcanvasNavbar.style.fontSize="1.3vw";
    });

    offcanvasNavbar.addEventListener('hidden.bs.offcanvas', function () {
        offcanvasNavbar.classList.remove('show');
    });
}
offcanvasColor();

// form();
//"url('./imgs/previews/lazarev_preview.png')";