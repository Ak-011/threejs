/* eslint-disable no-useless-escape */
export const isValidEmail = (email?: string): boolean => {
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email ?? '').toLowerCase());
};

export const isValidContactNo = (contactNo: string): boolean => {
    const re = /^([+]?[0-9]{1,3})?[0-9]{10}$/;
    return re.test(String(contactNo).toLowerCase());
};

export const validateString = (value?: string) => value && value.length !== 0;

/**
 * @param strings Comma separated string to be tested
 * @return boolean True if all strings are valid
 */
export const validateStrings = (...strings: string[]) => {
    if (strings.length > 0) return strings.every((value) => validateString(value));
    return false;
};

export const validateStringArray = (arr: string[]) => {
    if (arr.length > 0) {
        return arr.every((value) => validateString(value));
    }
    return false;
};

export const validateRegex = (pattern: string, str: string) => {
    const patt = new RegExp(pattern);
    return patt.test(str);
};
