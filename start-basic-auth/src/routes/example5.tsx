import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example5')({
  component: Example5,
})

function Example5() {
  return (
    <div className="p-2">
      <h3>דוגמה 5</h3>
      <p>זהו עמוד דוגמה 5.</p>
    </div>
  )
}
