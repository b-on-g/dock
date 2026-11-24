namespace $.$$ {
	export class $bog_dock_side extends $.$bog_dock_side {

		embedded() {
			const win = this.$.$mol_dom_context
			return win.parent !== win.self
		}

		shown() {
			return !this.embedded() && this.$.$mol_media.match( '(min-width: 60rem)' )
		}

		lights() {
			type Themed = { is_light_now?(): boolean }
			const root = this.$.$mol_view.roots()[0] as unknown as undefined | { Theme?(): Themed, Theme_auto?(): Themed }
			const theme = root?.Theme?.() ?? root?.Theme_auto?.()
			return theme?.is_light_now?.() ?? this.$.$mol_lights()
		}

		sub() {
			return this.shown() ? super.sub() : []
		}

	}
}
