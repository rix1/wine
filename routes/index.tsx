import WineWheel from "../islands/WineWheel.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-6xl font-normal pacifico-regular">Wine</h1>
        <p class="my-4">
          When tasting wine, it can sometimes be difficult to idenity different
          flavours. This little tool guides you along the way.
        </p>
      </div>
      <WineWheel />
    </div>
  );
}
