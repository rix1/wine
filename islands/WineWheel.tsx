import { useSignal } from "@preact/signals";
import XIcon from "../components/XIcon.tsx";
import Aroma from "../components/Aroma.tsx";
import { AromaType, getAromas } from "../data/aromas.ts";

export default function WineWheel() {
  const selectedTastes = useSignal<string[]>([]);
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  const colors = [
    "bg-green-100 text-green-800",
    "bg-orange-100 text-orange-800",
    "bg-pink-100 text-pink-800",
    "bg-gray-100 text-gray-800",
  ];

  return (
    <>
      <div class="grid md:grid-cols-2 gap-2 max-w-screen-md mx-auto md:grid-rows-2">
        {getAromas().map((aroma, index) => (
          <div
            key={aroma}
            class={`rounded-lg flex-1 capitalize p-3 min-h-56 ${colors[index]}`}
          >
            <Aroma aroma={aroma} selectedTastes={selectedTastes} />
          </div>
        ))}
      </div>
      {!!selectedTastes.value.length && (
        <div class="max-w-screen-md mx-auto sticky bottom-0 bg-white border-t md:border-none w-screen px-4 py-3">
          <strong class="block">Your wine tastes like:</strong>
          {formatter.format(selectedTastes.value)}.{" "}
          <button
            type="button"
            class="absolute top-2 right-2"
            onClick={() => (selectedTastes.value = [])}
          >
            <XIcon />
          </button>
        </div>
      )}
    </>
  );
}
