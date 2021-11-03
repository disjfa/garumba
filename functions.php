<?php

if (false === function_exists('garumba_enqueue_scripts')) {
    function garumba_enqueue_scripts()
    {
        require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';

        $entrypoints = __DIR__ . '/build/entrypoints.json';
        if (!is_file($entrypoints)) {
            return;
        }
        if (!is_readable($entrypoints)) {
            return;
        }
        $result = json_decode(file_get_contents($entrypoints), true);
        if (!isset($result['entrypoints'])) {
            return;
        }
        if (!isset($result['entrypoints']['app'])) {
            return;
        }
        if (!isset($result['entrypoints']['app']['css'])) {
            return;
        }

        foreach (['js', 'css'] as $type) {
            foreach ($result['entrypoints']['app'][$type] as $fileName) {
                $handle = pathinfo($fileName, PATHINFO_FILENAME);
                $handle = 'garumba-' . $handle;

                if ($type === 'css') {
                    wp_register_style($handle, $fileName);
                    wp_enqueue_style($handle);
                }

                if ($type === 'js') {
                    wp_register_script($handle, $fileName);
                    wp_enqueue_script($handle, '', [], false, true);
                }
            }
        }
    }
}

if (false === function_exists('garumba_setup')) {
    function garumba_setup()
    {
        load_theme_textdomain('garumba', get_template_directory() . '/languages');

        add_theme_support(
            'html5',
            array(
                'caption',
                'comment-form',
                'comment-list',
                'gallery',
                'navigation-widgets',
                'script',
                'search-form',
                'style',
            )
        );

        register_nav_menus(
            array(
                'primary' => esc_html__('Primary menu', 'garumba'),
                'footer' => __('Secondary menu', 'garumba'),
            )
        );

    }
}

add_action('wp_enqueue_scripts', 'garumba_enqueue_scripts');
add_action('after_setup_theme', 'garumba_setup');
