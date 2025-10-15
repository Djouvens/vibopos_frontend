import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const shiftData = {
    recentOrders : [
        {
            id: 1,
            createdAt: "10:25 PM",
            paymentType: "CASH",
            totalAmount: 8854

        },
         {
            id: 2,
            createdAt: "10:50 PM",
            paymentType: "CARD",
            totalAmount: 1854

        }
    ]
}
const RecentOrdersTable = () => {
  return (
    
        <Card>
            <CardContent>
            <h2 className='text-xl font-semibold mb-4'>Resan Acha</h2>
                <Table>
                    <TableHeader>
                       <TableRow>
                             <TableHead className="W-[150px]">id Acha</TableHead>
                             <TableHead className="W-[150px]">Lè</TableHead>
                             <TableHead className="W-[150px]">Pèman</TableHead>
                             <TableHead className="W-[150px]">Montan</TableHead>
                       </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            shiftData.recentOrders.map((order) => 
                            
                              <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.createdAt}</TableCell>
                                <TableCell>{order.paymentType}</TableCell>
                                <TableCell>
                                    <span className='flex items-baseline gap-1'>
                                        <span>{order.totalAmount}</span>
                                        <span className="text-sm text-muted-foreground">HTG</span>
                                    </span>
                                </TableCell>
                                
                              </TableRow>

                            )
                        }
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    
  )
}

export default RecentOrdersTable