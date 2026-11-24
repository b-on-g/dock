namespace $.$$ {
	export class $bog_dock_side extends $.$bog_dock_side {

		static swipe_min = 16

		embedded() {
			const win = this.$.$mol_dom_context
			return win.parent !== win.self
		}

		popup() {
			return Boolean( this.$.$mol_dom_context.opener )
		}

		@ $mol_mem
		mode() {
			if( this.embedded() || this.popup() ) return 'none'
			return this.$.$mol_media.match( '(min-width: 60rem)' ) ? 'wide' : 'narrow'
		}

		@ $mol_mem
		used( next = false ) {
			return next
		}

		@ $mol_mem
		opened( next = false ) {
			return next
		}

		@ $mol_action
		toggle( next: boolean ) {
			if( next ) this.used( true )
			this.opened( next )
		}

		close() {
			this.toggle( false )
			return null
		}

		tab_expanded() {
			return String( this.opened() )
		}

		grab_x = 0
		swiped = false

		tab_grab( event?: PointerEvent ) {
			if( !event ) return null
			this.grab_x = event.clientX
			this.swiped = false
			const node = event.currentTarget as Element | null
			node?.setPointerCapture?.( event.pointerId )
			return null
		}

		tab_move( event?: PointerEvent ) {
			if( !event || !event.buttons || this.swiped ) return null
			const shift = event.clientX - this.grab_x
			if( Math.abs( shift ) < $bog_dock_side.swipe_min ) return null
			this.swiped = true
			this.toggle( shift > 0 )
			return null
		}

		tab_click( event?: Event ) {
			if( !event ) return null
			if( this.swiped ) this.swiped = false
			else this.toggle( !this.opened() )
			return null
		}

		lights() {
			type Themed = { is_light_now?(): boolean }
			const root = this.$.$mol_view.roots()[0] as unknown as undefined | { Theme?(): Themed, Theme_auto?(): Themed }
			const theme = root?.Theme?.() ?? root?.Theme_auto?.()
			return theme?.is_light_now?.() ?? this.$.$mol_lights()
		}

		sub() {
			const mode = this.mode()
			if( mode === 'none' ) return []
			if( mode === 'wide' ) return [ this.Frame() ]
			return [
				... this.opened() ? [ this.Shade() ] : [],
				... this.used() ? [ this.Frame() ] : [],
				this.Tab(),
			]
		}

	}
}
