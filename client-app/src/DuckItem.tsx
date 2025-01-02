import { Duck } from "./demo";

interface Props {
  duck: Duck;
}

function DuckItem({ duck }: Props) {
  return (
    <div key={duck.name}>
      <span>{duck.name}</span>
      <button onClick={() => duck.makeSound(duck.name + " quack!!")}>
        Make Sound
      </button>
    </div>
  );
}

export default DuckItem;
