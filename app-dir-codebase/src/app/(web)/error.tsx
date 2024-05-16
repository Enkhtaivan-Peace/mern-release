"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  function handleTryAgain() {
    reset();
    window.location.reload();
  }
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">
        Асуудал гарсан тул хэсэг хугацааны дараа дахин оролдож үзнэ үү!
      </h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={handleTryAgain}
      >
        дахин оролдож үзэх
      </button>
    </main>
  );
}
