"use client";

import { PersonWithRoles } from "#/lib/types/people";
import { useState } from "react";
import { Card, CardContent, CardTitle } from "#/components/cms/card/Card";
import { Picture } from "#/app/(cms)/cms/people/[id]/Picture";
import { PersonalDetails } from "#/app/(cms)/cms/people/[id]/PersonalDetails";
import { Rollen } from "#/app/(cms)/cms/people/[id]/Rollen";
import { Preview } from "#/app/(cms)/cms/people/[id]/Preview";

export function PersonEdit({ person: initialPerson }: { person: PersonWithRoles }) {
  const [person, setPerson] = useState<PersonWithRoles>(initialPerson);

  return (
    <div className="grid grid-cols-1 @2xl:grid-cols-3 gap-4">
      <div className="h-full">
        <Card>
          <CardTitle>Picture</CardTitle>
          <CardContent>
            <Picture person={person} onPersonChange={setPerson} />
          </CardContent>
        </Card>
      </div>
      <div className="@2xl:col-span-2 flex flex-col gap-4">
        <Card>
          <CardTitle>Details</CardTitle>
          <CardContent>
            <PersonalDetails person={person} />
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Rollen</CardTitle>
          <CardContent>
            <Rollen person={person} />
          </CardContent>
        </Card>
      </div>
      <div className="@2xl:col-span-3">
        <Card>
          <CardTitle>Preview</CardTitle>
          <CardContent>
            <Preview person={person} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
