// // 滚动窗口后，logo变黑 hearder背景变白，字体变黑，hover后的字体变白，after背景变黑
// let header=document.querySelector('header'),
//     // 字体
//     a_left=document.querySelectorAll('header .header_left ul li a'),
//     a_right=document.querySelectorAll('header .header_right ol li .iconfont'),
//     // hover后的字体
//     // left_hover=document.querySelector('header .header_left ul li a:hover'),
//     // afer后的字体
//     left_after=document.querySelector('header .header_left ul li a::after'),
//     right_after=document.querySelector('header .header_right ol li a::after'),
//     logo = document.querySelector('header .header_left .logo span');
// // 窗口下拉了就变色   回去了就变回去
// window.onscroll=function(){
//     console.log(1)
//     let y = document.documentElement.scrollTop
//     console.log(y)
//     if (y != 0) {
//         header.style.backgroundColor = 'white'
//         for (let i = 0; i < a_left.length; i++) {
//             a_left[i].style.color = 'black'
//         }
//         for (let t = 0; t < a_right.length; t++) {
//             a_right[t].style.color = 'black'    
//         }
//         // left_hover.style.color = 'white'
//         // left_after.style.cssText = 'backgroundColor:black;'
//         // right_after.style.backgroundColor = 'black'
//         logo.style.color = 'black'
//     }else{
//         header.style.backgroundColor = 'transparent'
//         for (let i = 0; i < a_left.length; i++) {
//             a_left[i].style.color = 'white'
//             a_left[i].onmouseenter = function(){
//                 a_left[i].style.color = 'black'
//             }
            
//             a_left[i].onmouseleave = function(){
//                 a_left[i].style.color = 'white'
//             } 
            
//         }
//         for (let t = 0; t < a_right.length; t++) {
//             a_right[t].style.color = 'white' 
              
//         }
//         // left_hover.style.color = 'black'
//         // left_after.style.backgroundColor = 'white'
//         // right_after.style.backgroundColor = 'white'
//         logo.style.color = 'white'
//     }
    

// }   
let aimg = document.querySelectorAll('.lunbo .lunbo_img img'),
    oleft = document.querySelector('.lunbo .lunbo_text p .iconfont:nth-child(1)'),
    oright = document.querySelector('.lunbo .lunbo_text p .iconfont:nth-child(2)'),
    a=0;


aimg[a].style.zIndex='2'
oleft.onclick = function(){
    a--
    if (a<0) {
        aimg[0].style.zIndex='1'
        a=3
        aimg[a].style.zIndex='2'
    } else {
        aimg[a+1].style.zIndex='1'
        aimg[a].style.zIndex='2'
}
}
oright.onclick = function(){
    a++
    if (a>3) {
        aimg[3].style.zIndex='1'
        a=0
        aimg[a].style.zIndex='2'
    } else {
        aimg[a-1].style.zIndex='1'
        aimg[a].style.zIndex='2'
    }

}
let otop = document.querySelector('.return_top')
otop.onclick = function(){
    console.log(9)
    document.documentElement.scrollTo(0,0)
}



