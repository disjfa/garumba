<?php

get_header();

get_template_part('template-parts/search/search-results');

?>
    <v-products></v-products>
<?php

if (have_posts()) {

    // Load posts loop.
    while (have_posts()) {
        the_post();

        get_template_part('template-parts/content/content', get_theme_mod('display_excerpt_or_full_post', 'excerpt'));
    }

    the_posts_navigation();
} else {
    // If no content, include the "No posts found" template.
    get_template_part('template-parts/content/content-none');
}

get_footer();
