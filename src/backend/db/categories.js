import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
 
  {
    _id: uuid(),
    categoryName: "Gaming Laptop",
    description:
      "Powerful gaming setups for brilliant wins.",
  },
  {
    _id: uuid(),
    categoryName: "Budget Laptop",
    description:
      "Learning Made Engaging and Fun. Exclusive Deals with Great Offers.",
  },
  {
    _id: uuid(),
    categoryName: "Thin and Light Laptop",
    description:
      "Reimagine the Way Your Kids Learn No Cost EMI & more",
  }
];
