import { index, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const people = pgTable("people", {
  id: uuid().primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text(),
  phone: text(),
  image: text(),
});

export const roles = pgTable("roles", {
  id: uuid().primaryKey(),
  name: text(),
});

export const peopleToRoles = pgTable(
  "people_to_roles",
  {
    peopleId: uuid("people_id")
      .notNull()
      .references(() => people.id),
    roleId: uuid("role_id")
      .notNull()
      .references(() => roles.id),
  },
  (t) => [index("pk").on(t.peopleId, t.roleId)],
);

export const peopleRelations = relations(people, ({ many }) => ({
  peopleToRoles: many(peopleToRoles),
}));

export const rolesRelations = relations(roles, ({ many }) => ({
  peopleToRoles: many(peopleToRoles),
}));

export const peopleToRolesRelations = relations(peopleToRoles, ({ one }) => ({
  roles: one(roles, {
    fields: [peopleToRoles.roleId],
    references: [roles.id],
  }),
  people: one(people, {
    fields: [peopleToRoles.peopleId],
    references: [people.id],
  }),
}));
