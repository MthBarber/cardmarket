/*
  Warnings:

  - You are about to drop the column `orderItemId` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `itemForSaleId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buyerId" INTEGER NOT NULL,
    "itemForSaleId" INTEGER NOT NULL,
    "orderItemStatus" TEXT NOT NULL,
    CONSTRAINT "OrderItem_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_itemForSaleId_fkey" FOREIGN KEY ("itemForSaleId") REFERENCES "ItemForSale" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderItem" ("buyerId", "id", "orderItemStatus") SELECT "buyerId", "id", "orderItemStatus" FROM "OrderItem";
DROP TABLE "OrderItem";
ALTER TABLE "new_OrderItem" RENAME TO "OrderItem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
