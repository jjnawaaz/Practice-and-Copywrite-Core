// Data Privacy Encapsulation

function secretHolder() {
  let secret = "Iam Batman";
  return {
    getSecret: () => secret,
    setSecret: (newSecret) => (secret = newSecret),
  };
}

const hero = secretHolder();
console.log(hero.getSecret());
hero.setSecret("Iam Spiderman");
console.log(hero.getSecret());
