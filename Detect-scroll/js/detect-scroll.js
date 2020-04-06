window.addEventListener('scroll', function () {
    var scroll = window.scrollY;

    var margin = parseFloat(window.getComputedStyle(document.body)['marginTop']) +
               parseFloat(window.getComputedStyle(document.body)['marginBottom']);
    
    var totalHeight = (document.body.offsetHeight - window.innerHeight + margin);

    var percentage = ((100 * scroll) / totalHeight);

    /**/
    const h1 = document.getElementsByTagName("h1");
    h1[0].innerHTML = scroll.toFixed() + ' or ' + percentage + '%';



    console.log(scroll.toFixed() + ' ' + (totalHeight));
    console.log('percentage: ' + percentage);
    /**/

});