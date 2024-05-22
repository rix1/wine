import { useSignal } from "@preact/signals";
import Aroma from "../components/Aroma.tsx";
import { AromaType, getAromas } from "../data/aromas.ts";

export default function WineWheel() {
  const selectedTastes = useSignal<string[]>([]);
  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });

  return (
    <div>
      <div class="grid grid-cols-2 gap-2 max-w-screen-md mx-auto aspect-square grid-rows-2">
        {getAromas().map((aroma) => (
          <div
            key={aroma}
            class="bg-green-100 rounded-lg flex-1 capitalize p-3"
          >
            <Aroma aroma={aroma} selectedTastes={selectedTastes} />
          </div>
        ))}
      </div>
      {!!selectedTastes.value.length && (
        <div class="p-3">
          <strong class="block">Your wine taste like:</strong>
          {formatter.format(selectedTastes.value)}
        </div>
      )}
    </div>
  );
}
