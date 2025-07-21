import Topbar from "./topbar";
import { Wrapper } from "./wrapper";
import { Sidebar } from "./sidebar";

export default function MainLayout() {
  return (
    <main className="h-screen w-full">
      <Topbar />

      <Wrapper sidebar={<Sidebar />}>
        <div>Main Content</div>
      </Wrapper>
    </main>
  );
}
