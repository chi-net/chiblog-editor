// import Module from 'module'
import { Component } from 'vue'
import list from './routelist'
// import { Component } from 'vue'

function current(): string {
  return sessionStorage.getItem('route') || 'index'
}

function push(route: string): void {
  sessionStorage.setItem('route', route)
  location.reload()
}

function component(): Component {
  return list[current()]
}

const $route = {
  current,
  push,
  component
}

export { $route }
