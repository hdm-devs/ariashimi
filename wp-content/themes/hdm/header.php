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

<!--<header>-->
<!--    <div class="Logo">-->
<!--        <div class="col-md-2">-->
<!--            <a href="http://aryashimi.com" >-->
<!--                <img src="http://localhost/ariashimi/wp-content/uploads/2023/06/logo-aryashimi.png" alt="">-->
<!--            </a>-->
<!--            gfgfg-ghgh-->
<!--        </div>-->
<!--        <div class="col-md-6">-->
<!--             <div class="navMenu">-->
<!--             --><?php //=wp_nav_menu(array("theme_location" => "main_menu" , "menu_class" => "mobile_main_menu"))?>
<!--             </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</header>-->
    <header>
        <div class="first_header">
          <div class="cntainer">
            <div class="row">
              <div class="col-md-6">
                 <li class="Email">
                     <a href="cal:+982144894900"></a>
                     <img src="http://localhost/ariashimi/wp-content/uploads/2023/06/call-calling.png" alt="">
                     <p>تلفن تماس:10-44894900-021</p>
                 </li>
              </div>
              <div class="col-md-6">
                  <li>
                      <a href="http://localhost/ariashimi/my-account" type="10" class="digits-login-modal">
                          <img src="http://localhost/ariashimi/wp-content/uploads/2023/06/user.png" alt="">
                          <p>
                              <span href="http://localhost/ariashimi/my-account" onclick="" attr-disclick="" class=digits-login-model" type="10">
                                  <span>حساب کاربری من</span>
                              </span>
                          </p>
                      </a>
                  </li>
              </div>
             </div>
          </div>
        </div>
        <div class="header_menu">
            <div class="container">
                <div class="row">
                <div class="col-md-3">
                    <div class="Logo">
                        <a href="localhost/ariashimi">
                            <img src="http://localhost/ariashimi/wp-content/uploads/2023/06/logo-aryashimi.png" alt="" class="header-logo">
                        </a>
                    </div>
                </div>
                <div class="col-md-6">
                    <?=wp_nav_menu(array("theme_location" => "main_menu" , "menu_class" => "mobile_main_menu"))?>
                <div class="col-md-3">
                    <div class="search">
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </header>