import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import Food from "./Food.jsx";
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";

import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Card />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={32} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      <UserGreeting isLoggedIn={true} username="Bro Code" />
      <Footer />
    </>
  );
}

export default App;
