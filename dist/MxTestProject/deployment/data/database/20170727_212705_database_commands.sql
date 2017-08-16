ALTER TABLE "testsuite$location" DROP COLUMN "longitude";
ALTER TABLE "testsuite$location" DROP COLUMN "latitude";
ALTER TABLE "testsuite$location" ADD "longitude" DECIMAL(28, 8) NULL;
UPDATE "testsuite$location"
 SET "longitude" = 0;
ALTER TABLE "testsuite$location" ADD "latitude" DECIMAL(28, 8) NULL;
UPDATE "testsuite$location"
 SET "latitude" = 0;
UPDATE "mendixsystem$attribute"
 SET "entity_id" = '198cb81c-ac53-480e-abcf-2a6543cdcf63', 
"attribute_name" = 'latitude', 
"column_name" = 'latitude', 
"type" = 5, 
"length" = 0, 
"default_value" = '0', 
"is_auto_number" = false
 WHERE "id" = 'a0b7d982-28a7-4a5d-9748-0d51990c218a';
UPDATE "mendixsystem$attribute"
 SET "entity_id" = '198cb81c-ac53-480e-abcf-2a6543cdcf63', 
"attribute_name" = 'longitude', 
"column_name" = 'longitude', 
"type" = 5, 
"length" = 0, 
"default_value" = '0', 
"is_auto_number" = false
 WHERE "id" = '1cc2fecb-5f50-4628-a9d3-0c57a7758342';
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.1', 
"lastsyncdate" = '20170727 21:27:01';
