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
      <Route exact path='/todo' component={TodoForm} />
      <Route exact path='/todo/:id' component={TodoForm} />
      <Route exact path='/allbucket' component={Bucket} />
      <Route exact path='/bucket' component={BucketForm} />
      <Route exact path='/bucket/:id' component={BucketForm} />
      <Route path="*" component={Todo} />
    </Switch>
  </main>
)

export default Main
