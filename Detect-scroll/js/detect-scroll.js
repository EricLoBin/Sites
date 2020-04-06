window.addEventListener('scroll', function () {
    var scroll = window.scrollY;

    var margin = parseFloat(window.getComputedStyle(document.body)['marginTop']) +
               parseFloat(window.getComputedStyle(document.body)['marginBottom']);
    
    var totalHeight = (document.body.offsetHeight - window.innerHeight + margin);

    var percentage = ((100 * scroll) / totalHeight);





    /*Edit this part to create your features*/


    const h1 = document.getElementsByTagName("h1");
    h1[0].innerHTML = scroll.toFixed() + ' or ' + percentage + '%';


    if (percentage == 0){
        console.log('Top');
        h1[0].innerHTML = scroll.toFixed() + ' or ' + percentage + '%' + '<br> Top';
    }

    if (percentage >= 100){
        console.log('Bottom');
        h1[0].innerHTML = scroll.toFixed() + ' or ' + percentage + '%' + '<br> Bottom';
    }


    console.log(scroll.toFixed() + ' ' + (totalHeight));
    console.log('percentage: ' + percentage);


    /**/






});