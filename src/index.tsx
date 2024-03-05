import * as React from "react";
import * as ReactDOM from "react-dom";
import FirstComponent from "./components/FirstComponent";
import PropsComponent from "./components/PropsComponent";
import UserComponent from './components/UserComponent';
// import LogRocket from 'logrocket';
// import * as LogRocket from 'LogRocket';
// LogRocket.init('app/id');





ReactDOM.render(
    <div>
        <FirstComponent />
        <PropsComponent firstName="John" lastName="Bob" />;
        <h1>Hellozzzbbbb, Welcome to React and TypeScript...use "npm run magic" to rebuild webpack</h1>
        <br />
        <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} />
        <br />
        <a href="https://blog.logrocket.com/how-to-use-typescript-react-tutorial-examples/">https://blog.logrocket.com/how-to-use-typescript-react-tutorial-examples/</a>
        <br /><br />
        <a href="https://app.logrocket.com/">https://app.logrocket.com/</a>
    </div>,
  document.getElementById("root")
);