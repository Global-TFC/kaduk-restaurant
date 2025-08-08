import Link from "next/link";

const Menu = () => {
  const biryanis = [
    { name: "Thalaseery Chicken Biryani", prices: [130, 400, 750] },
    { name: "Kozhikodan Beef Biryani", prices: [140, 450, 800] },
    { name: "Kuttichira Legon Biryani", prices: [140, 450, 800] },
    { name: "Hyderabadi Chicken Biryani", prices: [150, 450, 820] },
    { name: "Thalappakettu Chicken Biryani", prices: [170, 450, 850] },
    { name: "Ambur Chicken Biryani", prices: [150, 400, 800] },
    { name: "Malabari Mutton Biryani", prices: [250, 750, 1300] },
    { name: "Hyderabadi Mutton Biryani", prices: [250, 750, 1300] },
    { name: "Alleppey Fish Biryani", prices: [190] },
    { name: "Kada Biryani", prices: [180] },
    { name: "Koonttal Biryani", prices: [190] },
    { name: "Chammen Biryani", prices: [190] },
    { name: "Kadkka Biryani", prices: [190] },
    { name: "Veg Biryani", prices: [120, 350, 550] },
  ];

  const vegetarian = [
    { name: "Chana Masala", price: 50 },
    { name: "Green Peas Masala", price: 50 },
    { name: "Gobi Manchurian", price: 110 },
    { name: "Paneer Masala", price: 120 },
    { name: "Veg Kuruma", price: 50 },
  ];

  const beefItems = ["Beef Usmani", "Beef Ularth", "Beef Chilli", "Beef Fry"];
  const chickenItems = [
    { name: "Chicken 65", prices: [120, 240, 480] },
    { name: "Chicken Fry", prices: [90] },
    { name: "Kunji Kozhi", prices: [120, 240] },
    { name: "Chicken Curry", prices: [100] },
    { name: "Kada Fry", prices: [110] },
  ];
  const fishItems = [
    { name: "Chammen Rost", price: 150 },
    { name: "Kothal Rost", price: 140 },
    { name: "Kadkka Rost", price: 150 },
    { name: "Crab Rost", price: 140 },
  ];

  return (
    <div className="min-h-screen bg-yellow-100 py-8 px-4 md:px-16 font-sans text-gray-800">
      <div className="text-center mb-10">
        <Link href={"/"}>
          <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
            Kaduk Restaurant
          </h1>
        </Link>

        <p className="text-lg text-gray-600 font-medium">
          Authentic Flavors | Y Bridge Thiruvambady Road Kumaranallur, Mukkam - Kozhikkode
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left side menu */}
        <div className="lg:w-2/3 space-y-10">
          {/* Section: Dam Dam Biriyani */}
          <div>
            <h2 className="text-2xl font-bold border-b-4 border-orange-500 pb-2 mb-4 text-orange-700">
              🍛 Dam Dam Biryani
            </h2>
            {biryanis.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 border-b border-gray-300"
              >
                <span>{item.name}</span>
                <span className="font-semibold">{item.prices.join(" / ")}</span>
              </div>
            ))}
          </div>

          {/* Vegetarian */}
          <div>
            <h2 className="text-2xl font-bold border-b-4 border-green-500 pb-2 mb-4 text-green-700">
              🥗 Vegetarian
            </h2>
            {vegetarian.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 border-b border-gray-200"
              >
                <span>{item.name}</span>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Beef */}
          <div>
            <h2 className="text-2xl font-bold border-b-4 border-red-500 pb-2 mb-4 text-red-700">
              🥩 Beef
            </h2>
            {beefItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 border-b border-gray-200"
              >
                <span>{item}</span>
                <span className="font-semibold">120</span>
              </div>
            ))}
          </div>

          {/* Chicken */}
          <div>
            <h2 className="text-2xl font-bold border-b-4 border-yellow-500 pb-2 mb-4 text-yellow-700">
              🍗 Chicken
            </h2>
            {chickenItems.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between py-1 border-b border-gray-200"
              >
                <span>{item.name}</span>
                <span className="font-semibold">{item.prices.join(" / ")}</span>
              </div>
            ))}
          </div>

          {/* Fish */}
          <div>
            <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2 mb-4 text-blue-700">
              🐟 Fish Pollichathu
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
        <p className="text-sm">📍 Y Bridge Thiruvambady Road Kumaranallur Mukkam - Kozhikode</p>
      </footer>
    </div>
  );
};

export default Menu;
