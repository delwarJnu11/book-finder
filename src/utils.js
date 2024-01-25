export const generateStarRating = (rating) => {
  const fullStars = Math.round(rating);

  const fullStar = "⭐";

  const stars = fullStar.repeat(fullStars);

  return stars;
};
