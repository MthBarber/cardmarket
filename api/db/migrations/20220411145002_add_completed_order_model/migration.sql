-- CreateTable
CREATE TABLE "CompletedOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "CompletedOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buyerId" INTEGER NOT NULL,
    "itemForSaleId" INTEGER NOT NULL,
    "orderItemStatus" TEXT NOT NULL,
    "completedOrderId" INTEGER,
    CONSTRAINT "OrderItem_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_itemForSaleId_fkey" FOREIGN KEY ("itemForSaleId") REFERENCES "ItemForSale" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_completedOrderId_fkey" FOREIGN KEY ("completedOrderId") REFERENCES "CompletedOrder" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_OrderItem" ("buyerId", "id", "itemForSaleId", "orderItemStatus") SELECT "buyerId", "id", "itemForSaleId", "orderItemStatus" FROM "OrderItem";
DROP TABLE "OrderItem";
ALTER TABLE "new_OrderItem" RENAME TO "OrderItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
