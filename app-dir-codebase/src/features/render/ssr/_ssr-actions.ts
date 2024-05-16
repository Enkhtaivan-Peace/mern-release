export const getRandomNumber = async () => {
  "use server";
  const res = await fetch("http://localhost:3000/api/random", {
    next: {
      revalidate: 5,
    },
  });
  const { random } = await res.json();
  return { random };
};
