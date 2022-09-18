export function getFullAge(dateOfBirth) {
  const age = new Date().getFullYear() - dateOfBirth;
  const ending = age.toString()[age.toString().length - 1];
  let years;
  if (ending === "1") {
    years = "год";
  } else if (ending === "2" || ending === "3" || ending === "3") {
    years = "года";
  } else {
    years = "лет";
  }
  return `${age} ${years}`;
}
