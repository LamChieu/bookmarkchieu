import { useState } from "react";
import "./App.css";
import AddBookMark from "./components/AddBookMark";
import BookMarks from "./components/BookMarks";
import Login from "./components/Login";
import Logout from "./components/Logout";
import UpdateBookMark from "./components/UpdateBookMark";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [bookMark, setBookMark] = useState({
    _id: "",
    title: "",
    url: "",
    user: "",
  });
  const [isAuth, setIsAuth] = useState(false);
  const [idUser, setIdUser] = useState("");

  return (
    <div>
      <div>
        {!isAuth && <Login auth={setIsAuth} id={setIdUser} />}
        {isAuth && <Logout auth={setIsAuth} id={setIdUser} />}
      </div>
      {isAuth && (
        <div>
          <AddBookMark id={idUser} />
          {isShow && (
            <UpdateBookMark
              current={bookMark}
              isShow={setIsShow}
              show={isShow}
            />
          )}
          <BookMarks
            id={idUser}
            isShow={setIsShow}
            show={isShow}
            setCurrent={setBookMark}
          />
        </div>
      )}
    </div>
  );
}

export default App;
