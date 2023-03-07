import $ from'jquery';

// let btn=$('#btn');

// console.log(btn);

$(document).ready(function(){
    $('.list-item:first').hover(function(){
        $(this).toggleClass('active');
        console.log('ffff')
    });

    $('.list-item:eq(2)').on('click', ()=>{
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(3)').on('click', ()=>{
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
          }, 2000)
    })
});



// function* generator(){
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 't';
// }
// let str =generator();
// console.log(str.next().value)
// console.log(str.next())
// console.log(str.next())
// console.log(str.next())
// console.log(str.next())



// function* count(n){
//     for(let i=0; i<n; i++){
//         yield i;
//     }
// }
// // let counter= count(7);
// // console.log(counter.next().value)
// // console.log(counter.next().value)
// // console.log(counter.next().value)

// for(let k of count(7)){
//     console.log(k)
// }