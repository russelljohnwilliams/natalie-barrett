<?php
/**
 * Update class for Mesh
 *
 * @since      1.1.0
 * @package    Mesh
 * @subpackage Upgrades
 */

// Make sure we don't expose any info if called directly.
if ( ! function_exists( 'add_action' ) ) {
	exit;
}

/**
 * Class Mesh_Upgrades
 */
class Mesh_Upgrades {

	/**
	 * Mesh_Upgrades constructor.
	 */
	function __construct() {
		add_action( 'admin_init', array( $this, 'admin_init' ) );
	}

	/**
	 * Perform any upgrades needed.
	 */
	function admin_init() {

		if ( isset( $GLOBALS['mesh_current_version'] ) ) {
			if ( version_compare( $GLOBALS['mesh_current_version'], '1.0', '<' ) ) {
				$this->version_1_0();
			}

			if ( version_compare( $GLOBALS['mesh_current_version'], '1.1.0', '<' ) ) {
				$this->version_1_1();
			}

			// Latest Version.
			if ( version_compare( $GLOBALS['mesh_current_version'], '1.2.3', '<' ) ) {
				$this->update_version( '1.2.3' );
			}
		}
	}

	/**
	 * Upgrade to version 1.0 by ensuring the default post types are selected.
	 */
	function version_1_0() {

		$settings = get_option( 'mesh_post_types' );

		if ( ! empty( $settings ) ) {
			return;
		}

		$this->post_types = get_post_types();

		if ( empty( $this->post_types ) ) {
			return;
		}

		$default_post_types = array();

		foreach ( $this->post_types as $post_type ) {
			$post_type_object = get_post_type_object( $post_type );

			if ( in_array( $post_type, array( 'revision', 'nav_menu_item', 'attachment' ), true ) || ! $post_type_object->public ) {
				continue;
			}

			$default_post_types[] = $post_type;
		}

		if ( ! empty( $default_post_types ) ) {
			update_option( 'mesh_post_types', $default_post_types );
		}

		$this->update_version( '1.0' );
	}

	/**
	 * Upgrade to version 1.1
	 *
	 * Add mesh_templates to available post types that allow mesh_section
	 */
	function version_1_1() {

		if ( empty( $this->post_types ) ) {

			$this->post_types = get_post_types();

			if ( empty( $this->post_types ) ) {
				return;
			}
		}

		$available_post_types = get_option( 'mesh_post_types', array() );

		// If for some reason we do not have default templates make sure we have pages at minimum.
		if ( empty( $available_post_types ) ) {
			$available_post_types['pages'] = 1;
		}

		$available_post_types['mesh_template'] = 1;

		update_option( 'mesh_post_types', $available_post_types );

		// Add our taxonomy terms.
		wp_insert_term( 'reference', 'mesh_template_types' );
		wp_insert_term( 'starter', 'mesh_template_types' );

		$this->update_version( '1.1' );
	}

	/**
	 * Utility method to update version numbers
	 *
	 * @param string $version Version # to save.
	 */
	function update_version( $version ) {

		if ( empty( $version ) ) {
			return;
		}

		$version = sanitize_text_field( $version );

		update_option( 'mesh_version', $version );
		$GLOBALS['mesh_current_version'] = $version;
	}
}

$mesh_upgrades = new Mesh_Upgrades();
