export function generateDesc() {
	let result = '';
	const characters = 'abcdefghijklmnopqrstuvwxyz';
	for (var i = 0; i < 50; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(result);
		}, 1000);
	});
}
