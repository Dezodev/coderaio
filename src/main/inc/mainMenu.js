import { Menu, MenuItem, app } from 'electron'
import { ELECTRON_RELAUNCH_CODE } from '../../../.electron-nuxt/config'


export default {
	create (isDev = false) {
		const isMac = process.platform === 'darwin'

		// Build file submenu
		let file_submenu = [
			isMac ? { role: 'close' } : { role: 'quit' },
		];

		if (isDev) {
			file_submenu.push({
				label: 'Relaunch electron',
				accelerator: 'CommandOrControl+E',
				click: () => {
					app.exit(ELECTRON_RELAUNCH_CODE)
				}
			})
		}

		const template = [
			// { role: 'appMenu' }
			...(isMac ? [{
				label: app.getName(),
				submenu: [
					{ role: 'about' },
					{ type: 'separator' },
					{ role: 'services' },
					{ type: 'separator' },
					{ role: 'hide' },
					{ role: 'hideothers' },
					{ role: 'unhide' },
					{ type: 'separator' },
					{ role: 'quit' },
				]
			}] : []),
			// { role: 'fileMenu' }
			{
				label: 'File',
				submenu: file_submenu
			},
			// { role: 'editMenu' }
			{
				label: 'Edit',
				submenu: [
					{ role: 'undo' },
					{ role: 'redo' },
					{ type: 'separator' },
					{ role: 'cut' },
					{ role: 'copy' },
					{ role: 'paste' },
					...(isMac ? [
						{ role: 'pasteAndMatchStyle' },
						{ role: 'delete' },
						{ role: 'selectAll' },
						{ type: 'separator' },
						{
							label: 'Speech',
							submenu: [
							{ role: 'startspeaking' },
							{ role: 'stopspeaking' }
							]
						}
					] : [
						{ role: 'delete' },
						{ type: 'separator' },
						{ role: 'selectAll' }
					])
				]
			},
			// { role: 'viewMenu' }
			{
				label: 'View',
				submenu: [
					{ role: 'reload' },
					{ role: 'forcereload' },
					{ role: 'toggledevtools' },
					{ type: 'separator' },
					{ role: 'resetzoom' },
					{ role: 'zoomin' },
					{ role: 'zoomout' },
					{ type: 'separator' },
					{ role: 'togglefullscreen' }
				]
			},
			// { role: 'windowMenu' }
			{
				label: 'Window',
				submenu: [
					{ role: 'minimize' },
					{ role: 'zoom' },
					...(isMac ? [
						{ type: 'separator' },
						{ role: 'front' },
						{ type: 'separator' },
						{ role: 'window' }
					] : [
						{ role: 'close' }
					])
				]
			},
			{
				role: 'help',
				submenu: [
					{
						label: 'Learn More',
						click: async () => {
							const { shell } = require('electron')
							await shell.openExternal('https://electronjs.org')
						}
					}
				]
			}
		]


		const menu = Menu.buildFromTemplate(template)
		Menu.setApplicationMenu(menu)

		// // Add menu item
		// const refreshButton = new MenuItem({
		// 	label: 'Relaunch electron',
		// 	accelerator: 'CommandOrControl+E',
		// 	click: () => {
		// 		app.exit(ELECTRON_RELAUNCH_CODE)
		// 	}
		// })
		// menu.append(refreshButton)
	}
}
