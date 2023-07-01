 <!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <?php wp_head();?>
    <meta charset="UTF-8">
    <title>
        <?php
        if(!is_home()){
            if(is_tax()){
                echo single_cat_title(). ' - ';
            } 
            else if(is_category())
            {
                echo single_cat_title() .' - ';
            }
            else if(is_archive()){
                echo str_replace("Archive","",get_the_archive_title()).' - ';
            }
            else {
                echo get_the_title() . ' - ';
            }
        }
        echo bloginfo( 'name' );

        ?>
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!--    <link rel="stylesheet" href="--><?//=get_template_directory_uri()?><!--/assets/css/owl.carousel.css">-->

</head>
<body <?=body_class();?>>

<header>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="Email-Header">
                    <a href="mailto:test@gmail.com">
                        <img src="http://localhost/ariashimi/wp-content/uploads/2023/07/mail.png" alt="ایمیل">
                        <p>ایمیل</p>
                    </a>
                </div>
                <div class="Cal-header">
                    <a href="cal:+982144894900">
                        <img src="http://localhost/ariashimi/wp-content/uploads/2023/07/phone-call.png" alt="تماس با ما">
                        <p>تلفن تماس:10-44894900-021</p>
                    </a>
                </div>
            </div>
            <div class="col-md-6">
                <div>
                    <div class="Sign-in"></div>
                    <div class="Social-Header"></div>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="Logo-Header">
                    <a href="localhost/ariashimi">
                        <img src="http://localhost/ariashimi/wp-content/uploads/2023/06/logo-aryashimi.png" alt="ariashimi">
                    </a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="Menu-header">
                    <?=wp_nav_menu(array("theme_location" => "main_menu" , "menu_class" => "mobile_main_menu"))?>
                </div>
             </div>
            <div class="col-md-3">
                <div class="Search">
                </div>
            </div>
        </div>
    </div>
</header>