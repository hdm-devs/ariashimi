<?php

if ( function_exists( 'add_theme_support' ) )
    add_theme_support( 'post-thumbnails' );


function register_my_menus(){
    register_nav_menus(
        array(
            'main_menu' => __('منو اصلی'),
            'footer_menu' => __('منو فوتر'),
            'access_menu' => __('دسترسی سریع'),

        )
    );
}
add_action('init' , 'register_my_menus');


add_action('after_setup_theme', 'remove_admin_bar');
function remove_admin_bar() {
    if (!current_user_can('administrator') && !is_admin()) {
        show_admin_bar(false);
    }
}