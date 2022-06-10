/*
 * @Description   : 
 * @usage         : 
 * @Date          : 2022-04-19 09:32:39
 * @Author        : hadeshe93<hadeshe93@gmail.com>
 * @LastEditors   : hadeshe93<hadeshe93@gmail.com>
 * @LastEditTime  : 2022-04-26 08:41:31
 * @FilePath      : /webpack5-starter/packages/webpack5-starter-vue3/src/main.js
 */
import { createApp } from 'vue';
import App from './app.vue';
import { get as getCookie } from '../utils/cookie';
import text from './text.txt';
import readme from './readme.md';
import './styles/style.scss';

createApp(App).mount('#app');

console.log('text:', text);
console.log('readme:', readme);
console.log(getCookie('person_id_wsbeacon'));