<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

 $server = "$_SERVER[HTTP_HOST]";
 $folder = "$_SERVER[REQUEST_URI]";
 
 if (str_contains($server, 'localhost')) {
	/** Database hostname */
	define( 'DB_HOST', '45.135.243.216:3306' );

 }
else{
	/** Database hostname */
	define( 'DB_HOST', 'localhost' );

}

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'aryashimi_hdm' );

/** Database username */
define( 'DB_USER', 'aryashimi_hdm' );

/** Database password */
define( 'DB_PASSWORD', '@8]vD}twxps8' );


/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ne7f[ic/O;`C_`ZKk$++</b^{pkbZ06SkP0Y4>y.|0|%7:T/oSHF8/vP.bsBUoWl' );
define( 'SECURE_AUTH_KEY',  'xC)!K1HQ]XY0g81xpf@9F@?{`dw6lN0:86^NUx]hY:F|,B.%TYaz)W$*~/B;m)$7' );
define( 'LOGGED_IN_KEY',    '])IA?iZ|{uGn4*22O4mR^yw~sH<bS5:UyJcam.Afb%U-OwX27f6/i|wD{z>^Pi;7' );
define( 'NONCE_KEY',        'lJ3zlT+2JJk^|H6U2NXh_aPXo.cjEZE}TQmf+b0Pw5?,M57_k<|bpDrHXSYj?%~n' );
define( 'AUTH_SALT',        'KxCY:rPz)+*S:#F<{Un$t4MXP}:`!5?IUM6/R1Q=CI~gr@2a9Y%Ar/N{6<a PeOw' );
define( 'SECURE_AUTH_SALT', '~w#8HF=Ey5Podh1h636v%B#ul8WVfQv[LzD?X]xHLq~c),9fN&KEqY*]BYpyCR]$' );
define( 'LOGGED_IN_SALT',   'ldY32{+8`H wo!w&-IAvk@C(MI?aw*w]Afc>CIFnEcXjiCuTvdTD/+V#pT4dE_j`' );
define( 'NONCE_SALT',       '42|{7={6A@;,)*qY8R0pye&#*7KX,RC?>&q&X*G;[^]LucaSX{h:kr0^KjSVTDzI' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'hdm_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

define( 'WP_HOME', "http://localhost/ariashimi" );
define( 'WP_SITEURL', "http://localhost/ariashimi" );