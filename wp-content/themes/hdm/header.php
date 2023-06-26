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
    <div class="row">
        <div class="col-md-9">
            <a href=""></a>
        </div>
    </div>
</header>