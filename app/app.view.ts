namespace $.$$ {
	export class $bog_dock_app extends $.$bog_dock_app {

		embedded() {
			const win = this.$.$mol_dom_context
			return win.parent !== win.self
		}

		sub() {
			return [ this.embedded() ? this.Bar() : this.Home() ]
		}

	}
}
