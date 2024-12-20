import bcryptjs from 'bcryptjs';

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats';

type SeedProduct = {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: 'men' | 'women' | 'kid' | 'unisex';
};

type SeedUser = {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
};

type SeedData = {
  users: SeedUser[];
  categories: ValidTypes[];
  products: SeedProduct[];
};

export const initialData: SeedData = {
  users: [
    {
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: bcryptjs.hashSync('123456'),
      role: 'admin',
    },
    {
      name: 'Jane Doe',
      email: 'janedoe@email.com',
      password: bcryptjs.hashSync('123456'),
      role: 'user',
    },
  ],
  categories: ['shirts', 'pants', 'hoodies', 'hats'],
  products: [
    {
      description:
        'Utility is our goal. Built for any planet is our motto.\n\nThe Built for Any Planet Tee features an orange cyber owl graphic on the front and a matching Tesla wordmark on the back. Part of our Built for Any Planet Collection, this tee is designed for style and comfort. Made from 95% cotton and 5% elastane.',
      images: [
        '2076542-01-A-2-01.avif',
        '2076542-01-A-2-02.avif',
        '2076542-01-A-2-03.avif',
        '2076542-01-A-2-04.avif',
      ],
      inStock: 7,
      price: 75,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'mens-built-for-any-planet-tee',
      type: 'shirts',
      tags: ['sweatshirt'],
      title: "Men's Built for Any Planet Tee",
      gender: 'men',
    },
    {
      description:
        'Utility is our goal. Built for any planet is our motto.The Built for Any Planet Trucker Hat features a 3D-faceted orange cyber owl graphic on the front, an adjustable snapback closure on the back and a breathable mesh backing. Part of our Built for Any Planet Collection, this hat is made from 97% polyester and 3% elastane.',
      images: [
        '2078147-00-A-2-01.avif',
        '2078147-00-A-2-02.avif',
        '2078147-00-A-2-03.avif',
      ],
      inStock: 5,
      price: 200,
      sizes: ['S', 'M'],
      slug: 'built-for-any-planet-trucker-hat',
      type: 'hats',
      tags: ['hats'],
      title: 'Built for Any Planet Trucker Hat',
      gender: 'men',
    },
    {
      description:
        'Utility is our goal. Built for any planet is our motto.The Built for Any Planet Hoodie features a high-density orange cyber owl graphic on the front and matching Tesla wordmark on the back. Part of our Built for Any Planet Collection, this oversized hoodie is designed for style and comfort. Made from 100% cotton.',
      images: [
        '2077996-01-A-2-01.avif',
        '2077996-01-A-2-02.avif',
        '2077996-01-A-2-03.avif',
        '2077996-01-A-2-04.avif',
      ],
      inStock: 10,
      price: 85,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      slug: 'built-for-any-planet-hoodie',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Built for Any Planet Hoodie',
      gender: 'men',
    },
    {
      description:
        'Utility is our goal. Built for any planet is our motto.The Built for Any Planet Tee features an orange cyber owl graphic on the front and a matching Tesla wordmark on the back. Part of our Built for Any Planet Collection, this tee is designed for style and comfort. Made from 95% cotton and 5% elastane.',
      images: [
        '2076542-01-A-2-01.avif',
        '2076542-01-A-2-02.avif',
        '2076542-01-A-2-03.avif',
        '2076542-01-A-2-04.avif',
      ],
      inStock: 50,
      price: 40,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: 'mens-built-for-any-planet-tee-2',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Built for Any Planet Tee",
      gender: 'men',
    },
    {
      description:
        'Celebrating the launch of our Foundation Series Cybertruck, this tee features a raised, high-density Foundation Series wordmark across the front and Cybertruck silhouette on the back. Made from 95% cotton and 5% elastane for a soft, comfortable fit.',
      images: [
        '2076543-01-A-2-01.avif',
        '2076543-01-A-2-02.avif',
        '2076543-01-A-2-03.avif',
        '2076543-01-A-2-04.avif',
      ],
      inStock: 50,
      price: 40,
      sizes: ['M', 'L', 'XL', 'XXL'],
      slug: 'mens-foundation-series-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Foundation Series Tee",
      gender: 'men',
    },
    {
      description:
        'With a distressed appearance, the tee features a monochromatic print of Cybertruck racing through an anime-inspired cyber city on the front and the Cybertruck icon on the back nape. Designed for an oversized fit with an ultra-soft, heavier-weight material. Made from 95% cotton and 5% elastane.',
      images: [
        '2024511-00-A-3-01.avif',
        '2024511-00-A-3-02.avif',
        '2024511-00-A-3-03.avif',
      ],
      inStock: 0,
      price: 45,
      sizes: ['M', 'L', 'XL', 'XXL'],
      slug: 'mens-cybertruck-cityscape-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Cybertruck Cityscape Tee",
      gender: 'men',
    },
    {
      description:
        "Inspired by Cybertruck's off-road capability, the tee features a monochromatic print of Cybertruck traversing through tough terrain on the front and a raised Cybertruck graffiti wordmark on the back. Designed for an oversized fit. Made from 100% heavyweight cotton.",
      images: [
        '2058347-00-A-3-01.avif',
        '2058347-00-A-3-02.avif',
        '2058347-00-A-3-03.avif',
      ],
      inStock: 15,
      price: 45,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'mens-cybertruck-foundation-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Cybertruck Foundation Tee",
      gender: 'men',
    },
    {
      description:
        'Inspired by Cybertruck’s stainless-steel exterior, the Men’s Cybertruck Reflective Tee features the Cybertruck silhouette on the front and signature Cybertruck graffiti wordmark on the back collar, both constructed from laser-cut, high-visibility vinyl taping to create a unique glowing effect. Made from 95% cotton and 5% elastane.',
      images: [
        '2030197-00-A-2-01.avif',
        '2030197-00-A-2-02.avif',
        '2030197-00-A-2-03.avif',
        '2030197-00-A-2-04.avif',
      ],
      inStock: 17,
      price: 35,
      sizes: ['XS', 'S', 'XL', 'XXL'],
      slug: 'mens-cybertruck-reflective-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Cybertruck Reflective Tee",
      gender: 'men',
    },
    {
      description:
        'Inspired by our laser-like headlights, the Cybertruck Horizon Tee features an illuminated Cybertruck silhouette on the front with the signature Cybertruck graffiti wordmark on the back. Made from 95% cotton and 5% elastane.',
      images: [
        '1932712-00-A_1_2000.avif',
        '1932712-00-A_2_2000.avif',
        '1932712-00-A_3_2000.avif',
      ],
      inStock: 12,
      price: 35,
      sizes: ['XS', 'S', 'M'],
      slug: 'mens-cybertruck-horizon-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Men’s Cybertruck Horizon Tee',
      gender: 'men',
    },
    {
      description:
        'Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.',
      images: [
        '7654393-00-A_0_2000.avif',
        '7654393-00-A_1_2000.avif',
        '7654393-00-A_2_2000.avif',
        '7654393-00-A_3_2000.avif',
      ],
      inStock: 5,
      price: 35,
      sizes: ['XS', 'S'],
      slug: 'mens-cybertruck-owl-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Cybertruck Owl Tee",
      gender: 'men',
    },
    {
      description:
        'Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase "Pure Energy" under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.',
      images: [
        '9877034-00-A_0_2000.avif',
        '9877034-00-A_1_2000.avif',
        '9877034-00-A_2_2000.avif',
      ],
      inStock: 2,
      price: 35,
      sizes: ['XS', 'S', 'M'],
      slug: 'mens-powerwall-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's Powerwall Tee",
      gender: 'men',
    },
    {
      description:
        'Designed for exceptional comfort and inspired by the Cybertruck unveil event, the OMFG Tee is made from 100% cotton and features our signature Cybertruck icon on the back.',
      images: [
        '7654399-00-A_0_2000.avif',
        '7654399-00-A_1_2000.avif',
        '7654399-00-A_2_2000.avif',
      ],
      inStock: 82,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'mens-omfg-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Men’s OMFG Tee',
      gender: 'men',
    },
    {
      description:
        "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
      images: [
        '8764741-00-A_0_2000.avif',
        '8764741-00-A_1_2000.avif',
        '8764741-00-A_2_2000.avif',
      ],
      inStock: 24,
      price: 15,
      sizes: ['XL', 'XXL'],
      slug: 'mens-3d-large-wordmark-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's 3D Large Wordmark Tee",
      gender: 'men',
    },
    {
      description:
        'Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.',
      images: [
        '7652426-00-A-2-01.avif',
        '7652426-00-A-2-02.avif',
        '7652426-00-A-2-03.avif',
      ],
      inStock: 5,
      price: 15,
      sizes: ['XS', 'S', 'XXL'],
      slug: 'mens-3d-t-logo-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's 3D T Logo Tee",
      gender: 'men',
    },
    {
      description:
        'Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.',
      images: [
        '8528835-00-A-White-2-01.avif',
        '8528839-00-A_2_2000.avif',
        '8528839-00-A_3_2000.avif',
      ],
      inStock: 150,
      price: 15,
      sizes: ['M', 'L'],
      slug: 'mens-3d-small-wordmark-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Men’s 3D Small Wordmark Tee',
      gender: 'men',
    },
    {
      description:
        "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
      images: ['8529201-00-A-2-01.avif', '8529201-00-A-2-02.avif'],
      inStock: 10,
      price: 15,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'mens-3d-t-logo-long-sleeve-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's 3D T Logo Long Sleeve Tee",
      gender: 'men',
    },
    {
      description:
        "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 80% Peruvian cotton and 20% polyester, featuring an understated wordmark logo on the left chest.",
      images: [
        '8764806-00-A_0_2000.avif',
        '8764806-00-A_1_2000.avif',
        '8764806-00-A_2_2000.avif',
      ],
      inStock: 34,
      price: 15,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: 'mens-3d-wordmark-long-sleeve-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: "Men's 3D Wordmark Long Sleeve Tee",
      gender: 'men',
    },
    {
      description:
        'Utility is our goal. Built for any planet is our motto. The Built for Any Planet Hoodie features a high-density orange cyber owl graphic on the front and matching Tesla wordmark on the back. Part of our Built for Any Planet Collection, this oversized hoodie is designed for style and comfort. Made from 100% cotton.',
      images: [
        '2077996-01-A-2-01.avif',
        '2077996-01-A-2-02.avif',
        '2077996-01-A-2-03.avif',
        '2077996-01-A-2-04.avif',
      ],
      inStock: 10,
      price: 85,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'built-for-any-planet-hoodie-atl',
      type: 'hoodies',
      tags: ['hoodie'],
      title: 'Built for Any Planet Hoodie Alt',
      gender: 'men',
    },
    {
      description:
        'Inspired by our exhibit at the Petersen Automotive Museum. Our Cybertruck Inside Tesla Sweatshirt features a high-contrast, white simplified Cybertruck form factor graphic on the front. An all-black, heavyweight exterior and super soft interior provides a modern, oversized fit for maximum comfort. Made from 100% sustainably sourced ECOCYCLE® cotton yarn.',
      images: [
        '2024987-00-A-2-01.avif',
        '2024987-00-A-2-02.avif',
        '2024987-00-A-2-03.avif',
      ],
      inStock: 10,
      price: 80,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'cybertruck-inside-tesla-sweatshirt',
      type: 'hoodies',
      tags: ['hoodie'],
      title: 'Cybertruck Inside Tesla Sweatshirt',
      gender: 'men',
    },
    {
      description:
        'Introducing the Elevate Collection. Our Cybertruck Elevate Sweatshirt has a heavyweight exterior and fleece interior with a modern, oversized fit for maximum comfort. Inspired by the stainless-steel exterior of Cybertruck, this Steel Gray crewneck features a raised HD Cybertruck Icon logo across the front. Made from 100% cotton.',
      images: [
        '2022202-00-A-2-01.avif',
        '2022202-00-A-2-02.avif',
        '2022202-00-A-2-03.avif',
      ],
      inStock: 10,
      price: 0,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'cybertruck-elevate-crewneck-sweatshirt',
      type: 'hoodies',
      tags: ['hoodie'],
      title: 'Cybertruck Elevate Crewneck Sweatshirt',
      gender: 'men',
    },
    {
      description:
        'Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.',
      images: [
        '1740113-00-A-2-01.avif',
        '1740113-00-A-2-02.avif',
        '1740113-00-A_0.avif',
        '1740113-00-A_1_2000.avif',
      ],
      inStock: 10,
      price: 0,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'chill-pullover-hoodie',
      type: 'hoodies',
      tags: ['hoodie'],
      title: 'Chill Pullover Hoodie',
      gender: 'unisex',
    },
    {
      description:
        'Utility is our goal. Built for any planet is our motto. The Built for Any Planet Trucker Hat features a 3D-faceted orange cyber owl graphic on the front, an adjustable snapback closure on the back and a breathable mesh backing. Part of our Built for Any Planet Collection, this hat is made from 97% polyester and 3% elastane.',
      images: [
        '2078147-00-A-2-01.avif',
        '2078147-00-A-2-02.avif',
        '2078147-00-A-2-03.avif',
      ],
      inStock: 13,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'built-for-any-planet-trucker-hat-alt',
      type: 'hats',
      tags: ['hats'],
      title: 'Built for Any Planet Trucker Hat Alt',
      gender: 'unisex',
    },
    {
      description:
        'Inspired by the stainless steel exoskeleton of cybertruck, the cybertruck icon trucker hat features a metallic 3d-faceted cybertruck silhouette logo on the front and adjustable snapback closure on the back. Designed with a lightweight, breathable mesh backing and curved visor.',
      images: [
        '1969993-00-A-01.avif',
        '1969993-00-A-02.avif',
        '1969993-00-A-03.avif',
      ],
      inStock: 13,
      price: 35,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'cybertruck-icon-trucker-hat',
      type: 'hats',
      tags: ['hats'],
      title: 'Cybertruck Icon Trucker Hat',
      gender: 'unisex',
    },
    {
      description:
        'Commemorating the November 2023 launch of Cybertruck, the Cybertruck Owl Hat features a 3D-embroidered Cyber Owl graphic on the front and an embossed Cybertruck Icon logo on the back. Its seven-panel construction mirrors the silhouette of a classic baseball hat with metal eyelets for enhanced breathability and an adjustable strap closure with matching metal clasp for the perfect fit every wear. Made from 100% cotton.',
      images: [
        '2022087-00-A-2-01.avif',
        '2022087-00-A-2-02.avif',
        '2022087-00-A-2-03.avif',
      ],
      inStock: 13,
      price: 45,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'cybertruck-owl-hat',
      type: 'hats',
      tags: ['hats'],
      title: 'Cybertruck Owl Hat',
      gender: 'unisex',
    },
    {
      description:
        'The Aero Snapback Hat is a modern take on a classic trucker hat and features an embossed 3D T logo patch on the front. With a mid-crown and a lightweight, perforated mesh backing, this snapback offers a stylish and breathable fit. The visor is made from recycled plastic bottles, and the main body material is 97% polyester and 3% elastane.',
      images: [
        '2059129-00-A-01.avif',
        '2059129-00-A-02.avif',
        '2059129-00-A-03.avif',
      ],
      inStock: 13,
      price: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'aero-snapback-hat',
      type: 'hats',
      tags: ['hats'],
      title: 'Aero Snapback Hat',
      gender: 'unisex',
    },
    {
      description:
        'Featuring a 3D-faceted California grizzly bear logo, the CyberBear Trucker Hat commemorates the opening of our California Engineering HQ. Designed with a lightweight breathable mesh backing and adjustable silicone snapback closure.',
      images: [
        '1943349-00-A_0_2000.avif',
        '1943349-00-A_1_2000.avif',
        '1943349-00-A_2_2000.avif',
      ],
      inStock: 13,
      price: 40,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'cyberBear-trucker-hat',
      type: 'hats',
      tags: ['hats'],
      title: 'CyberBear Trucker Hat',
      gender: 'unisex',
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
      images: [
        '1741441-00-A_0_2000.avif',
        '1741441-00-A_1_2000.avif',
        '1741441-00-A_2_2000.avif',
      ],
      inStock: 85,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'womens-turbine-short-sleeve-tee',
      type: 'shirts',
      tags: ['shirts'],
      title: "Women's Turbine Short Sleeve Tee",
      gender: 'women',
    },
    {
      description:
        "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
      images: [
        '1741441-00-A_0_2000.avif',
        '1741441-00-A_1_2000.avif',
        '1741441-00-A_2_2000.avif',
      ],
      inStock: 85,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'womens-termination-short-sleeve-tee',
      type: 'shirts',
      tags: ['shirts'],
      title: "Women's Termination Short Sleeve Tee",
      gender: 'women',
    },
    {
      description:
        "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
      images: [
        '1740535-00-A_0_2000.avif',
        '1740535-00-A_1_2000.avif',
        '1740535-00-A_2_2000.avif',
        '1740535-00-A_3_2000.avif',
      ],
      inStock: 85,
      price: 95,
      sizes: ['XS', 'S', 'M'],
      slug: 'womens-puffer-jacket',
      type: 'shirts',
      tags: ['shirts'],
      title: "Women's Puffer Jacket",
      gender: 'women',
    },
    {
      description:
        "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
      images: [
        '5645680-00-A_0_2000.avif',
        '5645680-00-A_1_2000.avif',
        '5645680-00-A_2_2000.avif',
        '5645680-00-A_3_2000.avif',
      ],
      inStock: 85,
      price: 70,
      sizes: ['XS', 'S', 'M'],
      slug: 'womens-corp-jacket',
      type: 'hoodies',
      tags: ['hoodies'],
      title: "Women's Corp Jacket",
      gender: 'women',
    },
    {
      description:
        'Made with a fine acrylic, the ultrasoft Tesla Wordmark Beanie features a Tesla wordmark made from flexible 3D thermoplastic polyurethane. Developed for extra comfort and durability to keep its original shape, the stretch-knit beanie with cuff-less styling is both cozy and resistant to pilling and shrinking. Made from 100% acrylic.',
      images: ['1740408-00-A_0_2000.avif', '1740408-00-A_1_2000.avif'],
      inStock: 85,
      price: 15,
      sizes: ['XS', 'S', 'M'],
      slug: 'tesla-wordmark-beanie',
      type: 'hats',
      tags: ['hats'],
      title: 'Tesla Wordmark Beanie',
      gender: 'women',
    },
    {
      description:
        'Made with a fine acrylic, the ultrasoft T Logo Cuffed Beanie features a T logo made from flexible 3D thermoplastic polyurethane. Developed for extra comfort and durability to keep its original shape, the stretch-knit beanie is both cozy and resistant to pilling and shrinking. Made from 100% acrylic.',
      images: ['1740407-00-A_0_2000.avif', '1740407-00-A_1_2000.avif'],
      inStock: 85,
      price: 15,
      sizes: ['XS', 'S', 'M'],
      slug: 't-logo-cuffed-beanie',
      type: 'hats',
      tags: ['hats'],
      title: 'T Logo Cuffed Beanie',
      gender: 'women',
    },
    {
      description:
        'The Thermal Cuffed Beanie features a subtle T logo made from soft tonal silicone and positioned atop a vegan microsuede patch. Made using a waffle stitch technique and developed for enhanced heat insulation and durability to keep its original shape, the stretch-knit design is resistant to pilling and shrinking. Made from 100% acrylic.',
      images: ['1740417-00-A_0_2000.avif', '1740417-00-A_1_2000.avif'],
      inStock: 85,
      price: 15,
      sizes: ['XS', 'S', 'M'],
      slug: 'thermal-cuffed-beanie',
      type: 'hats',
      tags: ['hats'],
      title: 'Thermal Cuffed Beanie',
      gender: 'women',
    },
    {
      description:
        'The ultrasoft Cybertruck Graffiti Cuffed Beanie features a tonal Cybertruck graffiti wordmark made from flexible 3D thermoplastic polyurethane. Developed for extra comfort and durability to keep its original shape, the stretch-knit design is resistant to pilling and shrinking. Made from 100% acrylic.',
      images: ['1740413-00-A_0_2000.avif', '1740413-00-A_1_2000.avif'],
      inStock: 85,
      price: 15,
      sizes: ['XS', 'S', 'M'],
      slug: 'cybertruck-graffiti-cuffed-beanie',
      type: 'hats',
      tags: ['hats'],
      title: 'Cybertruck Graffiti Cuffed Beanie',
      gender: 'women',
    },
    {
      description:
        "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
      images: [
        '1740270-00-A_0_2000.avif',
        '1740270-00-A_1_2000.avif',
        '1740270-00-A_2_2000.avif',
      ],
      inStock: 85,
      price: 40,
      sizes: ['XS', 'S', 'M'],
      slug: 'womens-raven-joggers',
      type: 'hoodies',
      tags: ['hoodies'],
      title: "Women's Raven Joggers",
      gender: 'women',
    },
    {
      description:
        'Inspired by Cybertruck’s stainless-steel exterior, the Kids Cybertruck Reflective Tee features the Cybertruck silhouette on the front and signature Cybertruck graffiti wordmark on the back collar, both constructed from laser-cut, high-visibility vinyl taping to create a unique glowing effect. Made from 95% cotton and 5% elastane.',
      images: [
        '2031041-00-A_01_2000.avif',
        '2031041-00-A_02_2000.avif',
        '2031041-00-A_03_2000.avif',
      ],
      inStock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids-cybertruck-reflective-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Kids Cybertruck Reflective Tee',
      gender: 'kid',
    },
    {
      description:
        'Lights: On. The Kids Cybertruck Headlight to Taillight Tee features a metallic printed graphic on the front and back depicting the front and rear profiles of Cybertruck. Made from 95% cotton and 5% elastane.',
      images: [
        '2124435-00-A-1-02.avif',
        '2124435-00-A-1-04.avif',
        '2124435-00-A-2-01.avif',
        '2124435-00-A-2-03.avif',
      ],
      inStock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids-cybertruck-headlight-to-taillight-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Kids Cybertruck Headlight to Taillight Tee',
      gender: 'kid',
    },
    {
      description:
        'The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.',
      images: ['8529336-00-A_0_2000.avif', '8529336-00-A_1_2000.avif'],
      inStock: 10,
      price: 20,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids-cybertruck-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Kids Cybertruck Tee',
      gender: 'kid',
    },
    {
      description:
        "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
      images: ['8529366-00-A_0_2000.avif', '8529366-00-A_1_2000.avif'],
      inStock: 10,
      price: 15,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids-racing-stripe-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Kids Racing Stripe Tee',
      gender: 'kid',
    },
    {
      description:
        'Designed for fit, comfort and style, the Kids 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.',
      images: [
        '8764766-00-A_0_2000.avif',
        '8764766-00-A_1_2000.avif',
        '8764766-00-A_2_2000.avif',
      ],
      inStock: 10,
      price: 15,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids-3d-large-wordmark-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Kids Racing Stripe Tee',
      gender: 'kid',
    },
    {
      description:
        'Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.',
      images: ['7652453-00-A_0_2000.avif', '7652453-00-A_1_2000.avif'],
      inStock: 10,
      price: 15,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids-3d-t-logo-tee',
      type: 'shirts',
      tags: ['shirt'],
      title: 'Kids 3D T Logo Tee',
      gender: 'kid',
    },
    {
      description:
        'Tesla performance starts at the playground with Kids Corp Jacket. Inspired by the original Tesla Corp Jacket, the pint-sized version features the same unique design with a T logo on the left chest and a Tesla wordmark across the back now in all black. The 100% nylon outer shell and polyester lining is designed for warmth and durability.',
      images: [
        '1643504-00-A_0_2000.avif',
        '1643504-00-A_1_2000.avif',
        '1643504-00-A_2_2000.avif',
      ],
      inStock: 10,
      price: 40,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids-corp-jacket',
      type: 'hoodies',
      tags: ['hoodies'],
      title: 'Kids Corp Jacket',
      gender: 'kid',
    },
    {
      description:
        'The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.',
      images: ['8529387-00-A_0_2000.avif', '8529387-00-A_1_2000.avif'],
      inStock: 10,
      price: 40,
      sizes: ['XS', 'S', 'M'],
      slug: 'scribble-t-logo-onesie',
      type: 'shirts',
      tags: ['shirts'],
      title: 'Scribble T Logo Onesie',
      gender: 'kid',
    },
    {
      description:
        'For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru',
      images: [
        '1473809-00-A-3-01.avif',
        '1473809-00-A-3-02.avif',
        '1473809-00-A_alt_2000.avif',
      ],
      inStock: 10,
      price: 25,
      sizes: ['XS', 'S', 'M'],
      slug: 'made-on-earth-by-humans-onesie',
      type: 'shirts',
      tags: ['shirts'],
      title: 'Made on Earth by Humans Onesie',
      gender: 'kid',
    },
    {
      description:
        'Maximize your little one’s stored energy. Our Endless Energy Onesie features a Flash Green full battery graphic on the front and a matching Tesla T logo on the back. Made from 95% cotton and 5% elastane with a snap closure bottom.',
      images: [
        '2031682-00-A-01.avif',
        '2031682-00-A-02.avif',
        '2031682-00-A-03.avif',
      ],
      inStock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'endless-energy-onesie',
      type: 'shirts',
      tags: ['shirts'],
      title: 'Endless Energy Onesie',
      gender: 'kid',
    },
    {
      description:
        'The Kids Relaxed Wordmark Hat is a classic silhouette combined with modern details, featuring a 3D Tesla wordmark and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is made from recycled plastic bottles. 100% Cotton.',
      images: [
        '1693862-00-A_0_2000.avif',
        '1693862-00-A_1_2000.avif',
        '1693862-00-A_2_2000.avif',
      ],
      inStock: 10,
      price: 30,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids-relaxed-wordmark-hat',
      type: 'hats',
      tags: ['hats'],
      title: 'Kids Relaxed Wordmark Hat',
      gender: 'kid',
    },
    {
      description:
        'The Kids Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is made from recycled plastic bottles. 100% Cotton.',
      images: [
        '1693867-00-A_0_2000.avif',
        '1693867-00-A_1_2000.avif',
        '1693867-00-A_2_2000.avif',
      ],
      inStock: 10,
      price: 20,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids-relaxed-t-logo-hat',
      type: 'hats',
      tags: ['hats'],
      title: 'Kids Relaxed T Logo Hat',
      gender: 'kid',
    },
    {
      description:
        'Made with a fine acrylic, the ultrasoft Kids T Logo Cuffed Beanie features a white T logo made from flexible 3D thermoplastic polyurethane. Developed for extra comfort and durability to keep its original shape, the stretch-knit beanie is both cozy and resistant to pilling and shrinking. The white and black color options are made from 100% acrylic, while the red also includes 10% polypropylene to achieve a premium red finish.',
      images: ['1740410-00-A_0_2000.avif', '1740410-00-A_1_2000.avif'],
      inStock: 10,
      price: 10,
      sizes: ['XS', 'S', 'M'],
      slug: 'kids-t-logo-cuffed-beanie',
      type: 'hats',
      tags: ['hats'],
      title: 'Kids T Logo Cuffed Beanie',
      gender: 'kid',
    },
  ],
};
