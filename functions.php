<?php

/**
 * ***********************
 * WordPress theme support
 * **********************
 */
add_theme_support('post-thumbnails');
add_theme_support('menus');

/**
 * **********
 * Navigation
 * *********
 */
function register_navigation_menus()
{
  register_nav_menus([
    'primary_menu' => __('Primary Menu', 'vabrell'),
    'social_menu' => __('Social Media', 'vabrell')
  ]);
}
add_action('after_setup_theme', 'register_navigation_menus', 0);

/**
 * *****************
 * Custom post types
 * *****************
 */
function register_custom_post_types()
{
  // Projects
  register_post_type('project', [
    'public' => true,
    'show_in_rest' => true,
    'rest_base' => 'projects',
    'menu_position' => 5,
    'menu_icon' => 'dashicons-hammer',
    'supports' => [
      'title',
      'thumbnail'
    ],
    'labels' => [
      'name' => 'Projects',
      'singular' => 'Project'
    ]
  ]);
}
add_action('init', 'register_custom_post_types');

/**
 * ***********
 * VueJS Setup
 * **********
 */

// Remove all default WP template redirects/lookups
remove_action('template_redirect', 'redirect_canonical');

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects()
{
  add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'remove_redirects');

// Load scripts
function load_vue_scripts()
{
  wp_enqueue_script(
    'vuejs-wordpress-theme-starter-js',
    get_stylesheet_directory_uri() . '/dist/scripts/index.js',
    array('jquery'),
    filemtime(get_stylesheet_directory() . '/dist/scripts/index.js'),
    true
  );

  wp_enqueue_style(
    'vuejs-wordpress-theme-starter-css',
    get_stylesheet_directory_uri() . '/dist/styles.css',
    null,
    filemtime(get_stylesheet_directory() . '/dist/styles.css')
  );
}
add_action('wp_enqueue_scripts', 'load_vue_scripts', 100);
