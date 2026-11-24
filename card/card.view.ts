namespace $.$$ {
	export class $bog_dock_card extends $.$bog_dock_card {

		@ $mol_mem
		pawn() {
			const link = $giper_baza_link.check( this.link() )
			return link?.str ? this.$.$giper_baza_glob.Pawn( link, $giper_baza_dict ) : null
		}

		@ $mol_mem
		meta() {
			const link = this.pawn()?.meta()
			return link ? this.$.$giper_baza_glob.Pawn( link, $giper_baza_dict ) : null
		}

		pick( pawn: $giper_baza_dict | null, ... keys: string[] ) {
			for( const key of keys ) {
				const val = pawn?.dive( key, $giper_baza_atom )?.vary()
				if( typeof val === 'string' && val ) return val
			}
			return ''
		}

		@ $mol_mem
		profile() {
			return this.pawn()?.dive( 'bog_id', $giper_baza_dict ) ?? null
		}

		@ $mol_mem
		profile_name() {
			return this.pick( this.profile(), 'Name' )
		}

		@ $mol_mem
		name() {
			return this.profile_name() || this.pick( this.pawn(), 'Subj:Name', 'Title', 'Name' )
		}

		@ $mol_mem
		descr() {
			return this.pick( this.pawn(), 'Subj:Hint', 'Hint', 'Artist', 'Note' )
		}

		@ $mol_mem
		kind() {
			if( this.profile_name() ) return this.profile_kind()
			return this.pick( this.meta(), 'Subj:Name' )
		}

		@ $mol_mem
		icon() {
			if( this.profile_name() ) return '👤'
			return this.pick( this.pawn(), 'Subj:Icon', 'Icon' ) || this.pick( this.meta(), 'Subj:Icon' ) || '💠'
		}

		uri() {
			return `${ this.host() }#!link=${ this.link() }`
		}

	}
}
