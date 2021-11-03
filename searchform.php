<?php
$garumba_unique_id = wp_unique_id('search-form-');
$garumba_aria_label = !empty($args['aria_label']) ? 'aria-label="' . esc_attr($args['aria_label']) . '"' : '';
?>
<form role="search" <?php echo $garumba_aria_label; ?> method="get" class="search-form form-inline my-2 my-lg-0" action="<?php echo esc_url(home_url('/')); ?>">
  <div class="input-group">
    <input type="search" id="<?php echo esc_attr($garumba_unique_id); ?>" class="search-field form-control" value="<?php echo get_search_query(); ?>" name="s"/>
    <button class="btn btn-primary input-group-append" type="submit">
        <?php echo esc_html_x('Search', 'submit button', 'garumba'); ?>
    </button>
  </div>
</form>
