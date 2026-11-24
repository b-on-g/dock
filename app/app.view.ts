namespace $.$$ {
	export class $bog_dock_app extends $.$bog_dock_app {

		embedded() {
			const win = this.$.$mol_dom_context
			return win.parent !== win.self
		}

		wide() {
			return !this.embedded() && this.$.$mol_media.match( '(min-width: 60rem)' )
		}

		sub() {
			if( this.embedded() ) return [ this.Bar() ]
			return [ ... this.wide() ? [ this.Bar() ] : [], this.Home() ]
		}

	}
}
