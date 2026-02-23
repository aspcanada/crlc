/**
 * Resources page content. Only used by the gated /resources route.
 * Do not import in public pages. Sensitive values (e.g. CRC access code) come from env.
 */

export const resourcesLinks = [
  {
    title: "Slack Workspace",
    description:
      "Join the Cottonwood Rose Learning Community Workspace. Slack is the main communication hub for all program updates, announcements, and committee coordination. Your participation here is essential. Please ensure notifications are turned on for your active channels. For a list of channel descriptions please consult the Parent Handbook (linked below).",
    url: "#", // Set via env or replace with actual invite link if needed
    label: "Join the Cottonwood Rose Learning Community Workspace",
  },
  {
    title: "Criminal Record Checks",
    description:
      "All parent volunteers are required to submit a criminal record check. Please use the link above and the access code provided. Please fill this out ASAP as it's required before you can perform any of your supervision duties. If you have any issues reach out to John or Kirsten on SLACK.",
    url: "https://justice.gov.bc.ca/criminalrecordcheck", // Replace with actual URL if different
    label: "Submit your criminal record check here",
    accessCodeEnvKey: "CRC_ACCESS_CODE",
  },
  {
    title: "Parent Volunteer & Supervision Schedule",
    description:
      "Sign up for volunteer and supervision duties here. Note that each month has a tab on the bottom of the page. Please ensure you're looking at the correct month! This schedule is updated regularly — please make use of the associated #supervision/chores slack Channel for any changes and requests.",
    url: "#", // Set via env RESOURCES_SCHEDULE_URL or replace
    label: "View the Google Sheet",
  },
  {
    title: "Society Shared Drive",
    description:
      "Our shared Drive contains PAC meeting minutes, our safety policies, as well as resources for families. Please do not edit files directly, use commenting or suggestions features.",
    url: "#", // Set via env or replace
    label: "Access the Society Shared Google Drive",
  },
  {
    title: "Program Contact List",
    description:
      "The linked directory is of currently enrolled families and staff for communication and coordination.",
    url: "#", // Set via env or replace
    label: "View Contact List",
  },
  {
    title: "Parent Handbook (DRAFT)",
    description:
      "A comprehensive overview of our learning community program. It's essential that parents familiarize themselves with this handbook.",
    url: "#", // Set via env or replace
    label: "The Parent Handbook",
  },
  {
    title: "Safety Handbook",
    description:
      "An overview of policies and practices relating to safety in our outdoor learning experiences.",
    url: "#", // Set via env or replace
    label: "The Safety Handbook",
  },
];

export const educatorContacts = [
  {
    name: "Amy Cousins",
    role: "Director of Education",
    phone: "250-415-7865",
    email: "Amy.Cousins@sd71.bc.ca",
    note: "Primary contact for Gr 3-9",
  },
  {
    name: "Megan Pratley",
    role: "Primary Teacher",
    phone: "250-207-4373",
    email: "megan@cottonwoodrose.ca",
    note: "Primary contact for K-2",
  },
  {
    name: "Allie Livesey",
    role: "Director of Nature Education",
    phone: "604-848-5832",
    email: "alysialivesey@gmail.com",
  },
  {
    name: "Jay Roberts",
    role: "Nature Educator",
    phone: "250-266-2566 (text)",
    email: "Jayrobots@gmail.com",
  },
];

export const societyContacts = [
  {
    name: "John Huddart",
    role: "Society Director",
    org: "Cottonwood Rose Farm, Forest & Nature Learning Society",
    phone: "604-360-3563",
    email: "cottonwoodrosesociety@gmail.com",
    website: "www.cottonwoodrose.ca",
    address: "2850 MacAulay Rd. Black Creek, Vancouver Island, BC",
  },
  {
    name: "Kirsten Baird",
    role: "Society Director",
    org: "Cottonwood Rose Farm, Forest & Nature Learning Society",
    email: "cottonwoodrosesociety@gmail.com",
    website: "www.cottonwoodrose.ca",
    address: "2850 MacAulay Rd. Black Creek, Vancouver Island, BC",
  },
];
