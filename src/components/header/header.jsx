import Nav from "./nav/nav";
import Content from "./content/content";
export default function Header() {
  return (
    <header className="flex-box-col g80">
      <Nav />
      <Content />
    </header>
  );
}
