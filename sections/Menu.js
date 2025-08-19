"use client";
import Image from "next/image";
import Link from "next/link";
import { PanelLeftCloseIcon } from "lucide-react";

const Menu = () => {
  const menuSections = [
    { id: "kaduk-special", title: "Kaduk Special" },
    { id: "arabic-dish", title: "Arabic Dish" },
    { id: "biryani", title: "Biryani" },
    { id: "beef", title: "Beef" },
    { id: "chicken", title: "Chicken" },
    { id: "fish", title: "Fish" },
    { id: "bread", title: "Bread" },
    { id: "rice", title: "Rice" },
    { id: "juice", title: "Juice" },
    { id: "tea-coffee", title: "Tea & Coffee" },
  ];

  const hiddenOnMobile = ["fish", "bread", "rice", "juice", "tea-coffee"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const kadukspecial = [
    { name: "Kappa + Beef", prices: [150] },
    { name: "Kappa fish mulakittath", prices: [100] },
    { name: "Erachi puttu (beef, chicken, chemmeen)", prices: [140] },
    { name: "Key porotta (chicken, beef)", prices: [150] },
    { name: "Nool porotta", prices: [170] },
    { name: "Beef pollichath", prices: [250] },
    { name: "Kaada fry", prices: [180] },
    { name: "Kunji key fry", prices: [190] },
    { name: "Fish pollichath", prices: [190] },
    { name: "Thengha chor", prices: [120] },
  ];

  const arabicDish = [
    { name: "Alfam with kabili", prices: [100, 180, 350, 700] },
    { name: "Pollichath with kabili", prices: [100, 180, 350, 700] },
    { name: "Kanthari with kabili", prices: [100, 180, 350, 700] },
    { name: "Alfam with mandi", prices: [100, 180, 350, 700] },
    { name: "Pollichath with mandi", prices: [100, 180, 350, 700] },
    { name: "Kanthari with mandi", prices: [100, 180, 350, 700] },
    { name: "Alfam pollichath", prices: [100, 180, 350, 700] },
    { name: "Kanthari", prices: [100, 180, 350, 700] },
    { name: "Pollichath", prices: [100, 180, 350, 700] },
    { name: "Peri Peri", prices: [100, 150, 170, 200] },
    { name: "Honey Alfam", prices: [100, 180, 350, 700] },
    { name: "Chicken Tikka", prices: [150, 200, 250, 400] },
    { name: "Fried chicken", prices: [100, 180, 350, 700] },
    { name: "Fried chicken spicy", prices: [150, 200, 380, 750] },
  ];

  const beefItems = [
    { name: "Beef pallikari", price: 120 },
    { name: "Beef kondattam", price: 130 },
    { name: "Beef ularth", price: 120 },
    { name: "Beef chilly", price: 120 },
    { name: "Beef roast", price: 150 },
    { name: "Beef liver fry", price: 130 },
    { name: "Beef boti fry", price: 100 },
    { name: "Beef pollichath", price: 130 },
    { name: "Beef fry", price: 100 },
  ];
  const chickenItems = [
    { name: "Chicken kondattam", prices: [130, 250, 500] },
    { name: "Chicken leg piece", prices: [90, "-", "-"] },
    { name: "Chicken 65", prices: [120, 240, 480] },
    { name: "Kunji koyi", prices: ["-", 130, 240] },
    { name: "Butter chicken", prices: [150, 300, 550] },
    { name: "Pepper chicken", prices: [150, 300, 550] },
    { name: "Chicken curry", prices: [100, "-", "-"] },
    { name: "Alfam", prices: [120, 130, 240, 480] },
    { name: "Pollichath chicken", prices: [90, 130, 260, 500] },
    { name: "Kanthari chicken", prices: [90, 130, 260, 500] },
    { name: "Peri peri chicken", prices: [90, 130, 260, 500] },
  ];
  const biryaniItems = [
    { name: "Thalassery chicken biryani", prices: [80, 140, 400, 750] },
    { name: "Malabari beef biryani", prices: [90, 150, 450, 800] },
    { name: "Hydrabadi chicken biryani", prices: [100, 150, 400, 800] },
    { name: "Alappy chemmin biryani", prices: [140, 190, "-", "-"] },
    { name: "Kallumakay biriyani", prices: ["-", 190, "-", "-"] },
    { name: "Wayanadan kappa biriyani", prices: ["-", 180, "-", "-"] },
    { name: "Fish biryani", prices: ["-", 200, "-", "-"] },
  ];

  const fishItems = [
    { name: "Chammeen Rost", price: 150 },
    { name: "Grilled Chammeen", price: 150 },
    { name: "Koonthal fry", price: 150 },
    { name: "Kadkka Roast", price: 150 },
    { name: "Crab Masala", price: 140 },
    { name: "Crab Roast", price: 140 },
    { name: "Koonthel Roast", price: 170 },
    { name: "Fish Pollichath", price: 170 },
    { name: "Fish Thawa Fry", price: 160 },
    { name: "Kallumakkaya Varattiyath", price: 150 },
    { name: "Kallumakkaya Fry", price: 140 },
    { name: "Kakka Fry", price: 130 },
    { name: "Kakka Roast", price: 140 },
    { name: "Fish Curry", price: 120 },
  ];

  const breadItems = [
    { name: "Porotta", price: 12 },
    { name: "Nool porotta", price: 15 },
    { name: "Wheat porotta", price: 18 },
    { name: "Chappathi", price: 10 },
    { name: "Pathiri", price: 10 },
    { name: "Nool puttu", price: 10 },
    { name: "Appam", price: 10 },
    { name: "Roti", price: 10 },
    { name: "Kubboos", price: 10 },
    { name: "Puttu", price: 40 },
  ];

  const riceItems = [
    { name: "Biriyani Rice", prices: [70, 180, 350] },
    { name: "Ghee Rice", prices: [70, 180, 350] },
    { name: "Mandi Rice", prices: [70, 180, 350] },
    { name: "Kabuli Rice", prices: [70, 180, 350] },
  ];

  const juiceItems = [
    { name: "Pineapple Juice", price: 50 },
    { name: "Grape Juice", price: 50 },
    { name: "Orange Juice", price: 50 },
    { name: "Fresh Lime", price: 20 },
    { name: "Mint Lime", price: 25 },
    { name: "Pineapple Lime", price: 25 },
    { name: "Lime Soda", price: 15 },
  ];

  const teaAndCoffeeItems = [
    { name: "Tea", price: 12 },
    { name: "Coffee", price: 15 },
    { name: "Lime Tea", price: 15 },
    { name: "Mint Tea", price: 12 },
  ];

  return (
    <div className="min-h-screen bg-yellow-100 py-8 px-4 md:px-16 font-sans text-gray-800">
      {/* Go Home Button */}
      <div className="flex justify-start">
        <Link href="/" passHref>
          <button className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition font-inter font-medium">
            <PanelLeftCloseIcon className="w-5 h-5" />
            Home
          </button>
        </Link>
        <h1 className="text-primary text-2xl font-bold -z-50">
          Kaduk Restaurant Mukkam
        </h1>
      </div>
      <div className="text-center mb-10">
        <Image
          src={"/kaduk1.png"}
          alt="Kaduk Restaurant Logo"
          width={200}
          height={100}
          className="mx-auto mb-4"
        />
        <p className="text-lg text-gray-600 font-medium">
          Authentic Flavors | Y Bridge Thiruvambady Road Kumaranallur, Mukkam -
          Kozhikkode
        </p>
      </div>

      {/* Filter Bar */}
      <div className=" bg-yellow-100/80 z-10 mb-4">
        <div className="flex flex-wrap justify-center gap-4">
          {menuSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-5 py-2 rounded-full shadow-md font-semibold whitespace-nowrap transition-all duration-300 ${
                section.id === "kaduk-special"
                  ? "bg-primary text-white hover:bg-white hover:text-primary"
                  : "bg-white text-gray-800 hover:bg-primary hover:text-white"
              } ${
                hiddenOnMobile.includes(section.id)
                  ? "hidden md:inline-block"
                  : ""
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left side menu */}
        <div className="lg:w-2/3 space-y-10">
          {/* Section: Kaduk Special */}
          <div id="kaduk-special">
            <h2 className="text-2xl font-bold border-b-4 border-orange-500 pb-2 mb-4 text-orange-700">
              😋 Kaduk Special
            </h2>
            {kadukspecial.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 border-b border-gray-300"
              >
                <span>{item.name}</span>
                <span className="font-semibold">{item.prices.join(" / ")}</span>
              </div>
            ))}
          </div>

          {/* arabicDish */}
          <div id="arabic-dish">
            <h2 className="text-xl font-bold border-b-4 border-green-500 pb-2 mb-4 text-green-700">
              🍖 കടൽ കടന്ന് വന്നവർ
            </h2>
            <div className="grid grid-cols-5 font-medium mb-2">
              <span className="col-span-1 opacity-0">Item</span>
              <span className="text-center">Q-H</span>
              <span className="text-center">Q</span>
              <span className="text-center">H</span>
              <span className="text-center">F</span>
            </div>
            {arabicDish.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 py-1  md:text-base border-b border-gray-200"
              >
                <span className="col-span-1">{item.name}</span>
                <span className="text-center font-semibold">
                  {item.prices[0]}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[1]}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[2]}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[3]}
                </span>
              </div>
            ))}
          </div>
          {/* Biryani */}
          <div id="biryani">
            <h2 className="text-2xl font-bold border-b-4 border-green-500 pb-2 mb-4 text-green-700">
              🥗 ബിരിയാണി
            </h2>
            <div className="grid grid-cols-6 font-medium mb-2">
              <span className="col-span-2 opacity-0">Item</span>
              <span className="text-center">Q-H</span>
              <span className="text-center">Q</span>
              <span className="text-center">H</span>
              <span className="text-center">F</span>
            </div>
            {biryaniItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-6 py-1 border-b border-gray-200"
              >
                <span className="col-span-2">{item.name}</span>
                <span className="text-center font-semibold">
                  {item.prices[0]}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[1]}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[2]}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[3]}
                </span>
              </div>
            ))}
          </div>

          {/* Beef */}
          <div id="beef">
            <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4 text-blue-700">
              🥩 എമണ്ടൻ ബീഫ്
            </h2>
            {beefItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 border-b border-gray-200"
              >
                <span>{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Chicken */}
          <div id="chicken">
            <h2 className="text-2xl font-bold border-b-4 border-yellow-500 pb-2 mb-4 text-yellow-700">
              🍗 വിശ്വവിഖ്യാത കോഴി
            </h2>
            <div className="grid grid-cols-5 font-medium mb-2">
              <span className="opacity-0">Item</span>
              <span className="text-center">Q-H</span>
              <span className="text-center">Q</span>
              <span className="text-center">H</span>
              <span className="text-center">F</span>
            </div>
            {chickenItems.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-5 py-1 border-b border-gray-200"
              >
                <span>{item.name}</span>
                <span className="text-center font-semibold">
                  {item.prices[0]}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[1]}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[2]}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[3]}
                </span>
              </div>
            ))}
          </div>

          {/* Fish */}
          <div id="fish">
            <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4 text-blue-700">
              🐟  വലയിൽ കുടുങ്ങാത്ത മീനുകൾ
            </h2>
            {fishItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 border-b border-gray-200"
              >
                <span>{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
          {/* Bread */}
          <div id="bread">
            <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4 text-blue-700">
              🍞 Bread
            </h2>
            {breadItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 border-b border-gray-200"
              >
                <span>{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Rice */}
          <div id="rice">
            <h2 className="text-2xl font-bold border-b-4 border-green-500 pb-2 mb-4 text-green-700">
              🍚  അരി 
            </h2>
            <div className="grid grid-cols-4 font-medium mb-2">
              <span className="opacity-0">Item</span>
              <span className="text-center">Q</span>
              <span className="text-center">H</span>
              <span className="text-center">F</span>
            </div>
            {riceItems.map((item, idx) => (
              <div key={idx}>
                <div className="grid grid-cols-4 py-1 border-b border-gray-200">
                  <span>{item.name}</span>
                  <span className="text-center font-semibold">
                    {item.prices[0]}
                  </span>
                  <span className="text-center font-semibold">
                    {item.prices[1]}
                  </span>
                  <span className="text-center font-semibold">
                    {item.prices[2]}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Juice */}
          <div id="juice">
            <h2 className="text-2xl font-bold border-b-4 border-pink-500 pb-2 mb-4 text-pink-700">
              🧃 ബൈച്ച് കൂട്ചോളി
            </h2>
            {juiceItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 border-b border-gray-200"
              >
                <span>{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Tea and Coffee */}
          <div id="tea-coffee">
            <h2 className="text-2xl font-bold border-b-4 border-amber-500 pb-2 mb-4 text-amber-700">
              ☕ ചൂടുള്ളത് 
            </h2>
            {teaAndCoffeeItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 border-b border-gray-200"
              >
                <span>{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side image (hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/3 flex-col items-center">
          <img
            src={"/biryani.jpeg"}
            alt="Biryani"
            className="rounded-xl shadow-lg border-4 border-orange-400"
          />
          <p className="mt-4 text-lg italic text-center text-orange-700 font-medium">
            “A bite of Biryani, a taste of tradition”
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600">
        <p className="text-lg font-semibold">📞 6282 222 017, 9567 921 403</p>
        <p className="text-sm">
          📍 Y Bridge Thiruvambady Road Kumaranallur Mukkam - Kozhikode
        </p>
      </footer>
    </div>
  );
};

export default Menu;
