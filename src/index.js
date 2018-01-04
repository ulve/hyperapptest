import { h, app } from "hyperapp"
import { Link, Route, location } from "@hyperapp/router"

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Topic = ({ match }) => <h3>{match.params.topicId}</h3>
const TopicsView = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/single-state-tree`}>Single State Tree</Link>
      </li>
      <li>
        <Link to={`${match.url}/routing`}>Routing</Link>
      </li>
    </ul>

    {match.isExact && <h3>Please select a topic.</h3>}

    <Route parent path={`${match.path}/:topicId`} render={Topic} />
  </div>
)

const state = {
  location: location.state
}

const actions = {
  location: location.actions
}

const view = state => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>

    <hr />

    <Route path="/" render={Home} />
    <Route path="/about" render={About} />
    <Route parent path="/topics" render={TopicsView} />
  </div>
)

const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)