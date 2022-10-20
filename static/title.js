function height() {
    return (window.innerHeight) ?
        window.innerHeight :
        document.documentElement.clientHeight || document.body.clientHeight || 0;
}

function getScrollPercentOld() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return  (( (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) ))* 100;
}

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (( (h[st]||b[st]) / (height()) ) * 2.2 ) ** (1) * 100;
}

const left = document.getElementById("left-side");
const handleOnMove = e => {
    const p = getScrollPercent();
    left.style.width = `${p}%`;
}

handleOnMove();
document.onscroll = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0]);