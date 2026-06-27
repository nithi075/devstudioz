import "./Packages.css";

const whatsappNumber = "919876543210";
const packages = [
  {
    name: "Package 1",
    price: "₹45,000",
    features: [
      "1 Traditional Photo",
      "1 Traditional Video",
      "1 Premium Album",
      "Family Wedding Shoot (5 mins)"
    ]
  },
  {
    name: "Package 2",
    price: "₹65,000",
    features: [
      "1 Traditional Photo",
      "1 Traditional Video",
      "1 Candid Photo",
      "1 Premium Album"
    ]
  },
  {
    name: "Package 3",
    price: "₹1,00,000",
    features: [
      "1 Traditional Photo",
      "1 Traditional Video",
      "1 Candid Photo",
      "1 Candid Video",
      "Post Wedding Outdoor",
      "1 Premium Album"
    ]
  },
  {
    name: "Package 4",
    price: "₹1,70,000",
    features: [
      "2 Traditional Photo",
      "2 Traditional Video",
      "1 Candid Photo",
      "1 Candid Video",
      "LED Wall",
      "2 Premium Albums",
      "Outdoor Shoot"
    ]
  },
  {
    name: "Package 5",
    price: "₹2,00,000",
    features: [
      "2 Traditional Photo",
      "2 Traditional Video",
      "1 Candid Photo",
      "1 Candid Video",
      "LED Wall",
      "Live Telecast",
      "2 Premium Albums"
    ]
  },
  {
    name: "Package 6",
    price: "₹2,60,000",
    features: [
      "2 Traditional Photo",
      "2 Traditional Video",
      "1 Candid Photo",
      "1 Candid Video",
      "LED Wall",
      "Live Telecast",
      "Post Wedding",
      "2 Premium Albums",
      "Outdoor Shoot"
    ]
  }
];

export default function Packages() {
  return (
    <section className="packages">
      <div className="container">

        <span className="section-label">Pricing</span>

        <h2 className="packages-title">
          Wedding <span>Packages</span>
        </h2>

        <div className="packages-grid">
          {packages.map((item, index) => (
            <div className="package-card" key={index}>

              <h3>{item.name}</h3>

              <div className="price">
                {item.price}
              </div>

              <ul>
                {item.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
<button
  className="btn"
  onClick={() =>
    window.open(
      `https://wa.me/919543061112?text=Hi, I'm interested in ${item.name}. Please share more details.`,
      "_blank"
    )
  }
>
  Book Now
</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}