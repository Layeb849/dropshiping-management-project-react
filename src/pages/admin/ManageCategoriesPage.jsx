import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog.jsx";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog.jsx";
import { getCategories, addCategory, updateCategory, deleteCategory } from '@/data/categories';
import { toast } from '@/components/ui/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ManageCategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [formData, setFormData] = useState({ name: '', icon: '', color: '' });

  useEffect(() => {
    const handleCategoriesUpdate = () => {
      setCategories(getCategories());
    };
    
    window.addEventListener('categoriesUpdated', handleCategoriesUpdate);
    handleCategoriesUpdate(); 

    return () => {
      window.removeEventListener('categoriesUpdated', handleCategoriesUpdate);
    };
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddNew = () => {
    setCurrentCategory(null);
    setFormData({ name: '', icon: '', color: 'bg-gray-100' });
    setIsDialogOpen(true);
  };

  const handleEdit = (category) => {
    setCurrentCategory(category);
    setFormData({ name: category.name, icon: category.icon, color: category.color });
    setIsDialogOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.icon) {
      toast({
        title: "ত্রুটি",
        description: "অনুগ্রহ করে ক্যাটাগরির নাম এবং আইকন দিন।",
        variant: "destructive",
      });
      return;
    }

    if (currentCategory) {
      updateCategory({ ...currentCategory, ...formData });
      toast({ title: "সফল", description: "ক্যাটাগরি সফলভাবে আপডেট করা হয়েছে।" });
    } else {
      addCategory(formData);
      toast({ title: "সফল", description: "নতুন ক্যাটাগরি সফলভাবে যোগ করা হয়েছে।" });
    }
    setIsDialogOpen(false);
  };

  const handleDelete = (categoryId) => {
    deleteCategory(categoryId);
    toast({ title: "সফল", description: "ক্যাটাগরি সফলভাবে মুছে ফেলা হয়েছে।" });
  };

  return (
    <>
      <Helmet>
        <title>ক্যাটাগরি ম্যানেজ করুন - অ্যাডমিন</title>
        <meta name="description" content="অ্যাডমিন প্যানেল থেকে ক্যাটাগরি যোগ, সম্পাদনা এবং মুছে ফেলুন।" />
      </Helmet>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>ক্যাটাগরি ম্যানেজমেন্ট</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleAddNew}>
                <PlusCircle className="mr-2 h-4 w-4" /> নতুন ক্যাটাগরি
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{currentCategory ? 'ক্যাটাগরি সম্পাদনা করুন' : 'নতুন ক্যাটাগরি যোগ করুন'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">নাম</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleFormChange} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="icon" className="text-right">আইকন (ইমোজি)</Label>
                    <Input id="icon" name="icon" value={formData.icon} onChange={handleFormChange} className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="color" className="text-right">রঙ (Tailwind ক্লাস)</Label>
                    <Input id="color" name="color" value={formData.color} onChange={handleFormChange} className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">বাতিল</Button>
                  </DialogClose>
                  <Button type="submit">সংরক্ষণ করুন</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>আইকন</TableHead>
                <TableHead>নাম</TableHead>
                <TableHead>রঙ</TableHead>
                <TableHead className="text-right">অ্যাকশন</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell className="text-2xl">{category.icon}</TableCell>
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded ${category.color}`}></div>
                      <span className="text-sm text-gray-500">{category.color}</span>
                    </div>
                  </TableCell>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(category)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>আপনি কি নিশ্চিত?</AlertDialogTitle>
                          <AlertDialogDescription>
                            এই কাজটি বাতিল করা যাবে না। এটি স্থায়ীভাবে আপনার ডেটা থেকে ক্যাটাগরিটি মুছে ফেলবে।
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>বাতিল</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(category.id)} className="bg-red-600 hover:bg-red-700">মুছে ফেলুন</AlertDialogAction>
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

export default ManageCategoriesPage;