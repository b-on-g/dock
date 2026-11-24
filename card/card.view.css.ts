namespace $.$$ {

	$mol_style_define( $bog_dock_card, {

		align: {
			items: 'center',
		},
		gap: '.75rem',
		padding: '.75rem',
		maxWidth: '24rem',
		background: {
			color: $mol_theme.card,
		},
		border: {
			radius: $mol_gap.round,
		},

		Icon: {
			font: {
				size: '2rem',
			},
			lineHeight: '1',
		},

		Info: {
			flex: {
				direction: 'column',
				grow: 1,
				shrink: 1,
			},
			minWidth: 0,
		},

		Name: {
			font: {
				weight: 'bold',
			},
		},

		Hint: {
			color: $mol_theme.shade,
		},

		Kind: {
			color: $mol_theme.shade,
			font: {
				size: '.75rem',
			},
		},

	} )

}
