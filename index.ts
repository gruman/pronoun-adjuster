const adjustPronouns = (text: string, pronoun1: string, pronoun2: string, name?: string): string => {
  return text
    .replace(/\[P1\]/g, (match, offset, fullText) => {
      const isStart = offset === 0 || /[.?!]\s{0,3}$/.test(fullText.slice(0, offset));
      return isStart ? pronoun1.charAt(0).toUpperCase() + pronoun1.slice(1) : pronoun1.toLowerCase();
    })
    .replace(/\[P2\]/g, pronoun2 ? pronoun2.toLowerCase() : '')
    .replace(/\[NAME\]/g, name ? name : '');
};

export default adjustPronouns;