ALTER TABLE "people_to_roles" DROP CONSTRAINT "people_to_roles_people_id_people_id_fk";
--> statement-breakpoint
ALTER TABLE "people_to_roles" DROP CONSTRAINT "people_to_roles_role_id_roles_id_fk";
--> statement-breakpoint
ALTER TABLE "people_to_roles" ADD CONSTRAINT "people_to_roles_people_id_people_id_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "people_to_roles" ADD CONSTRAINT "people_to_roles_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE cascade ON UPDATE no action;