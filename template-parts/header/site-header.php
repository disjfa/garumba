<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="<?php echo home_url(); ?>/"><?php bloginfo('name'); ?></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary" aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar-primary">
        <?php
        wp_nav_menu(
            array(
                'theme_location' => 'primary',
                'depth' => 2, // 1 = no dropdowns, 2 = with dropdowns.
                'container' => null,
                'container_class' => 'mr-auto',
                'container_id' => null,
                'menu_class' => 'navbar-nav mr-auto',
                'fallback_cb' => 'WP_Bootstrap_Navwalker::fallback',
                'walker' => new WP_Bootstrap_Navwalker(),
            )
        );

        get_search_form();
        ?>
    </div>
  </div>
</nav>
