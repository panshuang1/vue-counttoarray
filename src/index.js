import CountToArray from './vue-countToArray.vue';
export default CountToArray;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('count-to-array', CountToArray);
}
