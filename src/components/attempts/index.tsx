function IconHeart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={'#d0ebff'}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );
}

export function Attempts({ attempts }: { attempts: number }) {
  const hearts = Array.from({ length: attempts }, (_, index) => (
    <IconHeart key={index} />
  ));

  return (
    <div className="flex justify-center items-center gap-2 my-4">
      <h1>Attempts left:</h1>
      {attempts ? <span className="flex">{hearts}</span> : '💀'}
    </div>
  );
}
