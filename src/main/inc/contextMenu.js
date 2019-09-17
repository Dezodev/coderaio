import contextMenu from 'electron-context-menu'

const isDev = process.env.NODE_ENV === 'development'

export default {
	create () {
		contextMenu({
			menu: actions => {
				let items = [
					actions.copy(),
					actions.cut(),
					actions.paste()
				];

				if (isDev) {
					items.push(actions.separator());
					items.push(actions.inspect());
				}

				return items;
			},
			labels: {
				copy: 'Copier',
				cut: 'Couper',
				paste: 'Coller',
				inspect: 'Inspecter'
			}
		})
	}
}
