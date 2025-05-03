import AboutForm from "./about/containers/about-form";
import { Layout } from "./layout/layout-form";
import WelcomeForm from "./welcome/containers/welcome-form";

export function MainForm() {
  return (
    <>
      <Layout />
      <WelcomeForm />
      <AboutForm />
    </>
  );
}
