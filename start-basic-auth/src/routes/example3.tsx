import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example3')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/example3"!</div>
}
