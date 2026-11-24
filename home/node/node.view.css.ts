namespace $.$$ {

	$mol_style_define( $bog_dock_home_node, {

		position: 'absolute',
		transform: 'translate(-50%, -50%)',
		flex: {
			direction: 'column',
		},
		align: {
			items: 'center',
		},
		gap: '.25rem',
		padding: 0,
		color: $mol_theme.text,
		transition: 'opacity .2s',

		Icon: {
			objectFit: 'contain',
			transition: 'transform .2s',
		},

		Title: {
			position: 'absolute',
			top: '100%',
			margin: {
				top: '.25rem',
			},
			whiteSpace: 'nowrap',
			font: {
				size: '.75rem',
			},
		},

		':hover': {
			background: {
				color: 'transparent',
			},
			Icon: {
				transform: 'scale(1.15)',
			},
		},

		'@': {
			bog_dock_home_node_dim: {
				true: {
					opacity: .3,
				},
			},
		},

	} )

}
