-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_mobs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "adress" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "suite" TEXT NOT NULL DEFAULT '0',
    "bathrooms" TEXT NOT NULL,
    "maxpeople" TEXT NOT NULL
);
INSERT INTO "new_mobs" ("adress", "bathrooms", "id", "maxpeople", "rooms", "suite") SELECT "adress", "bathrooms", "id", "maxpeople", "rooms", "suite" FROM "mobs";
DROP TABLE "mobs";
ALTER TABLE "new_mobs" RENAME TO "mobs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
