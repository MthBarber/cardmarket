/*
  Warnings:

  - You are about to drop the column `name` on the `ItemForSale` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "OrderItem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "buyerId" INTEGER NOT NULL,
    "orderItemId" INTEGER NOT NULL,
    "orderItemStatus" TEXT NOT NULL,
    CONSTRAINT "OrderItem_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "ItemForSale" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ItemForSale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cardRef" TEXT NOT NULL DEFAULT 'Customer Reference',
    "quantity" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "condition" TEXT NOT NULL DEFAULT 'NM',
    "cardId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "ItemForSale_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemForSale_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ItemForSale" ("cardId", "condition", "id", "price", "quantity", "userId") SELECT "cardId", "condition", "id", "price", "quantity", "userId" FROM "ItemForSale";
DROP TABLE "ItemForSale";
ALTER TABLE "new_ItemForSale" RENAME TO "ItemForSale";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
