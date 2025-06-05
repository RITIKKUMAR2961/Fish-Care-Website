import goldfishImage from '../assets/Img/goldfish.jpg'
import BettaFish from "../assets/Img/Betta.jpg"
import GuppyFish from "../assets/Img/Guppy.jpg"
import NenoTetra from "../assets/Img/NenoTetra.webp"
import corydorasCatfish from "../assets/Img/Leopard-Corydoras-Julii-.png"
import platy from "../assets/Img/platy.webp"
import mollyFish from "../assets/Img/mollyFish.jpg"
import dwarfGourami from "../assets/Img/dwarfGourami.jpg"
import ZebraDanio  from "../assets/Img/ZebraDanio.webp"
import HarlequinRasbora from "../assets/Img/HarlequinRasbora.jpg"
import AngelFish from "../assets/Img/AngelFish.jpg"
import Rainbowfish from "../assets/Img/Rainbowfish.jpg"
import DecusFish from "../assets/Img/DecusFish.jpg"
import Cardinal_Tetra from "../assets/Img/Cardinal_Tetra.jpg"
import Oscar from "../assets/Img/Oscar.jpg"
import silver_dollar from "../assets/Img/silver_dollar.jpeg"
const fishData = [
  {
    id: "goldfish",
    name: "Goldfish",
    description: 
      "Goldfish are one of the most popular freshwater aquarium fish worldwide. They belong to the carp family and are known for their bright orange and gold colors, though varieties in white, black, and mixed hues exist. Goldfish are coldwater fish that thrive in temperatures between 18-22°C (64-72°F). They require a minimum tank size of 20 gallons for a single fish due to their potential size and high waste output. A well-filtered tank with regular water changes is crucial to maintain water quality and prevent ammonia buildup. Goldfish are social but can be territorial, so tank mates should be chosen carefully. Ideal companions include Koi and White Cloud Mountain Minnows. They are omnivores and enjoy a diet of flakes, pellets, vegetables, and occasional protein treats. With proper care, goldfish can live up to 10-15 years or more, making them a rewarding choice for beginner and experienced aquarists alike.",
    idealTemp: "18-22°C",
    tankSize: "20 gallons minimum",
    compatibleFish: ["Koi", "White Cloud Mountain Minnow"],
    image: goldfishImage
  },
  {
    id: "betta",
    name: "Betta",
    description: 
      "Betta fish, also known as Siamese fighting fish, are tropical freshwater fish famous for their vibrant colors and elaborate fins. Native to Southeast Asia, they prefer warmer waters between 26-28°C (79-82°F) and can tolerate smaller tanks, though a minimum of 5 gallons is recommended. Male Bettas are aggressive and territorial, especially towards other males, so they are often kept alone or with peaceful tank mates that won’t nip their fins. Suitable companions include Corydoras catfish and Neon Tetras. Bettas are labyrinth fish, which means they can breathe atmospheric air, allowing them to survive in low-oxygen environments. They require a balanced diet of pellets, flakes, and frozen or live foods such as bloodworms and brine shrimp. With the right environment, Bettas can live up to 3-5 years and provide beautiful color and personality to any aquarium.",
    idealTemp: "26-28°C",
    tankSize: "5 gallons minimum",
    compatibleFish: ["Corydoras Catfish", "Neon Tetra"],
    image: BettaFish,
  },
  {
    id: "guppy",
    name: "Guppy",
    description: 
      "Guppies are small, hardy tropical fish that are highly popular due to their bright colors, ease of care, and active behavior. Native to northeast South America, they thrive in temperatures between 22-28°C (72-82°F) and are ideal for community tanks. Guppies prefer a tank size of at least 10 gallons and do well in groups. They are livebearers, meaning they give birth to free-swimming fry, so be prepared for breeding. Compatible tank mates include Mollies, Platies, and peaceful tetras. Guppies are omnivores and enjoy a varied diet including flakes, pellets, and live or frozen foods like daphnia and brine shrimp. Their playful nature and vibrant color patterns add life to any aquarium, and with proper care, they live up to 3 years.",
    idealTemp: "22-28°C",
    tankSize: "10 gallons minimum",
    compatibleFish: ["Mollies", "Platies"],
    image: GuppyFish,
  },
  {
    id: "neon_tetra",
    name: "Neon Tetra",
    description:
      "Neon Tetras are small, vibrant freshwater fish known for their striking blue and red coloration. Native to the Amazon Basin, they thrive in soft, acidic waters with temperatures between 22-26°C (72-79°F). These schooling fish prefer to be kept in groups of six or more, which helps reduce stress and encourages natural behavior. Neon Tetras are peaceful and make excellent additions to community tanks. They are omnivorous, feeding on a diet of high-quality flake foods, micro pellets, and occasional live or frozen foods like brine shrimp. A well-planted aquarium with subdued lighting mimics their natural habitat and enhances their colors. Regular water changes and stable water parameters are crucial for their health. With proper care, Neon Tetras can live up to 5 years.",
    idealTemp: "22-26°C",
    tankSize: "10 gallons minimum",
    compatibleFish: ["Guppy", "Corydoras Catfish", "Harlequin Rasbora", "Dwarf Gourami"],
    image: NenoTetra,
  },
  {
    id: "corydoras_catfish",
    name: "Corydoras Catfish",
    description:
      "Corydoras Catfish, commonly called Cory cats, are peaceful bottom-dwelling fish native to South America. They thrive in temperatures of 22-26°C (72-79°F) and prefer a well-planted tank with soft substrate to protect their delicate barbels. Corydoras are social fish that do best in groups of 5 or more, where they display fascinating schooling behaviors. They are omnivorous scavengers, feeding on leftover food and detritus at the tank bottom, but should be supplemented with sinking pellets and live or frozen foods like bloodworms. Due to their gentle nature, Cory cats are compatible with a wide variety of peaceful species including tetras, guppies, and small gouramis. With good care, they can live up to 5 years and help maintain a clean tank environment.",
    idealTemp: "22-26°C",
    tankSize: "15 gallons minimum",
    compatibleFish: ["Neon Tetra", "Guppy", "Dwarf Gourami"],
    image:corydorasCatfish
  },
  {
    id: "platy",
    name: "Platy",
    description:
      "Platies are colorful, hardy freshwater fish native to Central America and are beloved for their peaceful temperament and ease of care. They thrive in community tanks with temperatures ranging from 20-26°C (68-79°F) and require a minimum tank size of 10 gallons. Platies are livebearers that breed readily, producing fry that require separate care. Their diet is omnivorous and flexible, accepting flakes, pellets, and live foods such as brine shrimp. They coexist well with other peaceful species like guppies, mollies, and tetras. Platies enjoy a well-planted tank with open swimming areas. Their vibrant colors and active behavior add life and diversity to community aquariums. Lifespan ranges from 3-5 years with proper care.",
    idealTemp: "20-26°C",
    tankSize: "10 gallons minimum",
    compatibleFish: ["Guppy", "Molly", "Neon Tetra"],
    image: platy
  },
  {
    id: "molly",
    name: "Molly",
    description:
      "Mollies are versatile and hardy freshwater fish native to Central and South America. They thrive in a variety of water conditions and prefer temperatures between 24-28°C (75-82°F). Mollies do best in tanks of at least 20 gallons with plenty of plants and open swimming space. They are livebearers and breed easily in captivity, producing numerous fry. Mollies are omnivores that accept a varied diet including flakes, algae wafers, and live or frozen foods. They are peaceful and compatible with other community fish such as platies, guppies, and tetras. Mollies come in several color morphs, including black, dalmatian, and sailfin varieties. With good care, mollies can live 3-5 years, contributing lively activity and bright colors to the aquarium.",
    idealTemp: "24-28°C",
    tankSize: "20 gallons minimum",
    compatibleFish: ["Platy", "Guppy", "Swordtail"],
    image:mollyFish
  },
  {
    id: "dwarf_gourami",
    name: "Dwarf Gourami",
    description:
      "The Dwarf Gourami is a popular freshwater fish prized for its brilliant colors and peaceful demeanor. Native to India and Bangladesh, they thrive in temperatures between 24-28°C (75-82°F). Dwarf Gouramis require a minimum tank size of 10 gallons with plenty of plants and hiding spots. Males display bright blue, red, or orange coloration, which can intensify with good water quality and diet. They are labyrinth fish, able to breathe air from the surface, making them resilient to lower oxygen levels. Dwarf Gouramis are generally peaceful but may show mild territorial behavior, so tank mates should be chosen accordingly. Suitable companions include tetras, rasboras, and corydoras. They feed on flakes, pellets, and occasional live or frozen foods. Lifespan ranges 4-6 years.",
    idealTemp: "24-28°C",
    tankSize: "10 gallons minimum",
    compatibleFish: ["Neon Tetra", "Corydoras Catfish", "Harlequin Rasbora"],
    image: dwarfGourami
  },
  {
    id: "zebra_danio",
    name: "Zebra Danio",
    description:
      "Zebra Danios are active, hardy freshwater fish native to South Asia. Known for their distinctive horizontal stripes, they thrive in a wide range of temperatures from 18-24°C (64-75°F), making them suitable for cooler tanks. They prefer to be kept in groups of at least 5 to promote schooling behavior. Zebra Danios are omnivores, accepting flakes, pellets, and live foods such as bloodworms. Their energetic nature makes them excellent for community tanks with peaceful species like tetras, rasboras, and small catfish. They require a minimum tank size of 10 gallons. Due to their hardiness and playful behavior, Zebra Danios are popular among beginner aquarists. Their lifespan ranges from 2-5 years.",
    idealTemp: "18-24°C",
    tankSize: "10 gallons minimum",
    compatibleFish: ["Neon Tetra", "Corydoras Catfish", "Harlequin Rasbora"],
    image: ZebraDanio
  },
  {
    id: "harlequin_rasbora",
    name: "Harlequin Rasbora",
    description:
      "Harlequin Rasboras are small, peaceful schooling fish native to Southeast Asia. They have a distinctive black triangular patch on their bodies set against a coppery orange background. They thrive in temperatures between 22-27°C (72-81°F) and prefer soft, slightly acidic water. These fish do best in groups of 6 or more to reduce stress and encourage natural schooling behavior. Harlequin Rasboras are omnivores and accept a diet of flakes, pellets, and live foods such as daphnia and bloodworms. They are excellent community fish and compatible with species like neon tetras, dwarf gouramis, and corydoras catfish. A planted aquarium with subdued lighting mimics their natural habitat and enhances their colors. Lifespan can reach up to 5 years.",
    idealTemp: "22-27°C",
    tankSize: "15 gallons minimum",
    compatibleFish: ["Neon Tetra", "Dwarf Gourami", "Corydoras Catfish"],
    image: HarlequinRasbora
  },
  {
    id: "angelfish",
    name: "Angelfish",
    description:
      "Angelfish are elegant and popular freshwater cichlids native to the Amazon Basin. They are known for their tall, triangular bodies and graceful swimming. Angelfish thrive in temperatures between 24-30°C (75-86°F) and require a minimum tank size of 20 gallons due to their size and territorial behavior. They prefer well-planted tanks with plenty of vertical swimming space. Angelfish can be semi-aggressive, so tank mates should be chosen carefully; peaceful but robust species like larger tetras, gouramis, and corydoras are usually compatible. They are omnivores, feeding on flakes, pellets, and live or frozen foods such as brine shrimp. With proper care, angelfish can live 8-10 years and add striking presence to any aquarium.",
    idealTemp: "24-30°C",
    tankSize: "20 gallons minimum",
    compatibleFish: ["Dwarf Gourami", "Corydoras Catfish", "Rainbowfish"],
    image:AngelFish
  },
  {
    id: "rainbowfish",
    name: "Rainbowfish",
    description:
      "Rainbowfish are colorful and active freshwater fish native to Australia and New Guinea. They are known for their iridescent scales that reflect light in vibrant colors. Rainbowfish thrive in temperatures between 24-28°C (75-82°F) and prefer a minimum tank size of 20 gallons. They are peaceful and do best in schools of six or more. Rainbowfish appreciate a well-planted tank with open swimming areas. Their diet is omnivorous and includes flakes, pellets, and live or frozen foods. Compatible tank mates include angelfish, gouramis, and larger tetras. Rainbowfish are hardy and adaptable, making them suitable for intermediate aquarists. Lifespan ranges from 5-8 years with proper care.",
    idealTemp: "24-28°C",
    tankSize: "20 gallons minimum",
    compatibleFish: ["Angelfish", "Dwarf Gourami", "Corydoras Catfish"],
    image: Rainbowfish
  },
  {
    id: "discus",
    name: "Discus",
    description:
      "Discus fish are prized in the aquarium hobby for their striking round shape and vivid coloration. Native to the Amazon River Basin, they prefer warm water temperatures of 27-31°C (80-88°F) and soft, acidic water. Discus require large tanks of at least 50 gallons due to their size and social nature. They are schooling fish that thrive in groups of five or more. Discus are somewhat sensitive to water quality and require frequent maintenance. Their diet consists of high-quality pellets, flakes, and frozen foods such as bloodworms and brine shrimp. Tank mates should be peaceful species that thrive in similar conditions, such as cardinal tetras and certain dwarf cichlids. With attentive care, discus can live up to 10 years and become stunning centerpiece fish.",
    idealTemp: "27-31°C",
    tankSize: "50 gallons minimum",
    compatibleFish: ["Cardinal Tetra", "Rummynose Tetra", "Corydoras Catfish"],
    image: DecusFish
  },
  {
    id: "cardinal_tetra",
    name: "Cardinal Tetra",
    description:
      "Cardinal Tetras are similar in appearance to Neon Tetras but are distinguished by their more extensive red coloring. Native to the Amazon Basin, they thrive in soft, acidic water with temperatures between 23-27°C (73-81°F). These peaceful schooling fish should be kept in groups of six or more to display natural behaviors and reduce stress. Cardinal Tetras are omnivores, feeding on flakes, micro pellets, and occasional live or frozen foods like brine shrimp. They prefer well-planted tanks with subdued lighting. Compatible tank mates include discus, corydoras catfish, and dwarf gouramis. With proper care, Cardinal Tetras can live up to 5 years, adding vibrant color and movement to community aquariums.",
    idealTemp: "23-27°C",
    tankSize: "15 gallons minimum",
    compatibleFish: ["Discus", "Corydoras Catfish", "Dwarf Gourami"],
    image: Cardinal_Tetra
  },
  {
    id: "oscar",
    name: "Oscar",
    description:
      "Oscar fish are large, intelligent freshwater cichlids native to South America. Known for their bold personalities and striking color patterns, Oscars require spacious tanks of at least 55 gallons. They thrive in temperatures between 22-28°C (72-82°F). Oscars are territorial and can be aggressive, so tank mates should be chosen carefully, usually consisting of other large, robust fish. Oscars are omnivores and need a varied diet including pellets, live foods, and vegetables. Due to their size and waste production, powerful filtration and regular water changes are essential. Oscars can live 10-15 years and provide fascinating behavior for advanced aquarists.",
    idealTemp: "22-28°C",
    tankSize: "55 gallons minimum",
    compatibleFish: ["Silver Dollar", "Convict Cichlid", "Bichir"],
    image: Oscar
  },
  {
    id: "silver_dollar",
    name: "Silver Dollar",
    description:
      "Silver Dollars are peaceful, schooling fish named for their round, silver-colored bodies resembling coins. Native to South America, they thrive in temperatures between 24-28°C (75-82°F) and require a minimum tank size of 55 gallons due to their active swimming and size. Silver Dollars prefer well-planted tanks but may nibble on soft-leaf plants. They are omnivorous with a diet that includes flakes, vegetables, and live foods. Compatible tank mates include Oscars, large tetras, and peaceful cichlids. Silver Dollars are social and do best in groups of five or more. With proper care, they can live up to 10 years and add a shimmering presence to large community tanks.",
    idealTemp: "24-28°C",
    tankSize: "55 gallons minimum",
    compatibleFish: ["Oscar", "Convict Cichlid", "Bichir"],
    image: silver_dollar
  }

];

export default fishData;