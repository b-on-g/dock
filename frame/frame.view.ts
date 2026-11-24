namespace $.$$ {
	export class $bog_dock_frame extends $.$bog_dock_frame {

		@ $mol_mem
		uri() {
			return super.uri().replace( /^[^#]*/, this.host() )
		}

	}
}
