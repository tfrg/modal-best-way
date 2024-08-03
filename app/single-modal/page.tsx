'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { productColumns, productRows } from '@/data/products';
import { Icons } from '@/components/icons';
import DashedPlaceholder from '@/components/ui/dashed-placeholder';

export default function SingleModalPage() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {productColumns.map((column) => (
                  <TableHead key={column.name}>{column.name}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {productRows.map((product) => (
                <TableRow key={product.name}>
                  <TableCell>
                    <DashedPlaceholder />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.inventory}</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => {}}>
                        <Icons.filePen className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => {}}>
                        <Icons.trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
