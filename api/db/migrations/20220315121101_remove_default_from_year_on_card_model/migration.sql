-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "setName" TEXT NOT NULL,
    "startingFromPrice" REAL NOT NULL,
    "cardImage" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "cardType" TEXT NOT NULL,
    "manaValue" INTEGER NOT NULL,
    "releaseYear" INTEGER NOT NULL
);
INSERT INTO "new_Card" ("cardImage", "cardType", "color", "id", "manaValue", "name", "releaseYear", "setName", "startingFromPrice") SELECT "cardImage", "cardType", "color", "id", "manaValue", "name", "releaseYear", "setName", "startingFromPrice" FROM "Card";
DROP TABLE "Card";
ALTER TABLE "new_Card" RENAME TO "Card";
CREATE UNIQUE INDEX "Card_name_key" ON "Card"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
