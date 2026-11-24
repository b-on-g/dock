namespace $ {

	$mol_test({

		'frame opens own dock with lights, current app and query'( $ ) {

			const frame = $bog_dock_frame.make({
				$,
				query: ()=> 'a/b c',
			})

			const [ host, hash ] = frame.uri().split( '#' )
			$mol_assert_equal( host, 'https://b-on-g.github.io/dock/' )
			$mol_assert_equal( hash.includes( 'query=a%2Fb%20c' ), true )
			$mol_assert_equal( hash.includes( '{' ), false )

		},

	})

}
