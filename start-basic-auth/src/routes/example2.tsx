import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example2')({
    component: Example2,
})

function Example2() {
    return (
        <div className="p-2">
            <h3>דוגמה 2</h3>
            <p>זהו עמוד דוגמה 2.</p>
        </div>
    )
}
