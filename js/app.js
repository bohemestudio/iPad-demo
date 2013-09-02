AirNZ_mobileApp = (function () {



    setUpPage = function(){

        hideLoadingLayer();
        getUrlParameters();

    };

    var hideLoadingLayer = function(){
        //Hide loading layer after the delay
        $(".loading").delay(3000).fadeOut("fast");
    };

    var getUrlParameters = function(){

        var normalizeUrlParameters = function(urlParametersString){
            var auxStr = decodeURIComponent(urlParametersString.substring(1, urlParametersString.length));
            return ("?" + auxStr);
        };

        //First Iteration and in case they RELOAD the page
        //Set manualy separator '?'
        var urlParameters = normalizeUrlParameters(window.location.search);


        $('#thank-you').live("pageshow", function(e) {
            urlParameters = normalizeUrlParameters(window.location.search);
            //var selectedItem = urlParameters.substr(urlParameters.indexOf("=") + 1);
        });

        $('.select-product').live("pageshow", function(e) {
            urlParameters = normalizeUrlParameters(window.location.search);
        });

        $('#menu-eat-and-drink ul li a').live("click", function(){
            urlParameters = normalizeUrlParameters(window.location.search);
            var currentValue = $(this).attr("href");
            $(this).attr("href", currentValue+urlParameters);

        });

        //add currentParameters on value
        $('.select-product form input').live("click", function(){
            urlParameters = normalizeUrlParameters(window.location.search);
            var currentValue = $(this).attr("value");
            $(this).attr("value", currentValue+urlParameters );
        });

            //Get previous params from '?'
            console.log(urlParameters);

        $("#order-more").live("click", function(){

            if( urlParameters.length != 0){
                    console.log(urlParameters);
                    urlParameters = normalizeUrlParameters(window.location.search);
                    var currentUrl = $("#order-more").attr("href");
                    //add previous parameters
                    $("#order-more").attr("href", currentUrl+urlParameters);
                    console.log($("#order-more").attr("href"));
            }
        });

        //Place the order
        $('#submit-order').live("click", function(){
            urlParameters = normalizeUrlParameters(window.location.search);
            $('.order-confirmation').attr("value", urlParameters );
            alert(urlParameters);
        });



    };

    var privateMethod = function() {
        //do some private stuff
    };

    var publicMethod = function() {
        //do some public stuff
    };

    var init = function() {
        privateMethod();
    };

    return {
        init: function(){
            setUpPage();
        }
    };

}());

$(document).ready(function() {
    AirNZ_mobileApp.init();
});
