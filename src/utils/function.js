export const getCast = (cast) => {
  return cast
    .slice()
    .sort((a, b) => a.order - b.order)
    .slice(0, 10)
    .map((item) => item.name)
    .join(", ");
};

export const getCrew = (crew) => {
  const data = crew.reduce(
    (acc, element) => {
      if (element.job === "Director") {
        return {
          producers: acc.producers,
          directors: [...acc.directors, element.name],
        };
      } else if (element.job === "Producer") {
        return {
          producers: [...acc.producers, element.name],
          directors: acc.directors,
        };
      } else {
        return acc;
      }
    },
    {
      producers: [],
      directors: [],
    }
  );
  const producers = data.producers.join(", ");
  const directors = data.directors.join(", ");
  return{
    producers,
    directors,
  }
};
