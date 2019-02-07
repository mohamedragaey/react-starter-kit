import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './views/Home'
import { About } from './views/About'
import { TopicList } from './views/TopicList'
import { NoMatch } from './views/NoMatch'
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
