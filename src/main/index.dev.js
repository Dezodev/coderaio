import { app } from 'electron'
import electronDebug from 'electron-debug'
import vueDevtools from 'vue-devtools'
import mainWinHandler from './inc/mainWindow'
import mainMenu from './inc/mainMenu'
import contextMenu from './inc/contextMenu'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

electronDebug({
	showDevTools: false,
	devToolsMode: 'right'
})

app.on('ready', () => {
	vueDevtools.install()

	mainMenu.create()
	contextMenu.create()
})


mainWinHandler.onCreated(browserWindow => {
	browserWindow.webContents.openDevTools()
})

// Require `main` process to boot app
require('./index')
