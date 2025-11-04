const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/256/4359/4359963.png",
    name: "fashion",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11833/11833323.png",
    name: "shirts",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
    name: "jacket",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/7648/7648246.png",
    name: "mobile",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
    name: "laptop",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
    name: "shoes",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
    name: "home",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
    name: "books",
  },
];

const Category = () => {
  return (
    <div>
      <div className="sticky top-0 flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
        {category.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-1/4 p-4 space-y-4 bg-white rounded-lg shadow-lg"
          >
            {/* Image container */}
            <div className="relative flex items-center justify-center w-24 h-24 bg-pink-500 rounded-full">
              <img
                className="object-cover w-20 h-20 rounded-full"
                src={item.image}
                alt="image"
              />
            </div>
            {/* Category Name */}
            <h3 className="text-lg font-semibold text-center">{item.name}</h3>
          </div>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
