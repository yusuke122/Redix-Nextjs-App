"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { Box, Button, TextField, Typography, Snackbar, Alert } from "@mui/material";
import * as React from "react";

const schema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("メールアドレスが不正です"),
  address: z.string().min(1, "住所は必須です"),
  quantity: z.number().min(1, "1以上を入力してください"),
});

type FormData = z.infer<typeof schema>;

export function PurchaseForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { quantity: 1 },
  });
  const [open, setOpen] = React.useState(false);
  const [snackbar, setSnackbar] = React.useState(false);
  const onSubmit = (data: FormData) => {
    reset();
    setOpen(false);
    setSnackbar(true);
  };

  return (
  <>
  <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>購入する</Button>
      </DialogTrigger>
      <DialogContent style={{ maxWidth: 400 }}>
        <DialogTitle>購入フォーム</DialogTitle>
        <DialogDescription>必要事項を入力してください</DialogDescription>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
          <TextField
            label="お名前"
            fullWidth
            margin="normal"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            label="メールアドレス"
            fullWidth
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="住所"
            fullWidth
            margin="normal"
            {...register("address")}
            error={!!errors.address}
            helperText={errors.address?.message}
          />
          <TextField
            label="数量"
            type="number"
            fullWidth
            margin="normal"
            {...register("quantity", { valueAsNumber: true })}
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
            inputProps={{ min: 1 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>購入確定</Button>
        </Box>
        <DialogClose asChild>
          <Button variant="text" color="inherit" fullWidth sx={{ mt: 1 }}>閉じる</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
    <Snackbar open={snackbar} autoHideDuration={3000} onClose={() => setSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert severity="success" sx={{ width: '100%' }} onClose={() => setSnackbar(false)}>
        ご購入ありがとうございました！
      </Alert>
    </Snackbar>
    </>
  );
}
