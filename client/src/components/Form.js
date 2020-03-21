import React from "react";
import FormBasics from "./FormBasics";
import FormAwards from "./FormAwards";
import FormPublications from "./FormPublications";
import FormLanguages from "./FormLanguages";
import FormReferences from "./FormReferences";
import FormWork from "./FormWork";
import FormVolunteer from "./FormVolunteer";
import FormEducation from "./FormEducation";
import FormSkills from "./FormSkills";
import FormInterests from "./FormInterests";

export default function Form() {
  return (
    <section>
      <form>
        <FormBasics />
        <FormWork />
        <FormVolunteer />
        <FormEducation />
        <FormAwards />
        <FormPublications />
        <FormSkills />
        <FormLanguages />
        <FormInterests />
        <FormReferences />
        <div>
          <button>Submit!</button>
        </div>
      </form>
    </section>
  );
}
