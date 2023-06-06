import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    id: uuid(),
    categoryName: "Adventure",
    description:
      "Embrace the unknown, for within it lies the greatest adventures, where heroes are born and legends are forged.",
  },
  {
    id: uuid(),
    categoryName: "Action",
    description:
      "In the heart-pounding frenzy of combat, our heroes unleash their might, carving a path of exhilarating action and unbridled heroism.",
  },
  {
    id: uuid(),
    categoryName: "Drama",
    description:
      "In the tempest of anguish, our souls dance with drama, painting a portrait of raw emotions and poignant despair.",
  },
];
