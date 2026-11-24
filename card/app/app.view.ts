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
			const state = this.state()
			return [
				... state === 'search' ? [] : [ this.Card() ],
				... this.editable() ? [ this.Icon_edit(), this.Name_edit(), this.Hint_edit() ] : [],
				... state === 'ready' ? [] : [ this.Status() ],
				... state === 'failed' ? [ this.Retry() ] : [],
				... state === 'ready' ? [ this.Share() ] : [],
			]
		}

		state(): 'search' | 'saving' | 'failed' | 'ready' {
			try {
				if( !this.editable() ) return this.Card().name() ? 'ready' : 'search'
				return this.delivered() ? 'ready' : 'failed'
			} catch( error ) {
				if( !$mol_promise_like( error ) ) throw error
				return this.subj_editable() ? 'saving' : 'search'
			}
		}

		status() {
			const state = this.state()
			if( state === 'saving' ) return this.status_saving()
			if( state === 'failed' ) return this.status_failed()
			return this.status_search()
		}

		subj_editable() {
			try {
				return this.editable()
			} catch( error ) {
				if( !$mol_promise_like( error ) ) throw error
				return false
			}
		}

		@ $mol_mem
		delivered() {
			const subj = this.subj()!
			this.attempt()
			subj.name()
			subj.icon()
			subj.hint()
			this.$.$mol_wait_timeout( 500 )
			return $mol_wire_sync( this as $bog_dock_card_app ).push( subj.land() )
		}

		push( land: $giper_baza_land ) {
			return this.$.$bog_id_land_push([ land ])
		}

		retry() {
			this.attempt( this.attempt() + 1 )
			return null
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
