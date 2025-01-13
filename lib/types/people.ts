export type Person = {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  image: string | null;
};

export type Role = {
  id: string;
  name: string | null;
};

export type PersonWithRoles = Person & {
  peopleToRoles: {
    peopleId: string;
    roleId: string;
    roles: Role;
  }[];
};
