/**
 * @description
 * Determines if a reference is a String empty.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if value is a Empty.
 */
export function isEmpty(value) {
	return (typeof value == "undefined" || value == null || value === "" || value == "null");
}

/**
 * @description
 * Determines if a reference is a String not Empty.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if value is a NoEmpty.
 */
export function isNoEmpty(value) {
	return (typeof value != "undefined" && value != null && value !== "" && value !== "null");
}

/**
 * Rola para o início da página.
 */
 export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}