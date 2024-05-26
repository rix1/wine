import { Signal } from "@preact/signals";
import { useState } from "preact/hooks";
import {
  AromaType,
  CategoryType,
  getCategory,
  getTastes,
} from "../data/aromas.ts";

import XIcon from "../components/XIcon.tsx";

type Props = {
  aroma: AromaType;
  selectedTastes: Signal<string[]>;
};

function sortfn(a: string, b: string) {
  return a.localeCompare(b);
}

function Aroma({ aroma, selectedTastes }: Props) {
  const categories = getCategory(aroma);
  const [tastes, setTastes] = useState([]);

  return (
    <>
      <h2 class="font-bold text-center mb-5 pacifico-regular text-2xl relative">
        {aroma}{" "}
        {tastes.length > 0 && (
          <button class="absolute top-2 right-2" onClick={() => setTastes([])}>
            <XIcon />
          </button>
        )}
      </h2>
      <ul class="flex flex-wrap gap-2">
        {tastes.length
          ? tastes.sort(sortfn).map((taste: string) => (
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
          : categories
              .sort(sortfn)
              .map((category: CategoryType<typeof aroma>) => (
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
