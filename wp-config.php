<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'natalie_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '%,(#>rGz4fqeeJ)z#$+]O:#vAhUf/QG.Yh0I%7v_t0%|zi=u_!^QX~c2x}M<mpL4');
define('SECURE_AUTH_KEY',  '6</ij&>:fDh?b.H:QT#C=0K/EE?6]0`Eq6lk](g;Lj@coS se.F+RrhC<Pm-mkAu');
define('LOGGED_IN_KEY',    'Jjqaw0ZMP-OW~7O }N,4P]>?pzGt7T?|WzPwm}Fh+Tyta4!+</|! Lu.z=Ku;i1h');
define('NONCE_KEY',        'V>:iT[MXT$(caBoew{P9CU;)ykhHtaGC&5f]-wV_)MNf$77Sf@}WX.#TYy@HoOV5');
define('AUTH_SALT',        'OPVF*L!N@zOQ8WpDu]&ui<w.rg+O V>&C<u]1~L|l9k[D4@Jk^ sJaAG-e[JiIx ');
define('SECURE_AUTH_SALT', '^S^A2j>GB&2U`,nPN[Ru%B]KT+XU& !7V(j@Ps[;ekUfilfyImbu};n|vUJ_Mc)x');
define('LOGGED_IN_SALT',   '#YH.bL(-bVVxj1<T.92#?[P.G%N)d[NK<efW9B}<bkp@s-yUl/1(|K}4wd3heUh_');
define('NONCE_SALT',       '}spl#V&j`O4(5qsn3vVfx=q:-xK# 4Tgkj6t~GS7;|l6G{_$>j%1&q?tXU^}0b+A');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
