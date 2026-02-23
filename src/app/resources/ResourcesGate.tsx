import { isResourcesAuthenticated } from "./resources-auth";
import { PasswordForm } from "./PasswordForm";
import { ResourcesContent } from "./ResourcesContent";

export async function ResourcesGate() {
  const authenticated = await isResourcesAuthenticated();

  if (!authenticated) {
    return <PasswordForm />;
  }

  return <ResourcesContent />;
}
