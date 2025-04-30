CREATE TABLE "user" (
    ip inet PRIMARY KEY,
    visits int NOT NULL DEFAULT 0
);

SELECT * FROM "user";
