export interface Product {
  id: string
  slug: string
  name: string
  price: number
  originalPrice?: number
  description: string
  longDescription?: string
  image: string
  images?: string[]
  category: string
  inStock: boolean
  featured?: boolean
  bestDeal?: boolean
  deliveryInfo?: string
  rating?: number
  reviews?: number
  soldCount?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  icon: string
  description: string
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Cosmetics & Beauty",
    slug: "cosmetics-beauty",
    icon: "sparkles",
    description: "Premium imported beauty products",
  },
  {
    id: "2",
    name: "Health & Personal Care",
    slug: "health-personal-care",
    icon: "heart-pulse",
    description: "Quality health and wellness items",
  },
  {
    id: "3",
    name: "Household Items",
    slug: "household-items",
    icon: "home",
    description: "Essential household products",
  },
  {
    id: "4",
    name: "Electronic Items",
    slug: "electronic-items",
    icon: "zap",
    description: "Affordable electronic gadgets",
  },
  {
    id: "5",
    name: "Best Deals",
    slug: "best-deals",
    icon: "flame",
    description: "Hot deals and discounts",
  },
]

export const products: Product[] = [
  {
    id: "1",
    slug: "item-1",
    name: "Imported Quality Item 1",
    price: 2300,
    originalPrice: 2950,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/622386180_122111547567174597_6137289065850922957_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: true,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days",
    rating: 4.8,
    reviews: 1553,
    soldCount: "68K+"
  },
  {
    id: "2",
    slug: "item-2",
    name: "Imported Quality Item 2",
    price: 4800,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624501553_122112338127174597_6962996933283341695_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: true,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "3",
    slug: "item-3",
    name: "Imported Quality Item 3",
    price: 2800,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624537658_122112338535174597_1847709266028249727_n.jpg",
    category: "household-items",
    inStock: true,
    featured: true,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "4",
    slug: "item-4",
    name: "Imported Quality Item 4",
    price: 1900,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624539343_122112337995174597_3744102031025408787_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: true,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "5",
    slug: "item-5",
    name: "Imported Quality Item 5",
    price: 4600,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624547008_122112339561174597_4892488421775748784_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: true,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "6",
    slug: "item-6",
    name: "Imported Quality Item 6",
    price: 4500,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624549115_122112337899174597_7611460969689798702_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: true,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "7",
    slug: "item-7",
    name: "Imported Quality Item 7",
    price: 3300,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624549708_122112339021174597_1850667958378664996_n.jpg",
    category: "household-items",
    inStock: true,
    featured: true,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "8",
    slug: "item-8",
    name: "Imported Quality Item 8",
    price: 2400,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624550641_122112339465174597_2176760043935268077_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: true,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "9",
    slug: "item-9",
    name: "Imported Quality Item 9",
    price: 2600,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624551990_122112338319174597_7250563986795347228_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: true,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "10",
    slug: "item-10",
    name: "Imported Quality Item 10",
    price: 3800,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624564078_122112338085174597_5787580419955311744_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: true,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "11",
    slug: "item-11",
    name: "Imported Quality Item 11",
    price: 4700,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624574361_122112338493174597_9172286740847210588_n.jpg",
    category: "household-items",
    inStock: true,
    featured: true,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "12",
    slug: "item-12",
    name: "Imported Quality Item 12",
    price: 2800,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624579521_122112338847174597_809876281607126671_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: true,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "13",
    slug: "item-13",
    name: "Imported Quality Item 13",
    price: 3100,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624585490_122112338625174597_6863961568789695433_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: false,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "14",
    slug: "item-14",
    name: "Imported Quality Item 14",
    price: 4000,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624692915_122112339105174597_213443659581468745_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "15",
    slug: "item-15",
    name: "Imported Quality Item 15",
    price: 4100,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624708400_122112337599174597_2272526558894088951_n.jpg",
    category: "household-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "16",
    slug: "item-16",
    name: "Imported Quality Item 16",
    price: 1000,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624708443_122112339603174597_1534176541208116260_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "17",
    slug: "item-17",
    name: "Imported Quality Item 17",
    price: 2100,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624713502_122112338277174597_5401617063556932649_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: false,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "18",
    slug: "item-18",
    name: "Imported Quality Item 18",
    price: 2900,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624713502_122112338403174597_1868834086163310206_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "19",
    slug: "item-19",
    name: "Imported Quality Item 19",
    price: 3000,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624724505_122112337725174597_1098948640740808111_n.jpg",
    category: "household-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "20",
    slug: "item-20",
    name: "Imported Quality Item 20",
    price: 2600,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624760347_122112339063174597_3617599808413145111_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "21",
    slug: "item-21",
    name: "Imported Quality Item 21",
    price: 1900,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624832095_122112338583174597_6417770398793506368_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: false,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "22",
    slug: "item-22",
    name: "Imported Quality Item 22",
    price: 4500,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624843035_122112337815174597_525098401061825192_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "23",
    slug: "item-23",
    name: "Imported Quality Item 23",
    price: 4300,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/624855113_122112338445174597_2990609246863825526_n.jpg",
    category: "household-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "24",
    slug: "item-24",
    name: "Imported Quality Item 24",
    price: 3900,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/625016977_122112337773174597_7828005764552269587_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "25",
    slug: "item-25",
    name: "Imported Quality Item 25",
    price: 2500,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/625096722_122112337683174597_6364409009854661908_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: false,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "26",
    slug: "item-26",
    name: "Imported Quality Item 26",
    price: 4100,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/625114366_122112338931174597_1409467532763841863_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "27",
    slug: "item-27",
    name: "Imported Quality Item 27",
    price: 1700,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/625114675_122112338043174597_6540871481627692551_n.jpg",
    category: "household-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "28",
    slug: "item-28",
    name: "Imported Quality Item 28",
    price: 2300,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626327995_122112337503174597_8991344986353938952_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "29",
    slug: "item-29",
    name: "Imported Quality Item 29",
    price: 1100,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626417073_122112337953174597_6441561060549432873_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: false,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "30",
    slug: "item-30",
    name: "Imported Quality Item 30",
    price: 1400,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626418332_122112338715174597_5702602196994194755_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "31",
    slug: "item-31",
    name: "Imported Quality Item 31",
    price: 4500,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626445310_122112337857174597_4718103208048431519_n.jpg",
    category: "household-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "32",
    slug: "item-32",
    name: "Imported Quality Item 32",
    price: 1700,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626446600_122112337641174597_8123894678152959350_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "33",
    slug: "item-33",
    name: "Imported Quality Item 33",
    price: 2700,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626447187_122112338361174597_3571013180165855695_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: false,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "34",
    slug: "item-34",
    name: "Imported Quality Item 34",
    price: 4500,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626461446_122112338979174597_7108385741863309332_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "35",
    slug: "item-35",
    name: "Imported Quality Item 35",
    price: 4500,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626463555_122112339159174597_9078640880001105764_n.jpg",
    category: "household-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "36",
    slug: "item-36",
    name: "Imported Quality Item 36",
    price: 4400,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626473508_122112339381174597_5115867254203838551_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "37",
    slug: "item-37",
    name: "Imported Quality Item 37",
    price: 4000,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626541915_122112591813174597_7263283167465130746_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: false,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "38",
    slug: "item-38",
    name: "Imported Quality Item 38",
    price: 1200,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626656378_122112591771174597_670314252212881453_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "39",
    slug: "item-39",
    name: "Imported Quality Item 39",
    price: 4500,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626743629_122112591945174597_29086037623461102_n.jpg",
    category: "household-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "40",
    slug: "item-40",
    name: "Imported Quality Item 40",
    price: 4700,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626842257_122112591999174597_3987454449178161997_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "41",
    slug: "item-41",
    name: "Imported Quality Item 41",
    price: 1300,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626843872_122112591903174597_7337055717304655103_n.jpg",
    category: "cosmetics-beauty",
    inStock: true,
    featured: false,
    bestDeal: true,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "42",
    slug: "item-42",
    name: "Imported Quality Item 42",
    price: 3700,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626868014_122112845253174597_3486773964595820713_n.jpg",
    category: "health-personal-care",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "43",
    slug: "item-43",
    name: "Imported Quality Item 43",
    price: 1600,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/626899596_122112591861174597_8666772727772599042_n.jpg",
    category: "household-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  },
  {
    id: "44",
    slug: "item-44",
    name: "Imported Quality Item 44",
    price: 4500,
    description: "Premium quality imported product from our latest collection. High value for money.",
    longDescription: "This premium imported product is part of our carefully curated selection. We ensure the best quality and value for our customers in Sri Lanka. Islandwide delivery is available with cash on delivery options.",
    image: "/assets/627018167_122112845379174597_8567492534327221732_n.jpg",
    category: "electronic-items",
    inStock: true,
    featured: false,
    bestDeal: false,
    deliveryInfo: "Ships within 1-2 business days"
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  if (categorySlug === "best-deals") {
    return products.filter((p) => p.bestDeal)
  }
  return products.filter((p) => p.category === categorySlug)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery)
  )
}
