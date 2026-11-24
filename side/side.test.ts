namespace $.$$ {

	$mol_test({

		'wide has bar, narrow has tab only, frame has nothing'( $ ) {

			const make = ( wide: boolean, embedded: boolean )=> $bog_dock_side.make({
				$: $.$mol_ambient({
					$mol_media: class extends $mol_media {
						static match() { return wide }
					},
				}),
				embedded: ()=> embedded,
				popup: ()=> false,
			})

			const wide = make( true, false )
			$mol_assert_equal( wide.sub(), [ wide.Frame() ] )

			const narrow = make( false, false )
			$mol_assert_equal( narrow.sub(), [ narrow.Tab() ] )

			$mol_assert_equal( make( true, true ).sub(), [] )
			$mol_assert_equal( make( false, true ).sub(), [] )

		},

		'tab opens by click and by swipe, click after swipe changes nothing'( $ ) {

			const side = $bog_dock_side.make({ $, mode: ()=> 'narrow' })
			const pointer = ( clientX: number )=> ({ clientX, buttons: 1, pointerId: 1 }) as PointerEvent
			const click = {} as Event

			side.tab_click( click )
			$mol_assert_equal( side.sub(), [ side.Shade(), side.Frame(), side.Tab() ] )

			side.close()
			$mol_assert_equal( side.sub(), [ side.Frame(), side.Tab() ] )

			side.tab_grab( pointer( 2 ) )
			side.tab_move( pointer( 10 ) )
			$mol_assert_equal( side.opened(), false )

			side.tab_move( pointer( 40 ) )
			side.tab_click( click )
			$mol_assert_equal( side.opened(), true )

			side.tab_grab( pointer( 70 ) )
			side.tab_move( pointer( 30 ) )
			side.tab_click( click )
			$mol_assert_equal( side.opened(), false )

		},

	})

}
