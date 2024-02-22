// Import the Schemas you create
import testimonials from "./testimonials"
import about from "./about"
import experiences from "./experiences"
import skills from "./skills"
import workExperience from "./workExperience"
import works from "./works"
import description from "./description"
import contact from "./contact"

// Then, we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [about, skills, works, workExperience, experiences, description, testimonials, contact]



