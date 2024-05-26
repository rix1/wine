import WineWheel from "../islands/WineWheel.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-6xl font-normal pacifico-regular">Wine</h1>
        <p class="my-4">
          Welcome to the Wine! This app is a simple wine aroma wheel that allows
          you to explore the different aromas that can be found in wine.
        </p>
      </div>
      <WineWheel />
    </div>
  );
}
