import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Todo from './Todo/AllTodo'
import TodoForm from './Todo/TodoForm'
import Bucket from './Bucket/AllBucket'
import BucketForm from './Bucket/BucketForm'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Todo} />
      <Route exact path='/task' component={TodoForm} />
      <Route exact path='/task/:id' component={TodoForm} />
      <Route exact path='/categories' component={Bucket} />
      <Route exact path='/category' component={BucketForm} />
      <Route exact path='/category/:id' component={BucketForm} />
      <Route path="*" component={Todo} />
    </Switch>
  </main>
)

export default Main
