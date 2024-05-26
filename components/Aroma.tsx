import { Signal } from "@preact/signals";
import { useState } from "preact/hooks";
import {
  AromaType,
  CategoryType,
  getCategory,
  getTastes,
} from "../data/aromas.ts";

type Props = {
  aroma: AromaType;
  selectedTastes: Signal<string[]>;
};

function Aroma({ aroma, selectedTastes }: Props) {
  const categories = getCategory(aroma);
  const [tastes, setTastes] = useState([]);

  return (
    <>
      <h2 class="font-bold text-center mb-5 pacifico-regular text-2xl relative">
        {aroma} {tastes.length > 0 && (
          <button
            class="absolute top-2 right-2"
            onClick={() => setTastes([])}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </h2>
      <ul class="flex flex-wrap gap-2">
        {tastes.length
          ? tastes.map((taste: string) => (
            <li key={taste}>
              <button
                onClick={() => {
                  selectedTastes.value = [...selectedTastes.value, taste];
                  setTastes([]);
                }}
                class="capitalize px-3 rounded-md badge"
              >
                {taste.replaceAll("_", " ")}
              </button>
            </li>
          ))
          : categories.map((category: CategoryType<typeof aroma>) => (
            <li key={category}>
              <button
                onClick={() => {
                  setTastes(getTastes(aroma, category));
                }}
                class="capitalize px-3 rounded-md badge"
              >
                {category.replaceAll("_", " ")}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
export default Aroma;
