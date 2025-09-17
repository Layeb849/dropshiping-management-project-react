
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, PlusCircle, Trash2, Eye } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const browseProducts = [
    { id: 1, name: "Men's Premium T-Shirt", category: "ছেলেদের ফ্যাশন", price: "৳350", stock: 120, supplier: "Fashion Hub" },
    { id: 2, name: "Wireless Bluetooth Earbuds", category: "গ্যাজেট ও ইলেকট্রনিক্স", price: "৳1200", stock: 80, supplier: "Tech Gadgets" },
    { id: 3, name: "Women's Summer Dress", category: "মেয়েদের ফ্যাশন", price: "৳850", stock: 200, supplier: "Glamour Attire" },
    { id: 4, name: "Smart Watch with Health Tracker", category: "গ্যাজেট ও ইলেকট্রনিক্স", price: "৳2500", stock: 50, supplier: "Tech Gadgets" },
];

const importedProducts = [
    { id: 1, name: "Men's Premium T-Shirt", supplier: "Fashion Hub", importDate: "জুলাই ১৫, ২০২৪", status: "Imported", profitMargin: "৩০%" },
    { id: 4, name: "Smart Watch with Health Tracker", supplier: "Tech Gadgets", importDate: "জুলাই ১০, ২০২৪", status: "Delivered", profitMargin: "৪০%" },
];

const MyProductsPage = () => {
  const { toast } = useToast();

  const handleActionClick = (message) => {
    toast({
        title: "কার্যকরী!",
        description: message,
    });
  };

  return (
    <>
      <Helmet>
        <title>আমার পণ্য - LetsDropship</title>
      </Helmet>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">আমার পণ্য</h1>
          <p className="text-muted-foreground">আপনার দোকানে পণ্য খুঁজুন এবং ইম্পোর্ট করুন।</p>
        </div>
        <Tabs defaultValue="imported">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="imported">আমার কেনা পণ্য</TabsTrigger>
            <TabsTrigger value="browse">পণ্য ব্রাউজ করুন</TabsTrigger>
          </TabsList>
          <TabsContent value="imported">
             <Card>
                <CardHeader>
                    <CardTitle>আমার কেনা/ইম্পোর্ট করা পণ্য</CardTitle>
                    <CardDescription>আপনার দোকানে যে পণ্যগুলো ইম্পোর্ট করেছেন তা পরিচালনা করুন। মোট পণ্য: {importedProducts.length}</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>পণ্যের নাম</TableHead>
                                <TableHead>সরবরাহকারী</TableHead>
                                <TableHead>ইম্পোর্টের তারিখ</TableHead>
                                <TableHead>স্ট্যাটাস</TableHead>
                                <TableHead>লাভের মার্জিন</TableHead>
                                <TableHead className="text-right">অ্যাকশন</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {importedProducts.map(p => (
                                <TableRow key={p.id}>
                                    <TableCell className="font-medium">{p.name}</TableCell>
                                    <TableCell>{p.supplier}</TableCell>
                                    <TableCell>{p.importDate}</TableCell>
                                    <TableCell>
                                        <Badge variant={p.status === 'Imported' ? 'secondary' : 'success'}>{p.status}</Badge>
                                    </TableCell>
                                    <TableCell>{p.profitMargin}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="icon" onClick={() => handleActionClick(`${p.name} দেখা হচ্ছে।`)}><Eye className="h-4 w-4"/></Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleActionClick(`${p.name} মুছে ফেলা হয়েছে।`)}><Trash2 className="h-4 w-4"/></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                     </Table>
                </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="browse">
            <Card>
                <CardHeader>
                    <CardTitle>পণ্য ব্রাউজ করুন</CardTitle>
                    <CardDescription>আপনার দোকানে যুক্ত করার জন্য নতুন পণ্য খুঁজুন।</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="relative w-full max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="পণ্য খুঁজুন..." className="pl-10" />
                        </div>
                        <Button onClick={() => handleActionClick("ফিল্টার প্রয়োগ করা হয়েছে।")}>ফিল্টার</Button>
                    </div>

                    <div className="space-y-4">
                        {browseProducts.map(p => (
                            <div key={p.id} className="flex flex-col sm:flex-row items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                <div>
                                    <p className="font-semibold">{p.name}</p>
                                    <p className="text-sm text-muted-foreground">{p.category} • সরবরাহকারী: {p.supplier}</p>
                                </div>
                                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                                    <span className="font-bold text-lg">{p.price}</span>
                                    <Button onClick={() => handleActionClick(`${p.name} দোকানে ইম্পোর্ট করা হয়েছে।`)}><PlusCircle className="mr-2 h-4 w-4"/> দোকানে ইম্পোর্ট করুন</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default MyProductsPage;
