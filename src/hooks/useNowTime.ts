import { ref } from 'vue';

const nowTime = ref('00:00:00');
const getNowTime = () => {
	const now = new Date();
	const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
	const minu = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
	const sec = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
	nowTime.value = `${hour}:${minu}:${sec}`;
	setTimeout(getNowTime, 1000);
};
export { nowTime, getNowTime };

// function dateFormat(date, format = 'YYYY-MM-DD HH:mm:ss') {
// 	const config = {
// 		YYYY: date.getFullYear(),
// 		MM: date.getMonth() + 1,
// 		DD: date.getDate(),
// 		HH: date.getHours(),
// 		mm: date.getMinutes(),
// 		ss: date.getSeconds(),
// 	};
// 	config.MM < 10 ? (config.MM = '0' + config.MM) : config.MM;
// 	config.DD < 10 ? (config.DD = '0' + config.DD) : config.DD;
// 	config.HH < 10 ? (config.HH = '0' + config.HH) : config.HH;
// 	config.mm < 10 ? (config.mm = '0' + config.mm) : config.mm;
// 	config.ss < 10 ? (config.ss = '0' + config.ss) : config.ss;
// 	for (const key in config) {
// 		format = format.replace(key, config[key]);
// 	}
// 	return format;
// }
