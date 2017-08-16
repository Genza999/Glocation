ALTER TABLE "testsuite$location" ALTER COLUMN "longitude" SET DATA TYPE VARCHAR_IGNORECASE(200);
ALTER TABLE "testsuite$location" ALTER COLUMN "latitude" SET DATA TYPE VARCHAR_IGNORECASE(200);
UPDATE "mendixsystem$attribute"
 SET "entity_id" = '198cb81c-ac53-480e-abcf-2a6543cdcf63', 
"attribute_name" = 'latitude', 
"column_name" = 'latitude', 
"type" = 30, 
"length" = 200, 
"default_value" = '', 
"is_auto_number" = false
 WHERE "id" = 'a0b7d982-28a7-4a5d-9748-0d51990c218a';
UPDATE "mendixsystem$attribute"
 SET "entity_id" = '198cb81c-ac53-480e-abcf-2a6543cdcf63', 
"attribute_name" = 'longitude', 
"column_name" = 'longitude', 
"type" = 30, 
"length" = 200, 
"default_value" = '', 
"is_auto_number" = false
 WHERE "id" = '1cc2fecb-5f50-4628-a9d3-0c57a7758342';
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.1', 
"lastsyncdate" = '20170727 23:02:06';
