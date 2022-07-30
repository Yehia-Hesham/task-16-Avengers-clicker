var counter = {
    count : 0};

image = document.getElementsByClassName("image");
// header = document.getElementsByClassName('counter');

$(".image").click(function () { 
    index = $(this).attr("data-index");
    // console.log(index);
    counter = $('[data-index='+index+'].counter').text();
    console.log(counter)
    counter = Number(counter) +1;
    $('[data-index='+index+'].counter').text(counter); 

    // counter++;
    // counter.innerText
    // header.innerText = "value: " + counter.count;
});


// function create_ele() {
//     var elem = document.createElement(/*ELEMENT_HERE*/);
//     elem.style.cssText = 'width:100%;height:30px;opacity:0.3;z-index:100;background:#000;';
//     document.body.appendChild(elem); 
// };


// document.addEventListener('click',function(e){
//     if(e.target.id =='myBtn'){
//         create_div()
//         alert("Div Created!")
//     }

//     if(e.target.matches("div")){
//         // create_div()
//         alert("Div Clicked")
//     }
//     console.log(e.target)
// });