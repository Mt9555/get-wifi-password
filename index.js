#!/usr/bin/env node

/**
 * get-wifi-pwd
 * A node cli to ge tool to get current wifi password
 *
 * @author mt-new <kjkjdfdf>
 */


const alert = require('cli-alerts')
const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const wifiPassword = require('wifi-password');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);


	const password = await wifiPassword();

	alert({
		type : `info`,
		name : `wifi password`,
		msg : password
	})

	debug && log(flags);
})();
