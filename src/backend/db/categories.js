import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
 
  {
    _id: uuid(),
    categoryName: "Gaming Laptop",
    image:["product-assets/lenovo-ideapad-3-gaming.jpg"],
    description:
      "Powerful gaming setups for brilliant wins.",
  },
  {
    _id: uuid(),
    categoryName: "Budget Laptop",
    image:["product-assets/asus-vivobook-15.jpg"],
    description:
      "Learning Made Engaging and Fun. Exclusive Deals with Great Offers.",
  },
  {
    _id: uuid(),
    categoryName: "Thin and Light Laptop",
    image:["product-assets/dell_g15.avif"],
    description:
      "Reimagine the Way Your Kids Learn No Cost EMI & more",
  }
];
