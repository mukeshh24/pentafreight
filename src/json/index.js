import CardOne from "../assets/images/card-one.png";
import CardTwo from "../assets/images/card-two.png";
import CardThree from "../assets/images/card-three.png";
import CardFour from "../assets/images/card-four.png";
import CardFive from "../assets/images/card-five.jpg";
import CardSix from "../assets/images/card-six.png";
import ClientOne from "../assets/images/client-one.png";
import ClientTwo from "../assets/images/client-two.png";
import ClientThree from "../assets/images/client-three.png";
import ClientFour from "../assets/images/client-four.png";
import CertificateOne from "../assets/images/certificate-one.png";
import CertificateTwo from "../assets/images/certificate-two.png";
import CertificateThree from "../assets/images/certificate-three.png";
import CertificateFour from "../assets/images/certificate-four.png";
import CertificateFive from "../assets/images/certificate-five.png";
import CertificateSix from "../assets/images/certificate-six.png";
import CertificateSeven from "../assets/images/certificate-seven.png";
import CertificateEight from "../assets/images/certificate-eight.png";
import CertificateNine from "../assets/images/certificate-nine.png";
import CertificateTen from "../assets/images/certificate-ten.png";
import AwardTwo from "../assets/images/award-two.png";
import AwardThree from "../assets/images/award-three.png";
import AwardFive from "../assets/images/award-five.png";
import AwardSeven from "../assets/images/award-seven.png";
import AwardTen from "../assets/images/award-ten.png";
import AwardEleven from "../assets/images/award-eleven.png";
import AwardThirteen from "../assets/images/award-thirteen.png";
import AwardFourteen from "../assets/images/award-fourteen.png";
import { MdLocalPharmacy } from "react-icons/md";
import { GiChemicalDrop } from "react-icons/gi";
import { GiPackedPlanks } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { FaBuilding } from "react-icons/fa";
import { FaWineGlassAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Air Freight",
    image: CardOne,
    position: "right",
    description1:
      "We are India's leading air freight forwarder, offering complete import and export logistics. Our volume advantage ensures competitive pricing and guaranteed space.",
    description2:
      "Our expert route planners optimize transit, carrier selection, and cargo handling. We reduce costs and transit time with on-demand pickup, drop-off, and warehousing.",
    tags: ["Speed", "Efficiency", "Reliability", "Affordability"],
    link: "/services/air-freight",
  },

  {
    id: 2,
    title: "Sea Freight",
    image: CardTwo,
    position: "left",
    description1:
      "We offer global sea freight services via top shipping lines. Our team understands your products, transit needs, and budget.",
    description2:
      "With decades of experience, we plan, monitor, and manage shipments, ensuring compliance. We provide flexible FCL scheduling and cost-efficient LCL options.",
    tags: ["Flexibility", "Cost Effective", "Scalability", "Expertise"],
    link: "/services/sea-freight",
  },

  {
    id: 3,
    title: "Multi Modal Transport",
    image: CardThree,
    position: "right",
    description1:
      "Every shipment is unique, so we offer multiple affordable transport options.",
    description2:
      "Our tailored solutions enable real-time cargo tracking while streamlining your supply chain through a single point of contact.",
    tags: ["Integration", "Efficiency", "Visibility", "Convenience"],
    link: "/services/multi-modal-transport",
  },

  {
    id: 4,
    title: "Project Cargo",
    image: CardFour,
    position: "left",
    description1:
      "We understand the precise needs of customers and shipping lines, ensuring cargo is stuffed, lashed, and choked to specifications.",
    description2:
      "We transport over-dimensional cargo using open tops, flat racks, and flatbeds with complete logistics support.",
    tags: ["Precision", "Expertise", "Oversized", "Security"],
    link: "/services/project-cargo",
  },

  {
    id: 5,
    title: "Custom Broking",
    image: CardFive,
    position: "right",
    description1:
      "Our licensed customs agents know domestic and international regulations.",
    description2:
      "With 30+ years of experience we ensure smooth, timely and transparent cargo clearance every time.",
    tags: ["Accuracy", "Compliance", "Speed", "Expertise"],
    link: "/services/custom-broking",
  },

  {
    id: 6,
    title: "Transit Warehouse and Fleet",
    image: CardSix,
    position: "left",
    description1:
      "Our transit warehouse is strategically located near International Air Cargo Complex and Ocean Ports.",
    description2:
      "We provide specialized packaging, palletizing, shrink wrapping and nationwide transportation through reefer and general trucks.",
    tags: ["Specialized", "Accessible", "Versatile", "Nationwide"],
    link: "/services/transit-warehouse-and-fleet",
  },
];

export const stats = [
  {
    number: 7,
    suffix: "+",
    title: "Strategic Domestic Offices",
  },
  {
    number: 1,
    suffix: "",
    prefix: "",
    text: "USA",
    title: "Global Presence",
  },
  {
    number: 200,
    suffix: "+",
    title: "Logistics Experts",
  },
  {
    number: 50,
    suffix: "+",
    title: "Awards & Accolades",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Frank Naeve",
    designation: "Vice President Asia Pacific",
    companyLogo: ClientOne,
    review:
      "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways. They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.",
  },
  {
    id: 2,
    name: "Makarand Sane",
    designation: "General Manager Head - Export Logistics",
    companyLogo: ClientTwo,
    review:
      "We highly regard Penta Freight's professionalism and knowledge in the freight field. Their team takes the workload and worry off our shoulders. For about two decades we have been satisfied by the flexible, reliable and trustworthy service and excellent quality of work. One key feature that Penta Freight portrays is that they understand our needs and put their best efforts in making things possible. They have continued to innovate and change with the freight industry.",
  },
  {
    id: 3,
    name: "Ryan Veigas",
    designation: "Vice President - Supply Chain & Procurement",
    companyLogo: ClientThree,
    review:
      "Penta Freight has been one of our export logistics service providers for several years and our experience with them has been consistently good. Besides having strong relationships with airlines to obtain competitive rates, Penta Freight has the ability to get things done in a compliant manner. In addition, an excellent service level and professional relationship was maintained throughout the course of export operations. Best wishes for all success.",
  },
  {
    id: 4,
    name: "Frank Naeve",
    designation: "Vice President Asia Pacific",
    companyLogo: ClientFour,
    company: "Lufthansa Cargo",
    review:
      "Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways. They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.",
  },
];

export const certifications = [
  {
    id: 1,
    name: "Certificate 1",
    image: CertificateOne,
  },
  {
    id: 2,
    name: "Certificate 2",
    image: CertificateTwo,
  },
  {
    id: 3,
    name: "Certificate 3",
    image: CertificateThree,
  },
  {
    id: 4,
    name: "Certificate 4",
    image: CertificateFour,
  },
  {
    id: 5,
    name: "Certificate 5",
    image: CertificateFive,
  },
  {
    id: 6,
    name: "Certificate 6",
    image: CertificateSix,
  },
  {
    id: 7,
    name: "Certificate 7",
    image: CertificateSeven,
  },
  {
    id: 8,
    name: "Certificate 8",
    image: CertificateEight,
  },
  {
    id: 9,
    name: "Certificate 9",
    image: CertificateNine,
  },
  {
    id: 10,
    name: "Certificate 10",
    image: CertificateTen,
  },
];

export const awards = [
  {
    id: 1,
    image: "",
    titles: ["Top Cargo Agents, 2016/17", "Top Cargo Agents, 2005/06"],
  },
  {
    id: 2,
    image: AwardTwo,
    titles: ["Top Revenue Performance, 2002"],
  },
  {
    id: 3,
    image: AwardThree,
    titles: ["Mega Tonners, 2006/07"],
  },
  {
    id: 4,
    image: "",
    titles: ["CONCOR Exim Star, 2003/04"],
  },
  {
    id: 5,
    image: AwardFive,
    titles: ["Meritorious Performance, 1999/2000"],
  },
  {
    id: 6,
    image: "",
    titles: ["Top Performance, 2008", "Top Performance, 2007"],
  },
  {
    id: 7,
    image: AwardSeven,
    titles: ["Significant Support and Contribution, 2007"],
  },
  {
    id: 8,
    image: "",
    titles: [
      "International Award for Excellence in Air Cargo, Region India - Winner, 2018",
    ],
  },
  {
    id: 9,
    image: "",
    titles: [
      "Best Performance, 2017",
      "Excellence Revenue Performance, 2016",
      "Best Performance, 2014",
      "Cargo Agency, 2013",
      "Cargo Agency, 2011",
    ],
  },
  {
    id: 10,
    image: AwardTen,
    titles: [
      "Top Cargo Agent, 2003/04",
      "Top Cargo Agent, 2002/03",
      "Top Cargo Agent, 2001/02",
      "Top Cargo Agent, 1999/2000",
    ],
  },
  {
    id: 11,
    image: AwardEleven,
    titles: [
      "Outstanding Performance, 2007",
      "Outstanding Quality, 2007",
      "Outstanding Performance - Quality, 2007",
      "Outstanding Performance, 2006",
      "Premium Partner, 2017",
      "Asia Partner, 2014",
    ],
  },
  {
    id: 12,
    image: "",
    titles: [
      "Best Business Mix, 2006/07",
      "Significant Contribution, 2000/01",
      "Significant Contribution, 1999/2000",
    ],
  },
  {
    id: 13,
    image: AwardThirteen,
    titles: ["Top Performer, 2017", "Quality and Reliability, 2007"],
  },
  {
    id: 14,
    image: AwardFourteen,
    titles: ["Customer Recognition, 2013"],
  },
];

export const industries = [
  {
    id: 1,
    icon: MdLocalPharmacy,
    title: "Pharmaceuticals",
    description:
      "The pharmaceutical industry requires highly customized supply chain solutions. Our temperature-controlled warehouse ensures seamless end-to-end service, prioritizing transparency and attention to detail for precise and reliable shipments.",
  },
  {
    id: 2,
    icon: GiChemicalDrop,
    title: "Chemicals",
    description:
      "We follow IATA guidelines for chemical imports and exports, offering competitive options. With strong authority relations and continuous monitoring, we ensure a smooth, compliant, and efficient supply chain experience.",
  },
  {
    id: 3,
    icon: GiPackedPlanks,
    title: "Textiles",
    description:
      "We are sensitive to the tightly controlled consignments and seasonality within the textile industry. We optimize your supply chain through our distribution and consolidation services. Our door to door offerings and constant shipment tracking allow you to efficiently monitor your consignments.",
  },
  {
    id: 4,
    icon: FaLightbulb,
    title: "Energy",
    description:
      "As an organization we have kept up with the growing consumption of renewable energy through our forward looking perspective. We have supported the transport of cutting edge tools used to generate renewable energy by coming up with creative methods to serve emerging markets.",
  },
  {
    id: 5,
    icon: FaCar,
    title: "Automobile",
    description:
      "Our adaptable nature allows us to handle inventory of any dimension and value for the automobile industry. We demonstrate the same flexibility by catering to the dynamic market trends of this industry across our global network.",
  },
  {
    id: 6,
    icon: LuPackage,
    title: "Packaging",
    description:
      "The packaging industry needs forwarders with a widespread reach. We are able to offer this through our global partnerships and diverse network of carriers. Our experienced team uses this network to provide you with timely and affordable solutions.",
  },
  {
    id: 7,
    icon: FaBuilding,
    title: "Time Critical Cargo",
    description:
      "We leverage strong carrier relations to secure priority pricing while ensuring swift, efficient operations for time-critical cargo.",
  },
  {
    id: 8,
    icon: FaWineGlassAlt,
    title: "Glassware",
    description:
      "Our team is acquainted with the extensive reach and distribution network of the glassware industry. We couple our global supply chain knowledge with material handling expertise to ensure your shipments are transported reliably and efficiently.",
  },
  {
    id: 9,
    icon: FaLaptopCode,
    title: "Electronics",
    description:
      "We ensure the safe and efficient transport of electronic goods, protecting sensitive components from damage and delays. Our logistics solutions help businesses meet market demands while optimizing supply chain costs.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What industries do you serve?",
    answer:
      "We serve various industries including pharmaceuticals, chemicals, energy, packaging, textiles, and more, offering tailored logistics solutions for each.",
  },
  {
    id: 2,
    question: "How do you handle temperature-sensitive shipments?",
    answer:
      "We provide temperature-controlled solutions to ensure the safe transport of sensitive goods, especially for the pharmaceutical industry.",
  },
  {
    id: 3,
    question: "What sets your logistics apart?",
    answer:
      "We offer customized, transparent solutions with competitive rates and a deep understanding of industry-specific needs.",
  },
  {
    id: 4,
    question: "How do you ensure compliance with regulations?",
    answer:
      "We comply with international guidelines, working closely with authorities to ensure smooth and legal shipments.",
  },
];

export const seriesData = [
  {
    id: 1,
    title: "Series 4",
    temp: "2°C - 8°C",
    usage: "Typically used for products that require refrigeration.",
    ideal:
      "Ideal for vaccines, insulin, biologics, and other temperature-sensitive pharmaceuticals.",
  },
  {
    id: 2,
    title: "Series 22",
    temp: "15°C - 25°C",
    usage: "Covers a controlled room temperature range.",
    ideal:
      "Suitable for products that need to remain stable at standard room temperature, including certain medicines and cosmetics.",
  },
  {
    id: 3,
    title: "Series 22 M",
    temp: "-20°C",
    usage: "Maintains sub-zero temperatures for more sensitive items.",
    ideal: "Ideal for frozen vaccines and biologics.",
  },
  {
    id: 4,
    title: "Series 50M",
    temp: "-50°C",
    usage: "Used for extreme cold chain products.",
    ideal: "Ideal for advanced biologics and special pharmaceuticals.",
  },
];
