namespace $.$$ {

	$mol_style_define( $bog_dock_bar, {

		width: '4rem',
		background: {
			color: $mol_theme.back,
		},
		border: {
			radius: 0,
			right: {
				width: '1px',
				style: 'solid',
				color: $mol_theme.line,
			},
		},

		Head: {
			padding: 0,
			justify: {
				content: 'center',
			},
			align: {
				items: 'center',
			},
			background: {
				color: 'transparent',
			},
			border: {
				radius: 0,
				bottom: {
					width: '1px',
					style: 'solid',
					color: $mol_theme.line,
				},
			},
			box: {
				shadow: 'none',
			},
		},

		Body_content: {
			padding: {
				top: '.5rem',
				bottom: '.5rem',
				left: '.5rem',
				right: '.5rem',
			},
			gap: '.25rem',
		},

		Foot: {
			padding: {
				top: '.5rem',
				bottom: '.5rem',
				left: 0,
				right: 0,
			},
			justify: {
				content: 'center',
			},
			background: {
				color: 'transparent',
			},
			border: {
				radius: 0,
				top: {
					width: '1px',
					style: 'solid',
					color: $mol_theme.line,
				},
			},
			box: {
				shadow: 'none',
			},
		},

		$giper_web_bar_link: {

			width: '3rem',
			height: '3rem',
			padding: 0,
			position: 'relative',
			justify: {
				content: 'center',
			},
			align: {
				items: 'center',
			},
			border: {
				radius: '.5rem',
			},

		},

	} )

}
