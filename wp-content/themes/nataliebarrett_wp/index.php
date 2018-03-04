<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package upwiththelarks
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

	<div class="hidden content-to-clone">

		<?php
		
		if ( have_posts() ) :
			if ( is_home() && ! is_front_page() ) : ?>
		<header>
			<h1 class="page-title screen-reader-text">

				// <?php single_post_title(); ?>

			</h1>
		</header>

		<?php

		endif;

		/* Start the Loop */
		while ( have_posts() ) : the_post();

					/*
					 * Include the Post-Format-specific template for the content.
					 * If you want to override this in a child theme, then include a file
					 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
					 */
					get_template_part( 'template-parts/content', get_post_format() );

					endwhile;

					the_posts_navigation();
					else :
						get_template_part( 'template-parts/content', 'none' );

					endif; ?>
				</div>

		<?php query_posts('post_type=page&order=ASC'); ?>	
		
		<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

			<div class="page-section" id=
			
			<?php the_title(); ?>
			
			>
			<div class="section-title">
				<p><?php the_title(); ?></p>
			</div>
			<div class="section-content">
				<?php the_content(); ?>
			</div>
			<div class="quote-content">
				<?php the_field('quote-content'); ?>
			</div>
		</div>

	<?php endwhile; endif; ?>





			</main><!-- #main -->
		</div><!-- #primary -->



























		<?php
		get_sidebar();
		get_footer();
