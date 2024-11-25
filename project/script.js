const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function CircleMouse(){
    window.addEventListener("mousemove",function(dets){
   document.querySelector("#circlem").style.transform =`translate(${dets.clientX}px , ${dets.clientY})`;
    })
}
CircleMouse();