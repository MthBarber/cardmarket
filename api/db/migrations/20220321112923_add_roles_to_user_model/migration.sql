-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "location" TEXT NOT NULL DEFAULT 'UK',
    "roles" TEXT NOT NULL DEFAULT 'moderator'
);
INSERT INTO "new_User" ("email", "hashedPassword", "id", "location", "name", "resetToken", "resetTokenExpiresAt", "salt", "username") SELECT "email", "hashedPassword", "id", "location", "name", "resetToken", "resetTokenExpiresAt", "salt", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
