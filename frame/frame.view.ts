namespace $.$$ {
	export class $bog_dock_frame extends $.$bog_dock_frame {

		lights() {
			return this.$.$mol_lights()
		}

		@ $mol_mem
		uri() {
			return super.uri()
				.replace( /^[^#]*/, this.host() )
				.replace( /mol_lights=\w+/, `mol_lights=${ this.lights() }` )
		}

	}
}
