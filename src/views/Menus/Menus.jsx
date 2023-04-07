import React from "react";
import logo from "../../asset/images/png/CupCircleIcon1.png";
import imgMenu1 from "../../asset/images/png/listMenu/Item08.png";
import imgMenu2 from "../../asset/images/png/listMenu/Item09.png";
import imgMenu3 from "../../asset/images/png/listMenu/Item10.png";
import imgMenu4 from "../../asset/images/png/listMenu/Item11.png";
import imgMenu5 from "../../asset/images/png/listMenu/Item12.png";
import imgMenu6 from "../../asset/images/png/listMenu/Item13.png";
import imgMenu7 from "../../asset/images/png/listMenu/Item14.png";
import imgMenu8 from "../../asset/images/png/listMenu/Item15.png";
import imgMenu9 from "../../asset/images/png/listMenu/Item16.png";
import imgMenu10 from "../../asset/images/png/listMenu/Item17.png";
import cardItem from "../../asset/images/png/listMenu/MenuItemBG1.png";
import imgBigBG from "../../asset/images/png/MenuBigItem1.png";
import IconBigItem from "../../asset/images/png/MenuBigItemIMG1.png";
import imgBigChoco from "../../asset/images/png/SnowyChoco.png";
import Order from "../../components/section/Order";
import OurMenu from "../Menus/components/our-menu/OurMenu";
import BestSeller from "./components/best-seller/BestSeller";
import Signature from "./components/signature/Signature";

const listSlide = [
  {
    title: "SIGNATURE",
    img: logo,
    imgBig: imgBigBG,
    imgItem: IconBigItem,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo ",
    listMenu: [
      {
        name: "Egg Coffee",
        capacity: "16 oz",
        price: "$ 6.25",
        img: imgMenu1,
        bgItem: cardItem,
      },
      {
        name: "Coconut Coffee",
        capacity: "16 oz",
        price: "$ 7.25",
        img: imgMenu2,
        bgItem: cardItem,
      },
      {
        name: "Snowy Choco",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu3,
        bgItem: cardItem,
      },
      {
        name: "Ginger Spiced Hot Cocoa",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu4,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Macchiato",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu5,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Oolong Latte",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu6,
        bgItem: cardItem,
      },
      {
        name: "Snowy Matcha Latte",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu7,
        bgItem: cardItem,
      },
      {
        name: "Roasted Hazelnut Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu8,
        bgItem: cardItem,
      },
      {
        name: "Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu9,
        bgItem: cardItem,
      },
      {
        name: "Roasted Coconut Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu10,
        bgItem: cardItem,
      },
    ],
  },
  {
    title: "FRAPPE’ BLENDED DRINKS",
    img: logo,
    imgBig: imgBigBG,
    imgItem: IconBigItem,
    content:
      "Lorem ipsum dolor sit amet. Qui nostrum quasi ab voluptatem placeat est sint impedit? Et sapiente animi quo reiciendis necessitatibus id provident quasi. Rem mollitia quisquam eos quaerat ullam qui unde illum ut sapiente voluptas hic numquam nemo qui voluptas quam ea dolorum iste. Quo quibusdam quia ut praesentium molestiae aut incidunt laboriosam. Aut possimus nesciunt ut veritatis placeat quo quia omnis sit nostrum aspernatur. Hic ratione debitis quo eveniet minima cum odio cumque aut error vero est aliquid accusantium! Sed laborum exercitationem nam laborum consequatur ea laborum quam. ",
    listMenu: [
      {
        name: "Egg Coffee",
        capacity: "16 oz",
        price: "$ 6.25",
        img: imgMenu1,
        bgItem: cardItem,
      },
      {
        name: "Coconut Coffee",
        capacity: "16 oz",
        price: "$ 7.25",
        img: imgMenu2,
        bgItem: cardItem,
      },
      {
        name: "Snowy Choco",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu3,
        bgItem: cardItem,
      },
      {
        name: "Ginger Spiced Hot Cocoa",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu4,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Macchiato",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu5,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Oolong Latte",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu6,
        bgItem: cardItem,
      },
      {
        name: "Snowy Matcha Latte",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu7,
        bgItem: cardItem,
      },
      {
        name: "Roasted Hazelnut Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu8,
        bgItem: cardItem,
      },
      {
        name: "Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu9,
        bgItem: cardItem,
      },
      {
        name: "Roasted Coconut Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu10,
        bgItem: cardItem,
      },
    ],
  },
  {
    title: "ICE BLENDED",
    img: logo,
    imgBig: imgBigBG,
    imgItem: IconBigItem,
    content:
      "Lorem ipsum dolor sit amet. Ut doloremque veritatis qui esse amet aut asperiores facilis qui nesciunt sequi ut aperiam culpa qui sint eligendi. Et minus facere aut quia voluptates est error repudiandae sit sunt repellat ea voluptatibus quia ut assumenda natus! Sed repudiandae enim sit voluptatem mollitia quo dolorem deserunt sit aspernatur ducimus et fugiat ratione eum reprehenderit quaerat! Eos fugit blanditiis aut excepturi Quis sed laborum earum est porro adipisci ut consequatur sint. Eos molestiae doloribus aut voluptatibus voluptatem aut voluptatem deserunt aut quis optio et internos odio.",
    listMenu: [
      {
        name: "Egg Coffee",
        capacity: "16 oz",
        price: "$ 6.25",
        img: imgMenu1,
        bgItem: cardItem,
      },
      {
        name: "Coconut Coffee",
        capacity: "16 oz",
        price: "$ 7.25",
        img: imgMenu2,
        bgItem: cardItem,
      },
      {
        name: "Snowy Choco",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu3,
        bgItem: cardItem,
      },
      {
        name: "Ginger Spiced Hot Cocoa",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu4,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Macchiato",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu5,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Oolong Latte",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu6,
        bgItem: cardItem,
      },
      {
        name: "Snowy Matcha Latte",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu7,
        bgItem: cardItem,
      },
      {
        name: "Roasted Hazelnut Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu8,
        bgItem: cardItem,
      },
      {
        name: "Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu9,
        bgItem: cardItem,
      },
      {
        name: "Roasted Coconut Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu10,
        bgItem: cardItem,
      },
    ],
  },
  {
    title: "TEE HOUSE’S COFFEE",
    img: logo,
    imgBig: imgBigBG,
    imgItem: IconBigItem,
    content:
      "Lorem ipsum dolor sit amet. Sed galisum dolorem eum sunt ullam 33 laborum inventore. Sit galisum atque At numquam aliquam ad nulla quia est dolore perspiciatis. Aut nesciunt quia nam nobis voluptatem non saepe soluta a veniam iure quo adipisci voluptas quo tenetur porro. Et iure quia hic fugiat voluptate aut quibusdam voluptates aut sapiente maxime. Aut beatae veritatis ut nihil accusamus ut libero voluptatem et internos nesciunt et laborum labore.",
    listMenu: [
      {
        name: "Egg Coffee",
        capacity: "16 oz",
        price: "$ 6.25",
        img: imgMenu1,
        bgItem: cardItem,
      },
      {
        name: "Coconut Coffee",
        capacity: "16 oz",
        price: "$ 7.25",
        img: imgMenu2,
        bgItem: cardItem,
      },
      {
        name: "Snowy Choco",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu3,
        bgItem: cardItem,
      },
      {
        name: "Ginger Spiced Hot Cocoa",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu4,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Macchiato",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu5,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Oolong Latte",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu6,
        bgItem: cardItem,
      },
      {
        name: "Snowy Matcha Latte",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu7,
        bgItem: cardItem,
      },
      {
        name: "Roasted Hazelnut Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu8,
        bgItem: cardItem,
      },
      {
        name: "Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu9,
        bgItem: cardItem,
      },
      {
        name: "Roasted Coconut Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu10,
        bgItem: cardItem,
      },
    ],
  },
  {
    title: "ITALIAN COFFEE",
    img: logo,
    imgBig: imgBigBG,
    imgItem: IconBigItem,
    content:
      "Lorem ipsum dolor sit amet. Est aspernatur excepturi non tempore omnis sed exercitationem maxime. Non itaque expedita eos ipsum recusandae et illo esse et ipsam placeat. Et repudiandae iusto non blanditiis amet ut voluptatum voluptate 33 commodi consequatur ut neque placeat est modi impedit At animi officia. Aut aliquid dolores est rerum facilis vel consequatur temporibus. Qui sint enim et corporis nihil et temporibus doloremque qui atque necessitatibus. Aut suscipit odit qui molestiae itaque ut commodi dolores est quos autem qui voluptatem vitae. Vel harum porro sed illo molestiae est assumenda harum in sunt maiores sed aspernatur similique et aliquam sunt.",
    listMenu: [
      {
        name: "Egg Coffee",
        capacity: "16 oz",
        price: "$ 6.25",
        img: imgMenu1,
        bgItem: cardItem,
      },
      {
        name: "Coconut Coffee",
        capacity: "16 oz",
        price: "$ 7.25",
        img: imgMenu2,
        bgItem: cardItem,
      },
      {
        name: "Snowy Choco",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu3,
        bgItem: cardItem,
      },
      {
        name: "Ginger Spiced Hot Cocoa",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu4,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Macchiato",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu5,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Oolong Latte",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu6,
        bgItem: cardItem,
      },
      {
        name: "Snowy Matcha Latte",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu7,
        bgItem: cardItem,
      },
      {
        name: "Roasted Hazelnut Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu8,
        bgItem: cardItem,
      },
      {
        name: "Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu9,
        bgItem: cardItem,
      },
      {
        name: "Roasted Coconut Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu10,
        bgItem: cardItem,
      },
    ],
  },
  {
    title: "ICE BLENDED",
    img: logo,
    imgBig: imgBigBG,
    imgItem: imgBigChoco,
    content:
      "Lorem ipsum dolor sit amet. Quo placeat iste et maxime sint in ducimus consectetur At nobis ipsum quo ullam voluptates ut inventore expedita eos asperiores rerum. Ut atque enim At suscipit repellat est voluptatem quod quo dolores autem? Eum placeat excepturi sit ipsam commodi sit excepturi voluptate ea minima eveniet et blanditiis dolor. Et facere fugiat et eius ipsum eum sint excepturi est harum odit At reprehenderit tempora et officiis doloremque est corporis quidem! Et iure facere sit odit rerum quo impedit voluptas aut quibusdam enim.",
    listMenu: [
      {
        name: "Egg Coffee",
        capacity: "16 oz",
        price: "$ 6.25",
        img: imgMenu1,
        bgItem: cardItem,
      },
      {
        name: "Coconut Coffee",
        capacity: "16 oz",
        price: "$ 7.25",
        img: imgMenu2,
        bgItem: cardItem,
      },
      {
        name: "Snowy Choco",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu3,
        bgItem: cardItem,
      },
      {
        name: "Ginger Spiced Hot Cocoa",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu4,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Macchiato",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu5,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Oolong Latte",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu6,
        bgItem: cardItem,
      },
      {
        name: "Snowy Matcha Latte",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu7,
        bgItem: cardItem,
      },
      {
        name: "Roasted Hazelnut Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu8,
        bgItem: cardItem,
      },
      {
        name: "Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu9,
        bgItem: cardItem,
      },
      {
        name: "Roasted Coconut Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu10,
        bgItem: cardItem,
      },
    ],
  },
  {
    title: "FRAPPE’ BLENDED DRINKS",
    img: logo,
    imgBig: imgBigBG,
    imgItem: IconBigItem,
    content:
      "Lorem ipsum dolor sit amet. Non quis officia est illum aliquid cum modi quia cum quam sapiente id accusantium odit sed ipsam esse ea voluptas voluptates. 33 voluptas voluptas vel veritatis autem in veritatis quia aut reiciendis temporibus et rerum repellendus aut recusandae tenetur qui iusto vero! At dolorem praesentium aut officiis laudantium quo inventore magni est dolorem molestiae quo iusto placeat ea ipsum veniam est quod rerum. Et voluptatem veniam ad itaque consequatur ab itaque dolores et possimus facere! Id autem ducimus eum expedita facilis quo delectus nesciunt et sunt aspernatur!",
    listMenu: [
      {
        name: "Egg Coffee",
        capacity: "16 oz",
        price: "$ 6.25",
        img: imgMenu1,
        bgItem: cardItem,
      },
      {
        name: "Coconut Coffee",
        capacity: "16 oz",
        price: "$ 7.25",
        img: imgMenu2,
        bgItem: cardItem,
      },
      {
        name: "Snowy Choco",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu3,
        bgItem: cardItem,
      },
      {
        name: "Ginger Spiced Hot Cocoa",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu4,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Macchiato",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu5,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Oolong Latte",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu6,
        bgItem: cardItem,
      },
      {
        name: "Snowy Matcha Latte",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu7,
        bgItem: cardItem,
      },
      {
        name: "Roasted Hazelnut Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu8,
        bgItem: cardItem,
      },
      {
        name: "Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu9,
        bgItem: cardItem,
      },
      {
        name: "Roasted Coconut Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu10,
        bgItem: cardItem,
      },
    ],
  },
  {
    title: "SIGNATURE",
    img: logo,
    imgBig: imgBigBG,
    imgItem: imgBigChoco,
    content:
      "Lorem ipsum dolor sit amet. In repellendus dolor ut provident rerum aut minus placeat. Non unde eaque aut facere doloremque et deleniti temporibus eum sunt maxime. Ut earum consequuntur et impedit molestias ad error nostrum ut neque voluptas rem omnis placeat et accusantium reprehenderit aut earum porro. Qui sint vitae qui enim atque quo similique nulla non deleniti repellat et nihil internos qui tempore voluptate id quibusdam eligendi. Ut nobis laudantium aut quos pariatur sit nostrum quisquam sed dolor necessitatibus aut atque quibusdam!",
    listMenu: [
      {
        name: "Egg Coffee",
        capacity: "16 oz",
        price: "$ 6.25",
        img: imgMenu1,
        bgItem: cardItem,
      },
      {
        name: "Coconut Coffee",
        capacity: "16 oz",
        price: "$ 7.25",
        img: imgMenu2,
        bgItem: cardItem,
      },
      {
        name: "Snowy Choco",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu3,
        bgItem: cardItem,
      },
      {
        name: "Ginger Spiced Hot Cocoa",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu4,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Macchiato",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu5,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Oolong Latte",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu6,
        bgItem: cardItem,
      },
      {
        name: "Snowy Matcha Latte",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu7,
        bgItem: cardItem,
      },
      {
        name: "Roasted Hazelnut Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu8,
        bgItem: cardItem,
      },
      {
        name: "Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu9,
        bgItem: cardItem,
      },
      {
        name: "Roasted Coconut Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu10,
        bgItem: cardItem,
      },
    ],
  },
  {
    title: "TEE HOUSE’S COFFEE",
    img: logo,
    imgBig: imgBigBG,
    imgItem: IconBigItem,
    content:
      "Lorem ipsum dolor sit amet. Sit omnis ducimus aut impedit voluptas eos nobis inventore qui nulla autem et deserunt similique eum eius eligendi. Non aliquam libero qui obcaecati inventore aut earum aspernatur qui minima saepe est sequi quaerat? Qui nostrum laudantium aut officia fugit eos assumenda galisum. At aliquid culpa eum galisum saepe ut Quis porro eos galisum rerum. Sed maxime atque eum iusto impedit et deleniti nihil hic sapiente quae.",
    listMenu: [
      {
        name: "Egg Coffee",
        capacity: "16 oz",
        price: "$ 6.25",
        img: imgMenu1,
        bgItem: cardItem,
      },
      {
        name: "Coconut Coffee",
        capacity: "16 oz",
        price: "$ 7.25",
        img: imgMenu2,
        bgItem: cardItem,
      },
      {
        name: "Snowy Choco",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu3,
        bgItem: cardItem,
      },
      {
        name: "Ginger Spiced Hot Cocoa",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu4,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Macchiato",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu5,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Oolong Latte",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu6,
        bgItem: cardItem,
      },
      {
        name: "Snowy Matcha Latte",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu7,
        bgItem: cardItem,
      },
      {
        name: "Roasted Hazelnut Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu8,
        bgItem: cardItem,
      },
      {
        name: "Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu9,
        bgItem: cardItem,
      },
      {
        name: "Roasted Coconut Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu10,
        bgItem: cardItem,
      },
    ],
  },
  {
    title: "ITALIAN COFFEE",
    img: logo,
    imgBig: imgBigBG,
    imgItem: imgBigChoco,
    content:
      "Lorem ipsum dolor sit amet. In rerum accusamus At porro quaerat ut unde sint in dolores itaque aut quia sapiente. Ut provident velit vel quaerat autem et architecto ullam et beatae quod et necessitatibus magni aut quod autem ab omnis inventore. Ea aspernatur explicabo est molestias molestias non blanditiis quia. Aut maiores amet cum voluptates sint nam quas adipisci ut rerum quia eos sapiente voluptatem est consequatur minus? Ut facilis provident ea praesentium consectetur et perspiciatis maxime ut vitae esse ut quidem quis qui reprehenderit dolorum quo repellendus quas.",
    listMenu: [
      {
        name: "Egg Coffee",
        capacity: "16 oz",
        price: "$ 6.25",
        img: imgMenu1,
        bgItem: cardItem,
      },
      {
        name: "Coconut Coffee",
        capacity: "16 oz",
        price: "$ 7.25",
        img: imgMenu2,
        bgItem: cardItem,
      },
      {
        name: "Snowy Choco",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu3,
        bgItem: cardItem,
      },
      {
        name: "Ginger Spiced Hot Cocoa",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu4,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Macchiato",
        capacity: "16 oz",
        price: "$ 5.65",
        img: imgMenu5,
        bgItem: cardItem,
      },
      {
        name: "Salted Caramel Oolong Latte",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu6,
        bgItem: cardItem,
      },
      {
        name: "Snowy Matcha Latte",
        capacity: "16 oz",
        price: "$ 5.45",
        img: imgMenu7,
        bgItem: cardItem,
      },
      {
        name: "Roasted Hazelnut Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu8,
        bgItem: cardItem,
      },
      {
        name: "Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.45",
        img: imgMenu9,
        bgItem: cardItem,
      },
      {
        name: "Roasted Coconut Brulee Cream Milktea",
        capacity: "16 oz",
        price: "$ 7.55",
        img: imgMenu10,
        bgItem: cardItem,
      },
    ],
  },
];
const Menus = () => {
  return (
    <main>
      <OurMenu data={listSlide} />
      <Signature data={listSlide} />
      <BestSeller />
      <Order />
    </main>
  );
};

export default Menus;
