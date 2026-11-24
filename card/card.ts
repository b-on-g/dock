namespace $ {

	/** Baza link from `#!link=...` inside of text */
	export function $bog_dock_card_find( text: string ) {
		const str = text.match( /[#!/]link=([a-zæA-ZÆ0-9_]+)/ )?.[1] ?? ''
		return str.length >= 17 && $giper_baza_link.check( str ) ? str : ''
	}

}
