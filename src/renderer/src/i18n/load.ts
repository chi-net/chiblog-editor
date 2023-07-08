import en from './en'
import zh from './zh'

function $lang(lang: string): void {
  // initalize
  localStorage.setItem('lang', lang)
  location.reload()
}

function $t(key: string): string {
  let lang: string
  if (localStorage.getItem('lang') !== null) {
    lang = localStorage.getItem('lang') || 'en'
  } else lang = navigator.language
  if (lang.indexOf('zh') !== -1) {
    if (zh[key] === undefined && en[key] !== undefined) return en[key]
    else return zh[key] || 'not found this key'
  } else {
    return en[key] || 'not found this key'
  }
}

function $l(): string {
  let lang: string
  if (localStorage.getItem('lang') !== null) {
    lang = localStorage.getItem('lang') || 'en'
  } else lang = navigator.language
  return lang
}

export { $t, $lang, $l }
