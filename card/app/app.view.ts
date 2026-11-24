namespace $.$$ {
	export class $bog_dock_card_app extends $.$bog_dock_card_app {

		link( next?: string ) {
			return this.$.$mol_state_arg.value( 'link', next ) ?? ''
		}

		@ $mol_mem
		subj() {
			const link = $giper_baza_link.check( this.link() )
			return link?.str ? this.$.$giper_baza_glob.Pawn( link, $giper_baza_flex_subj ) : null
		}

		rows() {
			if( !this.subj() ) return [ this.Create() ]
			return [
				this.Card(),
				... this.editable() ? [ this.Icon_edit(), this.Name_edit(), this.Hint_edit() ] : [],
				this.Share(),
			]
		}

		editable() {
			return this.subj()?.can_change() ?? false
		}

		icon_edit( next?: string ) {
			return this.subj()?.icon( next ) ?? ''
		}

		name_edit( next?: string ) {
			return this.subj()?.name( next ) ?? ''
		}

		hint_edit( next?: string ) {
			return this.subj()?.hint( next ) ?? ''
		}

		share() {
			return this.$.$mol_state_arg.make_link({ link: this.link() })
		}

		@ $mol_action
		create() {
			const land = this.$.$giper_baza_glob.land_grab([[ null, $giper_baza_rank_read ]])
			const subj = land.Data( $giper_baza_flex_subj )
			subj.meta( $giper_baza_flex_subj.meta )
			subj.icon( '💎' )
			this.link( land.link().str )
			return null
		}

	}
}
