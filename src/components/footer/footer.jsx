import { mailIcon, phoneIcon } from "../paths";

export default function Footer() {
  return (
    <footer className="text-center flex-box-row sp-between align-center">
      <div className="flex-box-row align-center">
        {mailIcon}
        <p className="ml10 text">mrsusama494@gmail.com</p>
      </div>
      <div className="flex-box-row align-center">
        {phoneIcon}
        <p className="ml10 text">03315422209</p>
      </div>
    </footer>
  );
}
