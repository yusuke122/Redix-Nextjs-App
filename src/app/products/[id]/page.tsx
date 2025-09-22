import { products, Product } from '../data';
import { notFound } from 'next/navigation';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { PurchaseForm } from '../PurchaseForm';
import Link from 'next/link';
import * as React from 'react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p: Product) => p.id === params.id);
  if (!product) return notFound();

  return (
    <Box sx={{ p: 4 }}>
      <Button component={Link} href="/products" variant="outlined" sx={{ mb: 2 }}>
        ← 商品一覧へ戻る
      </Button>
      <Card sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardMedia
          component="img"
          height="300"
          image={product.imageUrl}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1" sx={{ my: 2 }}>{product.description}</Typography>
          <Typography variant="h6" color="primary">¥{product.price.toLocaleString()}</Typography>
          <Box sx={{ mt: 3 }}>
            <PurchaseForm />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
