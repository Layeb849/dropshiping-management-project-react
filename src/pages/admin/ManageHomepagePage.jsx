
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ManageHomepagePage = () => {
  const [banners, setBanners] = useState([
    { id: 1, title: '৫০% পর্যন্ত ছাড়!', subtitle: 'ফ্যাশন কালেকশনে', buttonText: 'এখনই কিনুন', link: '/products/fashion' },
    { id: 2, title: 'নতুন ইলেকট্রনিক্স', subtitle: 'স্মার্ট গ্যাজেট কিনুন', buttonText: 'দেখুন', link: '/products/electronics' },
  ]);
  const [featuredItems, setFeaturedItems] = useState([
    { id: 1, name: 'স্মার্ট ওয়াচ', link: '/products/1' },
    { id: 2, name: 'লেদার জ্যাকেট', link: '/products/2' },
  ]);

  const showToast = () => {
    toast({
      title: "🚧 এই ফিচারটি এখনও চালু হয়নি!",
      description: "চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>হোমপেজ ম্যানেজ করুন - অ্যাডমিন</title>
        <meta name="description" content="অ্যাডমিন প্যানেল থেকে হোমপেজের কনটেন্ট ম্যানেজ করুন।" />
      </Helmet>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">হোমপেজ ম্যানেজমেন্ট</h1>
          <p className="text-muted-foreground">আপনার ওয়েবসাইটের প্রথম পেজটি নিয়ন্ত্রণ করুন।</p>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>হিরো সেকশন ব্যানার</CardTitle>
            <Button onClick={showToast}><PlusCircle className="mr-2 h-4 w-4" /> নতুন ব্যানার</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>শিরোনাম</TableHead>
                  <TableHead>সাবটাইটেল</TableHead>
                  <TableHead>বাটন টেক্সট</TableHead>
                  <TableHead className="text-right">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {banners.map(banner => (
                  <TableRow key={banner.id}>
                    <TableCell>{banner.title}</TableCell>
                    <TableCell>{banner.subtitle}</TableCell>
                    <TableCell>{banner.buttonText}</TableCell>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="icon" onClick={showToast}><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700" onClick={showToast}><Trash2 className="h-4 w-4" /></Button>
                    </td>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>ফিচারড আইটেম</CardTitle>
            <Button onClick={showToast}><PlusCircle className="mr-2 h-4 w-4" /> নতুন আইটেম</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>আইটেমের নাম</TableHead>
                  <TableHead>লিংক</TableHead>
                  <TableHead className="text-right">অ্যাকশন</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {featuredItems.map(item => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.link}</TableCell>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button variant="ghost" size="icon" onClick={showToast}><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700" onClick={showToast}><Trash2 className="h-4 w-4" /></Button>
                    </td>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ManageHomepagePage;
