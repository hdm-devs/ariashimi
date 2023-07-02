function scrollToValidate(pos){
    var position = Number(pos) - Number(100);
    jQuery("body,html").animate(
        {
            scrollTop: position
        },
        800 //speed
    );
}
function validateswitch(idForm,idInput,Validate,classTrue = null){

    // var status = 0;
    switch (Validate) {
        case 'empty':

            var value = jQuery("#"+idForm+" #"+ idInput).val();
            if(value.length < 1){
                jQuery("#"+idForm+" #"+ idInput).css("border","1px solid #ff0039");
                if(jQuery("#"+idForm+" #"+ idInput).hasClass("select2-hidden-accessible")){

                    jQuery("#"+idForm+" #"+ idInput).next("span.select2").css("border","1px solid #ff0039");
                }
                jQuery("#"+idForm+" #"+ idInput).removeClass("approved");
                scrollToValidate(jQuery("#"+idForm+" #"+ idInput).offset().top);
                return false;

            }
            else{
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                if(jQuery("#"+idForm+" #"+ idInput).hasClass("select2-hidden-accessible")){

                    jQuery("#"+idForm+" #"+ idInput).next("span.select2").removeAttr("style");
                }
                jQuery("#"+idForm+" #"+ idInput).addClass(classTrue);
                jQuery("#"+idForm+" #"+ idInput).addClass("approved");
                return true;
            }


            break;

        case 'image':

            var value = jQuery("#"+idForm+" #"+ idInput).val();
            if(value == ""){
                jQuery("#"+idForm+" #"+ idInput).parent(".box_upload").parent(".Img_selector").css("border","1px solid #ff0039");
                scrollToValidate(jQuery("#"+idForm+" #"+ idInput).parent(".box_upload").parent(".Img_selector").offset().top);
                return false;

            }
            else{
                jQuery("#"+idForm+" #"+ idInput).parent(".box_upload").parent(".Img_selector").removeAttr("style");

                return true;
            }


            break;


        case 'select_empty':

            var value = jQuery("#"+idForm+" #"+ idInput).val();
            if(value == null){
                jQuery("#"+idForm+" ."+ idInput + ' .select-wrapper input').css("border","1px solid #ff0039");
                jQuery("#"+idForm+" #"+ idInput).removeClass("approved");
                scrollToValidate(jQuery("#"+idForm+" #"+ idInput).offset().top)
                return false;

            }
            else{
                jQuery("#"+idForm+" ."+ idInput + ' .select-wrapper input').removeAttr("style");
                jQuery("#"+idForm+" #"+ idInput).addClass("approved");
                return true;
            }


            break;

        case 'email':
            var value = jQuery("#"+idForm+" #"+ idInput).val();

            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

            if(testEmail.test(value)){
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                jQuery("#"+idForm+" #"+ idInput).addClass("approved");
                scrollToValidate(jQuery("#"+idForm+" #"+ idInput).offset().top)
                return true;
            }
            else{

                jQuery("#"+idForm+" #"+ idInput).css("border","1px solid #ff0039");
                jQuery("#"+idForm+" #"+ idInput).removeClass("approved");
                return false;
            }

            breack;

        case 'mobile':
            var value = jQuery("#"+idForm+" #"+ idInput).val();

            if(value.length < 11){
                jQuery("#"+idForm+" #"+ idInput).css("border","1px solid #ff0039");
                jQuery("#"+idForm+" #"+ idInput).removeClass("approved");
                scrollToValidate(jQuery("#"+idForm+" #"+ idInput).offset().top)
                return false;

            }
            else{
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                jQuery("#"+idForm+" #"+ idInput).addClass("approved");
                return true;
            }

            breack;

        case 'mobile_or_email':
            var value = jQuery("#"+idForm+" #"+ idInput).val();
            var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}jQuery/i;
            var intRegex = /^\d+jQuery/;

            if(intRegex.test(value) && value.length == 11 ){
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");

                return true;
            }
            else if(testEmail.test(value)){
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                return true;
            }
            else{
                jQuery("#"+idForm+" #"+ idInput).css("border","1px solid #ff0039");
                return false;

            }


            breack;


        case 'password':
            var value = jQuery("#"+idForm+" #"+ idInput).val();

            if(value.length < 5){
                jQuery("#"+idForm+" #"+ idInput).css("border","1px solid #ff0039");
                scrollToValidate(jQuery("#"+idForm+" #"+ idInput).offset().top)
                return false;

            }
            else{
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                return true;
            }

            breack;


        case 'MelliCode':
            var value = jQuery("#"+idForm+" #"+ idInput).val();

            if(!checkMelliCode(value)){
                jQuery("#"+idForm+" #"+ idInput).css("border","1px solid #ff0039");
                scrollToValidate(jQuery("#"+idForm+" #"+ idInput).offset().top);
                ALERT("کد ملی وارد شده صحیح نمی باشد.","e");
                return false;

            }
            else{
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                return true;
            }

            breack;

        case 'confrim_password':
            var value = jQuery("#"+idForm+" #user_password").val();
            var value_confrim = jQuery("#"+idForm+" #"+ idInput).val();

            if(value !== value_confrim){
                jQuery("#"+idForm+" #"+ idInput).css("border","1px solid #ff0039");
                scrollToValidate(jQuery("#"+idForm+" #"+ idInput).offset().top)
                return false;

            }
            else{
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                return true;
            }

            breack;

        case 'checked':

            var value = jQuery("#"+idForm+" #"+ idInput);
            if (!value.prop('checked')) {
                jQuery("#"+idForm+" #"+ idInput+"_label").css("border","1px solid #ff0039");
                return false;
            }
            else {
                jQuery("#"+idForm+" #"+ idInput+"_label").removeAttr("style");
                return true;
            }


            breack;

        case 'domain':
            var value = jQuery("#"+idForm+" #"+ idInput);
            var emaildomain = /^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9\-\.]){1,61}(?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/i;
            if(emaildomain.test(value.val())){
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                jQuery("#"+idForm+" #"+ idInput).addClass("approved");
            }else{
                jQuery("#"+idForm+" #"+ idInput).css("border","1px solid #ff0039");
                jQuery("#"+idForm+" #"+ idInput).removeClass("approved");
                ALERT("دامنه وارد شده صحیح نمی باشد.","e");

                return false;
            }
            var domain = ".ir";
            if(value.val().indexOf(domain) != -1){

                jQuery("#"+idForm+" #"+ idInput).css("border","1px solid #ff0039");
                jQuery("#"+idForm+" #"+ idInput).removeClass("approved");
                jQuery("#"+idForm+" #"+ idInput).parent(".form-group").append('<span class="show_ir_guid_popup">راهنمای استفاده از دامنه IR</span>')
                ALERT("دامنه IR مجاز نمی باشد.","e");
                return false;
            }
            else{
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                jQuery("#"+idForm+" #"+ idInput).addClass("approved");
                jQuery(".show_ir_guid_popup").remove();
                scrollToValidate(jQuery("#"+idForm+" #"+ idInput).offset().top)
                return true;
            }
            // return false;
            breack;

        case 'email_validate':

            var value = jQuery("#"+idForm+" #"+ idInput);
            var email = "@gmail.com";
            var email_2 = "@gmail.com";

            if(value.val() == ""){
                jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                jQuery("#"+idForm+" #"+ idInput).addClass("approved");
                scrollToValidate(jQuery("#"+idForm+" #"+ idInput).offset().top)
                return true;
            }
            else{

                if(value.val().indexOf(email) != -1 || value.val().indexOf(email_2) != -1){
                    jQuery("#"+idForm+" #"+ idInput).removeAttr("style");
                    jQuery("#"+idForm+" #"+ idInput).addClass("approved");
                    scrollToValidate(jQuery("#"+idForm+" #"+ idInput).offset().top)
                    return true;
                }
                else{
                    jQuery("#"+idForm+" #"+ idInput).css("border","1px solid #ff0039");
                    jQuery("#"+idForm+" #"+ idInput).removeClass("approved");
                    return false;
                }


            }
            breack;
    }


}

function ValidateForm(idForm,classTrue=null){

    var status;
    jQuery("#"+idForm+" .validate").each(function () {

        var validate = jQuery("#"+idForm+" #"+ this.id).attr("data-validate");
        if(validateswitch(idForm,this.id,validate,classTrue) == false){
            status = false;
            return false;
        }
        else{
            status = true;
            return true;
        }
    });
    return status;
}

jQuery(document).ready(function () {

    jQuery("body .isNumberic").on("keypress keyup blur",function (event) {

        // jQuery(this).val(jQuery(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 45 || event.which > 57)) {
            event.preventDefault();
        }
        if(jQuery(this).val() == ""){jQuery(this).val()}
    });
    jQuery("body #form-field-phone").attr("maxlength",11);
    jQuery("body #form-field-phone").on("keypress keyup blur",function (event) {

        // jQuery(this).val(jQuery(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 45 || event.which > 57)) {
            event.preventDefault();
        }
        if(jQuery(this).val() == ""){jQuery(this).val()}
    });

    jQuery("body .englishOnly").on("keypress keyup blur",function (event) {
        var ew = event.which;
        console.log(ew);
        if(ew == 32 || ew == 0 || ew == 16 || ew == 9 || ew == 224)
            return true;
        if(48 <= ew && ew <= 57)
            return true;
        if(65 <= ew && ew <= 90)
            return true;
        if(97 <= ew && ew <= 122)
            return true;
        ALERT("نام اکانت باید انگلیسی باشد.","e");return false;
    });

    jQuery('body .PriceFormat').keyup(function(event) {
        if(event.which >= 37 && event.which <= 40) return;
        // format number
        jQuery(this).val(function(index, value) {
            return value
                .replace(/\D/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                ;
        });
    });

    jQuery("body").on('change keyup paste keydown', " .persian_char_only" , function(e) {
        if(e.key == " " || e.key == "Tab" || e.key == "Backspace" || e.key == "Shift"){}
        else if(just_persian(e.key) === false)
            e.preventDefault();
    });
    jQuery("body").on('change keyup focus click', " .mobileAutoComplate" , function(e) {
        var val = jQuery(this).val();
        if(val == ""){
            jQuery(this).val("09");
        }
    });


});


function just_persian(str) {
    var p = /^[\u0600-\u06FF\s]+$/;
    if (!p.test(str)) {
        return false
    }
    return true;
}

function checkMelliCode(meli_code) {
    if (meli_code.length == 10) {
        if (meli_code == '1111111111' ||
            meli_code == '0000000000' ||
            meli_code == '2222222222' ||
            meli_code == '3333333333' ||
            meli_code == '4444444444' ||
            meli_code == '5555555555' ||
            meli_code == '6666666666' ||
            meli_code == '7777777777' ||
            meli_code == '8888888888' ||
            meli_code == '9999999999') {
            return false;
        }
        c = parseInt(meli_code.charAt(9));
        n = parseInt(meli_code.charAt(0)) * 10 +
            parseInt(meli_code.charAt(1)) * 9 +
            parseInt(meli_code.charAt(2)) * 8 +
            parseInt(meli_code.charAt(3)) * 7 +
            parseInt(meli_code.charAt(4)) * 6 +
            parseInt(meli_code.charAt(5)) * 5 +
            parseInt(meli_code.charAt(6)) * 4 +
            parseInt(meli_code.charAt(7)) * 3 +
            parseInt(meli_code.charAt(8)) * 2;
        r = n - parseInt(n / 11) * 11;
        if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

