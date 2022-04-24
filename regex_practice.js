const regexes = {
    canadianPostalCode: /^[A-CEG-HJ-NPR-TV-Z]\d[A-CEG-HJ-NPR-TV-Z] \d[A-CEG-HJ-NPR-TV-Z]\d$/,
    visa: /^4(\d{15}|\d{12})$/,
    masterCard: /^(5[1-5]\d{14}|(?:2[2-6]\d\d|27[0-1]\d|2720)\d{12})$/,
    adaFloat: /^(?:\d+\#(?:[\d+|[A-Fa-f*])*(?:_[0-9]*|[A-F]*\#)*(?:\.(?:[0-9]|[A-F])(?:_[\d*]|[A-Fa-f*]))*(?:[Ee](?:\+|-)\d+)*)$|^(?:\d+(?:\.\d+)*(?:[Ee](?:\+|-)\d+)*)$/,
    notThreeEndingInOO: /^\p{L}+(?<!(OO|Oo|oo|oO))$/u,
    divisibleBy32: /^0+$|^(?:0|1)*0{5}$/,
    sevenThroughThirtyOne: /^[7-9]$|^[12][0-9]$|^3[01]$/,
    
    mLComment: /\(\*.*\*\)/,
    notFileForFirstNoLookAround: /^(?!\sfile\s$|\sfor\s$|\sfirst\s$|^file$|^for$|^first$).*/,
    notFileForFirstWithLookAround: /^(?!.*(\sfile\s|\sfor\s|\sfirst\s|^file$|^for$|^first$)).*/,
    
    cOctal: /(0[0-7]*(?:[uU](?:ll|LL|[lL])?|(?:ll|LL|[lL])[uU]?)?)/,
    restrictedFloatingPoint: /[+-]?([0-9]*[.])?[0-9]{1,3}/,
    palindrome2358: /\([a-z]\)\([a-z]\)[a-z]\2\1/,
    noNegativeIntLits: /[A-Z]/,
    repeated: /[A-Z]/,
};

export function matches(name, string) {
    return regexes[name].test(string);
}
