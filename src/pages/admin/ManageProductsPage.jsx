import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { PlusCircle, Edit, Trash2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from '@/components/ui/use-toast';

const initialProducts = [
  { id: 1, name: "প্রিমিয়াম কটন টি-শার্ট", price: "299", category: "men", stock: 150 },
  { id: 2, name: "ওয়্যারলেস ইয়ারবাডস প্রো", price: "799", category: "electronics", stock: 80 },
  { id: 3, name: "ডিজাইনার হ্যান্ডব্যাগ", price: "1499", category: "women", stock: 120 },
];

const ManageProductsPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', category: '', stock: '' });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddNew = () => {
    setCurrentProduct(null);
    setFormData({ name: '', price: '', category: '', stock: '' });
    setIsDialogOpen(true);
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setFormData({ name: product.name, price: product.price, category: product.category, stock: product.stock });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.category || !formData.stock) {
      toast({ title: "ত্রুটি", description: "অনুগ্রহ করে সমস্ত ঘর পূরণ করুন।", variant: "destructive" });
      return;
    }

    if (currentProduct) {
      setProducts(products.map(p => p.id === currentProduct.id ? { ...currentProduct, ...formData } : p));
      toast({ title: "সফল", description: "পণ্য সফলভাবে আপডেট করা হয়েছে।" });
    } else {
      const newProduct = { id: Date.now(), ...formData };
      setProducts([...products, newProduct]);
      toast({ title: "সফল", description: "নতুন পণ্য সফলভাবে যোগ করা হয়েছে।" });
    }
    setIsDialogOpen(false);
  };

  const handleDelete = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
    toast({ title: "সফল", description: "পণ্য সফলভাবে মুছে ফেলা হয়েছে।" });
  };

  return (
    <>
      <Helmet>
        <title>পণ্য ম্যানেজ করুন - অ্যাডমিন</title>
      </Helmet>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>পণ্য ম্যানেজমেন্ট</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="পণ্য খুঁজুন..." className="pl-8" />
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleAddNew}>
                  <PlusCircle className="mr-2 h-4 w-4" /> নতুন পণ্য
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{currentProduct ? 'পণ্য সম্পাদনা করুন' : 'নতুন পণ্য যোগ করুন'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 py-4">
                    <Label htmlFor="name">নাম</Label><Input id="name" name="name" value={formData.name} onChange={handleFormChange} />
                    <Label htmlFor="price">মূল্য (৳)</Label><Input id="price" name="price" type="number" value={formData.price} onChange={handleFormChange} />
                    <Label htmlFor="category">ক্যাটাগরি</Label><Input id="category" name="category" value={formData.category} onChange={handleFormChange} />
                    <Label htmlFor="stock">স্টক</Label><Input id="stock" name="stock" type="number" value={formData.stock} onChange={handleFormChange} />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild><Button type="button" variant="secondary">বাতিল</Button></DialogClose>
                    <Button type="submit">সংরক্ষণ করুন</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>নাম</TableHead>
                <TableHead>মূল্য</TableHead>
                <TableHead>ক্যাটাগরি</TableHead>
                <TableHead>স্টক</TableHead>
                <TableHead className="text-right">অ্যাকশন</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>৳{product.price}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}><Edit className="h-4 w-4" /></Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild><Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button></AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>আপনি কি নিশ্চিত?</AlertDialogTitle>
                          <AlertDialogDescription>এই কাজটি বাতিল করা যাবে না। এটি স্থায়ীভাবে পণ্যটি মুছে ফেলবে।</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>বাতিল</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(product.id)} className="bg-red-600 hover:bg-red-700">মুছে ফেলুন</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default ManageProductsPage;