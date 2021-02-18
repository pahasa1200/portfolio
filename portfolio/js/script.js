window.onload = function () {
    window.dispatchEvent(new Event("scroll"));
}

const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i]
            const animItemHeight = animItem.offsetHeight
            const animItemOffset = offset(animItem).top
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart

            if (animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active')
            } else{
                if (!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active')
                }
            }
            if (document.documentElement.scrollTop > 50) {
                document.getElementById("navbar").style.backgroundColor = 'black';
            }
            else {
                document.getElementById("navbar").style.backgroundColor = 'transparent';
            }
            if (document.documentElement.scrollTop > 1000) {
                document.getElementById("portfolios").classList.add('_active')
                document.getElementById("projects_col1").classList.add('_active')
                document.getElementById("projects_col2").classList.add('_active')
                document.getElementById("projects_col3").classList.add('_active')
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return{ top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll()
    }, 300)
}

// window.addEventListener("scroll", function () {
//     if (document.documentElement.scrollTop > 50) {
//         document.getElementById("navbar").style.backgroundColor = 'black';
//     } else {
//         document.getElementById("navbar").style.backgroundColor = 'transparent';
//     }
//
// });
