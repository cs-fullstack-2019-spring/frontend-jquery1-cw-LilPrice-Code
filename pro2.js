var repeat = window.setInterval(comeBack, 2000);
var showman = window.setInterval(time, 2000);
while ( 1===1) {
    i = 0;
    if (i === 0){
        function comeBack() {
            $(".galleryItem").hide();
        }
        i++;
    }
    else {

        function comeBack() {
            $(".galleryItem").show();

        }
        i = 0;
    }
}