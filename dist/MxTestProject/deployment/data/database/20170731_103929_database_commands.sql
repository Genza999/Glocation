CREATE TABLE "appcloudservices$entity" (
	"id" BIGINT NOT NULL,
	"islocaluser" BOOLEAN NULL,
	PRIMARY KEY("id"));
INSERT INTO "mendixsystem$entity" ("id", 
"entity_name", 
"table_name", 
"superentity_id")
 VALUES ('e5fb0b2e-4465-44bd-9a5b-7e369f2f1f71', 
'AppCloudServices.Entity', 
'appcloudservices$entity', 
'282e2e60-88a5-469d-84a5-ba8d9151644f');
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('e0408eac-2aa2-4a72-9e81-a2ca197e75a6', 
'e5fb0b2e-4465-44bd-9a5b-7e369f2f1f71', 
'IsLocalUser', 
'islocaluser', 
10, 
0, 
'true', 
false);
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.1', 
"lastsyncdate" = '20170731 10:39:21';
