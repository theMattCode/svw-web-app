export type PersonWithRoles = {
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  image: string | null;
  peopleToRoles: {
    peopleId: string;
    roleId: string;
    roles: {
      id: string;
      name: string;
    };
  }[];
};
