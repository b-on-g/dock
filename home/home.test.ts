namespace $.$$ {

	$mol_test({

		'ID is in center, focus leaves only connected apps bright'( $ ) {

			const home = $bog_dock_home.make({ $ })
			$mol_assert_equal( home.node_place( 0 ), [ 50, 50 ] )
			$mol_assert_equal( home.node_title( 0 ), 'ID' )
			$mol_assert_equal( home.links().every( link => link.from >= 0 && link.to >= 0 ), true )

			home.focus( 0 )
			const bright = home.apps().map( ( _, i )=> i ).filter( i => !home.node_dim( i ) ).map( i => home.node_title( i ) )
			$mol_assert_equal( bright, [ 'ID', 'Molefy', 'Merchquarium' ] )

		},

	})

}
