import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { fetchShipments } from '@/lib/api';

const getStatusVariant = (status) => {
    switch (status) {
        case 'delivered': return 'success';
        case 'in_transit': return 'warning';
        case 'out_for_delivery': return 'warning';
        case 'picked': return 'secondary';
        case 'cancelled': return 'destructive';
        default: return 'default';
    }
};

const ShipmentsPage = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const data = await fetchShipments({ page_size: 20, ordering: '-created_at' });
                const items = Array.isArray(data?.results) ? data.results : data;
                if (!mounted) return;
                setRows(items || []);
            } catch (err) {
                setError('Shipments লোড করা যায়নি');
            } finally {
                if (mounted) setLoading(false);
            }
        })();
        return () => { mounted = false };
    }, []);

    return (
        <>
            <Helmet>
                <title>Shipments - Admin</title>
            </Helmet>
            <Card>
                <CardHeader>
                    <CardTitle>Shipments</CardTitle>
                    <CardDescription>Backend Django API থেকে রিয়েল ডেটা</CardDescription>
                </CardHeader>
                <CardContent>
                    {error && <div className="text-red-600 mb-3">{error}</div>}
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Reference</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Carrier</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Ship Date</TableHead>
                                <TableHead>Delivery Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow><TableCell colSpan={7}>লোড হচ্ছে...</TableCell></TableRow>
                            ) : (
                                (rows || []).map((s) => (
                                    <TableRow key={s.id || s.reference}>
                                        <TableCell className="font-mono">{s.reference}</TableCell>
                                        <TableCell>{s.customer}</TableCell>
                                        <TableCell>{s.carrier}</TableCell>
                                        <TableCell>
                                            <Badge variant={getStatusVariant(s.status)}>{s.status}</Badge>
                                        </TableCell>
                                        <TableCell>{s.ship_date || '-'}</TableCell>
                                        <TableCell>{s.delivery_date || '-'}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="outline" size="sm" onClick={() => window.open('/track-order', '_blank')}>Track</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    );
};

export default ShipmentsPage;

