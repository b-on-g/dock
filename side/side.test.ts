namespace $.$$ {

	$mol_test({

		'dock is shown only on wide screen and never inside of frame'( $ ) {

			const make = ( wide: boolean, embedded: boolean )=> $bog_dock_side.make({
				$: $.$mol_ambient({
					$mol_media: class extends $mol_media {
						static match() { return wide }
					},
				}),
				embedded: ()=> embedded,
			})

			$mol_assert_equal( make( true, false ).sub().length, 1 )
			$mol_assert_equal( make( false, false ).sub().length, 0 )
			$mol_assert_equal( make( true, true ).sub().length, 0 )

		},

	})

}
