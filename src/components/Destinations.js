import { Link } from 'react-router-dom';
import '../App.css';

const Destinations = () => {
  const destinationData = {
    "TANZANIA NATIONAL PARKS": [
      { name: "Serengeti National Park", path: "/destinations/Serengeti" },
      { name: "Ngorongoro Conservation Area", path: "/destinations/Ngorongoro" },
      { name: "Tarangire National Park", path: "/destinations/Tarangire" },
      { name: "Lake Manyara National Park", path: "/destinations/Manyara" }
    ],
    "TANZANIA SAFARI TOURS": [
      { name: "12 Days Tanzania Luxury Safari & Zanzibar Beach Tour", path: "/destinations/12days" },
      { name: "9 Days Serengeti Wildebeest Migration Safari", path: "/destinations/9days" },
      { name: "7 Days Tanzania Luxury Safari", path: "/destinations/7days" },
      { name: "6 Days Tanzania Wildlife Safari", path: "/destinations/6days" },
      { name: "5 Days Lake Manyara & Serengeti Wildlife Safari", path: "/destinations/5days" }
    ],
    "MORE SAFARI TOURS": [
      { name: "5 Days Best of Tanzania Luxury Safari", path: "/destinations/5daysbest" },
      { name: "4 Days Tanzania Wildlife Safari", path: "/destinations/4days" },
      { name: "3 Days Serengeti National Park Safari", path: "/destinations/3dayserengenti" },
      { name: "3 Days Serengeti National Park & Ngorongoro Crater", path: "/destinations/serengetingorongoro" },
      { name: "3 Days Tarangire & Ngorongoro Crater Safari", path: "/destinations/tangirengorongoro" },
      { name: "1 Day Tour to Tarangire National Park", path: "/destinations/tarangire1day" }
    ],
    "ZANZIBAR HOLIDAYS": [
      { name: "8 Days Zanzibar Honeymoon Holiday", path: "/destinations/zanzibarhoneymoon" },
      { name: "7 Days Zanzibar Island Holiday", path: "/destinations/zanzibarisland" },
      { name: "6 Days Prison, Mnemba & Zanzibar Island Tour", path: "/destinations/prisonmnemba" },
      { name: "6 Days Zanzibar Tour", path: "/destinations/6daytour" },
      { name: "5 Days Zanzibar Safari Blue & Beach Holiday", path: "/destinations/ZanzibarSafariBlue" },
      { name: "4 Days Zanzibar Stone Town & Spice Tour", path: "/destinations/ZanzibarStoneTown" }
    ]
  };

  return (
    <div className="destinations-page">
      <h1 className="destinations-title">Explore Our Destinations</h1>
      <div className="destinations-grid">
        {Object.entries(destinationData).map(([category, items], categoryIndex) => (
          <div key={categoryIndex} className="destinations-column">
            <h4 className="destinations-category-title">{category}</h4>
            <ul className="destinations-list">
              {items.map((item, itemIndex) => (
                <li key={itemIndex} className="destinations-item">
                  <Link to={item.path} className="destinations-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;