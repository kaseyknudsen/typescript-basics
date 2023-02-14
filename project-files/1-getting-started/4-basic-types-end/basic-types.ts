let hasSuperPowers: boolean;

hasSuperPowers = true;
hasSuperPowers = false;
hasSuperPowers = Boolean(0);
hasSuperPowers = Boolean(1);
hasSuperPowers = !!'true';
hasSuperPowers = !!'';

// console.log(hasSuperPowers);

let heightInCM: number = 188;

heightInCM = Number(true);
heightInCM = Number('188');
heightInCM = +('188');
heightInCM = +(false);

let hero: string;

hero = "Batman";
hero = String(122);
hero = String(true);
hero = (122).toString();

console.log(hero);

/* The line below is used to prevent duplicate variables.
Please don't copy it to thje `=begin` folder */
export {};
