<?php

if(false === is_search()) {
    return;
}

?>
<h1 class="page-title">
    <?php
    printf(
    /* translators: %s: search term. */
        esc_html__( 'Results for "%s"', 'garumba' ),
        '<span class="page-description search-term">' . esc_html( get_search_query() ) . '</span>'
    );
    ?>
</h1>

