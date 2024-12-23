"use client";

import { useState, useMemo } from "react";
import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Product } from "@/types";

type SortConfig = {
  key: string;
  direction: "asc" | "desc" | null;
};

export default function OrdersTable({
  products,
  title = "Orders"
}: {
  products: Product[];
  title?: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: null
  });

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" | null = "asc";

    if (sortConfig.key === key) {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = null;
      }
    }
    setSortConfig({ key, direction });
  };

  // Filtered then sorted list of products
  const filteredAndSortedProducts = useMemo(() => {
    // 1. Filter based on search
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 2. If there's no sorting configuration, return the filtered list
    if (!sortConfig.key || !sortConfig.direction) {
      return filtered;
    }

    // 3. Sort the filtered list
    return [...filtered].sort((a, b) => {
      let aValue = a[sortConfig.key as keyof Product];
      let bValue = b[sortConfig.key as keyof Product];

      // Handle special case for 'commission'
      if (sortConfig.key === "commission") {
        aValue = a.price * 0.1;
        bValue = b.price * 0.1;
      }

      if (sortConfig.direction === "asc") {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  }, [products, searchTerm, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredAndSortedProducts.slice(startIndex, endIndex);
  }, [filteredAndSortedProducts, currentPage, itemsPerPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  // Reset page number whenever itemsPerPage or searchTerm changes
  // so that if you're on page 3, for instance, and change items per page,
  // you won't accidentally jump out of range.
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Sort indicator arrows
  const SortIndicator = ({ columnKey }: { columnKey: string }) => {
    if (sortConfig.key !== columnKey) {
      return <ArrowDown className="ml-1 h-4 w-4 inline-block opacity-30" />;
    }
    return sortConfig.direction === "asc" ? (
      <ArrowUp className="ml-1 h-4 w-4 inline-block" />
    ) : (
      <ArrowDown className="ml-1 h-4 w-4 inline-block" />
    );
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="px-0">
        <h2 className="text-3xl font-medium tracking-[-2%]">{title}</h2>
      </CardHeader>
      <CardContent className="p-0">
        {products.length === 0 ? (
          // Loading state
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#15B79E]"></div>
          </div>
        ) : (
          <div>
            {/* Search and Items-Per-Page Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center w-full sm:w-auto">
                <Input
                  placeholder="Filter products"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="max-w-lg w-full"
                />
              </div>

              <div className="flex items-center gap-2">
                <Select
                  value={itemsPerPage.toString()}
                  onValueChange={(value) =>
                    handleItemsPerPageChange(Number(value))
                  }
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Select" defaultValue={5} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 per page</SelectItem>
                    <SelectItem value="10">10 per page</SelectItem>
                    <SelectItem value="20">20 per page</SelectItem>
                    <SelectItem value="50">50 per page</SelectItem>
                    <SelectItem value="100">100 per page</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#F9FAFB] py-2">
                    <TableHead
                      className="text-xs font-medium text-muted-foreground cursor-pointer"
                      onClick={() => handleSort("title")}
                    >
                      Product
                      <SortIndicator columnKey="title" />
                    </TableHead>
                    <TableHead
                      className="text-xs font-medium text-muted-foreground cursor-pointer"
                      onClick={() => handleSort("date")}
                    >
                      Date
                    </TableHead>
                    <TableHead className="text-xs font-medium text-muted-foreground">
                      Time spent
                    </TableHead>
                    <TableHead
                      className="text-xs font-medium text-muted-foreground cursor-pointer"
                      onClick={() => handleSort("price")}
                    >
                      Order Value
                      <SortIndicator columnKey="price" />
                    </TableHead>
                    <TableHead
                      className="text-xs font-medium text-muted-foreground cursor-pointer"
                      onClick={() => handleSort("commission")}
                    >
                      Commission
                      <SortIndicator columnKey="commission" />
                    </TableHead>
                    <TableHead className="text-right text-xs font-medium text-muted-foreground"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedProducts.map((product, index) => (
                    <TableRow key={product.id} className="hover:bg-transparent">
                      <TableCell className="py-4">
                        <div className="flex items-center gap-3">
                          <Image
                            src={product.image}
                            alt={product.title}
                            className="h-10 w-10 rounded-full object-cover bg-muted"
                            width={40}
                            height={40}
                          />
                          <span className="font-medium truncate max-w-[200px]">
                            {product.title}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">
                            {24 + index} Apr 2024
                          </span>
                          <span className="text-sm text-muted-foreground">
                            10:24 AM
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">2h 5m</TableCell>
                      <TableCell className="font-medium">
                        ${product.price.toFixed(2)}
                      </TableCell>
                      <TableCell className="font-bold">
                        ${(product.price * 0.1).toFixed(2)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          className="h-8 px-2 text-muted-foreground hover:text-foreground"
                        >
                          View Chat
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between mt-4">
              <div>
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
              <div className="flex justify-end items-center gap-2">
                <Button
                  variant={currentPage === 1 ? "secondary" : "brand"}
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <Button
                  variant={currentPage === totalPages ? "secondary" : "brand"}
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
