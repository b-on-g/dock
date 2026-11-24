namespace $.$$ {

	$mol_style_define( $bog_dock_home, {

		flex: {
			direction: 'column',
			grow: 1,
		},
		align: {
			items: 'center',
		},
		justify: {
			content: 'center',
		},
		gap: '1rem',
		background: {
			color: $mol_theme.back,
		},

		Stage: {
			position: 'relative',
			flex: {
				shrink: 0,
			},
		},

		Lines: {
			position: 'absolute',
			width: '100%',
			height: '100%',
		},

		Caption: {
			color: $mol_theme.shade,
			minHeight: '1.5rem',
			textAlign: 'center',
		},

	} )

}
