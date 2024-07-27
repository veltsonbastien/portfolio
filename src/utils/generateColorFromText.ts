export const generateColorFromText = (text: string) => {
  const lowerCaseText = text.toLowerCase();
  const textLength = lowerCaseText.length;

  const r = Math.floor(mapTo255Range(lowerCaseText.charCodeAt(0)));
  const g = Math.floor(mapTo255Range(lowerCaseText.charCodeAt(textLength / 2)));
  const b = Math.floor(mapTo255Range(lowerCaseText.charCodeAt(textLength - 1)));

  return rgbToHex(r, g, b);
};

//copied from: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb:
const rgbToHex = (r: number, g: number, b: number) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

//used chatgpt to help me figure this out:
const mapTo255Range = (n: number): number => (n - 97) * 10.2;
