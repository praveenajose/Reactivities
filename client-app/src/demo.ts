const data: number = 10;

const data2: number | string = 10;
//data = 5;
console.log(data);
console.log(data2);

export interface Duck {
  name: string;
  numLeg: number;
  makeSound: (sound: string) => number;
}

const duck1: Duck = {
  name: "Sarah",
  numLeg: 2,
  makeSound: (sound: string) => {
    console.log(sound);
    return 1;
  },
};

const duck2: Duck = {
  name: "hema",
  numLeg: 4,
  makeSound: (sound: string) => {
    console.log(sound);
    return 1;
  },
};

duck1.numLeg = 3;

export const ducks = [duck1, duck2];
