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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tchaso' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         '&l*Thyq0|PX5TSZ.lS2!84N4[*=^W$2s8`/kvJ[<k(6t#8nS2LG#mO^2]a&H~+lM' );
define( 'SECURE_AUTH_KEY',  '!*F5$4DT:rm4sIn5P{Hy L|t b6K-f$Dc0Y0Yde4GqZ3AW<(z;Y+{P|&ril|8Vmc' );
define( 'LOGGED_IN_KEY',    '(vUV,~()g<4n$7mz;.dP#8:TNH!6<l*]@[e@&8RGigrG`P/Uo96%-zNB(WP1L^/V' );
define( 'NONCE_KEY',        '~KR3,l6<IGccJziapKRZk1Y|x;/O@xVj/9  FRkRa,nYU]<KZ|`hJPvJ,#(_tL,S' );
define( 'AUTH_SALT',        '9K-*,S&[:5a J4{9yN*.|^!+B8l>:fq>iMMl`/%jmj49^Oyidby^#1LA^%K6`b0:' );
define( 'SECURE_AUTH_SALT', 'gI&qQdye)SQ+9$qG2!KVqz95ZJ~;b7@{>!3LQ`%X4d X4o,w:Lv0>th4|6_8=aw|' );
define( 'LOGGED_IN_SALT',   'A]6}qV~QaM}otsF61]e>E?Tmd)(o3*Q}_1B>{)TE8TeA$?0DQiHKKPVL*n84xi|2' );
define( 'NONCE_SALT',       '@Sx!,-X3(-~%iB-SQ}hd.U9A7~K~}O}:*}M52f|sGx?};)A8r>srLIVs]0|j-`:5' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
