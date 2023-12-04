import { render, screen } from "@testing-library/react"

import {setupWorker} from 'msw/browser'
import { http, HttpResponse } from 'msw'

import { Task } from "./Tasks"



const handlers = [
    http.get('https://jsonplaceholder.typicode.com/todos?_limit=10', ({ params }) => {
      return HttpResponse.json({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      })
    }),
  ]

  const worker = setupWorker(...handlers)
 
  beforeAll(() => {
    worker.start()
  })

describe('Taks componentes', () => {
    it('should feth and show on button click', () => {
        render (<Task />)

        const button = screen.getByText(/Get Tasks from api/i)
    })
})