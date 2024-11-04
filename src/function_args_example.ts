// function ageAndName({
//   age,
//   name,
//   city,
//   country,
// }: {
//   age: number;
//   name: string;
//   city: string;
//   country: string;
// }) {
//   return `vecums: ${age} vārds: ${name} dzīvesvieta: ${city}, ${country}`;
// }

function ageAndName(age: number, name: string, city: string, country: string) {
  return `vecums: ${age} vārds: ${name} dzīvesvieta: ${city}, ${country}`;
}

// const result = ageAndName(18, "Matīss", "Rīga", "Latvija");
//   age: 18,
//   name: "Matīss",
//   city: "Rīga",
//   country: "Latvija",
// });

const result = ageAndName(18, "Matīss", "Rīga", "Latvija");

console.log(result);
