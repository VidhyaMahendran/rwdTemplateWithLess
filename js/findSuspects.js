var suspects = suspects || {};

suspects.findSuspects = {
    init: function() {
        this.eventHandlers();
        $(".listOfSuspects, .alert").hide();
        //Storing the Full people list in LocalStorage
        localStorage.setItem("listOfPeople", $(".listPeople").html());
    },

    eventHandlers: function() {
        $("#listOfPeople").on("click", "li", function(event){
            event.preventDefault();
            $(this).appendTo("#galleryOfSuspects");
            $(".listOfSuspects").show();
        });
        $(".reset").click(function(event){
            event.preventDefault();
            $(".listPeople").html(localStorage.getItem("listOfPeople"));
            $("#galleryOfSuspects").html("");
            $(".listOfSuspects").hide();
            $("#judgedMsg").show();
            //location.reload();  //Reloading the page for the user to enable selection again
        });
        $(".save").click(function(event){
            event.preventDefault();
            //Storing the Suspected people list list in LocalStorage
            localStorage.setItem("listOfSuspects", $(".galleryOfSuspects").html());
            //Storing the Remaining people list list in LocalStorage
            localStorage.setItem("listOfGenuines", $(".listPeople").html());
            $("#declaredMsg").show();
        });
        $(".showUpdatedSuspects").click(function(event){
            event.preventDefault();
            // listOfSuspects can be used to show the list of Suspected people from localStorage
            $("#galleryOfSuspects").html(localStorage.getItem("listOfGenuines"));
            // listOfGenuines can be used to show the list of Genuine people from localStorage
            $(".listPeople").html(localStorage.getItem("listOfGenuines"));
        });
    }
};

$(document).ready(function(){
    suspects.findSuspects.init();
});