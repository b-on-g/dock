namespace $.$$ {

	type Kind = 'login' | 'embed'

	export class $bog_dock_home extends $.$bog_dock_home {

		apps() {
			return this.bar().apps() as readonly $.$$.$giper_web_bar_link[]
		}

		@ $mol_mem
		links() {
			const bar = this.bar()
			const apps = this.apps() as readonly unknown[]
			const pairs = [
				[ bar.Id(), bar.Molefy(), 'login' ],
				[ bar.Id(), bar.Merch(), 'login' ],
				[ bar.Gram(), bar.Music(), 'embed' ],
			] as [ unknown, unknown, Kind ][]
			return pairs.map( ([ from, to, kind ])=> ({ from: apps.indexOf( from ), to: apps.indexOf( to ), kind }) )
		}

		nodes() {
			return this.apps().map( ( _, index )=> this.Node( index ) )
		}

		stage() {
			return [ this.Lines(), ... this.nodes() ]
		}

		lines() {
			return [ this.Orbit(), ... this.links().map( ( _, index )=> this.Line( index ) ) ]
		}

		node_title( index: number ) {
			return this.apps()[ index ].title()
		}

		node_uri( index: number ) {
			return this.apps()[ index ].uri_toggle()
		}

		node_icon( index: number ) {
			return this.apps()[ index ].icon()
		}

		node_main( index: number ) {
			return index === 0
		}

		node_place( index: number ) {
			if( index === 0 ) return [ 50, 50 ]
			const angle = ( ( index - 1 ) / ( this.apps().length - 1 ) - .25 ) * 2 * Math.PI
			return [ Math.cos( angle ), Math.sin( angle ) ].map( part => Math.round( ( 50 + part * Number( this.orbit() ) ) * 100 ) / 100 )
		}

		node_hover( index: number, next?: Event ) {
			if( next ) this.focus( index )
			return null
		}

		node_leave( next?: Event ) {
			if( next ) this.focus( -1 )
			return null
		}

		focus_links() {
			return this.links().filter( link => link.from === this.focus() || link.to === this.focus() )
		}

		node_dim( index: number ) {
			const focus = this.focus()
			if( focus === -1 || focus === index ) return false
			return !this.focus_links().some( link => link.from === index || link.to === index )
		}

		line_kind( index: number ) {
			return this.links()[ index ].kind
		}

		line_dim( index: number ) {
			return this.focus() !== -1 && !this.focus_links().includes( this.links()[ index ] )
		}

		line_geometry( index: number ) {
			const { from, to } = this.links()[ index ]
			const start = this.node_place( from )
			const end = this.node_place( to )
			const bend = [ 0, 1 ].map( axis => ( start[ axis ] + end[ axis ] ) / 2 * .6 + 50 * .4 )
			return `M ${ start.join( ' ' ) } Q ${ bend.join( ' ' ) } ${ end.join( ' ' ) }`
		}

		caption() {
			const focus = this.focus()
			if( focus === -1 ) return super.caption()
			const labels = { login: this.label_login(), embed: this.label_embed() }
			const parts = ( [ 'login', 'embed' ] as const ).flatMap( kind => {
				const names = this.focus_links().filter( link => link.kind === kind )
					.map( link => this.node_title( link.from === focus ? link.to : link.from ) )
				return names.length ? [ `${ labels[ kind ] }: ${ names.join( ', ' ) }` ] : []
			} )
			return `${ this.node_title( focus ) }. ${ parts.join( '; ' ) || this.label_none() }`
		}

	}
}
