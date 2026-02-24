import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/example1"!</div>
}
