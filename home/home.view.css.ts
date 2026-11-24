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

		Head: {
			margin: 0,
			gap: '.5rem',
			font: {
				size: '2.5rem',
				weight: 500,
			},
			lineHeight: '1',
			color: $mol_theme.text,
		},

		Head_accent: {
			color: $mol_theme.special,
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
			font: {
				size: '.875rem',
			},
			minHeight: '1.5rem',
			textAlign: 'center',
		},

	} )

}
