ALTER TABLE "testsuite$string" RENAME TO "6beed439eaba4c9094722861656c1233";
DELETE FROM "mendixsystem$entity" 
 WHERE "id" = 'f491acc3-f96b-4f13-8555-24e8c493894e';
DELETE FROM "mendixsystem$entityidentifier" 
 WHERE "id" = 'f491acc3-f96b-4f13-8555-24e8c493894e';
DELETE FROM "mendixsystem$sequence" 
 WHERE "attribute_id" IN (SELECT "id"
 FROM "mendixsystem$attribute"
 WHERE "entity_id" = 'f491acc3-f96b-4f13-8555-24e8c493894e');
DELETE FROM "mendixsystem$attribute" 
 WHERE "entity_id" = 'f491acc3-f96b-4f13-8555-24e8c493894e';
CREATE TABLE "testsuite$location" (
	"id" BIGINT NOT NULL,
	"latitude" DECIMAL(28, 8) NULL,
	"longitude" DECIMAL(28, 8) NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name")
 VALUES ('198cb81c-ac53-480e-abcf-2a6543cdcf63', 
'TestSuite.Location', 
'testsuite$location');
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('a0b7d982-28a7-4a5d-9748-0d51990c218a', 
'198cb81c-ac53-480e-abcf-2a6543cdcf63', 
'latitude', 
'latitude', 
5, 
0, 
'0', 
false);
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('1cc2fecb-5f50-4628-a9d3-0c57a7758342', 
'198cb81c-ac53-480e-abcf-2a6543cdcf63', 
'longitude', 
'longitude', 
5, 
0, 
'0', 
false);
DROP TABLE "6beed439eaba4c9094722861656c1233";
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.1', 
"lastsyncdate" = '20170726 15:29:41';
