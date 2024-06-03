

export default function Text({toggle, displayText}) {
    return <h1 data-testid="text">{toggle ? displayText : ""}</h1>
}