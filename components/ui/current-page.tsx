"use client";
import { usePathname } from "next/navigation";

export default function CurrentPage() {
    const pathname = usePathname();
    const currentPage = pathname.split("/")[1];

    return (
        <>
            {currentPage && (
                <div className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm text-xs absolute top-4 left-4 space-x-1">
                    <span className="text-muted-foreground">Current Page:</span>
                    <span>{currentPage}</span>
                </div>
            )}
        </>
    );
}
