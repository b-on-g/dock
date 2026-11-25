namespace $.$$ {
	export class $bog_dock_bar_link extends $.$bog_dock_bar_link {

		about_hint() {
			return [ this.title(), this.about() ].filter( Boolean ).join( '. ' )
		}

	}
}
