export const captchaGenerator = () => {
  const stringPossibilities = "AeIoU159";
  let generatedCaptcha = "";
  for (const i of stringPossibilities) {
    const randomLetter = stringPossibilities.charAt(
      Math.floor(Math.random() * stringPossibilities.length)
    );
    generatedCaptcha += randomLetter;
  }
  console.log(generatedCaptcha);
  return generatedCaptcha;
};
