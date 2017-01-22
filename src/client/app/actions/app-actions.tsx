export const SET_LANGUAGE = "SET_LANGUAGE";

export function setLanguage(lang:string) {
    return {
        type: SET_LANGUAGE,
        lang: lang
    }
}