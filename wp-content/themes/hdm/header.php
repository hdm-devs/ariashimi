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
    <link rel="stylesheet" href="<?=get_template_directory_uri()?>/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?=get_template_directory_uri()?>/assets/css/owl.carousel.css">
    <link rel="stylesheet" href="<?=get_template_directory_uri()?>/assets/fonts/Yekanbakh//YekanBakhs-font.css">
    <link rel="stylesheet" href="<?=get_template_directory_uri()?>/assets/css/style.css">
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
</head>
<body <?=body_class();?>>

<header>
    <div class="top">

        <div class="row">

            <div class="col-md-6">

                <ul class="email_phone_list">
                    <li>
                        <a href="mail:info@aryashimi.com">
                            <i class="las la-envelope-open"></i>
                            <span>info@aryashimi.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:02144894900">
                            <i class="las la-phone-alt"></i>
                            <span>021-44894900-10</span>
                        </a>
                    </li>

                </ul>

            </div>
            <div class="col-md-6">
                <ul class="social_list">
                    <li>
                        <a href="#">
                            <i class="lab la-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="lab la-telegram-plane"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="lab la-facebook-f"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    </div>
    <div class="bottom"></div>
</header>


