"use client";
import Image from "next/image";
import Link from "next/link";
import { PanelLeftCloseIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Menu = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
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
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  const kadukspecial = [
    { name: "Kappa + Beef", prices: [150] },
    { name: "Kappa Fish Mulakittath", prices: [120] },
    { name: "Erachi Puttu (Beef, Chicken, Chemmeen)", prices: [120, 130] },
    { name: "Key Porotta (Chicken, Beef)", prices: [150] },
    { name: "Nool Porotta", prices: [15] },
    { name: "Paal Porotta", prices: [150] },
    { name: "Kabliy Rice", prices: [70] },
    { name: "Beef Payam Pori", prices: [140] },
    { name: "Kaada Fry", prices: [110] },
    { name: "Tharav Roast", prices: [170] },
    { name: "Kunji Key Fry", prices: [190] },
    { name: "Fish Pollichath", prices: ["Seasonal"] },
    { name: "Thengha Chor Beef", prices: [150] },
    { name: "Kaduk Mandi Platter", prices: [499] },
    { name: "(Alfham, Beef, Tikka, Fish)", prices: [null] },
  ];

  const arabicDish = [
    { name: "Alfam", prices: [80, 130, 260, 500] },
    { name: "Kanthari", prices: [80, 130, 260, 500] },
    { name: "Pollichath", prices: [80, 130, 260, 500] },
    { name: "Peri Peri", prices: [80, 130, 260, 500] },
    { name: "Honey Alfam", prices: [80, 130, 260, 500] },
    { name: "Fried Chicken", prices: [null, 110, 200, 450] },
    { name: "Fried Chicken Spicy", prices: [null, 120, 240, 480] },
    { name: "Alfam with Kabili", prices: [null, 180, 350, 700] },
    { name: "Pollichath with Kabili", prices: [null, 180, 350, 700] },
    { name: "Kanthari with Kabili", prices: [null, 180, 350, 700] },
    { name: "Alfam with Mandi", prices: [null, 180, 350, 700] },
    { name: "Pollichath with Mandi", prices: [null, 180, 350, 700] },
    { name: "Kanthari with Mandi", prices: [null, 180, 350, 700] },
    { name: "Chicken Tikka", prices: [null, null, null, 150] },
  ];

  const beefItems = [
    { name: "Beef Pallikari", price: 120 },
    { name: "Beef Kondattam", price: 130 },
    { name: "Beef Ularth", price: 120 },
    { name: "Beef Chilly", price: 140 },
    { name: "Beef Roast", price: 150 },
    { name: "Beef Liver fry", price: 130 },
    { name: "Beef Boti fry", price: 100 },
    { name: "Beef Pollichath", price: 150 },
    { name: "Beef Fry", price: 90 },
  ];
  const chickenItems = [
    { name: "Chicken Kondattam", prices: [130, 260, 500] },
    { name: "Chicken 65", prices: [120, 240, 480] },
    { name: "Butter Chicken", prices: [160, 250, 500] },
    { name: "Pepper Chicken", prices: [150, 250, 500] },
    { name: "Kunji Koyi", prices: [null, 130, 240] },
    { name: "Chicken Leg Piece", prices: [null, null, 90] },
    { name: "Chicken Curry", prices: [null, null, 100] },
    { name: "Chicken Kadayi", prices: [null, null, 130] },
  ];
  const biryaniItems = [
    { name: "Thalassery Chicken Biryani", prices: [80, 130, 350, 750] },
    { name: "Malabari Beef Biryani", prices: [90, 140, 400, 800] },
    { name: "Hydrabadi Chicken Biryani", prices: [null, 150, 400, 800] },
    { name: "Alappy Chemmeen Biryani", prices: [null, 190, null, null] },
    { name: "Wayanadan Kappa Biryani", prices: [null, 180, null, null] },
    { name: "Kallumakay Biryani", prices: [null, 190, null, null] },
    { name: "Fish Biryani", prices: ["Seasonal", null, null, null] },
  ];

  const fishItems = [
    { name: "Chemmeen Roast", price: "Seasonal" },
    { name: "Grilled Chemmeen", price: "Seasonal" },
    { name: "Koonthal Fry", price: "Seasonal" },
    { name: "Kadkka Roast", price: "Seasonal" },
    { name: "Crab Masala", price: "Seasonal" },
    { name: "Crab Roast", price: "Seasonal" },
    { name: "Koonthal Roast", price: "Seasonal" },
    { name: "Fish Pollichath", price: "Seasonal" },
    { name: "Fish Thawa Fry", price: "Seasonal" },
    { name: "Kallumakkaya Varattiyath", price: "Seasonal" },
    { name: "Kallumakkaya Fry", price: "Seasonal" },
    { name: "Kakka Fry", price: "Seasonal" },
    { name: "Kakka Roast", price: "Seasonal" },
    { name: "Fish Curry", price: "Seasonal" },
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
    { name: "Biriyani Rice", prices: [70, 160, 380] },
    { name: "Ghee Rice, Mandi Rice", prices: [150, 200, 300, 500] },
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
                hiddenOnMobile.includes(section.id) && isMounted
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
                  {item.prices[0] || "-"}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[1] || "-"}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[2] || "-"}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[3] || "-"}
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
                  {item.prices[0] || "-"}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[1] || "-"}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[2] || "-"}
                </span>
                <span className="text-center font-semibold">
                  {item.prices[3] || "-"}
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
            <div className="grid grid-cols-4 font-medium mb-2">
              <span className="opacity-0">Item</span>
              <span className="text-center">Q</span>
              <span className="text-center">H</span>
              <span className="text-center">F</span>
            </div>
            {chickenItems.map((item, idx) => (
              <div key={idx}>
                {item.prices.length === 3 ? (
                  <div className="grid grid-cols-4 py-1 border-b border-gray-200">
                    <span>{item.name}</span>
                    <span className="text-center font-semibold">
                      {item.prices[0] || "-"}
                    </span>
                    <span className="text-center font-semibold">
                      {item.prices[1] || "-"}
                    </span>
                    <span className="text-center font-semibold">
                      {item.prices[2] || "-"}
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-between py-1 border-b border-gray-200">
                    <span>{item.name}</span>
                    <span className="font-semibold">
                      {item.prices[0] || "-"}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Fish */}
          <div id="fish">
            <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4 text-blue-700">
              🐟 വലയിൽ കുടുങ്ങാത്ത മീനുകൾ
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
              🍚 അരി
            </h2>
            <div className="grid grid-cols-5 font-medium mb-2">
              <span className="opacity-0">Item</span>
              <span className="text-center">Q-H</span>
              <span className="text-center">Q</span>
              <span className="text-center">H</span>
              <span className="text-center">F</span>
            </div>
            {riceItems.map((item, idx) => (
              <div key={idx}>
                <div className="grid grid-cols-5 py-1 border-b border-gray-200">
                  <span>{item.name}</span>
                  <span className="text-center font-semibold">
                    {item.prices[0] || "-"}
                  </span>
                  <span className="text-center font-semibold">
                    {item.prices[1] || "-"}
                  </span>
                  <span className="text-center font-semibold">
                    {item.prices[2] || "-"}
                  </span>
                  <span className="text-center font-semibold">
                    {item.prices[3] || "-"}
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
