import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Edit, Trash2, Search, UserPlus, ShieldCheck, ShieldOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from '@/components/ui/use-toast';

const initialUsers = [
  { id: 1, name: "Test User", email: "testuser@letsdropship.com", role: "user", subscription: "Starter Plan", status: "Active" },
  { id: 2, name: "Admin User", email: "admin@letsdropship.com", role: "admin", subscription: "Admin Access", status: "Active" },
  { id: 3, name: "Jane Doe", email: "jane.doe@example.com", role: "user", subscription: "Premium Plan", status: "Active" },
  { id: 4, name: "John Smith", email: "john.smith@example.com", role: "user", subscription: "No Plan", status: "Inactive" },
];

const ManageUsersPage = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
    toast({ title: "সফল", description: "ব্যবহারকারী সফলভাবে মুছে ফেলা হয়েছে।" });
  };
  
  const handleToggleAdmin = (userId) => {
    setUsers(users.map(u => u.id === userId ? {...u, role: u.role === 'admin' ? 'user' : 'admin'} : u));
    toast({ title: "সফল", description: "ব্যবহারকারীর ভূমিকা পরিবর্তন করা হয়েছে।" });
  };

  const showToast = () => {
    toast({
      title: "🚧 এই ফিচারটি এখনও চালু হয়নি!",
      description: "চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>ব্যবহারকারী ম্যানেজ করুন - অ্যাডমিন</title>
      </Helmet>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>ব্যবহারকারী ম্যানেজমেন্ট</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="ব্যবহারকারী খুঁজুন..." className="pl-8" />
            </div>
            <Button onClick={showToast}><UserPlus className="mr-2 h-4 w-4" /> নতুন ব্যবহারকারী</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>নাম</TableHead>
                <TableHead>ইমেল</TableHead>
                <TableHead>ভূমিকা</TableHead>
                <TableHead>সাবস্ক্রিপশন</TableHead>
                <TableHead>স্ট্যাটাস</TableHead>
                <TableHead className="text-right">অ্যাকশন</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell><Badge variant={user.role === 'admin' ? 'destructive' : 'secondary'}>{user.role}</Badge></TableCell>
                  <TableCell>{user.subscription}</TableCell>
                  <TableCell><Badge variant={user.status === 'Active' ? 'success' : 'outline'}>{user.status}</Badge></TableCell>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="icon" onClick={() => handleToggleAdmin(user.id)} title={user.role === 'admin' ? 'Remove Admin' : 'Make Admin'}>
                      {user.role === 'admin' ? <ShieldOff className="h-4 w-4 text-yellow-600" /> : <ShieldCheck className="h-4 w-4 text-green-600" />}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={showToast}><Edit className="h-4 w-4" /></Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild><Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button></AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>আপনি কি নিশ্চিত?</AlertDialogTitle>
                          <AlertDialogDescription>এই কাজটি বাতিল করা যাবে না। এটি স্থায়ীভাবে ব্যবহারকারীকে মুছে ফেলবে।</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>বাতিল</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDelete(user.id)} className="bg-red-600 hover:bg-red-700">মুছে ফেলুন</AlertDialogAction>
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

export default ManageUsersPage;