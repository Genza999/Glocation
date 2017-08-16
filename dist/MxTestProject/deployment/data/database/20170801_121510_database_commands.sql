ALTER TABLE "testsuite$location" ADD "cityaddress" VARCHAR_IGNORECASE(200) NULL;
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('87342292-bcb4-42b7-bc03-1eb53abefa63', 
'198cb81c-ac53-480e-abcf-2a6543cdcf63', 
'CityAddress', 
'cityaddress', 
30, 
200, 
'', 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.1', 
"lastsyncdate" = '20170801 12:14:37';
