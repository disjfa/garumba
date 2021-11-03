<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <header class="entry-header">
      <?php if (is_singular()) : ?>
          <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
      <?php else : ?>
          <?php the_title(sprintf('<h2 class="entry-title"><a href="%s">', esc_url(get_permalink())), '</a></h2>'); ?>
      <?php endif; ?>
  </header><!-- .entry-header -->

  <div class="entry-content">
    <div id="shopify-products" v-scope @mounted="mounted">
      <div class="row">
        <div class="col-md-4 col-12" v-for="product in products">
          <h3>{{ product.title }}</h3>
          <img :src="product.selectedImage" alt="" v-if="product.selectedImage" class="img-fluid">
          <p v-html="product.description"></p>
        </div>
      </div>
    </div>
    <hr>
    <hr>
      <?php
      the_content('Read more');

      wp_link_pages(
          array(
              'before' => '<nav class="page-links" aria-label="' . esc_attr__('Page', 'garumba') . '">',
              'after' => '</nav>',
              /* translators: %: page number. */
              'pagelink' => esc_html__('Page %', 'garumba'),
          )
      );
      ?>
  </div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
