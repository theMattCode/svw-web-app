CREATE TABLE "people" (
	"id" uuid PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text,
	"phone" text,
	"image" text
);
--> statement-breakpoint
CREATE TABLE "people_to_roles" (
	"people_id" uuid NOT NULL,
	"role_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "roles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "people_to_roles" ADD CONSTRAINT "people_to_roles_people_id_people_id_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "people_to_roles" ADD CONSTRAINT "people_to_roles_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "pk" ON "people_to_roles" USING btree ("people_id","role_id");