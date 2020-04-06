const h1 = document.getElementsByTagName("h1");


window.addEventListener('scroll', function () {
    var scroll = window.scrollY;
    var percentage = document.getElementsByTagName('html');

    /**/
    h1[0].innerHTML = scroll.toFixed();

    document.body.classList.add('m0')
    console.log(document.body.offsetHeight)
    console.log(scroll.toFixed() + ' ' + (document.body.offsetHeight - window.innerHeight));
    document.body.classList.remove('m0')
    /**/

});