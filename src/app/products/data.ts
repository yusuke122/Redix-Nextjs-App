// 商品型定義とダミーデータ生成
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export const products: Product[] = Array.from({ length: 8 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `商品${i + 1}`,
  description: `これは商品${i + 1}の説明です。` ,
  price: Math.floor(Math.random() * 10000) + 1000,
  imageUrl: `https://picsum.photos/seed/item${i + 1}/400/300`,
}));
