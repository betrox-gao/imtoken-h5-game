import zhText from "@/common/lang/doc/zh.js";
import enText from "@/common/lang/doc/en.js";
import Vue from 'vue'
import VueI18n from './vue-i18n'
Vue.use(VueI18n);
const systemLang = navigator.language;

const cur_lang = systemLang ? (navigator.language.indexOf('zh')!==-1  ? 'zh' : 'en') : 'zh'
const i18n = new VueI18n({
    locale: cur_lang || 'en',
    messages: {  
            'zh': zhText,
            'en': enText
        }
})
export default i18n