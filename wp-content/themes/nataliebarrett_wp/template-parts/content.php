<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package NatalieBarrett_wp
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> style="background-color:<?php the_field('background_colour'); ?>;">
	<div class='close-button'><div class= 'bar1'></div><div class='bar3'></div></div>
	
	<div class="media-content hide">
		<?php the_field('media_link'); ?>
	</div>
	<div class="text-wrapper">
		<header class="entry-header">
			<?php
			if ( is_singular() ) :
				the_title( '<h3 class="entry-title">', '</h3>' );
			else :
				the_title( '<h3 class="entry-title"> ', '</h3>' );
			endif;

			if ( 'post' === get_post_type() ) : ?>
				
				<?php
			endif; ?>
		</header><!-- .entry-header -->

		<?php nataliebarrett_wp_post_thumbnail(); ?>

		<div class="entry-content">

			<?php
			the_content( sprintf(
				wp_kses(
					/* translators: %s: Name of current post. Only visible to screen readers */
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'nataliebarrett_wp' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				get_the_title()
			) );

			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'nataliebarrett_wp' ),
				'after'  => '</div>',
			) );
			?>

		</div><!-- .entry-content -->
	</div>
	<div class="image-media-wrapper">
		<div class="background-image"><img src=" <?php the_field('image'); ?>" /></div>
		
	</div>
	<footer class="entry-footer">
	</footer><!-- .entry-footer -->
</article><!-- #post-<?php the_ID(); ?> -->
