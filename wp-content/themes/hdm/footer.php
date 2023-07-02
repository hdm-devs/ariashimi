<script type="text/javascript" defer src="<?=get_template_directory_uri()?>/assets/js/jquery.3.6.1.js"></script>
<script type="text/javascript" defer src="<?=get_template_directory_uri()?>/assets/js/bootstrap.min.js"></script>
<script type="text/javascript" defer src="<?=get_template_directory_uri()?>/assets/js/owl.carousel.min.js"></script>
<script type="text/javascript" defer src="<?=get_template_directory_uri()?>/assets/js/script.js"></script>

<footer>
    <div class="row">
        <div class="col-md-4">
            <img class="footer-logo" src="<?=wp_get_attachment_url(6)?>">
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، </p>
            <form method="post" action="#" id="email_subscribe" >
                <span>عضویت در خبرنامه </span>
                <div class="input">
                    <input class="form-control" placeholder="ایمیل خود را وارد کنید">
                    <div class="go">
                        <span>عضویت</span>
                        <i class="las la-arrow-left"></i>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-8">
            <div class="row">
                <div class="col-md-4">
                    <span class="footer-title">لینک های مفید</span>
                    <?=wp_nav_menu(array("menu" => 12 , "menu_class" => "footer_menu"))?>
                </div>
                <div class="col-md-4">
                    <span class="footer-title">مشتریان </span>
                    <?=wp_nav_menu(array("menu" => 13 , "menu_class" => "footer_menu"))?>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </div>
</footer>


<?php wp_footer();?>

</body>
</html>