import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { TopicList } from './pages/TopicList'
import { NoMatch } from './pages/NoMatch'
import { TopicDetail } from './components/TopicDetail'

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Topics' component={TopicList} />
      <Route exact path='/Topics/:topicId' component={TopicDetail} />
      <Route component={NoMatch} />
    </Switch>
  )
}
