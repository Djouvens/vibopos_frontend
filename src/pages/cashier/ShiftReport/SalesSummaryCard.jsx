import { CardContent, Card } from '@/components/ui/card'
import React from 'react'

const shiftData = {
    cashier: {
        fullName: "Termed Tertulien"
    },
    shiftStart: "Aug 8, 2025, 09:34 AM",
    shiftEnd: "",
    totalOrders: 5488,
    totalSales: 1256,
    totalRefund: 1000,
    netSales: 6212
}
const SalesSummaryCard = () => {
    return (
        <Card>
            <CardContent>
                <h2 className='text-xl font-semibold mb-4'>Rezime Vant</h2>
                <div className='space-y-2'>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Acha:</span>
                        <span className="font-medium flex items-baseline gap-1">
                            <span>{shiftData.totalOrders}</span>
                            <span className="text-sm text-muted-foreground">HTG</span>
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Vant:</span>
                        <span className="font-medium flex items-baseline gap-1">
                            <span>{shiftData.totalSales}</span>
                            <span className="text-sm text-muted-foreground">HTG</span>
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Ranbousman:</span>
                        <span className="font-medium flex items-baseline gap-1 text-red-500">
                            <span>- {shiftData.totalRefund}</span>
                            <span className="text-sm text-muted-foreground">HTG</span>
                        </span>
                    </div>

                    <div className="flex justify-between border-t pt-2">
                        <span className="text-muted-foreground">Net Vant:</span>
                        <span className="font-medium flex items-baseline gap-1">
                            <span>{shiftData.netSales}</span>
                            <span className="text-sm text-muted-foreground">HTG</span>
                        </span>
                    </div>

                </div>
            </CardContent>
        </Card>
    )
}

export default SalesSummaryCard