
$(function(){

    $(".Productsbtn").click(function(e){

        $("body, html").animate({
            "scrollTop":$(".Products").offset().top 
             - ($("#et-top-navigation").innerHeight())
         },1000)
    
    });
    $(".sendbtn").click(function(){
        if($("#et_pb_contact_form_0").has(".et-pb-contact-message")){
            $("strong:contains('Get In Touch')").text("Thanks For Your Contact");
        }
        else{

        }
    });

    
  });
