-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mobs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "adress" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "suite" TEXT NOT NULL DEFAULT '0',
    "bathrooms" TEXT NOT NULL,
    "maxpeople" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_mobs" ("adress", "bathrooms", "id", "maxpeople", "rooms", "suite") SELECT "adress", "bathrooms", "id", "maxpeople", "rooms", "suite" FROM "mobs";
DROP TABLE "mobs";
ALTER TABLE "new_mobs" RENAME TO "mobs";
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_users" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
