import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example4')({
    component: Example4,
})

function Example4() {
    return (
        <div className="p-2">
            <h3>דוגמה 4</h3>
            <p>זהו עמוד דוגמה 4.</p>
        </div>
    )
}
