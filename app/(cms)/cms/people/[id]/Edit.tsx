"use client";

import { PersonWithRoles } from "#/lib/types/people";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/cms/card/Card";
import { Picture } from "#/app/(cms)/cms/people/[id]/Picture";
import { Details } from "#/app/(cms)/cms/people/[id]/Details";
import { Roles } from "#/app/(cms)/cms/people/[id]/Roles";
import { Preview } from "#/app/(cms)/cms/people/[id]/Preview";

export function Edit({ person: initialPerson }: { person: PersonWithRoles }) {
  const [person] = useState<PersonWithRoles>(initialPerson);

  return (
    <div className="grid grid-cols-1 @2xl:grid-cols-3 gap-4">
      <div className="h-full">
        <Card>
          <CardHeader>
            <CardTitle>Picture</CardTitle>
          </CardHeader>
          <CardContent>
            <Picture person={person} />
          </CardContent>
        </Card>
      </div>
      <div className="@2xl:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Details person={person} />
          </CardContent>
        </Card>
      </div>
      <div className="@2xl:col-span-3">
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <Preview person={person} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
