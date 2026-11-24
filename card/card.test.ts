namespace $.$$ {

	$mol_test({

		'link is found only in link argument'( $ ) {
			$mol_assert_equal( $bog_dock_card_find( 'see https://x.y/#!link=aaaaaaaa_bbbbbbbb ok' ), 'aaaaaaaa_bbbbbbbb' )
			$mol_assert_equal( $bog_dock_card_find( 'https://x.y/#!a=1/link=aaaaaaaa_bbbbbbbb' ), 'aaaaaaaa_bbbbbbbb' )
			$mol_assert_equal( $bog_dock_card_find( 'personal_property' ), '' )
			$mol_assert_equal( $bog_dock_card_find( '#!link=short' ), '' )
		},

		async 'card shows object without its class and follows changes'( $ ) {

			const land = await $mol_wire_async( ()=> {
				const land = $.$giper_baza_glob.land_grab()
				new $mol_wire_atom( 'bog_dock_card_test', ()=> $.$giper_baza_glob.Land( land.link() ) ).fresh()
				return land
			} )()

			const subj = land.Data( $giper_baza_flex_subj )
			await $mol_wire_async( subj ).name( 'First' )
			const card = $bog_dock_card.make({ $, link: ()=> land.link().str })
			$mol_assert_equal( await $mol_wire_async( card ).name(), 'First' )

			await $mol_wire_async( subj ).name( 'Second' )
			$mol_assert_equal( await $mol_wire_async( card ).name(), 'Second' )

		},

		async 'profile from ID wins over foreign name in the root of home'( $ ) {

			const land = await $mol_wire_async( ()=> {
				const land = $.$giper_baza_glob.land_grab()
				new $mol_wire_atom( 'bog_dock_card_test_profile', ()=> $.$giper_baza_glob.Land( land.link() ) ).fresh()
				return land
			} )()

			const dict = land.Data( $giper_baza_dict )
			await $mol_wire_async( ()=> dict.dive( 'Name', $giper_baza_atom, 'auto' )!.vary( 'Gram' ) )()
			const card = $bog_dock_card.make({ $, link: ()=> land.link().str })
			$mol_assert_equal( await $mol_wire_async( card ).name(), 'Gram' )

			await $mol_wire_async( ()=> dict.dive( 'bog_id', $giper_baza_dict, 'auto' )!.dive( 'Name', $giper_baza_atom, 'auto' )!.vary( 'Anna' ) )()
			$mol_assert_equal( await $mol_wire_async( card ).name(), 'Anna' )
			$mol_assert_equal( await $mol_wire_async( card ).icon(), '👤' )

		},

	})

}
