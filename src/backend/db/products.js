import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name:"Lenove IdeaPad 3",
    category:"Gaming Laptop",
    brand:"lenovo",
    price: "65250",
    originalPrice :75000,
    processor:"core i5",
    ram:"8 GB",
    rating:"2",
    discount:"1000",
    offer:"13",
    quantity:1,
    details:
      `512 GB SSD/Windows 10 Home15IML05
      Gaming Laptop  (
      15.6 Inch, Platinum Grey, 1.7 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Lenove IdeaPad 3",
    category:"Budget Laptop",
    brand:"lenovo",
    price: "27900",
    originalPrice :45000,
    processor:"core i3",
    ram:"8 GB",
    rating:"4",
    discount:"2000",
    offer:"38",
    quantity:1,
    details:
      `512 GB SSD/Windows 10 Home15IML05(
      15.6 Inch, Platinum Grey, 1.7 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Lenove ThinkPad E15",
    category:"Thin and Light Laptop",
    brand:"lenovo",
    price: "46750",
    originalPrice :85000,
    processor:"core i3",
    ram:"4 GB",
    rating:"1",
    discount:"1800",
    offer:"45",
    quantity:1,
    details:
      `256 GB SSD/Windows 10 Home15IML05
      Thin and Light Laptop  (
      15.6 Inch, Black, 1.6 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Lenove V15",
    category:"Thin and Light Laptop",
    brand:"lenovo",
    price: "64600",
    originalPrice :76000,
    processor:"core i5",
    ram:"8 GB",
    rating:"3",
    discount:"5000",
    offer:"15",
    quantity:1,
    details:
      `512 GB SSD/Windows 10 Home15IML05
      Thin and Light Laptop  (
      15.6 Inch, Platinum Grey, 1.7 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Lenove IdeaPad Slim",
    category:"Budget Laptop",
    brand:"lenovo",
    price: "47850",
    originalPrice :50000,
    processor:"core i3",
    ram:"4 GB",
    rating:"3",
    discount:"900",
    offer:"13",
    quantity:1,
    details:
      `256 GB SSD/Windows 10 Home15IML05
      Thin and Light Laptop  (
      15.6 Inch, Platinum Grey, 1.9 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Dell G15",
    category:"Thin and Light Laptop",
    brand:"dell",
    price: "85095",
    originalPrice :94550,
    processor:"core i5",
    ram:"16 GB",
    rating:"3",
    discount:"4500",
    offer:"10",
    quantity:1,
    details:
      `512 GB SSD/Windows 10 Home15IML05
      Thin and Light Laptop  (
      14.96 Inch, Platinum Grey, 1.65 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Dell inpiron 7501",
    category:"Thin and Light Laptop",
    brand:"dell",
    price: "73500",
    originalPrice :98000,
    processor:"intel core i5",
    ram:"8 GB",
    rating:"3",
    discount:"1000",
    offer:"25",
    quantity:1,
    details:
      `512 GB SSD/Windows 10 Home15IML05
      Thin and Light Laptop, (
      14.96 Inch, Platinum Grey, 1.7 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Dell XPS",
    category:"Gaming Laptop",
    brand:"dell",
    price: "91650",
    originalPrice :141000,
    processor:"core i5",
    ram:"8 GB",
    rating:"4",
    discount:"1000",
    offer:"35",
    quantity:1,
    details:
      `512 GB SSD/Windows 10 Home15IML05
      Thin and Light Gaming Laptop  (
      15.6 Inch, Grey, 1.4 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Dell Vostro",
    category:"Budget Laptop",
    brand:"dell",
    price:"45390",
    originalPrice :51000,
    processor:"core i3",
    ram:"8 GB",
    rating:"4",
    discount:"1000",
    offer:"11",
    quantity:1,
    details:
      `256 GB SSD/Windows 10 Home15IML05(
      14.96 Inch, Platinum Grey, 1.7 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Dell Inspiron",
    category:"Thin and Light Laptop",
    brand:"dell",
    price: "49300",
    originalPrice :58000,
    processor:"core i3",
    ram:"8 GB",
    rating:"5",
    discount:"1000",
    offer:"15",
    quantity:1,
    details:
      `1 TB HDD/Windows 10 Home15IML05
      Thin and Light Laptop  (
      15.6 Inch, Platinum Grey, 2.1 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Asus Vivobook 14",
    category:"Budget Laptop",
    brand:"asus",
    price: "33250",
    originalPrice :35000,
    processor:"core i3",
    ram:"8 GB",
    rating:"4",
    discount:"1000",
    offer:"5",
    quantity:1,
    details:
      `1 TB SSD/Windows 10 Home15IML05(
      14.1 Inch, Platinum Grey, 1.7 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Asus Vivobook 15",
    category:"Thin and Light Laptop",
    brand:"asus",
    price: "69700",
    originalPrice :85000,
    processor:"core i3",
    ram:"4 GB",
    rating:"3",
    discount:"1000",
    offer:"18",
    quantity:1,
    details:
      `1 TB SSD/Windows 10 Home15IML05
      Thin and Light Laptop  (
      15.6 Inch, Platinum Grey, 1.7 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Asus Vivobook Ultra",
    category:"Thin and Light Laptop",
    brand:"asus",
    price: "48750",
    originalPrice :75000,
    processor:"core i3",
    ram:"4 GB",
    rating:"3",
    discount:"1000",
    offer:"35",
    quantity:1,
    details:
      `512 GB SSD/Windows 10 Home15IML05
      Thin and Light Laptop  (
      15.6 Inch, Platinum Grey, 1.7 kg, 
      With MS Office)`
  },
  {
    _id: uuid(),
    name:"Asus TUF",
    category:"Gaming Laptop",
    brand:"asus",
    price: "73100",
    originalPrice :86000,
    processor:"core i5",
    ram:"8 GB",
    rating:"2",
    discount:"6000",
    offer:"15",
    quantity:1,
    details:
      `512 GB SSD/Windows 10 Home15IML05
      (15.6 Inch, Platinum Grey, 1.7 kg, 
      With MS Office)`
  },
  {
  _id: uuid(),
    name:"HP Pavilion",
    category:"Gaming Laptop",
    brand:"hp",
    price: "71200",
    originalPrice :89000,
    processor:"core i3",
    ram:"8 GB",
    rating:"3",
    discount:"1000",
    offer:"20",
    quantity:1,
    details:
      `256 GB SSD/Windows 10 Home15IML05
      Thin and Light Laptop  (
      15.6 Inch, Platinum Grey, 1.7 kg, 
      With MS Office)`
  },
  
    {
      _id: uuid(),
        name:"HP Corer i7",
        category:"Gaming Laptop",
        brand:"hp",
        price: "124000",
        originalPrice :155000,
        processor:"core i7",
        ram:"16 GB",
        rating:"5",
        discount:"1000",
        offer:"20",
        quantity:1,
        details:
          `512 GB SSD/Windows 10 Home15IML05
          Gaming Laptop  (
          14 Inch, Platinum Grey, 165 kg, 
          With MS Office)`
      }
];
