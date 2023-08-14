import "./styles/index.scss";
import {wrap} from "./prodivers";
import {AppRouting} from "./routing";

const App = () => {
  return (
    <>
        <AppRouting/>
    </>
  )
}


export default wrap(App);
