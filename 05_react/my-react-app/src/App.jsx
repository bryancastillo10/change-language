import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import Food from "./Food.jsx";
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";

import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Card />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={32} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      <UserGreeting isLoggedIn={true} username="Bryan" />
      <List />
      <Button />

      <Footer />
    </>
  );
}

export default App;
