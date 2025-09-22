import { products } from './data';
import Link from 'next/link';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import * as React from 'react';

export default function ProductsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>商品一覧</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'flex-start' }}>
        {products.map((product) => (
          <Box key={product.id} sx={{ width: 300, flex: '0 0 auto' }}>
            <Card sx={{ width: 300, transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-8px) scale(1.03)', boxShadow: 6 } }}>
              <CardMedia
                component="img"
                height="180"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{product.description}</Typography>
                <Typography variant="subtitle1" color="primary">¥{product.price.toLocaleString()}</Typography>
                <Button component={Link} href={`/products/${product.id}`} variant="contained" sx={{ mt: 1 }} fullWidth>
                  詳細を見る
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
